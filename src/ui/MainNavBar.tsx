import { Link } from "react-router";
import { ProfileCard } from "./custom/ProfileCard";
import homeIcon from "@/assets/home.png"
export function MainNavBar(){
    return <section className="w-[100%] flex flex-row h-12">
        <ProfileCard/>
        <article className="w-[20%] md:w-[70%] lg:w-[80] flex flex-row justify-end items-center pr-3">
            <Link to="/dashboard">
                <img src={homeIcon} className="w-10 h-10 md:h-5  md:w-5 lg:h-5  lg:w-5 "/>
            </Link>
        </article>
    </section>;
}