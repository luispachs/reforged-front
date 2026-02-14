import { MainNavBar } from "../MainNavBar";

export function SettingsLayout({props,children}:{props?:any,children?:React.ReactNode}){
    return (<>
                <MainNavBar/>
                {children}
            </>)
}