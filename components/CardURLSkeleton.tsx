import { Card, CardBody, CardHeader, Skeleton } from '@nextui-org/react'
import React from 'react'

const CardURLSkeleton = (props: {original_url?: string}) => {
  const { original_url } = props

  return (
    <Card className='p-4 bg-opacity-25 min-w-80'>
      <CardHeader>
        <Skeleton className='flex rounded-lg min-w-48 h-6' isLoaded={!!original_url}>
        <a 
          className='hover:underline text-ellipsis whitespace-nowrap overflow-hidden' 
          href={original_url} 
          target='_blank'>
          {original_url}
        </a>
        </Skeleton>
      </CardHeader>
      <CardBody className='flex-row gap-3'>
        <div className='flex flex-col grow'>
          <Skeleton className='flex rounded-lg w-24 h-5 mt-1'/>
          <Skeleton className='flex rounded-lg w-12 h-3 mt-3'/>
        </div>
        <div className='flex items-center gap-2'>
          <Skeleton className='flex rounded-xl w-9 h-9'/>
          <Skeleton className='flex rounded-xl w-9 h-9'/>
        </div>
      </CardBody>
    </Card>
  )
}

export default CardURLSkeleton