"use client";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm,Controller } from "react-hook-form"
import { LoginSchema } from "@/schemas/LoginSchema"
import { Field,FieldError,FieldLabel} from "@sha/components/ui/field";
import { Input } from "@sha/components/ui/input";
import z from "zod";
import { Button } from "@sha/components/ui/button";
import { POST } from "@/utils/http";
import { useUserStore } from "@/state/UserState";
import type { UserType } from "@/types/UserType";
import { useNavigate } from "react-router";
import { useState } from "react";
export function LoginForm(){

    const navigate = useNavigate();
    const [error,setError] = useState(false)
    const [errorMessage, setErrorMessage] =useState("");
    const form = useForm<z.infer<typeof  LoginSchema>>(
        {
            resolver:zodResolver(LoginSchema),
            defaultValues:{
                email:"",
                password:""
            }
        }

    )


    const onSubmit = (values:z.infer<typeof LoginSchema>)=>{
        setError(false)
        POST("/api/auth/signin",values).then(async (response)=>{
            let data = await response.json();
            if(response.status == 200){
                localStorage.setItem(import.meta.env.VITE_TOKEN_NAME,data.token);
                localStorage.setItem(import.meta.env.VITE_UUID,data.id);
                localStorage.setItem(import.meta.env.VITE_EXPIRE_TOKEN,data.expires)
                navigate("/dashboard")
            }
            if(response.status == 400 || response.status == 500 || response.status == 401){
                setError(true);
                setErrorMessage(data.message);
                console.log(data.message)
            }
        })
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="gap-6">
            {error && <section className="w-[100%] bg-accent-foreground border-accent"><h3 className="text-accent" data-cy="login-error">{errorMessage}</h3></section>}
            <Controller 
                name="email"
                control={form.control}
                render={
                    ({field,fieldState})=>(
                        <Field data-invalid={fieldState.invalid} className="px-2">
                            <FieldLabel>Usuario</FieldLabel>
                            <Input {...field} id="username" aria-invalid={fieldState.invalid} placeholder="Usuario" autoComplete="off" data-cy="username-login"/>
                            {fieldState.invalid && <FieldError>{fieldState.error?.message}</FieldError>}
                        </Field>
                    )
                }
            />
            <Controller 
                name="password"
                control={form.control}
                render={
                    ({field,fieldState})=>(
                        <Field data-invalid={fieldState.invalid}  className="px-2">
                            <FieldLabel>Contraseña</FieldLabel>
                            <Input {...field} type="password" id="password" aria-invalid={fieldState.invalid} placeholder="Contraseña" autoComplete="off"  data-cy="password-login"/>
                            {fieldState.invalid && <FieldError>{fieldState.error?.message}</FieldError>}
                        </Field>
                    )
                }
            />
           <section className="w-full h-1/12 flex justify-center items-center p-2">
                <Button type="submit"  data-cy="submit-login">Ingresar</Button> 
           </section>
        </form>
    )
}