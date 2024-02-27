import React from 'react'
import { URLShorted } from '@/types/url.model'
import { Card, CardBody, CardHeader } from '@nextui-org/react'

import CardBodyInner from './CardBodyInner'
import { CLIENT_URL } from '@/utils/constants'
import { withoutHttp } from '@/utils'
import { getServerSession } from 'next-auth'

type Props = {
  url: URLShorted
}

const  CardURL = async ({url}: Props) => {
  const { short_url, original_url, clicks } = url

  const short = `${CLIENT_URL}/${short_url}/`
  
  return (
    <Card className='p-4 bg-opacity-25 hover:scale-[102%] transition-transform min-w-72'>
      <CardHeader>
          <a className='hover:underline text-ellipsis whitespace-nowrap overflow-hidden' href={original_url} target='_blank'>{withoutHttp(original_url)}</a>
      </CardHeader>
      <CardBody className='flex-row gap-3'>
        <CardBodyInner id={url.url_id} short={short} clicks={clicks} />
      </CardBody>
    </Card>
  )
}

export default CardURL