
import Link from "next/link";

export default function About(){
    return(<>

        <div className="bg-[#1D114F] flex flex-col items-center justify-center">
            <div className="flex px-4 w-full items-center justify-between h-[60px]">
                <div className="flex items-center justify-center gap-x-3 text-white text-md font-bold">
                    <Link href={`/`}><div>Home</div></Link>

                    <Link href={`/dashboard`}><div>Wallet</div></Link>

                    <Link href={`/exchange`}><div>Exchange</div></Link>

                    <Link  href={`/terms`}><div>Terms</div></Link>
                    <Link  href={`/about`}><div>About</div></Link>
                </div>
                <div></div>
            </div>
            <div className="min-h-[40vh] text-5xl flex items-center justify-center text-white font-bold">About Us</div>
            <div className="flex flex-col items-center justify-center bg-[#4A28A9] w-full">
                <div className="flex flex-col md:flex-row max-w-7xl items-center text-white text-md font-md  p-2 justify-center">

                    <div className="flex flex-col md:w-1/3 items-center mt-14 min-h-[50vh]">
                        <div className="mr-auto text-lg font-bold">Online crypto exhanger</div>
                        <div className="text-[12px] mr-auto text-left ">Buy cryptocurrency profitably, conveniently and securely through our online service.
                            The CryptoMainX cryptocurrency exchanger offers good conditions, ease of action, no hidden fees and a transparent algorithm of work.
                            Experience all the benefits of working with an advanced service.
                            CryptoMainX specializes in the exchange of cryptocurrencies for cryptocurrencies, which allows it to offer one of the most profitable courses on the European market.
                            After all, our goal is to build mutually beneficial and trusting relationships that will last for many years.
                            CryptoMainX is a system containing the entire set of necessary functions for comfortable, fast and secure conversion of the most common electronic payment systems and cryptocurrencies.
                            Software created by professionals in compliance with all safety rules
                        </div>
                    </div>
                    <div className="grid py-4 gap-4 md:ml-16 grid-cols-1 w-1/2 place-items-stretch md:grid-cols-2">
                        <div className="p-4 flex flex-col items-center justify-start border border-gray-400 ">
                            <div className="text-xl mr-auto font-medium">Convenience</div>
                            <div className="text-md leading-4 text-[13px]">CryptoMainX is a simple functionality, a well—developed user interface /UX interface and a clear algorithm of operation. Make a cryptocurrency exchange in 4 elementary steps</div>
                        </div>
                        <div className="p-4 flex flex-col items-center justify-start border border-gray-400 ">
                            <div className="text-xl mr-auto font-medium">Low fees</div>
                            <div className="text-md leading-4 text-[13px]">Due to the orientation and concentration of efforts on the Ukrainian market, the CryptoMainX exchanger provides almost the most favorable conditions. Make transactions with cryptocurrency at a minimum commission</div>
                        </div>
                        <div className="p-4 flex flex-col items-center justify-start border border-gray-400 ">
                            <div className="text-xl mr-auto font-medium">Transparency</div>
                            <div className="text-md leading-4 text-[13px]">CryptoMainX is about reliability and the absence of hidden fees. You get as much as is displayed on the screen. Exchange cryptocurrency without risks and without overpayments.</div>
                        </div>
                        <div className="p-4 flex flex-col items-center justify-start border border-gray-400 ">
                            <div className="text-xl mr-auto font-medium">Safety</div>
                            <div className="text-md leading-4 text-[13px]">Your privacy and security is our number 1 priority. In our activities, we are based on world experience in the field of data protection, funds and transactions. We make every effort to preserve your assets, secure access to your accounts, prevent fraud and ensure the complete security of any information provided by our customers.</div>
                        </div>

                    </div>


                </div>
            </div></div></>)
}