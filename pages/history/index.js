import { getCookies, setCookie, deleteCookie } from 'cookies-next';
import {useEffect, useState} from "react";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {HistorySlice, setHistory} from "../../store/HistorySlice";
import {showNotification} from "@mantine/notifications";
import {Button, Table} from "@mantine/core";
import AuthContext from "../../context/authContext";
import {useRouter} from "next/router";
import Image from "next/image";
import NavBarr from "../../components/NavBarr";

export default function History(){
    const dispatch = useDispatch()
    const {authenticatedState} = useSelector(state => state.PaySlice)
    const router = useRouter()
    const {operations} = useSelector(state => state.HistorySlice)
    const [selectedType, setSelectedType] = useState(1)
    useEffect(()=>{

        // fetch("http://localhost:8000/history/", {
        //     method: "get",
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': 'JWT ' +  getCookies("jwt_token"),
        //     },
        // }).then(res => res.json()).then(e => console.log(e))
        if (authenticatedState.authenticated){

        }else{
            router.push('/login')
        }

        fetch(`/api/gethistory`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
                
            },
            body: JSON.stringify({
                id: authenticatedState.user.wallet.walletid
            })
        }).then(res => res.json())
            .then(data => {

                dispatch(setHistory(data.history.history))

            })
            .catch(error =>

                {
                    showNotification({
                        title: 'Error',
                        message: error.message,
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

            );

    })},[])

    return(<div className="min-h-screen">
    <NavBarr/>
    <div className=" p-4 grid grid-cols-3">

            <div className=" col-start-1 col-end-2 p-2">

                <Button onClick={()=>{setSelectedType(2)}} className="w-full  bg-blue-500">
                    Deposits
                </Button>
                <Button onClick={()=>{setSelectedType(1)}} className="w-full mt-2 bg-blue-500">
                    Exchanges
                </Button>
                <Button onClick={()=>{setSelectedType(3)}} className="w-full mt-2 bg-blue-500">
                    Withdrawals
                </Button>

            </div>
        {selectedType == 1 && <Table className=" col-start-2 col-end-4">
                <thead>
                <tr>
                    <th>Type of transaction</th>
                    <th>Crypto Amount from</th>
                    <th>Crypto Type from</th>
                    <th>Crypto Amount to</th>
                    <th>Crypto Type to</th>
                </tr>
                </thead>
                <tbody>
                {operations && Object.entries(operations).map(([key, value]) => {

                    return (

<>
    {value.type === "exchange" && <tr key={key}>
                                <td>{value.type}</td>
                                <td>{value.cryptoAmount_from}</td>
                                <td>{value.cryptoType_from}</td>
                                <td>{value.cryptoAmount_to}</td>
                                <td>{value.cryptoType_to}</td>
                            </tr>}

</>

                    );
                })}
                </tbody>
            </Table>}
        {selectedType == 2 && <Table className=" col-start-2 col-end-4">
            <thead>
            <tr>
                <th>Type of transaction</th>
                <th>Crypto Type</th>
                <th>Amount</th>

            </tr>
            </thead>
            <tbody>
            {operations && Object.entries(operations).map(([key, value]) => {

                return (

                    <>
                        {value.type === "deposit" && <tr key={key}>
                            <td>{value.type}</td>
                            <td>{value.crypto_type}</td>
                            <td>{value.amount}</td>

                        </tr>}

                    </>

                );
            })}
            </tbody>
        </Table>}
        {selectedType == 3 && <Table className=" col-start-2 col-end-4">
            <thead>
            <tr>
                <th>Type of transaction</th>
                <th>Crypto Type</th>
                <th>Amount</th>

            </tr>
            </thead>
            <tbody>
            {operations && Object.entries(operations).map(([key, value]) => {

                return (

                    <>
                        {value.type === "withdrawal" && <tr key={key}>
                            <td>{value.type}</td>
                            <td>{value.crypto_type}</td>
                            <td>{value.amount}</td>

                        </tr>}

                    </>

                );
            })}
            </tbody>
        </Table>}

    </div>

    </div>)
        }