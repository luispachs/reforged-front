import { create } from 'zustand';
import { type UserState, type UserStateActions} from '@/types/UserType';

const useUserStore = create<UserState & UserStateActions>(
    (set,get,store) => ({
        user:null,
        setUser:(user:UserState|null)=> set((state)=>({
                    user:user?.user || null
                })),
        getToken:()=>{return get().user?.token || null},
        reset:()=>set(store.getInitialState())
    })
);


export {useUserStore};