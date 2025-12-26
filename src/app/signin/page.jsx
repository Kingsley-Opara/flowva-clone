"use client"
import React from 'react'
import { useState } from 'react'
import {supabase} from "@/app/lib/supabase/client"
import { redirect } from 'next/dist/server/api-utils'
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link'

function SignIn() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleExactPasswordMatch = ()=>{
        if (confirmPassword != password){
            alert("Both Passwords must Match")
        }
    }

    

    const handleShowPassword = () =>{
        setShowPassword(!showPassword)
    }


    const handleSumbit = async(e) =>{
        e.preventDefault()
        // handleExactPasswordMatch()

        const {data, error} = await supabase.auth.signInWithPassword({
            email,
            password
        })
        console.log(data.user)

        if (error) alert (error.message)
        else {
            window.location.href = "/"
        }
    }


    const signInWithGoogle = async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
            redirectTo: `${location.origin}/`
            }
        })
    }


  return (
    <div className='bg-[#8a17f8] min-h-[200vh] mb-5 mt-0 p-0 m-0 pb-20'>
        <div className='self-center flex flex-col place-content-center justify-center'>


            <form action="" 
            onSubmit={(e) => {handleSumbit(e)}}
            className='p-3 pt-15 flex flex-col self-center pb-20
             bg-white mt-8 w-120 h-fit rounded-xl max-md:w-80'>
                <div>
                    <p className='text-center text-[#8a17f8] text-2xl font-semibold'>
                        Login to fowvua
                    </p>
                    <p className='text-center mt-2 text-gray-500 text-sm'>
                        Login to receive personalized recommendations

                    </p>
                </div>
                <div className='px-5 mt-6 flex flex-col space-y-3'>
                    <label htmlFor="" className='text-sm'>Email</label>
                    <input
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    placeholder='your@email.com'
                    className='w-[90%] h-14 rounded-lg border-gray-200 
                    border-1 px-3 py-3 text-gray-800 text-lg' 
                    type="text" />
                </div>

                <div className='px-5 mt-3 flex flex-col space-y-3 relative'>
                    <label htmlFor="" className='text-sm'>Password</label>
                    <input
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                    placeholder='.......'
                    className='w-[90%] h-14 rounded-lg border-gray-200 
                    border-1 px-3 py-3 text-gray-800 text-3xl' 
                    type= {showPassword ? "text" : "password"} />
                    <div className='absolute top-[60%] left-[75%] max-md:left-[70%]'>
                        <p
                        onClick={()=>handleShowPassword()} 
                        className='text-sm text-purple-400 
                        cursor-pointer'>
                            {showPassword ? "hide": "show"}
                        </p>

                    </div>
                </div>
                <div className='pr-20 mt-3'>
                    <p className='text-end text-purple-500 cursor-pointer hover:underline text-sm'>
                        Forgot Password?
                    </p>
                </div>

              
                <div className='mt-5 ml-5'>
                    <button
                    type='sumbit' 
                    className='w-[85%] h-14 bg-[#9013fe] rounded-3xl 
                    py-2 px-5 text-white hover:bg-purple-600 cursor-pointer'>
                        Sign In

                    </button>

                </div>

                <div className='mt-3 flex place-content-between px-5'>
                    <hr className='w-[45%] text-gray-300 mt-4'/>
                    <p className='text-sm text-purple-300'>or</p>
                    <hr className='w-[45%] text-gray-300 mt-4'/>

                </div>

                <div className='mt-8 px-5'>
                    <button
                    onClick={() => signInWithGoogle()} 
                    className='w-full h-14 bg-white border border-gray-200
                    text-black flex space-x-4 pt-4 cursor-pointer hover:bg-gray-200
                    place-content-center py-2 px-4 rounded-md'>
                        <FcGoogle className='text-xl'/>
                        <p className='font-normal'>Sign in with Google</p>

                    </button>
                    
                </div>
                <div className='mt-8'>
                    <p className='text-gray-400 text-sm text-center'>
                        Don't have an account

                        <Link href={"/signup"}>
                            <span className='text-purple-500 cursor-pointer hover:underline'> Sign Up </span>
                        </Link>
                    </p>

                </div>

            </form>
        </div>

    </div>
  )
}

export default SignIn