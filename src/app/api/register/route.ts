"use server"
import { PrismaClient } from "@prisma/client";
import { User } from "../../../../types";
import { NextResponse } from "next/server";
import { ErrorMessage } from "../../../../types";
import { HttpCodes } from "../../../../utils/HttpErrors";
import { ErrorTypes } from "../../../../utils/ErrorTypes";
import { okCredentials } from "../../../../utils/helper_functions";
import { prisma } from "../../../../utils/prismaClient";


export async function POST(req: Request) {
    const body = await req.json();
    const {email, password, rePassword} = body;
    const user: User = {
        email: email??"",
        password: password??"",
        verified: false,
        role: "User"
    };
    const areCredentialsOk: ErrorMessage = await okCredentials(user, rePassword); 
    const errorMessage: ErrorMessage = {
        errorType: areCredentialsOk.errorType,
        ok: areCredentialsOk.ok,
        errorText: areCredentialsOk.errorText
    }
    if(areCredentialsOk.ok === true){
        console.log(email, password);
        const createdUser = await prisma.user.create({data: user},);
        return NextResponse.json(errorMessage); 
    };
    return NextResponse.json({
        statusText: errorMessage.errorText,
        errorType: errorMessage.errorType
    }, {
        status: HttpCodes.unauthorized
    }
    )
}   