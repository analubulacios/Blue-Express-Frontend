import React from 'react'
import { URLShorted } from '@/types/url.model'
import { Card, CardBody, CardHeader } from '@nextui-org/react'

import CardActions from './CardActions'
import { CLIENT_URL } from '@/utils/constants'
import { withoutHttp } from '@/utils'

type Props = {
  url: URLShorted
}

const CardURL = ({url}: Props) => {
  const { short_url, original_url, clicks } = url

  const short = `${CLIENT_URL}/${short_url}/`
  
  return (
    <Card className='p-4 bg-opacity-25 hover:scale-[102%] transition-transform min-w-72'>
      <CardHeader>
          <a className='hover:underline text-ellipsis whitespace-nowrap overflow-hidden' href={original_url} target='_blank'>{withoutHttp(original_url)}</a>
      </CardHeader>
      <CardBody className='flex-row gap-3'>
        <div className='flex flex-col grow justify-center'>
          <a href={short} target='_blank' className=' text-sm font-bold hover:underline'>{short}</a>
          { clicks !== undefined && 
            <span className='text-xs mt-1 font-semibold'>
              {clicks} click{clicks !== 1 ? 's' : ''}
            </span>
          }
        </div>
        <CardActions id={url.url_id} short={short} />
      </CardBody>
    </Card>
  )
}

export default CardURL