import { getAllShortURLs } from '@/lib/actions'
import { URLShorted } from '@/types/url.model'
import React from 'react'
import CardURL from './CardURL'

const URLGrid = async () => {
  const shortURLs: URLShorted[] = await getAllShortURLs()

  return (
    <section className='flex flex-wrap w-full gap-4 justify-center'>
      { shortURLs.map((url, k) => <CardURL key={k} url={url} />) }
    </section>
  )
}

export default URLGrid