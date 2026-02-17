import { AuthMiddleware } from "@/ui/custom/AuthMiddleware";
import { useUserStore } from "@/state/UserState";
import { MainNavBar } from "@/ui/MainNavBar";
import { OperatorLayout } from "@/ui/layouts/OperatorLayout";
import { AdminLayout } from "@/ui/layouts/AdminLayout";
export function Operator(){
    const userStore = useUserStore();
    const token = userStore.getToken();

    return (
        <OperatorLayout>
            <h1>Operarios</h1>
        </OperatorLayout>    
    );
}