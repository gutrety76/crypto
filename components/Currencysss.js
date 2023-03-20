import Coin from "./Coin";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setCurrentPrices} from "../store/PaySlice";


export default function Currencysss(){

    const {authenticatedState,ATOM, NEAR,USDT,BUSD,ADA,XRP,SOL,XLM,ETC,DOT,DOGE,BTC,ETH, BNB, TRX} = useSelector(state => state.PaySlice)
    const info = {
        0:{
            fullCurName: "Bitcoin",
            pic: "bitcoin.svg",
            shortCurName:"BTC",
            dif: BTC
        },
        1:{
            fullCurName: "Ethereum",
            pic: "/eth.png",
            shortCurName:"ETH",
            dif: ETH
        },
        2:{
            fullCurName: "Binance coin",
            pic: "/bnb.png",
            shortCurName:"BNB",
            dif: BNB
        },3:{
            fullCurName: "Tether",
            pic: "/usdt.png",
            shortCurName:"USDT",
            dif: 1
        },4:{
            fullCurName: "Binance USD",
            pic: "busd.svg",
            shortCurName:"BUSD",
            dif: BUSD
        },5:{
            fullCurName: "Cardano",
            pic: "/ada.png",
            shortCurName:"ADA",
            dif: ADA * 1.07
        },6:{
            fullCurName: "Ripple",
            pic: "/xrp.png",
            shortCurName:"XRP",
            dif: XRP
        },7:{
            fullCurName: "Solana",
            pic: "/sol.png",
            shortCurName:"SOL",
            dif: TRX
        },8:{
            fullCurName: "Dogecoin",
            pic: "doge.svg",
            shortCurName:"DOGE",
            dif: DOGE
        },9:{
            fullCurName: "Polkadot",
            pic: "dot.svg",
            shortCurName:"DOT",
            dif: DOT
        },10:{
            fullCurName: "Ethereum Classic",
            pic: "/etc.png",
            shortCurName:"ETC",
            dif: SOL
        },11:{
            fullCurName: "Tron",
            pic: "trx.svg",
            shortCurName:"TRX",
            dif: ETC
        },12:{
            fullCurName: "Stellar",
            pic: "xlm.svg",
            shortCurName:"XLM",
            dif: XLM
        },13:{
            fullCurName: "Cosmos",
            pic: "atom.svg",
            shortCurName:"ATOM",
            dif: ATOM
        },14:{
            fullCurName: "NEAR Protocol",
            pic: "/near.png",
            shortCurName:"NEAR",
            dif: NEAR
        }
    }


    return(<>
        <div
            className="flex md:col-start-3 text-white md:col-end-6 px-3 flex-col w-full gap-y-2 items-center justify-start">

            {authenticatedState.user && authenticatedState.user.wallet && Object.entries(authenticatedState.user.wallet.wallet).map((content,index)=>{
                return(
                    <Coin key={index} id={index} fullCurName={info[index].fullCurName} dif={info[index].dif} pic={info[index].pic} amount={content[1]}  shortCurName={content[0]}/>
                )})}
        </div>
    </>)
}