import { useUserStore } from "@/state/UserState";
import {Avatar,AvatarFallback,AvatarImage} from "@sha/components/ui/avatar"
import profileImage from "@/assets/profile-dark.png";
import { Button } from "@sha/components/ui/button";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { GET } from "@/utils/http";

export function ProfileCard(){
    const user = useUserStore();
    const navigate = useNavigate();


    const logout = ()=>{
        localStorage.clear();
        user.setUser(null);
        GET("/api/auth/signout");
        navigate("/");
    }
    return (<section className="w-[100%] md:w-[30%] lg:w-[20%] h-12 flex flex-col gap-2 items-start justify-start px-4 py-2 group/user-profile relative">
                <article className="w-[100%] h-10 flex flex-row gap-2 items-center justify-start px-4 py-2 group-hover/user-profile:bg-primary rounded-md">
                    <div className="w-2 h-10 gap-1 flex flex-col justify-center items-center">
                            <div className="rounded-[50%] w-2 h-2 bg-primary"></div>
                            <div className="rounded-[50%] w-2 h-2 bg-primary"></div>
                            <div className="rounded-[50%] w-2 h-2 bg-primary"></div>
                    </div>
                    <Avatar>
                        <AvatarImage src={user.getPhoto()??"/public/profile-dark"} data-cy="profile-image"/>
                        <AvatarFallback><img src={profileImage}/></AvatarFallback>
                    </Avatar>
                    <h4><Link to={"/profile"} data-cy="fullname">{user.getFullName()}</Link></h4>
                </article>
                <article className="w-[100%] h-10 flex-row gap-2 items-center justify-start px-4 py-2  md:hidden lg:hidden group-hover/user-profile:flex absolute top-12">
                    <Button onClick={logout} className="w-[30%] md:w-[50%] lg:w-[40%]" data-cy="close-session">Cerrar Sesi&oacute;n</Button>
                </article>
            </section>);
}