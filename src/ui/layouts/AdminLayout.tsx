import { MainNavBar } from "../MainNavBar";

export function AdminLayout({props,children}:{props?:any,children?:React.ReactNode}){
return(<>
        <MainNavBar/>
        {children}
    </>
)
}