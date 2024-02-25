import Header from '@/components/Header';
import React from 'react'

const layout = ({ children }: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center py-24 px-4 gap-24 max-w-[1280px] mx-auto">
        {children}
      </main>
    </>
  )
}

export default layout