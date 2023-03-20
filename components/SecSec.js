import Image from "next/image"
export default function SecSec(){
    return(<section className="min-h-screen px-2 flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto">
        <div className="w-full md:w-1/2"><Image src={`/secbg.svg`} width={700} height={700}/></div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
            <div className="mr-auto text-5xl font-bold">
                Reliable and fast transactions with Crypocto
            </div>
            <div className="mt-4">Cryptocurrencies are highly popular all over the world, and the demand for them is only growing. Therefore, if you are planning to invest in cryptocurrencies, finding a proven and reliable exchanger that will provide fast and convenient transactions is vital. The Crypocto service offers customers online cryptocurrency exchange of all popular digital assets. Using our exchanger, you can buy or sell cryptocurrencies quickly and profitably.</div>
        </div>
    </section>)
}