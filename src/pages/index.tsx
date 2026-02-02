import { AuthMiddleware } from "@/ui/custom/AuthMiddleware";
import { useUserStore } from "@/state/UserState";
export function Index(){
    const userStore = useUserStore();
    const token = userStore.getToken();
    return (
            <h1>Hola Mundo {userStore.getName()??"Invitado"}</h1>
    );
}