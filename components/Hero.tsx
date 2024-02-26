import { Urbanist } from 'next/font/google';
import React from 'react'

const urbanistic = Urbanist({ subsets: ["latin"] });

const Hero = () => {
  return (
    <>
      <div aria-hidden="true" className="z-[-1] absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20">
          <div className="blur-[106px] h-96 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700 h-"></div>
          <div className="blur-[106px] h-60 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>
      <h1 className={urbanistic.className + ' text-gray-900 dark:text-white font-bold mb-6 text-3xl md:text-4xl xl:text-5xl'}>
        Create a <span className='bg-gradient-to-b from-transparent from-40% to-purple-300 to-40%'>short link</span> easily.
      </h1>
    </>
  )
}

export default Hero