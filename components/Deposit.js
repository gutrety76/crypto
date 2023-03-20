import {useEffect, useState} from 'react';
import {Modal, Button, Group, Select, Input, Tooltip} from '@mantine/core';
import {showNotification} from "@mantine/notifications";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedAmount, setSelectedPaymentCurrency} from "../store/PaymentSlice";
import {useRouter} from "next/router";
export default function Deposit(){
    const [opened, setOpened] = useState(false);
    const [amount, setAmount] = useState(0)
    const [currency, setCurrency] = useState("BTC")
    const {authenticatedState} = useSelector(state => state.PaySlice)
    const {selectedPaymentCurrency, selectedAmount} = useSelector(state => state.PaymentSlice)
    const dispatch = useDispatch()
    const router = useRouter()
    function submit(){
         if(amount === 0){
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
        else {
            dispatch(setSelectedAmount(amount))
            router.push("/payment")
        }
    }
    function checkAmount(e) {

        let value = e.target.value;


        const regex = /^\d{0,100}(\.\d{0,10})?$/;
        if (regex.test(value)) {
            let floatValue = parseFloat(value);
            setAmount(floatValue);

        } else {
            // handle invalid input
        }

    }
    return(<>
        <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            title={`Deposit`}
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
                        <div className="text-[14px] font-[500] mr-auto">Amount to deposit</div>
                    <Input
                        className={`w-full`}

                        value={amount}
                        type="number"
                        placeholder={`amount`}
                        onChange={checkAmount}
                    /></div>
                    <div className="w-full flex gap-x-2 items-center justify-end pt-4">
                        <Button onClick={()=> {submit()}} className="  hover:bg-green-700 bg-green-600 ">Get address</Button>
                        <Button onClick={() => setOpened(false)} className=" text-black hover:bg-red-600 bg-white hover:text-white">Close</Button>
                    </div>
                </div>
            </div>
        </Modal>


        <Button onClick={() => setOpened(true)} className="w-full  bg-green-600 hover:bg-green-700">Deposit</Button>
    </>)
}