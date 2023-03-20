import Head from 'next/head'
import Image from 'next/image'
import FirSec from "../components/FirSec";
import {useEffect, useState} from "react";
import SecSec from "../components/SecSec";
import ThiSec from "../components/ThiSec";
import Footer from "../components/Footer";
import NavBarForAd from "../components/NavBarForAd";


export default function Home() {
    useEffect(() => {
        setTimeout(() => {
            setLoad(true)
        }, 2000)
    }, [])
    const [load, setLoad] = useState(false)
    return (
        <>


            <Head>


                <meta name="viewport" content="width=device-width, initial-scale=1"/>

            </Head>

            <main>
                {!load && <div className="min-h-screen bgf flex flex-col items-center justify-center">
                    <div className="relative flex items-center justify-center p-10">
                        <Image src={`/robot.svg`} width={200} height={200} className={`absolute top-7 z-10`}/>
                        <Image src={`/loadingscreen.svg`} width={60} className={`  z-20`} height={40} alt={`loading`}/>
                    </div>
                    <div className="text-2xl flex  items-center justify-center w-full mx-auto pl-4 opacity-50">Loading
                        ...
                    </div>
                </div>}
                {load && <div className="">
                    <NavBarForAd/>
                    <div className="bgfl">
                        <FirSec/>
                    </div>
                    <SecSec/>
                    <ThiSec/>
                    <Footer/>
                </div>}
            </main>


        </>
    )
}
