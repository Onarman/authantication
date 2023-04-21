import {createContext} from "react";

// 1.Define
export const AuthContext = createContext({
    status:null,
    login : ()=>{},
    logout : ()=>{}
})
