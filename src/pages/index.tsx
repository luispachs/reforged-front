import { AuthMiddleware } from "@/ui/custom/AuthMiddleware";
import { useUserStore } from "@/state/UserState";
import { MainNavBar } from "@/ui/MainNavBar";
import { OperatorLayout } from "@/ui/layouts/OperatorLayout";
import { AdminLayout } from "@/ui/layouts/AdminLayout";
export function Index(){
    const userStore = useUserStore();
    const token = userStore.getToken();
    if(1==1){
        <OperatorLayout>

        </OperatorLayout>
    }
    return (
        <AdminLayout>

        </AdminLayout>    
    );
}