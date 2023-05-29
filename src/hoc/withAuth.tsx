import { useAuth } from '@/provider/auth.provider'
import { useRouter } from 'next/navigation'
import { ComponentType, useEffect } from 'react'

function withAuth(Component: ComponentType) {
  return function AuthenticatedComponent(props: any) {
    const { user }: any = useAuth()
    const router = useRouter()

    useEffect(() => {
      if (user === null) {
        console.log('yes')
        router.replace('/sign-in')
      }
    }, [user, router])

    if (!user) {
      return <>Loading...</>
    }

    return <Component {...props} />
  }
}

export default withAuth
