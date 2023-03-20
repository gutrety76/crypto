import {Button, Popover} from "@mantine/core";
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import Link from "next/link";
import {setAuthenticated} from "../store/PaySlice";
import {showNotification} from "@mantine/notifications";

export default function NavBarr() {
    const {authenticatedState, notifications} = useSelector(state => state.PaySlice)
    const dispatch = useDispatch()

    return (
        <div className="w-full bg-black md:px-6 text-white border-b border-gray-300 h-[60px] flex items-center justify-between ">
            <div className="flex text-[11px] md:text-[16px] font-medium w-full items-center justify-start">
                <Link href="/">
                    <div className="cursor-pointer font-bold md:text-lg">CryptoMainX<span
                        className='text-green-600'></span></div>
                </Link>
                <Link href="/dashboard">
                    <div className="md:ml-5 mt-0.5 ml-1 cursor-pointer ">Wallet</div>
                </Link>

                <Link href="/exchange">
                    <div className="cursor-pointer mt-0.5 ml-1 md:ml-3">Exchange</div>
                </Link>

                <Link href="/staking">
                    <div className="cursor-pointer mt-0.5 ml-1 md:ml-3">Staking</div>
                </Link>

                <Link href="/terms">
                    <div className="cursor-pointer mt-0.5 ml-1 md:ml-3">Terms</div>
                </Link>
            </div>
            <div className="flex items-center justify-center">
                <Popover width={350} wi classNames="p-0 m-0" position="bottom" withArrow shadow="md">
                    <Popover.Target className="flex items-center justify-center">
                        <div className=" flex relative z-10 items-center justify-center md:mr-2">
                            <Image
                                className="hover:scale-105 flex items-center justify-center rounded-[180px]  p-1 cursor-pointer duration-75 active:scale-100"
                                src={`notification.svg`} width={45} height={50}/>
                            {notifications.length > 0 && <div className="absolute top-0 right-[2px] z-10 md:w-[20px] text-[15px] h-[10px] w-[10px] md:h-[20px] text-white font-medium rounded-[180px] bg-green-700"><div className="flex h-full w-full items-center justify-center ">{notifications.length}</div></div>}
                        </div>
                    </Popover.Target>
                    <Popover.Dropdown>
                        {notifications.length > 0 && <div className="grid grid-cols-1 gap-4">
                            {Object.entries(notifications).map((value, index) => {

                                return (<div className="p-2 rounded-md flex items-center justify-between bg-[#121212]"
                                             key={index}>
                                    <div className="w-5/6">{value[1].message}</div>
                                    <div className="w-1/6" onClick={()=>{
                                        fetch("/api/deletenotification",{
                                            method: 'POST',
                                            headers: {
                                                'Content-Type': 'application/json'
                                            },
                                            body: JSON.stringify({
                                                id: value[1].id
                                            })
                                        })
                                        showNotification({
                                            title: "loading",
                                            autoClose: 1000
                                        })
                                    }} className="cursor-pointer"><Image src={`close.svg`} className="opacity-70" height={20} width={20}/></div>
                                </div>)
                            })}</div>
            }
            {notifications.length == 0 && <div className="grid grid-cols-1 gap-4">
                <span>You don't have notifications</span>
            </div>}
        </Popover.Dropdown>
</Popover>
    <Popover width={250} classNames="" position="bottom" withArrow shadow="md">
        <Popover.Target className="flex items-center justify-center">
            <div className=" flex items-center justify-center ">
                <Image
                    className="hover:scale-105 bg-black rounded-[180px] bg-white p-1 cursor-pointer duration-75 active:scale-100"
                    src={`/avatar.svg`} width={40} height={40}/>
            </div>
        </Popover.Target>
        <Popover.Dropdown w>
            <div className="flex flex-col text-black  items-center justify-center">
                <Image className=" bg-black rounded-[180px] p-2 duration-75" src={`/avatar.svg`} width={100}
                       height={100}/>
                <div
                    className="mt-2 pt-2 text-[15px] font-[500] opacity-90">{authenticatedState.user && authenticatedState.user.username.username}</div>
                <div
                    className=" text-[15px] font-[500] text-black opacity-90">{authenticatedState.user && authenticatedState.user.username.email}</div>
                <Link className="w-full" href={`/dashboard`}>
                    <div
                        className="flex mt-2 p-0.5 opacity-90 cursor-pointer text-[14px] font-medium  items-center justify-start w-full ">
                        <Image src={`/wallet.svg`} width={20} height={20}/>
                        <div className="ml-4">My wallet</div>
                    </div>
                </Link>
                <Link className="w-full" href={`/history`}>
                    <div
                        className="flex p-0.5 opacity-90 cursor-pointer text-[14px] font-medium items-center justify-start w-full ">
                        <Image src={`/history.svg`} className="fill-white" width={20} height={20}/>
                        <div className="ml-4">History</div>
                    </div>
                </Link>
                <div onClick={() => dispatch(setAuthenticated({}))}
                     className="flex p-0.5 mr-auto text-red-700 cursor-pointer opacity-90 text-[14px] font-medium items-center justify-start w-full ">
                    <Image src={`/logout.svg`} width={22} height={20}/>
                    <div className="ml-3.5 mr-auto">Log out</div>
                </div>
            </div>
        </Popover.Dropdown>
    </Popover>
</div>
</div>)
}