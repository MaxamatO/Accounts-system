"use server"
import { User } from "../../../../types";
import { NextResponse } from "next/server";
import { ErrorMessage } from "../../../../types";
import { HttpCodes } from "../../../../utils/HttpErrors";
import { okCredentials } from "../../../../utils/helper_functions";
import prisma  from "../../../../lib/prisma";


export async function POST(req: Request) {
    const body = await req.json();
    const {email, password, rePassword} = body;
    const user: User = {
        email: email??"",
        password: password??"",
        verified: false,
        role: "User"
    };
    // Handle custom errors
    const areCredentialsOk: ErrorMessage = await okCredentials(user, rePassword); 
    const errorMessage: ErrorMessage = {
        errorType: areCredentialsOk.errorType,
        ok: areCredentialsOk.ok,
        errorText: areCredentialsOk.errorText
    } 
    // Create the user, when okCredentials is true
    if(areCredentialsOk.ok === true){
        console.log(email, password);
        const createdUser = await prisma.user.create({data: user},);
        return NextResponse.json(errorMessage); 
    }; 
    // Return 401 response with ErrorMessage information
    return NextResponse.json({
        statusText: errorMessage.errorText, // Error description
        errorType: errorMessage.errorType // Error type => Look utils/ErrorTypes.ts
    }, {
        status: HttpCodes.unauthorized // HttpCodes => Look utils/HttpErrors.ts
    }
    )
}   