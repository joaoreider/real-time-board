
import React from 'react'

interface ParticipantsProps {
  
}

export default function Participants(props: ParticipantsProps ) {
  return (
    <div className='absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md'>
     List of users
    </div>
  )
}

export function ParticipantsSkeleton() {
  return <div className='absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md w-[100px]' />

}