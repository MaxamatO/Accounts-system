"use server"
import { PrismaClient } from "@prisma/client";
import { User } from "../../../../types";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();



function okCredentials(user: User, rePassword: string): boolean {
    if(user.password === "" || user.email === "") return false;
    if(user.password.length < 8 || user.password.length > 20) return false;
    if(user.password !== rePassword) return false;
    return true;
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
    // if(!okCredentials(user, rePassword)) return new Response("Credentials invalid");
    // console.log(okCredentials(user, rePassword));
    console.log(email, password);
    
    const createUser = await prisma.user.create({data: user},);
    return NextResponse.json({message: "User created", createUser}) 
}   