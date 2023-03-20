import {setSelectedCurrency, setSelectedWindowOfCurrency} from "../store/PaySlice";
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {setSelectedPaymentCurrency} from "../store/PaymentSlice";
export default function Coin({id, shortCurName, fullCurName, pic, amount,dif, equivalent}){
    const dispatch = useDispatch()
    const {curForWindow} = useSelector(state => state.PaySlice)
    const [am,setAm] = useState(amount)


    return(<>


            <div
                onClick={()=>{
                    if (amount > 0){
                    dispatch(setSelectedPaymentCurrency(shortCurName))
                    dispatch(setSelectedCurrency({
                        amount: amount,
                        picture: pic,
                        equivalent: dif * amount,
                        name: shortCurName
                    }))}else{
                        dispatch(setSelectedPaymentCurrency(shortCurName))
                        dispatch(setSelectedCurrency({
                            amount: amount,
                            picture: pic,
                            equivalent: 0,
                            name: shortCurName
                        }))
                    }
                    dispatch(setSelectedWindowOfCurrency(id))


                }}
                className={`h-[80px] px-4 ${curForWindow == id ? "bg-blue-500" : ""} rounded-md ${curForWindow == id ? "bg-blue-500 text-white" : "hover:text-white"} flex hover:bg-blue-600 cursor-pointer duration-75 active:scale-[101%] select-none justify-between  items-center w-full`}>

                <div className="flex mr-auto w-full items-center justify-start">
                    <div className="flex items-start min-w-[35px] mt-0.5 mr-2 justify-start mb-auto">
                        <Image src={pic} className="rounded-[180px]" width={35} height={30}/>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-2xl mr-auto font-medium">{shortCurName}</span>
                        <span className="mr-auto text-md font-[400]">{fullCurName}</span></div>
                </div>
                <div className="flex  flex-col ml-auto items-center justify-start">
                    <span className="text-2xl ml-auto font-medium">{Number(amount).toFixed(5)}</span>
                    <span className="ml-auto text-md font-[400]">{amount > 0 ? Number( dif *  amount ): 0}$</span>
                    <span></span>
                </div>

            </div>





    </>)
}