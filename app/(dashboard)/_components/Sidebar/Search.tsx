"use client"

import React, { ChangeEvent, useEffect, useState } from 'react'
import qs from 'query-string'
import { useRouter } from 'next/navigation'

import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { useDebounceValue } from 'usehooks-ts'

export default function SearchInput( ) {


  const router = useRouter()
  const [value, setValue] = useState('')
  const [debouncedValue, _] = useDebounceValue(value, 500)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    const url = qs.stringifyUrl({
      url: '/',
      query: {
        search: debouncedValue,
      }
    }, { skipEmptyString: true, skipNull: true })

    router.push(url)
  }, [debouncedValue, router])

  return (
    <div className='w-full relative'>
     <Search
      className='absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4'
     />
     <Input 
      className='w-full max-w-[518px] pl-9'
      placeholder='Search boards'
      onChange={handleChange}
      value={value}
     />
    </div>
  )
}