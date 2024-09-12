"use client"
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'
import { DropdownMenu } from './ui/dropdown-menu'
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'


const UserProfile = () => {
  const session = useSession()
  const imageUrl = session?.data?.user?.image
  const name = session?.data?.user?.name
  const email = session?.data?.user?.email
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='hover:cursor-pointer'>
        <div className='flex items-center justify-start gap-1 lg:gap-2 m-0 p-0 lg:px-3 lg:w-full bg-white'>
          {imageUrl && (
            <Image
              src={imageUrl}
              width={24}
              height={24}
              alt={`${name}'s Profile Picture`}
              className='rounded-full'
            />
          )}
          <p className='truncate'>{email}</p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuItem className='lg:w-full px-58 hover:cursor-pointer'>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>


  )
}

export default UserProfile