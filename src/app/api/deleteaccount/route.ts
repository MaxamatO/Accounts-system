"use server"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { Roles } from "../../../../utils/Roles";
import prisma from "../../../../lib/prisma";
import { NextResponse } from "next/server";
import { HttpCodes } from "../../../../utils/HttpErrors";

interface RequestBody {
    email: string;
}

export async function DELETE(req: Request) {
    const session = await getServerSession(authOptions);
    
    if(!session || session.user.role!==Roles.ADMIN) {
        return NextResponse.json({
            message: "Unauthorized"
        },
        {
            status: HttpCodes.unauthorized
        }
        )
    }

    const {searchParams} = new URL(req.url);
    const email = searchParams.get('id');
    console.log(email);
    
    
    
    if(!email) return NextResponse.json({
        message: "No email was provided"
    },
    {
        status: HttpCodes.bad_request
    }
    )

    if(email === session.user.email) {
        return NextResponse.json({
            message: "You can't delete yourself"
        },
        {
            status: HttpCodes.bad_request
        })
    }

    const exists = !!await prisma.user.findUnique({where: {email: email}});
    console.log(exists);
    

    if(!exists) {
        return NextResponse.json({
            message: "User does not exist"
        },
        {
            status: HttpCodes.bad_request
        }
        )
    }

    const result = await prisma.user.delete({where: {email: email}});
    return NextResponse.json({
        user: result,
        message: "Deleted"
    },
    {
        status: HttpCodes.success
    }
    )
    
}