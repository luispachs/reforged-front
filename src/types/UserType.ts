type UserType = {
    id: string;
    firstName: string;
    lastname:string;
    photo:string|null;
    token?:string;

}

type UserStateActions = {
    setUser:(user:UserState|null) => void;
    getToken:()=>string|null;
    getName:()=>string|null;
    getFullName:()=>string|null;
    getPhoto:()=>string|null
    reset:()=>void;
}

type UserState = {
    user:UserType|null;
}

export type {
    UserType,
    UserState,
    UserStateActions
}