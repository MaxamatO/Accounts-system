"use server"
import { PrismaClient } from "@prisma/client";
import { User } from "../../../../types";
import { NextResponse } from "next/server";
import { ErrorMessage } from "../../../../types";
import { ApiError } from "next/dist/server/api-utils";
import { HttpCodes } from "../../../../utils/HttpErrors";
import { NextApiResponse } from "next";


const prisma = new PrismaClient();

function okCredentials(user: User, rePassword: string): ErrorMessage {
    if(user.password === "" || user.email === "") return {errorType: "Fields cant be blank", ok: false};
    if(user.password.length < 8 || user.password.length > 20) return {errorType: "Password must contain 8-20 characters", ok: false};
    if(user.password !== rePassword) return {errorType: "Passwords are not equal", ok:false};
    return {errorType: "None", ok: true};
}

export async function POST(req: Request) {
    const body = await req.json();
    const {email, password, rePassword} = body;
    const user: User = {
        email: email??"",
        password: password??"",
        verified: false,
        role: "User"
    };
    const areCredentialsOk: ErrorMessage = okCredentials(user, rePassword); 
    const errorMessage: ErrorMessage = {
        errorType: areCredentialsOk.errorType,
        ok: areCredentialsOk.ok
    }
    if(areCredentialsOk.ok === true){
        console.log(email, password);
        const createUser = await prisma.user.create({data: user},);
        console.log("im here");
        
        return NextResponse.json(errorMessage); 
    };
    console.log("also here");
    return NextResponse.json({
        statusText: errorMessage.errorType
    }, {
        status: HttpCodes.unauthorized
    }
    )
}   