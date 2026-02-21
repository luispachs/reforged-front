import { MainNavBar } from "../MainNavBar";
import { AdminNavBar } from "./Navbars/AdminNavBar";
export function AdminLayout({props,children}:{props?:any,children?:React.ReactNode}){
return(<>
        <MainNavBar/>
        <section className="relative flex flex-row ">
            <aside className="w-[20%] md:w-[30%] lg:w-[20%] pt-10 pl-2 pr-2 pb-5 h-screen order-1">
                <AdminNavBar/>
            </aside>
            <main className="w-[80%] md:w-[70%] lg:w-[80%] order-2 flex flex-col relative top-12">
                {children}
            </main>
        </section>
    </>
)
}