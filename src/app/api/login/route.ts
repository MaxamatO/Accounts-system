import { NextResponse } from "next/server";
import prisma  from "../../../../lib/prisma";

export async function POST(req: Request) {
    const body = await req.json();
    console.log(body.password, body.email);
    console.log(body);
    
    return NextResponse.json("");
}