"use client"
import React from 'react'
import Sidebar from './componets/sidebar'
import { GlobalStateProvider } from '@/app/lib/context'
import Main from './componets/Main'


function Page() {
  return (
    <GlobalStateProvider>
        <Sidebar/>
        <div className='ml-60'>
            
            <Main/>

        </div>
    </GlobalStateProvider>
  )
}

export default Page