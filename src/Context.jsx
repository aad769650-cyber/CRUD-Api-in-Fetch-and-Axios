import { createContext, useContext } from "react";


export const Context=createContext();


export const useAuth=()=>{
    return useContext(Context)
}