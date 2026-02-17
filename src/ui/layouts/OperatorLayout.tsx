import { OperatorNavBar } from "./Navbars/OperatorNavBar";
import { MainNavBar } from "../MainNavBar";
export function OperatorLayout({props,children}:{props?:any,children?:React.ReactNode}){
    return (<>
            <MainNavBar/>
            <section className="relative flex flex-row ">
                <aside className="w-[40%] md:w-[30%] lg:w-[20%] pt-10 pl-2 pr-2 pb-5 h-screen order-1">
                    <OperatorNavBar/>
                </aside>
                <main className="w-[40%] md:w-[30%] lg:w-[20%] order-2">
                    {children}
                </main>
            </section>
        </>)
}