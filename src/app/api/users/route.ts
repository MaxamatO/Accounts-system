"use server"
import { User } from "../../../../types";
import { NextResponse } from "next/server";
import prisma  from "../../../../lib/prisma";

export async function GET(){
    const users: User[] = await prisma.user.findMany();
    return NextResponse.json(users);
}
