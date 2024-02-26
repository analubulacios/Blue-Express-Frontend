'use client'

import React from 'react'
import { Snippet, Tooltip, Button } from '@nextui-org/react'
import DeleteIcon from '@/assets/DeleteIcon'
import { deleteShortURL } from '@/lib/actions'


const CardActions = ({short, id}: {short: string, id: string}) => {
  return (
    <div className='flex items-center gap-2'>
      <Snippet hideSymbol codeString={short} tooltipProps={{placement: 'bottom', offset: 8}} classNames={{
        pre: "hidden",
        base: "p-0 w-10 h-10 justify-center",
        copyButton: "w-full h-full"
      }}/>
      <Tooltip content="Delete short URL" placement='bottom'>
        <Button isIconOnly variant="light" className='bg-default/60' color='danger' onClick={() => deleteShortURL(id)}>
          <DeleteIcon />
        </Button>
      </Tooltip>
    </div>
  )
}

export default CardActions