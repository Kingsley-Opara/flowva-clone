"use client"
import React from 'react'
import {GlobalStateProvider} from "@/app/lib/context"
import SignIn from './form'

function Page() {
  return (
    <GlobalStateProvider>
        <SignIn/>
    </GlobalStateProvider>
    
  )
}

export default Page