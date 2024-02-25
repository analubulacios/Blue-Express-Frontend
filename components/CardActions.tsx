'use client'

import React from 'react'
import Image from 'next/image'
import { Snippet, Tooltip, Button } from '@nextui-org/react'

type Props = {
  short: string
}

const CardActions = ({short}: Props) => {
  return (
    <div className='flex items-center gap-2'>
      <Snippet hideSymbol codeString={short} tooltipProps={{placement: 'bottom', offset: 8}} classNames={{
        pre: "hidden",
        base: "p-0 w-10 h-10 justify-center",
        copyButton: "w-full h-full"
      }}/>
      <Tooltip content="Download QR" placement='bottom'>
        <Button isIconOnly className='bg-default/60'>
          <Image src='/qr-code.svg' alt='Copy URL' width={20} height={20} />
        </Button>
      </Tooltip>
    </div>
  )
}

export default CardActions