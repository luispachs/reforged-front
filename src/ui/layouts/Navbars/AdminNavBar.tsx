import admiIcon from "@/assets/administración.png";
import qualityIcon from "@/assets/calidad.png";
import produccionIcon from "@/assets/produccion.png";
import mantenimientoIcon from "@/assets/mantenimiento.png";
import logisticaIcon from "@/assets/logistica.png";
import sstIcon from "@/assets/sst.png";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router";
export function AdminNavBar(){
    let location = useLocation()
    let [activeProduction,setActiveProduction] = useState(false);
    let [activeMto,setActiveMto] = useState(false);
    let [activeCi,setActiveCi] = useState(false);
    let [activeLogistic,setActiveLogistic] = useState(false);
    let [activeAdmon,setActiveAdmon] = useState(false);
    let [activeSst,setActiveSst] = useState(false);

    useEffect(()=>{
        let curUri = location.pathname.toString()
        console.log(curUri);
        if(curUri.match(/\/dashboard\/admin.*/)){
            setActiveAdmon(true)
        }
        else if(curUri.match(/\/dashboard\/production.*/)){
            setActiveProduction(true)
        }
        else if(curUri.match(/\/dashboard\/mto.*/)){
            setActiveMto(true)
        }
        else if(curUri.match(/\/dashboard\/sst.*/)){
            setActiveSst(true)
        }
        else if(curUri.match(/\/dashboard\/logistic.*/)){
            setActiveLogistic(true)
        }
        else if(curUri.match(/\/dashboard\/ci.*/)){
            setActiveCi(true)
        }
    },[])
    
    return (
        <section className="w-[100%]">
            <article className={"w-[100%] md:w-[60%] lg:w-[60%] h-[8dvh] md:h-[7dvh] lg:h-[5dvh] gap-[3px]  flex flex-row justify-start items-center rounded-md hover:bg-primary group/produccion " + (activeProduction? "bg-primary":"")}>
                <Link to="/dashboard/production"  className="w-[100%] flex flex-row gap-[3px]">
                <div className="w-[30%] md:w-[10%] lg:w-[10%]"><img src={produccionIcon} className="w-[40%] h-10 md:h-5  md:w-5 lg:h-5  lg:w-5 "/></div>
                <div className="w-[90%] hidden md:flex lg:flex"><h4 className="group-hover/produccion:font-bold">Producción</h4></div>
                </Link>
            </article>
            <article className={"w-[100%]  md:w-[60%] lg:w-[60%] h-[8dvh] md:h-[7dvh] lg:h-[5dvh] gap-[3px]  flex flex-row justify-start items-center rounded-md hover:bg-primary  group/mantenimiento "  + (activeMto ? "bg-primary":"")}>
                <Link to="/dashboard/mto"  className="w-[100%] flex flex-row gap-[3px]">
                    <div className="w-[30%] md:w-[10%] lg:w-[10%]"><img  src={mantenimientoIcon} className="w-[40%] h-10 md:h-5  md:w-5 lg:h-5  lg:w-5 "/></div>
                    <div className="w-[90%] hidden md:flex lg:flex"><h4 className="group-hover/mantenimiento:font-bold">Mantenimiento</h4></div>
                </Link>
            </article>
            <article className={"w-[100%]  md:w-[60%] lg:w-[60%] h-[8dvh] md:h-[7dvh] lg:h-[5dvh] gap-[3px]   flex flex-row justify-start items-center rounded-md hover:bg-primary group/ci " + (activeCi? "bg-primary":"")}>
                <Link to="/dashboard/ci"  className="w-[100%] flex flex-row gap-[3px]">
                    <div className="w-[30%] md:w-[10%] lg:w-[10%]"><img  src={qualityIcon} className="w-[40%] h-10 md:h-5  md:w-5 lg:h-5  lg:w-5 "/></div>
                    <div className="w-[90%] hidden md:flex lg:flex"><h4 className="group-hover/ci:font-bold">Calidad e Innovaci&oacute;n</h4></div>
                </Link>
            </article>

            <article className={"w-[100%]  md:w-[60%] lg:w-[60%] h-[8dvh] md:h-[7dvh] lg:h-[5dvh] gap-[3px]   flex flex-row justify-start items-center rounded-md hover:bg-primary group/sst "  + (activeSst? "bg-primary":"")}>
                <Link to="/dashboard/sst"  className="w-[100%] flex flex-row gap-[3px]">
                <div className="w-[30%] md:w-[10%] lg:w-[10%]"><img  src={sstIcon} className="w-[40%] h-10 md:h-5  md:w-5 lg:h-5  lg:w-5 "/></div>
                <div className="w-[90%] hidden md:flex lg:flex"><h4 className="group-hover/sst:font-bold">SST</h4></div>
                </Link>
            </article>
            <article className={"w-[100%]  md:w-[60%] lg:w-[60%] h-[8dvh] md:h-[7dvh] lg:h-[5dvh] gap-[3px]   flex flex-row justify-start items-center rounded-md hover:bg-primary group/logistica "  +( activeLogistic? "bg-primary":"")}>
                <Link to="/dashboard/logistic"  className="w-[100%] flex flex-row gap-[3px]">
                <div className="w-[30%] md:w-[10%] lg:w-[10%]"><img  src={logisticaIcon} className="w-[40%] h-10 md:h-5  md:w-5 lg:h-5  lg:w-5 "/></div>
                <div className="w-[90%] hidden md:flex lg:flex"><h4 className="group-hover/logistica:font-bold">Log&iacute;stica</h4></div>
                </Link>
            </article>
            <article className={"w-[100%]  md:w-[60%] lg:w-[60%]  h-[8dvh] md:h-[7dvh] lg:h-[5dvh] gap-[3px]   flex flex-row justify-start items-center rounded-md hover:bg-primary group/administracion "  + (activeAdmon? "bg-primary":"")}>
            <Link to="/dashboard/admin" className="w-[100%] flex flex-row gap-[3px]">
                <div className="w-[30%] md:w-[10%] lg:w-[10%]"><img  src={admiIcon} className="w-[40%] h-10 md:h-5  md:w-5 lg:h-5  lg:w-5 "/></div>
                <div className="w-[90%] hidden md:flex lg:flex"><h4  className="group-hover/administracion:font-bold">Administraci&oacute;n</h4></div>
            </Link>
            </article>            
        </section>
    );
}