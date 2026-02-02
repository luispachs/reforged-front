import { useUserStore } from "@/state/UserState";
import {Avatar,AvatarFallback,AvatarImage} from "@sha/components/ui/avatar"
import profileImage from "/public/profile-dark.png";

export function ProfileCard(){
    const user = useUserStore();
    return <article className="w-[40%] md:w-[30%] lg:w-[20%] h-10 flex flex-row gap-2 items-center justify-start px-4 py-2">
        <Avatar>
            <AvatarImage src={user.getPhoto()??"/public/profile-dark"}/>
            <AvatarFallback><img src={profileImage}/></AvatarFallback>
        </Avatar>
        <h4>{user.getFullName()}</h4>
    </article>;
}