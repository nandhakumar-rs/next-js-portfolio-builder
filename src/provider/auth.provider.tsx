'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'
import { User, UserCredential, onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import {
  signInWithGoogle,
  signOut as firebaseSignOut,
} from '@/lib/firebase/auth'
import { auth } from '@/lib/firebase'

export interface IAuthContext {
  user: User | null | undefined
  signInWithGoogle: () => Promise<UserCredential>
  signOut: () => Promise<void>
}

const AuthContext = createContext<IAuthContext>({
  user: undefined,
  signInWithGoogle,
  signOut: firebaseSignOut,
})

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null | undefined>(undefined)
  const router = useRouter()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      console.log(user)
      setUser(user)
    })

    // return () => {
    //   unsubscribe()
    // }
  }, [])

  const signOut = async () => {
    await firebaseSignOut()
    setUser(null)
    router.replace('/sign-in')
  }

  const value = {
    user,
    signInWithGoogle,
    signOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
