"use server"
import { User } from "../../../../types";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(){
    const users: User[] = await prisma.user.findMany();
    return NextResponse.json(users);
}
