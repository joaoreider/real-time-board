"uyse client"
import Hint from '@/components/hint'
import { cn } from '@/lib/utils'
import { useOrganization, useOrganizationList } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

interface ItemProps {
  id: string
  name: string
  imageUrl: string
}

export default function Item({ id, name, imageUrl }: ItemProps ) {
    const {organization} = useOrganization()   
    const {setActive} = useOrganizationList()
    const isActive = organization?.id === id

    const handleClick = () => {
        if(!setActive) return
        setActive({organization: id})
    }
  return (
    <div className='aspect-square relative'>
        <Hint
            label={name}
            side='right'
            align='start'
            sideOffset={14}
        >
            <Image
                src={imageUrl}
                fill
                alt={name}
                onClick={handleClick}
                className={cn(
                    'cursor-pointer rounded-md opacity-75 hover:opacity-100 transition',
                    isActive && 'opacity-100'
                )}
            />
        </Hint>

    </div>
  )
}
