import { useEffect, useState } from "react";
import { useUserStore } from "@/state/UserState";
import { Outlet, useNavigate } from "react-router";
import { GET } from "@/utils/http";
import { Loading } from "../Loading";


export function AuthMiddleware(){

    const userStore = useUserStore();
    const navigate = useNavigate();
 
    
    useEffect(()=>{
        let token = localStorage.getItem(import.meta.env.VITE_TOKEN_NAME)
        if(token == null){
            navigate("/",{replace:true});
        }
        
        if(localStorage.getItem(import.meta.env.VITE_EXPIRE_TOKEN) == null ){
            navigate("/",{replace:true});
        }
        let expireDate = Date.parse(localStorage.getItem(import.meta.env.VITE_EXPIRE_TOKEN)!);
        if(expireDate < Date.now()){
            localStorage.removeItem(import.meta.env.VITE_TOKEN_NAME);
            localStorage.removeItem(import.meta.env.VITE_EXPIRE_TOKEN);
            navigate("/",{replace:true});
        }
         GET("/api/auth/current",token).then(
           async (resp)=>{
                if(resp.status == 200){
                    let json = await resp.json();
                    userStore.setUser({user:{
                            firstName:json.name,lastname:json.lastname,id:json.id,token:token??undefined,photo:json.photo
                                }
                        })
                    return json
                }
                navigate("/",{replace:true});
           }
        );

        
    },[])

    if(userStore.getToken() == null) return <Loading/>;

    return <Outlet/>;
}