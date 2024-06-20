"use client"
import { useOrganizationList } from '@clerk/nextjs'
import React from 'react'
import Item from './Item'

interface ListProps {
  
}

export default function List(props: ListProps ) {
    const { userMemberships } = useOrganizationList({
        userMemberships: {
            infinite: true,
        }
    })
    if (!userMemberships.data?.length) return null
  return (
    <ul className='space-y-4'>
        {userMemberships.data?.map((membership) => {
            return (
                <Item 
                key={membership.organization.id}
                id={membership.organization.id}
                name={membership.organization.name}
                imageUrl={membership.organization.imageUrl}
                />
            )
        })}
    </ul>
  )
}
