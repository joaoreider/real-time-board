
import React from 'react'
"use client"

interface InfoProps {
  
}

export default function Info(props: InfoProps ) {
  return (
    <div className='absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md '>
     Info
    </div>
  )
}
export function InfoSkeleton() {
  return (
    <div className='absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md animate-pulse w-[300px]' />
  )
}