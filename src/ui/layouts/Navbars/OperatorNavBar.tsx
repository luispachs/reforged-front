import { Link } from "react-router";
import { useState } from "react";
import { useLocation } from "react-router";
import workIcon from "@/assets/work.png";
import stopIcon from "@/assets/stop.png"
export function OperatorNavBar(){

    let location = useLocation()
    let [activeProduction,setActiveProduction] = useState(false);
    let [activeMto,setActiveMto] = useState(false);

    return (
        <section className="w-[100%]">
            <article className={"w-[100%] md:w-[60%] lg:w-[60%] h-[8dvh] md:h-[7dvh] lg:h-[5dvh] gap-[3px]  flex flex-row justify-start items-center rounded-md hover:bg-primary group/produccion " + (activeProduction? "bg-primary":"")}>
                <Link to="/dashboard/production"  className="w-[100%] flex flex-row gap-[3px]">
                <div className="w-[30%] md:w-[10%] lg:w-[10%]"><img src={workIcon} className="w-[40%] h-10 md:h-5  md:w-5 lg:h-5  lg:w-5 "/></div>
                <div className="w-[90%] hidden md:flex lg:flex"><h4 className="group-hover/produccion:font-bold">Producción</h4></div>
                </Link>
            </article>
            <article className={"w-[100%]  md:w-[60%] lg:w-[60%] h-[8dvh] md:h-[7dvh] lg:h-[5dvh] gap-[3px]  flex flex-row justify-start items-center rounded-md hover:bg-primary  group/mantenimiento "  + (activeMto ? "bg-primary":"")}>
                <Link to="/dashboard/mto"  className="w-[100%] flex flex-row gap-[3px]">
                    <div className="w-[30%] md:w-[10%] lg:w-[10%]"><img  src={stopIcon} className="w-[40%] h-10 md:h-5  md:w-5 lg:h-5  lg:w-5 "/></div>
                    <div className="w-[90%] hidden md:flex lg:flex"><h4 className="group-hover/mantenimiento:font-bold">Mantenimiento</h4></div>
                </Link>
            </article>
                     
        </section>
    );

}