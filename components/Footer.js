import Image from "next/image"
import Link from "next/link";
export default function Footer(){
    return(<section className="min-h-[50vh] bgfooter flex flex-col items-center p-4 md:p-12 justify-start">
        <div className="mr-auto flex items-center select-none justify-center"><Image src={`/robot.svg`} width={60} height={100} className=""/><span className="ml-2 font-bold opacity-70 text-white text-2xl">CryptoMainX</span></div>
        <div className="grid grid-cols-2 duration-75 gap-4 md:grid-cols-6 w-full mt-3">
            <div className="flex text-white flex-col items-center justify-start">
                <div className="text-[13px] select-none mr-auto">CONTACT US</div>
                <div className=" flex mr-auto mt-2 flex-col items-center justify-start">
                    <span className="cursor-pointer hover:text-[#7D529F] mr-auto">support@crypocto.com</span>
                    <span className="cursor-pointer hover:text-[#7D529F] mr-auto mt-1">Telegram</span>
                </div>
            </div>
            <div className="flex text-white flex-col items-center justify-start">
                <div className="text-[13px] select-none mr-auto">TRENDING PAIRS</div>
                <div className=" flex mr-auto mt-2 flex-col items-center justify-start">
                    <span className="cursor-pointer hover:text-[#7D529F] mr-auto">ETH to LTC</span>
                    <span className="cursor-pointer hover:text-[#7D529F] mr-auto mt-1">ETH to USDT</span>
                    <span className="cursor-pointer hover:text-[#7D529F] mr-auto mt-1">LTC to ETH</span>
                    <span className="cursor-pointer hover:text-[#7D529F] mr-auto mt-1">TRX to BTC</span>
                </div>
            </div>
            <div className="flex text-white flex-col items-center justify-start">
                <div className="text-[13px] select-none mr-auto">POPULAR PAIRS</div>
                <div className=" flex mr-auto mt-2 flex-col items-center justify-start">
                    <span className="cursor-pointer hover:text-[#7D529F] mr-auto">BTC to BNB</span>
                    <span className="cursor-pointer hover:text-[#7D529F] mr-auto mt-1">USDT ERC20 to BTC</span>
                    <span className="cursor-pointer hover:text-[#7D529F] mr-auto mt-1">LTC to BTC</span>
                    <span className="cursor-pointer hover:text-[#7D529F] mr-auto mt-1">USDT TRC20 to BTC</span>
                </div>
            </div>
            <div className="flex text-white flex-col items-center justify-start">
                <div className="text-[13px] select-none mr-auto">POPULAR</div>
                <div className=" flex mr-auto mt-2 flex-col items-center justify-start">
                    <span className="cursor-pointer hover:text-[#7D529F] mr-auto">Exchange LTC to BTC</span>
                    <span className="cursor-pointer hover:text-[#7D529F] mr-auto mt-1">Exchange ETH to BTC</span>
                    <span className="cursor-pointer hover:text-[#7D529F] mr-auto mt-1">Exchange BTC to USDT</span>

                </div>
            </div>
            <div className="flex text-white flex-col items-center justify-start">
                <div className="text-[13px] select-none mr-auto">EXCHANGE PAIRS</div>
                <div className=" flex mr-auto mt-2 flex-col items-center justify-start">
                    <span className="cursor-pointer hover:text-[#7D529F] mr-auto">BTC to ETH</span>
                    <span className="cursor-pointer hover:text-[#7D529F] mr-auto mt-1">BTC to LTC</span>
                    <span className="cursor-pointer hover:text-[#7D529F] mr-auto mt-1">BTC to USDT</span>
                    <span className="cursor-pointer hover:text-[#7D529F] mr-auto mt-1">ETH to BTC</span>
                </div>
            </div>
            <div className="flex text-white flex-col items-center justify-start">
                <div className="text-[13px] select-none mr-auto">SUPPORT</div>
                <div className=" flex mr-auto mt-2 flex-col items-center justify-start">
                    <span className="cursor-pointer hover:text-[#7D529F] mr-auto">FAQ</span>

                </div>
            </div>

        </div>
        <div className="w-full h-[1px] bg-gray-50 my-5 opacity-20"></div>
        <div className="w-full text-white flex items-center justify-between">
            <div>© 2023 CryptoMainX</div>
            <div className="hover:text-[#7D529F] cursor-pointer duration-75"><Link href={`/terms`}>Terms of Service</Link></div>
        </div>
    </section>)
}