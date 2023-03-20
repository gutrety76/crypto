import Image from "next/image"
import {useEffect, useState} from "react";

export default function ThiSec() {
    const [a, SetA] = useState([])
    useEffect(() => {
        fetch('/api/exchanges').then(r => r.json()).then(c => SetA(c))
    }, [])
    return (<section className="min-h-screen  bgth flex items-center justify-center bg-[#F3F6F8]">

        <div className=" max-w-6xl  flex flex-col items-center justify-center">
            <div className="text-3xl font-bold">Latest Transactions</div>
            <div className=" hidden gap-4  md:grid grid-cols-2 mt-4 place-items-center">

                    {a.map((content, index) => {
                        console.log(a)
                        const date = new Date(content.date);
                        const formattedDate = date.toLocaleDateString();
                        return (<div  className=" flex items-center justify-between w-[450px] p-5 bg-white rounded-xl">
                            <div className="flex items-center justify-start w-full">{content.cryptoAmount_from} {content.cryptoType_from} <Image className="ml-1.5" src={`/${content.cryptoType_from.toLowerCase()}.svg`} width={30} height={30}/>
                                <Image className="mx-3" src={`/arrow.png`} width={18} height={18}/>
                                {content.cryptoType_to} <Image className="ml-1.5" src={`/${content.cryptoType_to.toLowerCase()}.svg`} width={30} height={30}/>
                            </div>
                            <div className="flex items-center justify-center"><Image src={`/time.png`} className="mr-2"
                                                                                     width={20} height={20}/><span
                                className="mt-0.5">{formattedDate}</span></div>
                        </div>)
                    })}



            </div>
            <div className="px-4 md:hidden w-full grid gap-4 grid-cols-1 mt-4 place-items-stretch">

                {a.map((content, index) => {
                    a.length = 5
                    const date = new Date(content.date);
                    const formattedDate = date.toLocaleDateString();
                    return (<div  className=" flex items-center justify-between w-full p-2 md:p-5 bg-white rounded-xl">
                        <div className="flex items-center justify-start w-full">{content.cryptoAmount_from} {content.cryptoType_from} <Image className="ml-1.5" src={`/${content.cryptoType_from}.svg`} width={30} height={30}/>
                            <Image className="mx-3" src={`/arrow.png`} width={18} height={18}/>
                            {content.cryptoType_to} <Image className="ml-1.5" src={`/${content.cryptoType_to}.svg`} width={30} height={30}/>
                        </div>
                        <div className="flex items-center justify-center"><Image src={`/time.png`} className="mr-2"
                                                                                 width={20} height={20}/><span
                            className="mt-0.5">{formattedDate}</span></div>
                    </div>)
                })}



            </div>
        </div>

    </section>)
}