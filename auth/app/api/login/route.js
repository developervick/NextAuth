import { NextResponse } from "next/server"
import UserModel from "@/models/user/userModel"
import connectDB from "@/lib/conn"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'


export async function POST(req){

    const { email, password} = await req.json()
    console.log(email, password)
    await connectDB

    if(!email || !password){
        return NextResponse.json({
            error:"Please enter"
        })
    }

    const user = await UserModel.findOne({email: email})
    console.log(user)
    if(!user){
        return NextResponse.json({
            error:"User does not Exists"
        }, {
            status: 404,
        })
    }

    const authenticatedUser = bcrypt.compareSync(password, user.password)

    if(!authenticatedUser){
        return NextResponse.json({
            error:"Invalid Credentials"
        },{
            status:401 
        })
    }

    const token = jwt.sign(JSON.stringify(user), process.env.JWT_SECREAT)

    const response = NextResponse.json({
        message: "User authenticated"
    },{
        status: 200
        
    })
    response.cookies.set('JWTtoken', token, {maxAge:1000*60})
    return response
}
