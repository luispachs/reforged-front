import { MainNavBar } from "../MainNavBar";

export function OperatorLayout({props,children}:{props?:any,children?:React.ReactNode}){
    return (<>
                <MainNavBar/>
                {children}
            </>)
}