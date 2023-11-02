"use client"
import Link from "next/link";
import { useState } from "react";
import axios from 'axios';
import { useRouter } from "next/navigation";

function Login(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState()
    const router = useRouter()

    async function onSubmit() {

        try{
            const res = await axios.post('/api/login', {
                email: email,
                password: password
            })

            if(res.status == 200){
                router.push("/")
            }
        }catch(e){
            setMsg(`Please Retry  ${e.message}`)
        }

    }

   return(
        <>
             <div className="flex justify-center items-center bg-gray-950 h-screen">
                <div className="flex flex-col justify-center items-center bg-gray-800 w-[40%] h-[50%]">
                <Link className='text-blue-500' href="/">Home </Link>
                <Link className='text-blue-500' href="/signup">SignUp </Link>
                    <div className="flex flex-col w-[50%]  items-start">
                        <label className="text-white font-semibold text-lg">Email</label>
                        <input onChange={(e)=>setEmail(e.target.value)} className="mb-3 p-1 rounded-sm" type="text" placeholder="Email" name="email"></input>
                        <label className="text-white font-semibold text-lg">Password</label>
                        <input onChange={(e=>setPassword(e.target.value))} className="mb-3 p-1 rounded-sm" type="password" placeholder="Password" name="password"></input>
                        <button onClick={onSubmit} className="mb-3 bg-gray-500 p-2 raunded-sm text-white hover:bg-gray-600" type="submit">Login</button>
                    </div>
                    { msg ? <div className="p-2 text-red-600 font-bold bg-red-200">{msg}</div> : null}
                </div>
            </div>
        </>
    )
}

export default Login;