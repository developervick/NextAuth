import { jwtVerify } from "jose";

export default async function verifyToken (token, secret){

    try{
       const verified = await jwtVerify(token, new TextEncoder().encode(secret))
       return verified.payload
    }
    catch(error){
        return null
    }
}