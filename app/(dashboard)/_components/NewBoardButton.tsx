"use client"

import { api } from '@/convex/_generated/api'
import { useApiMutation } from '@/hooks/use-api-mutation'
import { cn } from '@/lib/utils'
import { PlusIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'sonner'

interface NewBoardButtonProps {
  orgId: string
  disabled?: boolean
}

export default function NewBoardButton({disabled, orgId}: NewBoardButtonProps ) {
  const router = useRouter()
  const {mutate, pending} = useApiMutation(api.board.create)
  const onClick = () => {
    mutate({orgId, title: 'Untitled'})
    .then((id) => {
        toast.success('Board created')
        router.push(`/board/${id}`)
    })
  }
  return (
    <button
        disabled = {pending || disabled}
        className= {cn("col-span-1 aspec-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6", (pending || disabled) && "opacity-75 hover:bg-blue-600 cursor-not-allowed")}
        onClick={onClick}
    >
     <div />
     <PlusIcon className='h-12 w-12 text-white stroke-1' />
     <p className='text-sm text-white font-light'>New Board</p>
    </button>
  )
}
