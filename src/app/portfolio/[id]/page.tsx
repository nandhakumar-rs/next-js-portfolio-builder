'use client'

import Portfolio from '@/app/components/portfolio.component'
import usePortfolioStore from '@/app/store'
import withAuth from '@/hoc/withAuth'
import { db } from '@/lib/firebase'
import { useAuth } from '@/provider/auth.provider'
import { query, collection, orderBy } from 'firebase/firestore'
import { useParams, useRouter } from 'next/navigation'
import React, { use, useEffect } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'

const PortfolioPage = () => {
  const { user } = useAuth()
  const { id } = useParams()
  const [portfolios] = useCollection(
    query(
      collection(db, 'portfolio'),
      orderBy('createdAt', 'desc'),
    ),
  )
  const { setPortfolioId, setData } = usePortfolioStore()

  useEffect(() => {
    if (portfolios?.docs.length) {
      setData(portfolios?.docs[0].data())
      setPortfolioId(id)
    }
  }, [portfolios, id])
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-slate-100 py-10">
      <Portfolio />
    </div>
  )
}

export default PortfolioPage
