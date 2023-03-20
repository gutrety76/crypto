import {Button, Checkbox, Divider, Input} from "@mantine/core";
import {useEffect, useState} from "react";

import {Router, useRouter} from "next/router";
import {useDispatch} from "react-redux";
import {setAuthenticated} from "../../store/PaySlice";
import Link from "next/link";
import AuthContext from "../../context/authContext";
import {showNotification} from "@mantine/notifications";
export default function Register() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confPas, setConfPas] = useState()
    const [agreePrivacy, setAgreePrivacy] = useState(false)
    const dispatch = useDispatch()

    function submit (){
        if (!agreePrivacy){
            return showNotification({
                title: "Error",
                autoClose: 5000,
                color: "red",
                message: "You have not agreed to the terms of use"

            })
        }
        if(password !== confPas){
            return showNotification({
                title: "Error",
                autoClose: 5000,
                color: "red",
                message: "Passwords are not the same"

            })
        }
        fetch('/api/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: name,
                email: email,
                password: password
            })
        })
            .then(res => res.json()).then(e=>{
                console.log(e)
                if(e.message){
                    Object.entries(e.message).map((value,index)=>{
                        showNotification({
                            title: value[0],
                            autoClose: 5000,
                            color: "red",
                            message: value[1][0]})


                    })
                }else{
                    dispatch(setAuthenticated({
                        authenticated: true,
                        user:e
                    }))

                }

            }


        )
    }

// Inside your form submission handler
    return (<AuthContext><div className="flex  bgfl  text-[#18214D] items-center justify-center min-h-screen">
        <div className="max-w-xl rounded-3xl border bg-white px-8 py-5  flex items-center justify-start ">
            <div className="flex flex-col items-center justify-start">
                <span className="mt-2 text-3xl font-medium"><h1>
                    Sign up</h1>
                </span>
                <span className="mt-2 text-[14px]">
                    Please check that you are visiting the correct URL
                </span>
                <div className="mt-2  w-full ">

                    <div className="flex border rounded-xl text-xl py-4 px-12 w-full items-center justify-center">
                        <svg className="w-[25px] fill-emerald-700 h-[25px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M16.27 10.5V8.07C16.27 5.82 14.45 4 12.2 4S8.13 5.82 8.13 8.07v2.43H6v8.94h12.43V10.5h-2.16zm-3.07 6.46h-2v-4h2v4zm1.07-6.46h-4.14V8.07c0-1.14.93-2.07 2.07-2.07 1.14 0 2.07.93 2.07 2.07v2.43z" fill="#047857"></path>
                    </svg>
                        <span className="text-[#047857]">https://</span><span className="opacity-80">cryptomainx.com</span></div>
                </div>

                <div className="w-full my-4 h-[1px] bg-[#C6C8D3]"/>
                <form>
                <div className="flex flex-col  w-full justify-start items-center">
                    <input
                        type="text"
                        className="bg-white border placeholder:text-black text-black w-full p-2 px-4 rounded-md my-3 "
                        placeholder={`Full Name`}
                        name="name"
                        size="lg"
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                    >


                    </input>
                    <input
                        type="email"
                        className="bg-white border placeholder:text-black text-black w-full p-2 px-4 rounded-md my-3"
                        placeholder={`Email Address`}
                        name="email"
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        size="lg"
                    />
                    <input

                        type="password"
                        className="bg-white border placeholder:text-black text-black w-full p-2 px-4 rounded-md my-3"
                        placeholder={`Password`}
                        name="password"
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        size="lg"
                    /><input
                    type="password"
                    className="bg-white border placeholder:text-black text-black w-full p-2 px-4 rounded-md my-3"
                    value={confPas}
                    onChange={(e)=>{setConfPas(e.target.value)}}
                    placeholder={`Confirm Password`}
                    name="confpassword"
                    size="lg"
                    />
                    <div className="flex py-2 items-center justify-center mr-auto">
                        <input
                            name="check"

                        type="checkbox"
                        className="placeholder:text-white  text-white mt-0"
                        label=""
                            value={agreePrivacy}
                            onChange={()=>{setAgreePrivacy(!agreePrivacy)}}
                    /> <span className="ml-2">I agree to the <Link href="/terms"><span className="cursor-pointer text-blue-500">Terms & Conditions</span></Link> </span></div>

                </div>
                <div className="w-full">
                    <Button onClick={()=>{
                        submit()
                    }} variant="filled"   className="bg-[#9880E7]  duration-75 hover:bg-[#7D60DA] my-2 w-full" size="lg">
                        Create Account
                    </Button>
                </div>
            </form>
                <span>Already have an account? <Link href={`/login`}><span className="text-blue-500">Sign in here</span></Link></span>
            </div>
        </div>

    </div></AuthContext>)
}