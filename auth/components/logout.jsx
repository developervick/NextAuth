"use client"
import jsCookie from "js-cookie"
import { useRouter } from "next/navigation"

export function Logout(){
    const router = useRouter()

    function handleClick(){
        jsCookie.remove("JWTtoken")
        router.push('/login')
    }

    return <>
    <button onClick={handleClick} className="bg-red-700 border font-normal px-4 py-2 hover:bg-red-800 rounded-xl text-white">Logout</button>
    </>
}