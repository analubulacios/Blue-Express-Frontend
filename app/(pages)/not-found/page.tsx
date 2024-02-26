import { Button } from '@nextui-org/react';
import { Urbanist } from 'next/font/google';
import Link from 'next/link';

const urbanistic = Urbanist({ subsets: ["latin"] });

const NotFound = () => {
  return (
    <>
      <div aria-hidden="true" className="z-[-1] absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20">
          <div className="blur-[106px] h-96 bg-gradient-to-br from-rose-400 to-purple-300 "></div>
          <div className="blur-[106px] h-60 bg-gradient-to-r from-pink-400 to-purple-300"></div>
      </div>
      <h2 className={urbanistic.className + ' text-gray-900 dark:text-white font-bold mb-6 text-3xl md:text-4xl xl:text-5xl'}>
      The website you are trying to access <span className='bg-gradient-to-b from-transparent from-40% to-red-300 to-40%'>is not available</span>.
      </h2>
      <Button
        href="/"
        as={Link}
        size='lg'
        color="primary"
        variant="bordered" >
        Go home
      </Button>
     </>
  )
}

export default NotFound