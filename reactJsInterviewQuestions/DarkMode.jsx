import React, { createContext, useContext, useEffect, useState } from "react";
const ThemeContext=createContext();

export function ThemeProvider({children}){
    const [dark,setDark]=useState(false)
    useEffect(()=>{
        const saved=localStorage.getItem("dark");
        if(saved) setDark(JSON.parse(saved));
    },[]);
    const toggle =()=>{
        setDark(prev=>{
            localStorage.setItem("dark",JSON.stringify(!prev));
            return !prev;
        })
    };
    return <ThemeContext.Provider value={{dark,toggle}}>{children}</ThemeContext.Provider>
}

export function useTheme(){
    return useContext(ThemeContext);
}

function App(){
    const [dark,toggle]=useTheme();
    return (
        <div> style={{background:dark?"#333":"#fff",color:dark?"#fff":"#000",height:"100vh"}}
        <button onClick={toggle}>Toggle DARK mode</button>
        <h1>hello world</h1>
        </div>
    )
}