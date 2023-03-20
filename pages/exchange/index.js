import {Button, Input, Select} from "@mantine/core";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Image from "next/image"
import {
    setADA,
    setAmountToConvert, setATOM, setBNB, setBTC, setBUSD,
    setConvertedAmount,
    setCurFrom,
    setCurTo, setDOGE, setDOT, setETC, setETH, setNEAR, setSOL, setTRX,
    setWallet, setXLM, setXRP
} from "../../store/PaySlice";
import {showNotification} from "@mantine/notifications";

import {useRouter} from "next/router";
import {Navbar, Text} from "@nextui-org/react";
import Link from "next/link";
import Navbarr from "../../components/NavBarr";
export default function Exchange(){
    const dispatch = useDispatch()
    const {curTo,curFrom,amountToConvert,authenticatedState, convertedAmount} = useSelector(state => state.PaySlice)




    const cv = () => {

        fetch(`https://api.coinconvert.net/convert/${curFrom}/${curTo}?amount=${amountToConvert}`).then(res => res.json())
            .then(e => {

                let a = Object.values(e)
                if (curFrom == "ADA"){
                    dispatch(setConvertedAmount(a[2] * 1.07))
                }else{
                    dispatch(setConvertedAmount(a[2]))
                }})


    }
    useEffect(()=>{
        cv()
    },[amountToConvert,curTo,curFrom])
    const {ATOM, NEAR,BUSD,ADA,XRP,SOL,XLM,ETC,DOT,DOGE,BTC,ETH, BNB, TRX} = useSelector(state => state.PaySlice)
    const router = useRouter()

    useEffect(()=>{

        if (authenticatedState.authenticated){

        }else{
            router.push('/login')
        }

    },[])
    useEffect(() => {




        const BTCURL = `https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT`
        const ETHURL = `https://api.binance.com/api/v3/avgPrice?symbol=ETHUSDT`
        const BNBURL = `https://api.binance.com/api/v3/avgPrice?symbol=BNBUSDT`
        const USDTURL = 1
        const BUSDURL = `https://api.binance.com/api/v3/avgPrice?symbol=BUSDUSDT`
        const ADAURL = `https://api.binance.com/api/v3/avgPrice?symbol=ADAUSDT`
        const XRPURL = `https://api.binance.com/api/v3/avgPrice?symbol=XRPUSDT`
        const SOLURL = `https://api.binance.com/api/v3/avgPrice?symbol=SOLUSDT`
        const DOGEURL = `https://api.binance.com/api/v3/avgPrice?symbol=DOGEUSDT`
        const DOTURL = `https://api.binance.com/api/v3/avgPrice?symbol=DOTUSDT`
        const ETCURL = `https://api.binance.com/api/v3/avgPrice?symbol=ETCUSDT`
        const TRXURL = `https://api.binance.com/api/v3/avgPrice?symbol=TRXUSDT`
        const XLMURL = `https://api.binance.com/api/v3/avgPrice?symbol=XLMUSDT`
        const ATOMURL = `https://api.binance.com/api/v3/avgPrice?symbol=ATOMUSDT`
        const NEARURL = `https://api.binance.com/api/v3/avgPrice?symbol=NEARUSDT`
        function updateCur(){
            fetch(BTCURL).then(res => res.json()).then(e => {
                dispatch(setBTC( e.price ))
            })
            fetch(ETHURL).then(res => res.json()). then(e => {
                dispatch(setETH( e.price ))
            })
            fetch(BNBURL).then(res => res.json()).then(e => {
                dispatch(setBNB( e.price ))
            })
            fetch(BUSDURL).then(res => res.json()). then(e => {
                dispatch(setBUSD( e.price ))
            })
            fetch(ADAURL).then(res => res.json()).then(e => {
                dispatch(setADA( e.price ))
            })
            fetch(XRPURL).then(res => res.json()). then(e => {
                dispatch(setXRP( e.price ))
            })
            fetch(SOLURL).then(res => res.json()).then(e => {
                dispatch(setSOL( e.price ))
            })
            fetch(DOGEURL).then(res => res.json()). then(e => {
                dispatch(setDOGE( e.price ))
            })
            fetch(DOTURL).then(res => res.json()). then(e => {
                dispatch(setDOT( e.price ))
            })
            fetch(TRXURL).then(res => res.json()).then(e => {
                dispatch(setETC( e.price ))
            })
            fetch(ETCURL).then(res => res.json()). then(e => {
                dispatch(setTRX( e.price ))
            })
            fetch(XLMURL).then(res => res.json()).then(e => {
                dispatch(setXLM( e.price ))
            })
            fetch(ATOMURL).then(res => res.json()). then(e => {
                dispatch(setATOM( e.price ))
            })
            fetch(NEARURL).then(res => res.json()).then(e => {
                dispatch(setNEAR( e.price ))
            })

        }
        setInterval(updateCur, 5000);

    },[])
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
        }}
                                                                                                                                        async function convert() {

        await fetch(`api/wallet`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: authenticatedState.user.wallet.walletid,
                add_currency: Number(convertedAmount * 0.997),
                add_currency_type: curTo,
                minus_currency: Number(amountToConvert),
                minus_currency_type: curFrom

            })
        })
            .then(res => res.json()).then(e => {
                if (e.message && e.message !== "Field name `user` is not valid for model `Exchange`."){

                    showNotification({
                        title: 'Error',
                        message: e.message,
                        styles: (theme) => ({
                            root: {
                                backgroundColor: theme.colors.red[6],
                                borderColor: theme.colors.red[6],

                                '&::before': { backgroundColor: theme.white },
                            },

                            title: { color: theme.white },
                            description: { color: theme.white },
                            closeButton: {
                                color: theme.white,
                                '&:hover': { backgroundColor: theme.colors.red[7] },
                            },
                        }),
                    })

                }else{


                    showNotification({
                        title: 'Success',
                        message: "Congratulations, your operation is complete!",
                        styles: (theme) => ({
                            root: {
                                backgroundColor: theme.colors.green[6],
                                borderColor: theme.colors.green[6],

                                '&::before': { backgroundColor: theme.white },
                            },

                            title: { color: theme.white },
                            description: { color: theme.white },
                            closeButton: {
                                color: theme.white,
                                '&:hover': { backgroundColor: theme.colors.green[7] },
                            },
                        }),
                    })
                }
            }
            )
    }

    return(

        <div className="min-h-screen bdg w-full  from-gray-900 to-blue-900 flex flex-col items-center justify-center">

            <Navbarr/>
        <div className="min-h-[90vh] flex flex-col items-center justify-center">
        <div className='flex-col max-w-md text-white text-justify flex justify-center items-center'>
            <span className="text-3xl text-justify font-extrabold">Buy and Sell Coins at the Crypto with minimal fees</span>
            <div className="text-md font-medium my-4">We take minimal fees, its only 0.3%</div>
        </div>
        <div className="w-full mt-4 rounded-md md:w-3/4  flex items-center justify-center bg-blend-darken ">
            <div className="flex items-center justify-center py-4  ">
                <div>
                    <div className="flex">
                        <Input className="" type="number" placeholder={`Amount`} value={amountToConvert} onChange={(e)=>{
                            dispatch(setAmountToConvert(e.target.value))

                        }}/>
                        <Select onChange={(e)=>{dispatch(setCurFrom(e))}} value={curFrom} className="ml-1 w-[100px]"  data={[
                            { value: 'BTC', label: 'BTC' },
                            { value: 'ETH', label: 'ETH' },
                            { value: 'BNB', label: 'BNB' },
                            { value: 'USDT', label: 'USDT' },
                            { value: 'BUSD', label: 'BUSD' },
                            { value: 'ADA', label: 'ADA' },
                            { value: 'XRP', label: 'XRP' },
                            { value: 'SOL', label: 'SOL' },
                            { value: 'DOGE', label: 'DOGE' },
                            { value: 'DOT', label: 'DOT' },
                            { value: 'TRX', label: 'TRX' },
                            { value: 'ETC', label: 'ETC' },
                            { value: 'XLM', label: 'XLM' },
                            { value: 'ATOM', label: 'ATOM' },
                            { value: 'NEAR', label: 'NEAR' }
                        ]}/>
                    </div>
                    <div className="flex mt-2">
                        <Input className="" readOnly value={convertedAmount}/>
                        <Select onChange={(e)=>dispatch(dispatch(setCurTo(e)))} value={curTo} className="ml-1 w-[100px]"  data={[
                            { value: 'BTC', label: 'BTC' },
                            { value: 'ETH', label: 'ETH' },
                            { value: 'BNB', label: 'BNB' },
                            { value: 'USDT', label: 'USDT' },
                            { value: 'BUSD', label: 'BUSD' },
                            { value: 'ADA', label: 'ADA' },
                            { value: 'XRP', label: 'XRP' },
                            { value: 'SOL', label: 'SOL' },
                            { value: 'DOGE', label: 'DOGE' },
                            { value: 'DOT', label: 'DOT' },
                            { value: 'TRX', label: 'TRX' },
                            { value: 'ETC', label: 'ETC' },
                            { value: 'XLM', label: 'XLM' },
                            { value: 'ATOM', label: 'ATOM' },
                            { value: 'NEAR', label: 'NEAR' }
                        ]}/>
                    </div>

                    <div className="mt-4 bg-blue-500 rounded-md duration-75">
                        <Button onClick={convert} className="w-full">Exchange</Button>
                    </div>
                </div>

            </div></div>
        </div>
            <div className="grid w-full flex items-center bg-[#131722] justify-center  border-t border-b-gray-900">
                <div className="w-full  grid grid-cols-1 p-4 gap-4 md:grid-cols-3  xl:grid-cols-4">


                    {Object.entries(info).map(([key, value]) => {

                        return (

                            <div key={key} className="w-[250px] font-medium bg-[#1E222D] rounded-md flex p-4 flex-col items-center justify-center">
                                <div className="border-b flex items-center text-white mr-auto justify-center p-1 gap-x-1"><Image className="rounded-[180px mr-1 mb-1" src={value.pic} width={22} height={22}/>{value.shortCurName}</div>
                                <div className="flex leading-4 text-[14px] mt-3 text-white flex-col mr-auto items-start justify-center">
                                    <div>{value.fullCurName}</div>
                                    <div>{value.dif}</div>
                                    <div>{value.shortCurName}/USDT</div>
                                </div>
                            </div>

                        );
                    })}
                </div>
            </div>
        </div>)
}