"use client"

import React, { FormEventHandler, useEffect, useState } from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog'
import { useRenameModal } from '@/store/use-rename-modal';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useApiMutation } from '@/hooks/use-api-mutation';
import { api } from '@/convex/_generated/api';
import { toast } from 'sonner';


export default function RenameModal( ) {
    const {mutate, pending }= useApiMutation(api.board.update);
    const {isOpen, onClose, initialValues} = useRenameModal();
    const [title, setTitle] = useState<string>(initialValues.title)

    useEffect(() => {
        setTitle(initialValues.title)
    }, [initialValues.title])

    const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        mutate({id: initialValues.id, title})
        .then(() => {
            toast.success("Board title updated")
            onClose()
        })
        .catch(() => toast.error("Failed to update board title"))

    }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    Edit board Title
                </DialogTitle>
            </DialogHeader>
            <DialogDescription>
                Enter a new title
            </DialogDescription>
            <form onSubmit={onSubmit} className='space-y-4'>
                <Input disabled={pending} required maxLength={60} value={title} placeholder='Board Title' onChange={(e) => setTitle(e.target.value)} />
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant='outline' type='button'>Cancel</Button>
                    </DialogClose>
                        <Button disabled={pending}  type='submit'>Save</Button>
                </DialogFooter>
            </form>
        </DialogContent>
    </Dialog>
  )
}
