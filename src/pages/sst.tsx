import { AuthMiddleware } from "@/ui/custom/AuthMiddleware";
import { useUserStore } from "@/state/UserState";
import { MainNavBar } from "@/ui/MainNavBar";
import { OperatorLayout } from "@/ui/layouts/OperatorLayout";
import { AdminLayout } from "@/ui/layouts/AdminLayout";
export function Sst(){
    const userStore = useUserStore();
    const token = userStore.getToken();

    return (
        <AdminLayout>
            <h1>sst</h1>
        </AdminLayout>    
    );
}