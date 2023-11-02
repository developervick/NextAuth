"use client"
import Link from "next/link";
import { useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

function Signup(){

    const email = useRef({})
    const password = useRef({})
    const confirm = useRef({})
    const [msg , setMsg] = useState('')
    const router = useRouter()

    async function onSubmit(event){
        event.preventDefault()

        if (password.current.value != confirm.current.value){
            setMsg('Password and Confirm Password does not matches')
        }
        else if(!email.current.value){
            setMsg('Enter email')
        }
        else{
            try{
                const res = await axios.post('/api/signup', {
                email: email.current.value,
                password: password.current.value
                })
                console.log(res)
                if(res.status == 201){
                    router.push("/")
                }
            }catch(e){
                console.log(e)
                setMsg(e.response.data.error)
            }
        }
    }


    return(
        <>
            <div className="flex justify-center items-center bg-gray-950 h-screen">
                <div className="flex flex-col justify-center items-center bg-gray-800 w-[40%] h-[50%]">
                    <div className='text-stone-200 px-10 text-xl font-bold' href="/login">SignUp</div>
                    <form action={onSubmit} className="flex flex-col w-[50%]  items-start">
                        <label className="text-white font-semibold text-lg">Email</label>
                        <input ref={email} className="mb-3 p-1 rounded-sm" type="text" placeholder="Email" name="email"></input>
                        <label className="text-white font-semibold text-lg">Password</label>
                        <input ref={password} className="mb-3 p-1 rounded-sm" type="password" placeholder="Password" name="password"></input>
                        <label className="text-white font-semibold text-lg" >Confirm Password</label>
                        <input ref={confirm} className="mb-3 p-1 rounded-sm" type="password" placeholder="Confirm Password" name="confirm"></input>
                        <div className="flex justify-between items-center w-full">
                            <button onClick={onSubmit} className="mb-3 bg-green-500 p-2 raunded-sm text-white hover:bg-green-600" type="submit">SignIn</button>
                            <Link className='text-green-500 text-xl font-bold' href="/login">Login </Link>
                        </div>
                        
                    </form>
                    
                        {msg? <div className="bg-red-200 p-2 font-bold text-red-700">{msg}</div> : null}
                </div>
            </div>
            
        </>
    )
}

export default Signup;