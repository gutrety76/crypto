import Link from "next/link";
import Image from "next/image"
import {Button} from "@mantine/core";

export default function NavBarForAd() {
    return (<>

        <div className="border-b border-gray-200 bg-[#f5f8fc]">
            <div className=" mb-auto max-w-6xl mx-auto h-[64px]  w-full flex   justify-between">
                <div className="my-auto select-none flex items-center justify-center"><Image src={`/robot.svg`} width={70}
                                                                                 height={70}/>
                    <div className="flex ml-2 leading-4 mt-2 flex-col items-center justify-center">
                        <div className="mr-auto text-[18px] font-bold">CRYPTOMAINX</div>
                        <div className="mr-auto text-[#7D60DA] text-[15px]">new era exchange</div>
                    </div>
                </div>
                <div className="flex items-center h-full ">
                    <Link href="/"><div
                        className="mx-4 opacity-80 py-5 duration-75 text-[16px] font-normal cursor-pointer hover:border-b hover:border-[#7D60DA]">
                        Home
                    </div></Link>
                    <Link href={`/dashboard`}><div
                        className="mx-4 opacity-80 py-5 duration-75 text-[16px] font-normal cursor-pointer hover:border-b hover:border-[#7D60DA]">
                        Wallet
                    </div></Link>
                    <Link href="/terms"><div
                        className="mx-4 opacity-80 py-5 duration-75 text-[16px] font-normal cursor-pointer hover:border-b hover:border-[#7D60DA]">
                        Terms
                    </div></Link>
                    <Link href={`/faq`}><div
                        className="mx-4 opacity-80 py-5 duration-75 text-[16px] font-normal cursor-pointer hover:border-b hover:border-[#7D60DA]">
                        Faq
                    </div></Link>
                </div>
                <div className="flex items-center justify-center">
                    <div className="flex items-center justify-center">
                        <Link href={`/login`}><Button className={`text-[#7D60DA] rounded-lg bg-white hover:text-white hover:bg-[#7D60DA]`}>Sign in</Button></Link>
                        <Link href={`/register`}><Button className={` bg-[#7D60DA] rounded-lg hover:bg-purple-700 ml-2`}>Registration</Button></Link>
                    </div>
                </div>
            </div>
        </div>
    </>)
}