import type { ReactNode } from "react";
import { useUserStore } from "@/state/UserState";


export function AuthMiddleware({props,children}:{props:any,children:ReactNode}){

    return children;
}