"use client"
import { useState, createContext, useContext } from "react";

const GlobalStateContext = createContext()

export const GlobalStateProvider = ({children}) =>{
    const [showBrands, setShowBrands] = useState(false)
    const toggleShowBrands = () =>{
        setShowBrands(!showBrands)
    }
    return(
        <GlobalStateContext.Provider value={{showBrands, setShowBrands, toggleShowBrands}}>
            {children}

        </GlobalStateContext.Provider>


    )
}

export const useGlobalContext = () => useContext(GlobalStateContext)