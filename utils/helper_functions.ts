import { ErrorMessage, User } from "../types";
import { PrismaClient } from "@prisma/client";
import { ErrorTypes } from "./ErrorTypes";
import { prisma } from "./prismaClient";

export async function fetchUsers(): Promise<User[]> {
    return await fetch("http://localhost:3000/api/users").then(res => res.json());
}

// Check credentials for length, equality, uniqueness
// Returns ErrorMessage with the information about the error: text, type, ok(true, false)
export async function okCredentials(user: User, rePassword: string): Promise<ErrorMessage> {
    const exists = !!await prisma.user.findFirst({
        where: {
            email: user.email
        }
    }) 
    if(exists) return {errorText: "User with provided email already exists", ok: false, errorType: ErrorTypes.EMAIL_EXISTS} 
    if(user.password.length < 8 || user.password.length > 20) return {errorText: "Password must contain 8-20 characters",
     ok: false, errorType: ErrorTypes.LENGTH};
    if(user.password !== rePassword) return {errorText: "Passwords are not equal", ok:false, errorType: ErrorTypes.NOT_EQUAL};
    return {errorText: "None", ok: true, errorType: ErrorTypes.NONE};
}