import Image from "next/image";
import {useSelector} from "react-redux";

export default function Balances(){
    const {curForWindow,selectedCurrency} = useSelector(state => state.PaySlice)
    return(<>

    {curForWindow !== 20 &&<div className="flex flex-col text-white w-full items-center justify-center">

                <div className="flex items-center justify-between h-[60px] w-full ">
                <div className="text-xl flex items-center justify-center">
                    <Image className="" src={selectedCurrency.picture} width={40} height={40}/>
                    <span className={`ml-2`}> Total Equity</span></div>
                <span className=" text-xl">{selectedCurrency.amount} {selectedCurrency.name}</span>
            </div>
            <div className="flex items-center justify-between h-[60px] w-full ">
                <div className="text-xl flex items-center justify-center">
                    <Image className={``} src={`usdt.svg`} width={40} height={40}/>
                    <span className={`ml-2`}> USDT Equity</span></div>
                <span className="text-xl">{selectedCurrency.equivalent}$</span>
            </div>
        </div>}
    </>)
}