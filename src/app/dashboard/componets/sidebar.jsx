"use client"
import React from 'react'
import Image from 'next/image'
import { MdOutlineDashboard } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';
import { CiHome } from "react-icons/ci";
import { MdHome } from "react-icons/md";
import { navbarList } from '@/app/lib/utilis';

function Sidebar() {
    const [show, setShow] = useState(true)

    const handleShow = () =>{
        setShow(!show)
    }

    
  return (
    <aside className={`text-sm pt-2 duration-300 transition-all w-60 fixed
         overflow-y-auto overflow-x-hidden bg-white shadow-xl shadow-gray-200 min-h-screen`}>
        <div className='font-monsterrat pl-5 flex space-x-3'>
            <div>
                <Image src={"/images/flowva-icon.png"} 
                alt='image' width={60} height={60}/>
            </div>
            <div>
                <p className='text-purple-600 font-sansita text-2xl font-normal mt-6'>
                    flowva
                </p>
            </div>

            

        </div>

        <div className='flex space-x-1 bg-purple-200 cursor-pointer 
        place-content-start h-12 w-[90%] ml-4 mt-2 pl-5 py-2 rounded-xl text-purple-600'>
            <MdHome className='text-purple-700 text-2xl mt-1'/>
            <p className='text-purple-600 text-lg'>Home</p>

        </div>

        {navbarList.map((item) => {
            return(
                <div
                key={item.id} 
                className='flex space-x-3 hover:bg-purple-200 cursor-pointer
                place-content-start h-12 w-[90%] ml-4 mt-3 pl-5 py-2 rounded-xl hover:text-purple-600'>
                    <item.icon className='hover:text-purple-700 text-xl mt-1 '/>
                    <p className='hover:text-purple-600 text-lg '>{item.title}</p>

                </div>
            )
        })}

       

    </aside>
  )
}

export default Sidebar