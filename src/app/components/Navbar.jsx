"use client"
import React from 'react'
import { BsEyeglasses } from "react-icons/bs";
import Image from 'next/image';
import { navDetails } from '../lib/utilis';
import { FaChevronDown } from "react-icons/fa";

function Navbar() {
  return (
    <nav className='mt-8 px-40 ml-8'>
        <div className='bg-white shadow-gray-100 shadow-lg px-2 py-2 
        rounded-full flex place-content-between border-1 border-gray-300'>
            <div className='flex space-x-5'>
                <div className='ml-2 flex space-x-4'>
                    <div>
                        <Image src={"/images/flowva-icon.png"} alt='image' height={40} width={40}/>
                    </div>
                    <div>
                        <div className='w-px h-8 bg-gray-200'></div>
                    </div>
                </div>
                <div className='flex space-x-5 mt-2'>
                    {navDetails.map((item) =>{
                        return(
                            <div className='flex space-x-2 text-gray-400 cursor-pointer'
                            onMouseOver={() =>{console.log("hovered effect")}} 
                            onMouseOut={() =>{console.log("hovered effect removed")}} 
                            key={item.id} >
                                <p className='hover:text-purple-700'>{item.name}</p>
                                <div className='mt-1'>
                                    <FaChevronDown/>
                                </div>
                            </div>
                        )
                    })}
                    

                </div>
            </div>
            <div className='pl-3 flex space-x-6'>
                <div>
                    <button className='bg-white shadow-xl shadow-gray-300 flex self-center
                    text-black p-2 w-25 rounded-full border-1 border-gray-300 px-1 cursor-pointer'>
                        <div className='w-22 bg-gray-50 shadow-xs 
                        shadow-gray-300 h-fit rounded-full py-1 font-semibold'>
                            Login


                        </div>

                    </button>
                </div>


                <div>
                    <button className='bg-gray-100 shadow-xl shadow-gray-300 flex self-center
                    text-black p-2 w-24 rounded-full border-1 border-gray-300 cursor-pointer'>
                        <div className='w-22 bg-[#635b6a] 
                         h-fit rounded-full py-1 font-semibold text-white'>
                            Sign up


                        </div>

                    </button>
                </div>
            </div>
            
        </div>
    </nav>
  )
}

export default Navbar