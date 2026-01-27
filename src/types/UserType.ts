type UserType = {
    id: string;
    firstName: string;
    lastname:string;
    token?:string;

}

type UserStateActions = {
    setUser:(user:UserState|null) => void;
    getToken:()=>string|null;
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