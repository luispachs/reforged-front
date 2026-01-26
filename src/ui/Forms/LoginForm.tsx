"use client";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm,Controller } from "react-hook-form"
import { LoginSchema } from "@/schemas/LoginSchema"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@sha/components/ui/field";
import { Input } from "@sha/components/ui/input";
import z from "zod";
import { Button } from "@sha/components/ui/button";
export function LoginForm(){
    const form = useForm<z.infer<typeof  LoginSchema>>(
        {
            resolver:zodResolver(LoginSchema),
            defaultValues:{
                username:"",
                password:""
            }
        }

    )


    const onSubmit = (values:z.infer<typeof LoginSchema>)=>{
        console.log(values);
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="gap-6">
            <Controller 
                name="username"
                control={form.control}
                render={
                    ({field,fieldState})=>(
                        <Field data-invalid={fieldState.invalid} className="px-2">
                            <FieldLabel>Usuario</FieldLabel>
                            <Input {...field} id="username" aria-invalid={fieldState.invalid} placeholder="Usuario" autoComplete="off"/>
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
                            <Input {...field} type="password" id="password" aria-invalid={fieldState.invalid} placeholder="Contraseña" autoComplete="off"/>
                            {fieldState.invalid && <FieldError>{fieldState.error?.message}</FieldError>}
                        </Field>
                    )
                }
            />
           <section className="w-full h-1/12 flex justify-center items-center p-2">
                <Button type="submit">Ingresar</Button> 
           </section>
        </form>
    )
}