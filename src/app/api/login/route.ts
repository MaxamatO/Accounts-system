import { NextResponse } from "next/server";
import { ErrorMessage } from "../../../../types";
import { okCredentialsLogin } from "../../../../utils/helper_functions";
import { HttpCodes } from "../../../../utils/HttpErrors";
import prisma from "../../../../lib/prisma";
import { use } from "react";

interface RequestBody {
    email: string;
    password: string;
}

export async function POST(req: Request) {
    const body: RequestBody = await req.json();
    // const areCredentialsOk: ErrorMessage = await okCredentialsLogin(body.username, body.password); 
    // const errorMessage: ErrorMessage = {
    //     errorType: areCredentialsOk.errorType,
    //     ok: areCredentialsOk.ok,
    //     errorText: areCredentialsOk.errorText
    // }
    const user = await prisma.user.findFirst({where: {email: body.email}})

    if(user && user.password === body.password) {
        const {password, ...userWithoutPass} = user; 
        return new Response(JSON.stringify(userWithoutPass));
    }
    
    return new Response(JSON.stringify(null));
}