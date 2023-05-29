'use client'

import { useAuth } from '@/provider/auth.provider'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FiLogOut } from 'react-icons/fi'

const Header = () => {
  const { user, signOut } = useAuth()
  const { replace } = useRouter()

  return (
    <header className="w-screen fixed top-0 left-0 h-14 bg-white flex items-center justify-between px-5 border-b border-grey-100 m-0">
      <h1 className="text-xl text-gray-400 font-bold">
        Pro<span className="text-gray-800">Dy</span>
      </h1>
      <div className="flex gap-6">
        <h1 className=" text-md text-slate-900 m-0">Hi, {user?.displayName}</h1>
        <button
          onClick={async () => {
            await signOut()
            replace('/sign-in')
          }}
        >
          <FiLogOut className="text-slate-900" />
        </button>
      </div>
    </header>
  )
}

export default Header
