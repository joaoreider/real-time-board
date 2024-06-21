
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { CreateOrganization } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

interface EmptyOrgProps {
  
}

export default function EmptyOrg(props: EmptyOrgProps ) {
  return (
    <div className='h-full flex flex-col items-center justify-center'>
     <Image src='/elements.svg' width={200} height={200} alt='Empty'/>
     <h2 className='text-2xl font-semibold mt-6'>
        Welcome to Board
     </h2>
     <p className='text-muted-foreground text-sm mt-2'>
         Create your first organization to get started
     </p>
     <div className='mt-6 '>
        <Dialog>
            <DialogTrigger asChild>
                <Button size='lg'>
                    Create organization
                </Button>
            </DialogTrigger>
            <DialogContent className='p-0 bg-transparent border-none max-w-[480] flex items-center justify-center'>
                <CreateOrganization routing='hash' />
            </DialogContent>
        </Dialog>
     </div>
    </div>
  )
}
