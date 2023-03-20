import {Button} from "@mantine/core";
import Image from "next/image"
import Deposit from "../../components/Deposit";
import Withdraw from "../../components/Withdraw";
import Currencysss from "../../components/Currencysss";
import Balances from "../../components/balances";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {
    setADA, setATOM,
    setBNB, setBTC,
    setBUSD, setCheckWal,
    setDOGE,
    setDOT, setETC,
    setETH, setNEAR, setNotifications,
    setSOL,
    setTRX, setWallet, setXLM,
    setXRP
} from "../../store/PaySlice";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import AuthContext from "../../context/authContext";
import NavBarr from "../../components/NavBarr";
import {showNotification} from "@mantine/notifications";

export default function Dashboard() {
    const dispatch = useDispatch()

    const {authenticatedState, notifications} = useSelector(state => state.PaySlice)
    useEffect(() => {

        {
            authenticatedState.user && fetch(`/api/getwallet/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: authenticatedState.user.wallet.walletid
                })
            }).then(res => res.json()).then(a => {

                if(a.wallet){dispatch(setWallet(a.wallet))}
                if(a.notifications){
                    dispatch(setNotifications(a.notifications))
                }

            })


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
            fetch(BTCURL).then(res => res.json()).then(e => {
                dispatch(setBTC(e.price))
            })
            fetch(ETHURL).then(res => res.json()).then(e => {
                dispatch(setETH(e.price))
            })
            fetch(BNBURL).then(res => res.json()).then(e => {
                dispatch(setBNB(e.price))
            })
            fetch(BUSDURL).then(res => res.json()).then(e => {
                dispatch(setBUSD(e.price))
            })
            fetch(ADAURL).then(res => res.json()).then(e => {
                dispatch(setADA(e.price))
            })
            fetch(XRPURL).then(res => res.json()).then(e => {
                dispatch(setXRP(e.price))
            })
            fetch(SOLURL).then(res => res.json()).then(e => {
                dispatch(setSOL(e.price))
            })
            fetch(DOGEURL).then(res => res.json()).then(e => {
                dispatch(setDOGE(e.price))
            })
            fetch(DOTURL).then(res => res.json()).then(e => {
                dispatch(setDOT(e.price))
            })
            fetch(TRXURL).then(res => res.json()).then(e => {
                dispatch(setETC(e.price))
            })
            fetch(ETCURL).then(res => res.json()).then(e => {
                dispatch(setTRX(e.price))
            })
            fetch(XLMURL).then(res => res.json()).then(e => {
                dispatch(setXLM(e.price))
            })
            fetch(ATOMURL).then(res => res.json()).then(e => {
                dispatch(setATOM(e.price))
            })
            fetch(NEARURL).then(res => res.json()).then(e => {
                dispatch(setNEAR(e.price))
            })
        }
        const fetchWallet = () => {
        {
            authenticatedState.user && fetch(`/api/getwallet/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: authenticatedState.user.wallet.walletid
                })
            }).then(res => res.json()).then(a => {
                if(a.wallet){dispatch(setWallet(a.wallet))}
                if(a.notifications){
                    dispatch(setNotifications(a.notifications))
                }

            })}}
        setInterval(fetchWallet, 10000)
    },[])
    return (<div><NavBarr/> <AuthContext><div className="grid bg-[#121212] h-full pt-2 grid-cols-1 md:grid-cols-8 gap-2  place-items-stretch w-full min-h-screen">

        <Navbar/>
        <Currencysss/>
        <div className="flex px-4 text-white flex-col col-span-1 md:col-start-6 md:col-end-9 items-center justify-start">
            <div className="mr-auto my-2 text-lg font-regular ml-2">
                Balances
            </div>
            <div className="w-full h-[1px] bg-[#D8D8D8]"/>
            <Balances/>
            <div className="w-full gap-2 text-white mt-4 flex flex-col md:flex-row ">

                <Deposit/>

                <Withdraw/>
            </div>

        </div>


    </div></AuthContext></div>)
}