import { type HTTPConfigType } from "@/types/HTTPConfigType";

export function POST(uri:string,body:object|FormData,token:string|null = null, headers:object|null = null)
{
    let config:HTTPConfigType ={
        method:'POST',
        body:body instanceof FormData ? body : JSON.stringify(body),
    }
    if(headers!==null){
        config.headers = {...headers};
    }
    if(token!==null){
        config.headers = {
            ...config.headers,
            'Authorization':`Bearer ${token}`
        };
    }
    if(body instanceof FormData == false){
        config.headers = {
            ...config.headers,
            'Content-Type':'application/json'
        }
    }
    return fetch(`${import.meta.env.VITE_BASE_URL}${uri}`,config)
}

export function GET(uri:string,token:string|null = null, headers:object|null = null)
{
    let config:HTTPConfigType ={
        method:'GET',
    }
    
    if(headers!==null){
        config.headers = {...headers};
    }
    if(token!==null){
        config.headers = {
            ...config.headers,
            'Authorization':`Bearer ${token}`
        };
    }

    return fetch(`${import.meta.env.VITE_BASE_URL}${uri}`,config)
}

export function PUT(uri:string,body:object|FormData,token:string|null = null, headers:object|null = null)
{
    
    let config:HTTPConfigType ={
        method:'PUT',
        body:body instanceof FormData ? body : JSON.stringify(body),
    }
    if(headers!==null){
        config.headers = {...headers};
    }
    if(token!==null){
        config.headers = {
            ...config.headers,
            'Authorization':`Bearer ${token}`
        };
    }
    if(body instanceof FormData == false){
        config.headers = {
            ...config.headers,
            'Content-Type':'application/json'
        }
    }
    throw new Error("Function not implemented.");

    return fetch(`${import.meta.env.VITE_BASE_URL}${uri}`,config)
}

export function DELETE(uri:string,body:object|FormData,token:string|null = null, headers:object|null = null)
{

    let config:HTTPConfigType ={
        method:'DELETE',
        body:body instanceof FormData ? body : JSON.stringify(body),
    }
    if(headers!==null){
        config.headers = {...headers};
    }
    if(token!==null){
        config.headers = {
            ...config.headers,
            'Authorization':`Bearer ${token}`
        };
    }
    if(body instanceof FormData == false){
        config.headers = {
            ...config.headers,
            'Content-Type':'application/json'
        }
    }
    throw new Error("Function not implemented.");

    return fetch(`${import.meta.env.VITE_BASE_URL}${uri}`,config)
}