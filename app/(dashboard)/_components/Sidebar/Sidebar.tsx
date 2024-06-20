
import React from 'react'
import NewButton from './NewButton'
import List from './List'

interface SidebarProps {
  
}

export default function Sidebar(props: SidebarProps ) {
  return (
    <aside className='fixed z-[1] left-0 bg-blue-950 h-full w-[60px] flex p-3 flex-col gap-y-4 text-white'>
      <List/>
      <NewButton/>
    </aside>
  )
}
