
import { BrowserRouter ,Routes,Route} from "react-router";
import App from "@/App";
import { Index } from "./pages";
import { AuthMiddleware } from "./ui/custom/AuthMiddleware";
export default  function Router(){
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/dashboard" element={<AuthMiddleware/>} >
                <Route index element={<Index />} />
            </Route>
            <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
    </BrowserRouter>
}