"use client"
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const UserProfile = () => {
  const session = useSession()
  return (
    <div>
      <Image
        src={session?.data?.user?.image || "user picture"}
        width={24}
        height={24}
        alt="user"
      />
    </div>
  )
}

export default UserProfile