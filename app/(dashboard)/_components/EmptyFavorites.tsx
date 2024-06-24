
import Image from 'next/image'
import React from 'react'


export default function EmptyFavorites() {
  return (
    <div className='h-full flex flex-col items-center justify-center'>
        <Image src='/empty-favorites.svg' width={140} height={140} alt='Empty'/>
        <h2 className='text-2xl font-semibold mt-6'>
            No favorite boards!
        </h2>
        <p className='text-muted-foreground text-sm mt-2'>
            Try adding some boards to your favorites
        </p>
    </div>
  )
}
