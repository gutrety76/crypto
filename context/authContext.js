import {useSelector} from "react-redux";
import {useRouter} from "next/router";
import {useEffect} from "react";

export default function AuthContext({children}){
    const {authenticatedState} = useSelector(state=>state.PaySlice)
    const router = useRouter()
    useEffect(()=>{

        if (authenticatedState.authenticated){
            router.push('/dashboard')
        }else{
            if (router.pathname === "/register"){}else{

                router.push('/login')}

        }

    },[authenticatedState.authenticated])
    return(<div className="">{children}</div>)
}