'use client'

import { URLShorted } from '@/types/url.model'
import React, { useState } from 'react'
import { Button, Card, CardBody, CardHeader, Snippet, Tooltip } from '@nextui-org/react'
import Image from 'next/image'

type Props = {
  url: URLShorted
}

const CardURL = ({url}: Props) => {
  const { short_url, long_url, clicks } = url
  const [copied, setCopied] = useState<boolean>(false)

  const onCopy = () => {
    navigator.clipboard.writeText(short_url).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000);
    })
  }
  
  
  return (
    <Card className='p-4 bg-opacity-25 hover:scale-[102%] transition-transform min-w-0'>
      <CardHeader>
        <a className='hover:underline text-ellipsis whitespace-nowrap overflow-hidden' href={long_url} target='_blank'>{long_url}</a>
      </CardHeader>
      <CardBody className='flex-row gap-3'>
        <div className='grow'>
          <a href={short_url} target='_blank' className='block font-bold hover:underline'>{short_url}</a>
          {clicks !== undefined && <span className='block text-xs mt-1 font-semibold'>{clicks} click{clicks !== 1 ? 's' : ''}</span>}
        </div>
        <div className='flex items-center gap-2'>
        <Snippet hideSymbol tooltipProps={{placement: 'bottom', offset: 8}} classNames={{
          pre: "hidden",
          base: "p-0 w-10 h-10 justify-center",
          copyButton: "w-full h-full"
        }}></Snippet>
        <Tooltip content="Download QR" placement='bottom'>
          <Button isIconOnly className='bg-default/60'>
            <Image src='/qr-code.svg' alt='Copy URL' width={20} height={20} />
          </Button>
        </Tooltip>
      </div>
      </CardBody>
    </Card>
  )
}

export default CardURL