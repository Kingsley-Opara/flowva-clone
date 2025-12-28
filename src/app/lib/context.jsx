"use client"
import { useState, createContext, useContext, useEffect } from "react";
import { supabase } from "./supabase/client";

const GlobalStateContext = createContext()

export const GlobalStateProvider = ({children}) =>{

    const [showBrands, setShowBrands] = useState(false)
    const [userData, setUserData] = useState("")
    const [session, setSession] = useState("")

    useEffect(() =>{
        const getSessionFunction = async () =>{
            const {data} = await supabase.auth.getSession()
            setSession(data?.session)    

        }

        getSessionFunction()

        const {data: {subscription}} = supabase.auth.onAuthStateChange((_event, session) =>{
            setSession(session)
        })
        return () => subscription.unsubscribe()
    }, [supabase])


    const toggleShowBrands = () =>{
        setShowBrands(!showBrands)
    }
    return(
        <GlobalStateContext.Provider value={{
            showBrands, setShowBrands, toggleShowBrands, userData, setUserData, session}}>
            {children}

        </GlobalStateContext.Provider>


    )
}

export const useGlobalContext = () => useContext(GlobalStateContext)