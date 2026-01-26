"use client";
import {z} from 'zod'


export const LoginSchema = z.object({
    username:z.email().nonempty("Email is required"),
    password:z.string().min(8,"Password must be at least 8 characters long").nonempty("Password is required").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"Password must contain at least one uppercase letter, one lowercase letter, one number and one special character")
})