"use client"

import { Button } from '@/components/ui/button'
import { api } from '@/convex/_generated/api'
import { useApiMutation } from '@/hooks/use-api-mutation'
import { useOrganization } from '@clerk/nextjs'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'sonner'


export default function EmptyBoards() {
    const router = useRouter()
    const {organization} = useOrganization()
    const {mutate, pending} = useApiMutation(api.board.create)
    const onClick = () => {
        if (!organization) return

        mutate({
            orgId: organization.id,
            title: "Untitled"
        })
        .then((id) => {
            toast.success("Board created successfully")
            router.push(`/board/${id}`)
        })
        .catch((error) => {
            toast.error("Failed to create board")
        })
    }

  return (
    <div className='h-full flex flex-col items-center justify-center'>
        <Image src='/note.svg' width={110} height={110} alt='Empty'/>
        <h2 className='text-2xl font-semibold mt-6'>
            Create your first board!
        </h2>
        <p className='text-muted-foreground text-sm mt-2'>
            Start by creating your first board for your organization
        </p>
        <div className='mt-6'>
            <Button size='lg' onClick={onClick} disabled={pending}>
                Create board
            </Button>
        </div>
    </div>
  )
}
