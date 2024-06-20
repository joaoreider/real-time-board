import React from 'react'
import Sidebar from './_components/Sidebar/Sidebar'
import OrgSidebar from './_components/Sidebar/OrgSidebar'
import Navbar from './_components/Sidebar/Navbar'

interface LayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({children}: LayoutProps ) {
  return (
    <main className='h-full'>
        <Sidebar />
        <div className='pl-[60px] h-full'>
          <div className='flex gap-x-3 h-full'>
            <OrgSidebar/>
            <div className='h-full flex-1'>
              <Navbar />
              {children}
            </div>

          </div>
        </div>
    </main>
  )
}
