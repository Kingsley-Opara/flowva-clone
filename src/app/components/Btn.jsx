"use client"
import React from 'react'
import Image from 'next/image'
import { useGlobalContext } from '../lib/context'

function Btn() {
    const {showBrands, setShowBrands, toggleShowBrands} = useGlobalContext()
  return (
    <div 
    onClick={()=> {showBrands && toggleShowBrands(), console.log(showBrands)}}
    className='flex mt-20 self-center pb-2
    bg-gray-200 px-1 py-1 w-70 mx-auto h-fit rounded-full'>
        <div className={`mt-2 flex space-x-1 ${!showBrands && 'bg-[#635b6a]'} 
        w-fit my-auto py-2 rounded-full px-2 cursor-pointer`}>
            <div>
                <Image src={"/images/users.svg"} alt='image' height={40} width={40}/>
            </div>
            <div>
                <p className={`${!showBrands ? "text-[#f4b4cc]": "text-black"} mt-1`}>
                    <span className= {`${!showBrands && "text-pink-200"}`}>For </span> 
                    Users
                </p>
            </div>
            
        </div>

        <div 
        onClick={()=> {!showBrands && toggleShowBrands(), console.log(showBrands)}}
        className={`mt-2 flex space-x-1 w-fit my-auto py-2 
        rounded-full px-2 cursor-pointer ${showBrands ? "bg-[#635b6a]": "bg-gray-200"}`}>
            <div>
                <Image src={"/images/brands.svg"} alt='image' height={40} width={40}/>
            </div>
            <div>
                <p className={`font-semibold mt-1 
                    ${showBrands ? "text-[#f4b4cc]": "text-black"} `} >
                    <span className={`${showBrands && "text-pink-200"}`}>For </span>
                    Brands
                </p>
            </div>
            
        </div>

        
    </div>
  )
}

export default Btn