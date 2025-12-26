"use client"
import React from 'react'
import { useGlobalContext } from '../lib/context'
import HeroBrands from './HeroBrands'
import HeroUsers from './HeroUsers'
import Tools from './Tools'
import MarqueeCards from './Cards'

function Body() {
    const {showBrands, setShowBrands, toggleShowBrands} = useGlobalContext()
  return (
    <main className='pb-5'>
        {showBrands ? <HeroBrands/> : <HeroUsers/>}
        {showBrands ? <MarqueeCards/> : <Tools/>}
    </main>
  )
}

export default Body