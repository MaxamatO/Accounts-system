"use server"
import { User } from "../../../../types";
import { NextResponse } from "next/server";
import prisma  from "../../../../lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route"
import { Roles } from "../../../../utils/Roles";
import { HttpCodes } from "../../../../utils/HttpErrors";

export async function GET(){
    const session = await getServerSession(authOptions);
    // Check for role. API only accessible by ADMIN
    if(session && session.user.role === Roles.ADMIN) {
        const users: User[] = await prisma.user.findMany();
        return NextResponse.json(users);
    }
    return NextResponse.json({
        message: "Unauthorized"
    },
    {
        status: HttpCodes.unauthorized
    }
    )
}
