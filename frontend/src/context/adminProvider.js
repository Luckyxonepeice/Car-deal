import React, { Children, createContext, useEffect, useState } from "react";
import { authtoken } from "../api/token";


export const AuthContext = createContext();

const defaultInfo = {
    LoggedIn:false,
    Admin:false,
}

export default function AuthProvider({ children }){

    const [isAuth , setAuth]=useState(defaultInfo);

    async function checkToken(){


        if(sessionStorage.getItem('token')){
            

            const {result,Error} =await authtoken();

            if(result){
                setAuth({
                    userInfo:result,
                    Admin:result.admin,
                    LoggedIn:true
                })
            }

        }
    }

    useEffect( ()=>{
        checkToken();
    },[]);

    return (
        <AuthContext.Provider value={{isAuth,setAuth}}>
            {children}
        </AuthContext.Provider>
    )
};

