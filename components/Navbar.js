import {Button} from "@mantine/core";
import Link from "next/link";

export default function Navbar(){
    return(<>

        <div className="flex bg-w md:col-start-1 px-3 md:col-end-3 flex-col gap-y-2 items-center justify-start">
            <Button variant="filled" className="bg-[#AF56FA] w-full">Wallet</Button>
            <Link className="w-full" href={`/exchange`}><Button variant="filled" className="bg-[#AF56FA] w-full">Exchange</Button></Link>
            <Link className="w-full" href={`/staking`}><Button variant="filled" className="bg-[#AF56FA] w-full">Staking</Button></Link>
            <Link className="w-full" href={`/history`}><Button variant="filled" className="bg-[#AF56FA] w-full">History</Button></Link>
        </div>

    </>)
}