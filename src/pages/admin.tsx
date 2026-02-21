import { AdminLayout } from "@/ui/layouts/AdminLayout";
import { AdministrationNav } from "@/ui/layouts/Navbars/InnerNavBar/AdministrationNav";
import { Outlet } from "react-router";
export function Admin(){

    return (
        <AdminLayout>
            <AdministrationNav/>
            <section>
                <Outlet/>
            </section>
        </AdminLayout>    
    );
}