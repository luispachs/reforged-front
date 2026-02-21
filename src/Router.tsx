
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
import ProductPage from "./pages/admin/product";
import AdjustmentPage from "./pages/admin/adjustment";
import PricesPage from "./pages/admin/prices";
import ProcessPage from "./pages/admin/process";
import ReportsPage from "./pages/admin/reports";
import PaymentsPage from "./pages/admin/payments";
import MovementPage from "./pages/admin/movement";
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
                <Route element={<Admin/>}>
                <Route index element={<MovementPage/>}>
                </Route>
                <Route  path="products">
                    <Route index  element={<ProductPage/>}/>
                </Route>
                <Route  path="adjustment">
                    <Route index  element={<AdjustmentPage/>}/>
                </Route>
                <Route  path="prices">
                    <Route index  element={<PricesPage/>}/>
                </Route>
                <Route  path="process">
                    <Route index  element={<ProcessPage/>}/>
                </Route>
                <Route  path="reports">
                    <Route index  element={<ReportsPage/>}/>
                </Route>
                <Route  path="payments">
                    <Route index  element={<PaymentsPage/>}/>
                </Route>
                </Route>

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