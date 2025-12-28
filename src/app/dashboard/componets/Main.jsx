"use client"
import React from 'react'
import { useGlobalContext } from '@/app/lib/context'

function Main() {
    const {session} = useGlobalContext()
    console.log(session?.user?.email, "hello goat")

  return (
    <div>
        {session?.user?.email}
        

    </div>
  )
}

export default Main