import React from 'react'
import GoogleLogin from './GoogleLogin'


const Header = () => {
  return (
    <header className='flex justify-between items-center w-full h-16 max-w-[1280px] mx-auto px-4 z-50'>
      <span>logo (pendiente)</span>
      <GoogleLogin />
    </header>
  )
}

export default Header