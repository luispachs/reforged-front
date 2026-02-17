import { MainNavBar } from "../MainNavBar";
import { AdminNavBar } from "./Navbars/AdminNavBar";
export function AdminLayout({props,children}:{props?:any,children?:React.ReactNode}){
return(<>
        <MainNavBar/>
        <section>
            <aside>
                <AdminNavBar/>
            </aside>
            <main>
                {children}
            </main>
        </section>
    </>
)
}