import admiIcon from "@/assets/administración.png";
import qualityIcon from "@/assets/calidad.png";
import produccionIcon from "@/assets/produccion.png";
import mantenimientoIcon from "@/assets/mantenimiento.png";
import logisticaIcon from "@/assets/logistica.png";
import sstIcon from "@/assets/sst.png";
export function AdminNavBar(){


    return (
        <section className="w-[40%] md:w-[30%] lg:w-[20%] pt-10 pl-2 pr-2 pb-5 h-screen ">
            <article className="w-[80%] h-[8dvh] md:h-[7dvh] lg:h-[5dvh]  flex flex-row justify-start items-center rounded-md hover:bg-primary group/produccion">
                <div className="w-[10%]"><img src={produccionIcon} className="w-5 h-5"/></div>
                <div className="w-[90%] hidden md:flex lg:flex"><h4 className="group-hover/produccion:font-bold">Producción</h4></div>
            </article>
            <article className="w-[80%] h-[8dvh] md:h-[7dvh] lg:h-[5dvh] flex flex-row justify-start items-center rounded-md hover:bg-primary  group/mantenimiento">
                <div className="w-[10%]"><img  src={mantenimientoIcon} className="w-5 h-5"/></div>
                <div className="w-[90%] hidden md:flex lg:flex"><h4 className="group-hover/mantenimiento:font-bold">Mantenimiento</h4></div>
            </article>
            <article className="w-[80%] h-[8dvh] md:h-[7dvh] lg:h-[5dvh]  flex flex-row justify-start items-center rounded-md hover:bg-primary group/ci">
                <div className="w-[10%]"><img  src={qualityIcon} className="w-5 h-5"/></div>
                <div className="w-[90%] hidden md:flex lg:flex"><h4 className="group-hover/ci:font-bold">Calidad e Innovaci&oacute;n</h4></div>
            </article>
            <article className="w-[80%] h-[8dvh] md:h-[7dvh] lg:h-[5dvh]  flex flex-row justify-start items-center rounded-md hover:bg-primary group/ci">
                <div className="w-[10%]"><img  src={sstIcon} className="w-5 h-5"/></div>
                <div className="w-[90%] hidden md:flex lg:flex"><h4 className="group-hover/ci:font-bold">SST</h4></div>
            </article>
            <article className="w-[80%] h-[8dvh] md:h-[7dvh] lg:h-[5dvh]  flex flex-row justify-start items-center rounded-md hover:bg-primary group/logistica">
                <div className="w-[10%]"><img  src={logisticaIcon} className="w-5 h-5"/></div>
                <div className="w-[90%] hidden md:flex lg:flex"><h4 className="group-hover/logistica:font-bold">Log&iacute;stica</h4></div>
            </article>
            <article className="w-[80%] h-[8dvh] md:h-[7dvh] lg:h-[5dvh]  flex flex-row justify-start items-center rounded-md hover:bg-primary group/administracion">
                <div className="w-[10%]"><img  src={admiIcon} className="w-5 h-5"/></div>
                <div className="w-[90%] hidden md:flex lg:flex"><h4  className="group-hover/administracion:font-bold">Administraci&oacute;n</h4></div>
            </article>            
        </section>
    );
}