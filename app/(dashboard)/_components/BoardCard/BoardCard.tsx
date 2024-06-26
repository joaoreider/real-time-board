"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Overlay from './Overlay';
import { useAuth } from "@clerk/nextjs";
import { formatDistanceToNow } from 'date-fns';
import Footer from './Footer';

interface BoardCardProps {
    id: string;
    title: string;
    imageUrl: string;
    authorId: string;
    authorName: string;
    createdAt: number;
    orgId: string;
    isFavorite: boolean;
  
}

export default function BoardCard({
    id,
    title,
    imageUrl,
    authorId,
    authorName,
    createdAt,
    orgId,
    isFavorite
}: BoardCardProps ) {

  const {userId} = useAuth();
  const isAuthor = userId === authorId;
  const authorLabel = isAuthor ? 'You' : authorName;
  const createdAtLabel = formatDistanceToNow(new Date(createdAt), { addSuffix: true })

  return (
    <Link href={`/board/${id}`}>
     <div className='group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden'>
      <div className='relative flex-1 bg-amber-50'>
        <Image
          src={imageUrl}
          alt={title}
          fill
          className='object-fit'
        />
        <Overlay />
      </div>
      <Footer
          isFavorite={isFavorite}
          title={title}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          onClick={() => {}}
          disabled={false}
      />
     </div>
    </Link>
  )
}
