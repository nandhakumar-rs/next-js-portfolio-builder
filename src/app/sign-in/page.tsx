'use client'

import { useAuth } from '@/provider/auth.provider'
import { useRouter } from 'next/navigation'
import React, { use, useEffect } from 'react'

const SignInPage = () => {
  const { signInWithGoogle } = useAuth()
  const { push } = useRouter()
  const { user } = useAuth()

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-white">
      <h1 className="text-4xl text-gray-400 font-bold mb-4">
        Pro<span className="text-gray-800">Dy</span>
      </h1>
      <button
        onClick={async () => {
          await signInWithGoogle()
          push('/')
        }}
        className="px-3 py-2 border-2 text-xl border-slate-300 text-gray-900 font-semibold rounded-lg hover:bg-slate-100"
      >
        Sign In With Google
      </button>
    </div>
  )
}

export default SignInPage
