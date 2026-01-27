"use client";
import {z} from 'zod'


export const ResetPasswordSchema = z.object({
    password:z.string().min(8,"Password must be at least 8 characters long").nonempty("Password is required").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"),
    confirmPassword:z.string().min(8,"Password must be at least 8 characters long").nonempty("Password is required").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"Password must contain at least one uppercase letter, one lowercase letter, one number and one special character")
});