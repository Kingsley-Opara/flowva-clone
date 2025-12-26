"use client"
import { motion } from 'framer-motion'
import React from 'react'

function HeroBrands() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}

      className='text-center mt-20'
    >
        <p className='font-extrabold text-5xl font-bebas'>
            
            CONNECT WITH 
            <span className='bg-linear-to-r from-[#981bf5] 
            via-[#c146ca] to-[#f57c91] text-white p-2 rounded-full 
            text-6xl font-semibold text-center ml-3 px-6'> 
                TECH  
            </span> 
                
        </p>
        <p className='font-extrabold text-5xl mt-5 font-bebas'>PROFESSIONALS WHO ACTUALLY ENGAGE</p>


        <div className='mx-auto mt-20 flex place-content-center self-center'>
            <button className='bg-gray-200 shadow-xl shadow-gray-300 flex self-center py-2
            text-black p-2 px-1 w-fit rounded-full border-1 border-gray-300 cursor-pointer'>
                <div className='w-60 px-4 bg-gray-800 hover:bg-[#981bf5] 
                    h-16 rounded-full py-4 font-bold text-white text-sm text-center'>
                    Start Your 3 Day Free Trail


                </div>

            </button>
        </div>

    </motion.div>
  )
}

export default HeroBrands