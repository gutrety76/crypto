import {Button, Checkbox, Divider, Input} from "@mantine/core";
import {useEffect, useState} from "react";

import {Router, useRouter} from "next/router";
import {useDispatch} from "react-redux";
import {setAuthenticated} from "../../store/PaySlice";
import Link from "next/link";
import {showNotification} from "@mantine/notifications";
import AuthContext from "../../context/authContext";

export default function Register() {
    const [name, setName] = useState()
    const [password, setPassword] = useState()


    const dispatch = useDispatch()

// Inside your form submission handler

    function submit() {

        fetch("/api/login", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "username": name,
                "password": password
            })

        }).then(res => res.json()).then(e=>{
            console.log(e)
            if(e.message){
                showNotification({
                    title: 'Error',
                    autoClose: 5000,
                    color: "red",
                    message: e.message.error,
                })
            }else{
                dispatch(setAuthenticated({
                    authenticated: true,
                    user:e.username
                }))
        }

        }


        )

        // dispatch(setAuthenticated({authenticated: true}))

    }


    return (<AuthContext><div className="flex bg-white bgfl text-[#18214D] items-center justify-center min-h-screen">
        <div className="max-w-xl bg-white border rounded-3xl px-8 py-5 flex items-center justify-start ">
            <div className="flex flex-col items-center justify-start">
                <span className="mt-2 text-3xl font-medium"><h1>
                    Login</h1>
                </span>
                <span className="mt-2 text-[14px]">
                    Please check that you are visiting the correct URL
                </span>
                <div className="mt-2  w-full ">

                    <div className="flex border rounded-xl text-xl py-4 px-12 w-full items-center justify-center">
                        <svg className="w-[25px] fill-emerald-700 h-[25px]" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 24 24">
                            <path
                                d="M16.27 10.5V8.07C16.27 5.82 14.45 4 12.2 4S8.13 5.82 8.13 8.07v2.43H6v8.94h12.43V10.5h-2.16zm-3.07 6.46h-2v-4h2v4zm1.07-6.46h-4.14V8.07c0-1.14.93-2.07 2.07-2.07 1.14 0 2.07.93 2.07 2.07v2.43z"
                                fill="#047857"></path>
                        </svg>
                        <span className="text-[#047857]">https://</span><span
                        className="opacity-80">cryptomainx.com</span></div>
                </div>

                <div className="w-full my-4 h-[1px] bg-[#C6C8D3]"/>
                <form>
                    <div className="flex flex-col  w-full justify-start items-center">
                        <input
                            type="text"
                            className="bg-white border placeholder:text-black text-black w-full p-2 px-4 rounded-md my-3 "
                            placeholder={`UserName`}
                            name="name"
                            size="lg"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                        >


                        </input>

                        <input

                            type="password"
                            className="bg-white border placeholder:text-black text-black w-full p-2 px-4 rounded-md my-3"
                            placeholder={`Password`}
                            name="password"
                            value={password}

                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            size="lg"
                        />
                        <div className="flex py-2 items-center justify-center mr-auto">

                        </div>
                        <div className="w-full">
                            <Button onClick={submit} variant="filled" className="bg-[#9880E7]  duration-75 hover:bg-[#7D60DA] my-2 w-full" size="lg">
                                Log in
                            </Button>
                        </div>
                    </div>
                </form>
                <span>Dont have an account?<Link href={`/register`}><span className="text-blue-500"> Sign up here</span></Link></span>
            </div>
        </div>

    </div></AuthContext>)
}