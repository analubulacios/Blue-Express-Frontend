import React from 'react'
import GoogleLogin from './GoogleLogin'

const Header = () => {
  return (
    <header className='flex justify-between items-center w-full h-16 max-w-[1280px] px-4 fixed left-[50%] translate-x-[-50%]'>
      <span></span>
      <GoogleLogin />
    </header>
  )
}

export default Header