import { AuthMiddleware } from "@/ui/custom/AuthMiddleware";
import { useUserStore } from "@/state/UserState";
import { MainNavBar } from "@/ui/MainNavBar";
export function Index(){
    const userStore = useUserStore();
    const token = userStore.getToken();
    return (
            <MainNavBar></MainNavBar>
    );
}