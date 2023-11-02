import connectDB from "@/lib/conn"
import UserModel from "@/models/user/userModel"
import { NextResponse } from "next/server"
import bcrypt from "bcrypt"


export async function POST(req){

    const {email, password} = await req.json()
    await connectDB
    const user = await UserModel.findOne({email: email})
    if(user){
        return NextResponse.json({error: "User Already Exists"},{
            status:409
        })
    }

    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = await bcrypt.hashSync(password, salt)

    const create = await UserModel.create({email: email, password: hashedPassword, salt:salt})
    return NextResponse.json({
        message: 'User Created'
        },{
            status:201
        })

}