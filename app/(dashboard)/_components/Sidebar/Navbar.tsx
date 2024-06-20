"use client"

import { UserButton } from '@clerk/nextjs'
import React from 'react'

interface NavbarProps {
  
}

export default function Navbar(props: NavbarProps ) {
  return (
    <div className='flex items-center gap-x-4 p-5 bg-green-500'>
        <div className='hidden lg:flex-1 lg:flex bg-yellow-300'>
            search
        </div>
        <UserButton />
    </div>
  )
}
