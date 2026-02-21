import { MainNavBar } from "../MainNavBar";

export function SettingsLayout({props,children}:{props?:any,children?:React.ReactNode}){
    return (<>
                <MainNavBar/>
                <section className="w-[100%] relative flex flex-row ">
                            <main className="w-[90%] order-2 flex flex-col relative top-12">
                                {children}
                            </main>
                        </section>
            </>)
}