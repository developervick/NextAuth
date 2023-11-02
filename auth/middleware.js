export const runtime = 'nodejs'
import { NextResponse } from "next/server";
import verifyToken from "./lib/auth";


export default async function authorizationMiddleware(req){

    const token = req.cookies.get('JWTtoken')
    if(token === undefined){
        return NextResponse.redirect(new URL('/login', req.url))
    }
    else{
        const verified = await verifyToken(token.value, process.env.JWT_SECREAT)

        if(!verified){
            return NextResponse.redirect(new URL('/login'), req.url)
        }

        return NextResponse.next()
    }
    
}

export const config = {
    matcher : "/",
}

