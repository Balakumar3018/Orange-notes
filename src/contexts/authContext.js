import { useEffect } from "react";
import {useContext,useState,createContext}   from   "react";

const authContext=createContext();

const useAuth=()=>useContext(authContext);

const AuthProvider=({children})=>{
    const [auth,setAuth]=useState({
        isAuth:localStorage.getItem("AUTH_TOKEN") ? true : false,
        token:localStorage.getItem("AUTH_TOKEN"),
        user:JSON.parse(localStorage.getItem("ORANGE_USER"))
    });

    useEffect(()=>{
        setAuth({
            isAuth:localStorage.getItem("AUTH_TOKEN") ? true : false,
            token:localStorage.getItem("AUTH_TOKEN"),
            user:JSON.parse(localStorage.getItem("ORANGE_USER"))
        })
    },[])

    return (
        <authContext.Provider value={{auth,setAuth}}>
            {children}
        </authContext.Provider>
    )
}

export {useAuth,AuthProvider}