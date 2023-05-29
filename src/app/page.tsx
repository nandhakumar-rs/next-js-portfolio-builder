'use client'

import Header from './components/header.component'
import UserForm from './components/user-form.component'
import Portfolio from './components/portfolio.component'
import withAuth from '@/hoc/withAuth'
import { useEffect } from 'react'
import usePortfolioStore from './store'

const Home = () => {
  const { setDefaultData } = usePortfolioStore()

  useEffect(() => {
    setDefaultData()
  }, [])

  return (
    <main className="bg-slate-100 h-screen w-screen">
      <Header />
      <UserForm />
      <div className="pl-[450px] bg-slate-100 pt-[100px] pr-20 pb-8 h-scree w-full">
        <Portfolio />
      </div>
    </main>
  )
}

export default withAuth(Home)
