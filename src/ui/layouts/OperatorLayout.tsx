import { OperatorNavBar } from "./Navbars/OperatorNavBar";
import { MainNavBar } from "../MainNavBar";
export function OperatorLayout({props,children}:{props?:any,children?:React.ReactNode}){
    return (<>
                <MainNavBar/>
                <section>
                    <aside>
                        <OperatorNavBar/>
                    </aside>
                    <main>
                        {children}
                    </main>
                </section>
            </>)
}