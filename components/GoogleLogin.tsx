'use client'

import GoogleIcon from '@/assets/GoogleIcon'
import { Button } from '@nextui-org/react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'

const GoogleLogin = () => {
  const pathname = usePathname()
  const { data, status } = useSession()
  const loading = status === 'loading'
  
  if(pathname !== '/') return null;

  return (
    <>
    { status === 'authenticated' 
      ? <div>
          <span className='text-sm text-gray-800 font-semilight mr-4'>
            Welcome back, <span className='font-semibold'>{data.user?.name?.split(' ')[0]}</span>!
          </span>
          <Button 
            className='bg-white'
            variant='shadow'
            size='sm'
            onClick={() => signOut()}>
            Sign out
          </Button>
        </div>
      : <Button 
          className='bg-white'
          variant='shadow'
          size='sm'
          isIconOnly={loading}
          isDisabled={loading}
          isLoading={loading}
          onClick={() => signIn('google')}>
          <GoogleIcon />
          Login with Google
        </Button> }
    </>
  )
}

export default GoogleLogin