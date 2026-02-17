
import { BrowserRouter ,Routes,Route} from "react-router";
import App from "@/App";
import { Index } from "./pages";
import { AuthMiddleware } from "./ui/custom/AuthMiddleware";
import { Profile } from "./pages/profile";
import { Admin } from "./pages/admin";
import { Production } from "./pages/production";
import { Mto } from "./pages/mto";
import { Sst } from "./pages/sst";
import { Logistic } from "./pages/logistic";
import { Quality } from "./pages/quality";
import { Operator } from "./pages/operator";
export default  function Router(){
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/dashboard" element={<AuthMiddleware/>} >
                <Route index element={<Index />} />
            </Route>
            <Route path="/dashboard/profile" element={<AuthMiddleware/>}>
                <Route index element={<Profile/>}/>
            </Route>
            <Route path="/dashboard/admin" element={<AuthMiddleware/>}>
                <Route index element={<Admin/>}/>
            </Route>
            <Route path="/dashboard/production" element={<AuthMiddleware/>}>
                <Route index element={<Production/>}/>
            </Route>
            <Route path="/dashboard/mto" element={<AuthMiddleware/>}>
                <Route index element={<Mto/>}/>
            </Route>
            <Route path="/dashboard/sst" element={<AuthMiddleware/>}>
                <Route index element={<Sst/>}/>
            </Route>
            <Route path="/dashboard/logistic" element={<AuthMiddleware/>}>
                <Route index element={<Logistic/>}/>
            </Route>
            <Route path="/dashboard/ci" element={<AuthMiddleware/>}>
                <Route index element={<Quality/>}/>
            </Route>
            <Route path="/operator" element={<AuthMiddleware/>}>
                <Route index element={<Operator/>}/>
            </Route>
            <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
    </BrowserRouter>
}