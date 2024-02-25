import React from 'react'
import CardURL from './CardURL'

const URLGrid = () => {

  return (
    <div className='flex flex-wrap w-full gap-4 justify-center'>
      <CardURL key={1} url={{id: '1', short_url: 'ly.ik/asdqe', clicks: 116, long_url: 'https://www.marianoibarra.com/'}}  />
      <CardURL key={2} url={{id: '1', short_url: 'ly.ik/asdqe', clicks: 116, long_url: 'https://www.unapaginamuymuylargaperomuylarga.com/'}}  />
      <CardURL key={3} url={{id: '1', short_url: 'ly.ik/asdqe', long_url: 'https://www.asd.com/'}}  />
      <CardURL key={4} url={{id: '1', short_url: 'ly.ik/asdqe', long_url: 'https://www.mercadolibre.com/'}}  />
    </div>
  )
}

export default URLGrid