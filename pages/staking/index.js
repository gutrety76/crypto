import NavBarr from "../../components/NavBarr";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {useSelector} from "react-redux";

export default function Staking(){
    const router = useRouter()
    const {authenticatedState} = useSelector(state => state.PaySlice)
    useEffect(()=>{
        if (authenticatedState.authenticated){

        }else{
            router.push('/login')
        }
    },[])
    return(<>
        <NavBarr/>
        <div className="flex items-center text-white justify-center min-h-screen font-medium text-5xl"> <span>Sorry! Page will be added soon…</span> </div></>)
}