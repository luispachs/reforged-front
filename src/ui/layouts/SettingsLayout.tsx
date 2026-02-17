import { MainNavBar } from "../MainNavBar";

export function SettingsLayout({props,children}:{props?:any,children?:React.ReactNode}){
    return (<>
                <MainNavBar/>
                <section className="relative flex flex-row ">
                            <main className="w-[40%] md:w-[30%] lg:w-[20%] order-2">
                                {children}
                            </main>
                        </section>
            </>)
}