import {
    setCurTooo,
    setCurFrommmm,
    setAmounttt,
    setAmountFrooom,
    setMinMaxPrice,
    setSend,
    setReceive
} from "../store/MainSlice";
import {Input, Select} from "@mantine/core";
import Image from "next/image";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {MainSlice} from "../store/MainSlice";
import Link from "next/link";

export default function FirSec() {
    const dispatch = useDispatch()
    const {curTo, curFrom,send, receive, amountTo, amountFrom, minPrice} = useSelector(state => state.MainSlice)
    const [priceA, setPriceA] = useState()
    const reverse = () => {
        const a = curTo
        const b = curFrom
        dispatch(setCurFrommmm(a))
        dispatch(setCurTooo(b))
    }
    const men = [
            {value: 'Bitcoin', label: 'BTC'},
    {value: 'Ethereum', label: 'ETH'},
    {value: 'Binance coin', label: 'BNB'},
    {value: 'Tether', label: 'USDT'},
    {value: 'Binance USD', label: 'BUSD'},
    {value: 'Cardano', label: 'ADA'},
    {value: 'Ripple', label: 'XRP'},
    {value: 'Solana', label: 'SOL'},
    {value: 'Dogecoin', label: 'DOGE'},
    {value: 'Polkadot', label: 'DOT'},
    {value: 'Tron', label: 'TRX'},
    {value: 'Ethereum Classic', label: 'ETC'},
    {value: 'Stellar', label: 'XLM'},
    {value: 'Cosmos', label: 'ATOM'},
    {value: 'NEAR Protocol', label: 'NEAR'}
]
    const [open, setOpen] = useState(false)
    const [opena, setAOpen] = useState(false)
    const cv = () => {
        fetch(`https://api.coinconvert.net/convert/USDT/${curFrom.cur}?amount=100`).then(w => w.json()).then(e => {
            // console.log(`min:${Object.values(e[2])}, max: ${Object.values(e[2])*30}`)
            dispatch(setMinMaxPrice(e[curFrom.cur]))
        })
        fetch(`https://api.coinconvert.net/convert/USDT/${curTo.cur}?amount=1`).then(w => w.json()).then(e => {
            // console.log(`min:${Object.values(e[2])}, max: ${Object.values(e[2])*30}`)
            dispatch(setReceive(e[curTo.cur]))
        })
        fetch(`https://api.coinconvert.net/convert/USDT/${curFrom.cur}?amount=1`).then(w => w.json()).then(e => {
            // console.log(`min:${Object.values(e[2])}, max: ${Object.values(e[2])*30}`)
            dispatch(setSend(e[curFrom.cur]))
        })
        fetch(`https://api.coinconvert.net/convert/${curFrom.cur}/${curTo.cur}?amount=${amountFrom}`).then(res => res.json())
            .then(e => {
                let a = Object.values(e)
                if (curFrom.value === "ADA") {

                    dispatch(setAmounttt(a[2] * 1.07))
                } else {
                    dispatch(setAmounttt(a[2]))
                }
            })

    }
    useEffect(() => {
        cv()

    }, [amountFrom, curTo, curFrom])

    return (<section
        className="min-h-screen   bgf mx-auto max-w-6xl items-center justify-start md:justify-center flex flex-col">

        <div className="h-full  flex flex-col md:flex-row px-2 justify-center items-center w-full ">
            <div className="flex md:mx-4 w-full md:w-1/2 flex-col justify-start items-center">
                <div className="mr-auto text-[24px] md:text-4xl font-bold">Обменять {curFrom.name} ({curFrom.cur}) на {curTo.name} {curTo.cur} с минимальной комиссией
                </div>
                <div className="mr-auto mt-5 text-[16px] md:text-md font-normal">Выгодный обмен BNB на BTC в обменнике
                    криптовалют Crypocto. Платформа автоматического обмена электронных валют с максимальной скоростью на
                    любых устройствах.
                </div>
                <Link className={`mr-auto `} href={`/dashboard`}><div
                    className="mr-auto mt-2 md:text-[16px] select-none md:p-2 md:px-4 text-[12px] hidden md:block p-2 rounded-md cursor-pointer hover:bg-purple-500 duration-75 text-white bg-[#7D60DA]">Перейти
                    на обменник
                </div></Link>
            </div>
            <div className="w-full md:px-4 md:mx-4 h-full mt-4 md:w-1/2  flex items-center justify-center">

                <div className={`w-full flex gap-y-2 flex-col items-center justify-center`}>
                    <div className="w-full relative">
                        <div onClick={reverse}
                             className="absolute hidden cursor-pointer md:flex flex-col items-center justify-center md:left-[-65px] top-[44%] md:top-[35%]">
                            <Image className="hidden md:block" src={`/bef.svg`} width={40} height={40}/>
                            <Image src={`/exchange.svg`}
                                   className="mr-7 rounded-[180px] hover:bg-purple-500 duration-75 p-2 bg-[#7D60DA]"
                                   width={52} height={40}/>
                            <Image className="hidden md:block" src={`/nex.svg`} width={40} className="ml-2" height={40}/>

                        </div>
                        <div onClick={reverse}
                             className="absolute md:hidden cursor-pointer flex flex-col items-center justify-center md:left-[-65px] left-[43%] top-[45%] md:top-[35%]">
                            <Image src={`/exchange.svg`}
                                   className=" rounded-[180px] hover:bg-purple-500 duration-75 p-2 bg-[#7D60DA]"
                                   width={42} height={40}/>

                        </div>
                        <div
                            className="w-full my-4 border   flex flex-col items-center justify-center md:w-[98%] h-[200px] md:hover:w-full duration-150 rounded-2xl hover:shadow-md p-4 bg-white ">
                            <div className="flex flex-col items-center justify-center md:w-[380px] w-[280px]">
                                <div className="flex justify-between items-center w-full">
                                    <div>Send</div>
                                    <div>1 {curFrom.cur} ≈ {send} USDT</div>
                                </div>
                                <div
                                    className="flex flex-col md:flex-row mt-4 gap-x-2 justify-between items-center w-full">

                                    <div className="w-full relative inline-block text-left">
                                        <div>
    <span className="rounded-md shadow-sm">
      <button type="button"
              onClick={()=>{
                  setOpen(!open)
                  setAOpen(false)
              }}
              className="relative inline-flex justify-center w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
        {curFrom.cur}
          <svg className="ml-auto h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"/>
        </svg>
      </button>
    </span>
                                        </div>
                                        <div
                                            className="origin-top-right absolute z-20 left-0 mt-2 w-56 rounded-md shadow-lg">
                                            <div className="rounded-md bg-white shadow-xs">
                                                {open && <div className="py-1 h-[240px] overflow-y-auto" role="menu" aria-orientation="vertical"
                                                              aria-labelledby="options-menu">

                                                    {men.map((content,index)=>{return(< >
                                                        <a key={index}
                                                           onClick={()=>{
                                                               setOpen(false)
                                                               dispatch(setCurFrommmm({cur: content.label, name: content.value}))
                                                           }}
                                                           className="block flex items-center justify-start cursor-pointer px-4 mt-1.5 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                                           role="menuitem"><Image src={`/${content.label.toLowerCase()}.svg`} className="p-0.5" width={25} height={25}/><span className="ml-2">{content.label}</span></a>
                                                    </>)})}
                                                </div>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex relative items-center justify-center">
                                        <Input
                                            className="mb-auto ring-[#7D60DA]"
                                            icon={`≈`}
                                            type="number"
                                            value={amountFrom}
                                            onChange={(e) => {
                                                dispatch(setAmountFrooom(e.target.value))
                                            }}
                                            placeholder="amount"
                                        />
                                        <div
                                            className="absolute w-[185px] flex-nowrap text-[11px] opacity-60 whitespace-nowrap left-0 top-9 flex items-center justify-between">
                                            <div>Min: {minPrice} {curFrom.value}</div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div
                            className="w-full my-4 border   flex flex-col items-center justify-center md:w-[98%] h-[200px] md:hover:w-full duration-150 rounded-2xl hover:shadow-md p-4 bg-white ">
                            <div className="flex flex-col items-center justify-center md:w-[380px] w-[280px]">
                                <div className="flex justify-between items-center w-full">
                                    <div>Receive</div>
                                    <div>1 {curTo.cur} ≈ {receive} USDT</div>
                                </div>
                                <div
                                    className="flex flex-col md:flex-row mt-4 gap-x-2 justify-between items-center w-full">
                                    <div className="w-full relative inline-block text-left">
                                        <div>
    <span className="rounded-md shadow-sm">
      <button type="button"
              onClick={()=>{
                  setAOpen(!opena)
                  setOpen(false)
              }}
              className="relative inline-flex justify-center w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
        {curTo.cur}
          <svg className="ml-auto h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"/>
        </svg>
      </button>
    </span>
                                        </div>
                                        <div
                                            className="origin-top-right absolute z-20 left-0 mt-2 w-56 rounded-md shadow-lg">
                                            <div className="rounded-md bg-white shadow-xs">
                                                {opena && <div className="py-1 h-[240px] overflow-y-auto" role="menu" aria-orientation="vertical"
                                                              aria-labelledby="options-menu">

                                                    {men.map((content,index)=>{return(< >
                                                        <a key={index}
                                                           onClick={()=>{
                                                               setAOpen(false)
                                                               dispatch(setCurTooo({cur: content.label, name: content.value}))
                                                           }}
                                                           className="block flex items-center justify-start cursor-pointer px-4 mt-1.5 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                                           role="menuitem"><Image src={`/${content.label.toLowerCase()}.svg`} className="p-0.5" width={25} height={25}/><span className="ml-2">{content.label}</span></a>
                                                    </>)})}
                                                </div>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <Input
                                            className="ring-[#7D60DA]"
                                            icon={`≈`}
                                            readOnly
                                            value={amountTo}
                                            type="number"
                                            placeholder="amount"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <Link className={`w-full`} href={`/exchange`}><div
                        className="w-full mt-2 bg-[#7D60DA] w-[98%] select-none cursor-pointer hover:bg-purple-500 p-4 rounded-md text-white">Exchange
                    </div></Link>
                </div>
            </div>
        </div>
    </section>)
}