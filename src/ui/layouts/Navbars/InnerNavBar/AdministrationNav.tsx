import { Link, useLocation } from "react-router";
import { useEffect, useState } from "react";
export function AdministrationNav(){
    let [mv,setMv] = useState(false);
    let [ajt,setAjt] = useState(false);
    let [product,setProduct] = useState(false);
    let [price,setPrice] = useState(false);
    let [pay,setPay] = useState(false);
    let [process,setProcess] = useState(false);
    let [reports,setReports] = useState(false);
    let location = useLocation();

    useEffect(()=>{
        let uri = location.pathname
        setMv(false);
        setAjt(false);
        setReports(false);
        setProduct(false);
        setProcess(false);
        setPrice(false);
        setPay(false);
        if(uri=="/dashboard/admin"){
            setMv(true);
        }
        if(uri=="/dashboard/admin/adjustment"){
            setAjt(true);
        }
        if(uri=="/dashboard/admin/products"){
            setProduct(true);
        }
        if(uri=="/dashboard/admin/prices"){
            setPrice(true);
        }
        if(uri=="/dashboard/admin/payments"){
            setPay(true);
        }
        if(uri=="/dashboard/admin/process"){
            setProcess(true);
        }
        if(uri=="/dashboard/admin/reports"){
            setReports(true);
        }
    },[ location]);

    return <ul className="w-[90%] md:w-[90]  lg:w-[90%] grid grid-cols-2 grid-rows-4 md:grid-cols-4 md:grid-rows-2  lg:grid-cols-4 lg:grid-rows-2 gap-2">
        <li className={"w-[40%] md:w-[30%] lg:w-[30%] rounded-md h-[3dvh] md:h-[5dvh] lg:h-[5dvh] bg-accent flex flex-row justify-center items-center hover:bg-primary hover:font-bold " + (mv==true?"bg-primary font-bold":"bg-accent")}>
            <Link to="/dashboard/admin" className="w-[100%]  h-[100%] flex justify-center items-center">Acci&oacute;nes</Link>
            </li>
        <li className={"w-[40%] md:w-[30%] lg:w-[30%] rounded-md h-[3dvh] md:h-[5dvh] lg:h-[5dvh] bg-accent flex flex-row justify-center items-center hover:bg-primary hover:font-bold " + (ajt==true?"bg-primary font-bold":"bg-accent")}>
            <Link to="/dashboard/admin/adjustment" className="w-[100%]  h-[100%] flex justify-center items-center">Ajustes</Link>
            </li>
        <li className={"w-[40%] md:w-[30%] lg:w-[30%] rounded-md h-[3dvh] md:h-[5dvh] lg:h-[5dvh] bg-accent flex flex-row justify-center items-center hover:bg-primary hover:font-bold " + (product==true?"bg-primary font-bold":"bg-accent")}>
            <Link to="/dashboard/admin/products" className="w-[100%]  h-[100%] flex justify-center items-center">Productos</Link>
            </li>
        <li className={"w-[40%] md:w-[30%] lg:w-[30%] rounded-md h-[3dvh] md:h-[5dvh] lg:h-[5dvh] bg-accent flex flex-row justify-center items-center hover:bg-primary hover:font-bold " + (price==true?"bg-primary font-bold":"bg-accent")}>
            <Link to="/dashboard/admin/prices" className="w-[100%]  h-[100%] flex justify-center items-center">Precios</Link>
            </li>
        <li className={"w-[40%] md:w-[30%] lg:w-[30%] rounded-md h-[3dvh] md:h-[5dvh] lg:h-[5dvh] bg-accent flex flex-row justify-center items-center hover:bg-primary hover:font-bold " + (pay==true?"bg-primary font-bold":"bg-accent")}>
            <Link to="/dashboard/admin/payments" className="w-[100%]  h-[100%] flex justify-center items-center">Pagos</Link>
            </li>
        <li className={"w-[40%] md:w-[30%] lg:w-[30%] rounded-md h-[3dvh] md:h-[5dvh] lg:h-[5dvh] bg-accent flex flex-row justify-center items-center hover:bg-primary hover:font-bold " + (process==true?"bg-primary font-bold":"bg-accent")}>
            <Link to="/dashboard/admin/process" className="w-[100%]  h-[100%] flex justify-center items-center">Procesos</Link>
            </li>
        <li className={"w-[40%] md:w-[30%] lg:w-[30%] rounded-md h-[3dvh] md:h-[5dvh] lg:h-[5dvh] bg-accent flex flex-row justify-center items-center hover:bg-primary hover:font-bold " + (reports==true?"bg-primary font-bold":"bg-accent")}>
            <Link to="/dashboard/admin/reports" className="w-[100%]  h-[100%] flex justify-center items-center">Reportes</Link>
            </li>
    </ul>
}