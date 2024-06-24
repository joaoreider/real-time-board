"use client"

import React from 'react'
import EmptySearch from './EmptySearch';
import EmptyFavorites from './EmptyFavorites';
import EmptyBoards from './EmptyBoards';

interface BoardListProps {
    orgId: string;
    query: {
        search?: string;
        favorites?: boolean;
    }
}

export default function BoardList({orgId, query}: BoardListProps ) {

    const data = []

    if (!data?.length && query.search) {
        return (
            <EmptySearch />
        )
    }

    if (!data?.length && query.favorites) {
        return (
            < EmptyFavorites />
        )
    }

    if (!data?.length) {
        return < EmptyBoards />
    }

  return (
    <div>
     {JSON.stringify(query)}
    </div>
  )
}
