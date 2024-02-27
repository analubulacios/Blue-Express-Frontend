'use client'

import React from 'react'
import { Snippet, Tooltip, Button } from '@nextui-org/react'
import DeleteIcon from '@/assets/DeleteIcon'
import { _revalidateTag, deleteShortURL } from '@/lib/actions'
import { useSession } from 'next-auth/react'


const CardBodyInner = ({short, id, clicks}: {short: string, id: string, clicks?: number}) => {
  const session = useSession()
  const isAuthenticate = session.status === 'authenticated'
  const onVisit = () => {
    setTimeout(() => _revalidateTag('shortsURLs'), 3000); 
      
  }

  return (
    <>
      <div className='flex flex-col grow justify-center'>
        <a onClick={onVisit} href={short} target='_blank' className=' text-sm font-bold hover:underline'>{short}</a>
        { clicks !== undefined && isAuthenticate && 
          <span className='text-xs mt-1 font-semibold'>
            {clicks} click{clicks !== 1 ? 's' : ''}
          </span>
        }
      </div>
      <div className='flex items-center gap-2'>
        <Snippet hideSymbol codeString={short} tooltipProps={{placement: 'bottom', offset: 8}} classNames={{
          pre: "hidden",
          base: "p-0 w-10 h-10 justify-center",
          copyButton: "w-full h-full"
        }}/>
        {
          isAuthenticate && 
          <Tooltip content="Delete short URL" placement='bottom'>
            <Button isIconOnly variant="light" className='bg-default/60' color='danger' onClick={() => deleteShortURL(id)}>
              <DeleteIcon />
            </Button>
          </Tooltip>
        }
      </div>
  </>
  )
}

export default CardBodyInner