import React from 'react'

interface OverlayProps {
  
}

export default function Overlay(props: OverlayProps ) {
  return (
    <div className='opacity-0 group-hover:opacity-50 transition-opacity h-full w-full bg-black'/>
  )
}
