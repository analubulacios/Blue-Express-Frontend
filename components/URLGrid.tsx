import { getAllShortURLs } from '@/lib/actions'
import { URLShorted } from '@/types/url.model'
import React from 'react'
import CardURL from './CardURL'

const URLGrid = async () => {
  const shortURLs: URLShorted[] = await getAllShortURLs()

  const totalClicks = shortURLs.reduce((acc, curr) => acc + (curr.clicks ?? 0), 0)

  return (
    <div>
      <div className='flex gap-4 justify-center mb-8'>
        <span className='text-sm'>Total clicks: <span className='font-semibold'>{totalClicks}</span></span>
        <span className='text-sm'>Total shorts URLs: <span className='font-semibold'>{shortURLs.length}</span></span>
      </div>
      <section className='flex flex-wrap w-full gap-4 justify-center'>
        { shortURLs.map((url, k) => <CardURL key={k} url={url} />) }
      </section>
    </div>
  )
}

export default URLGrid