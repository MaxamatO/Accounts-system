"use server"
import { PrismaClient } from "@prisma/client";
import { User } from "../../../../types";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

function okCredentials(user: User, rePassword: string): boolean {
    if(user.password === "" || user.email === "") return false;
    if(user.password.length < 8 || user.password.length > 20) return false;
    if(user.password !== rePassword) return false;
    return true;
}

export async function POST(user: User, rePassword: string) {
    if(!okCredentials(user, rePassword)) return new Error("Credentials invalid");
    const createUser = await prisma.user.create({data: user});
    return NextResponse.json(createUser);
}