import { ErrorMessage, User } from "../types";
import { PrismaClient } from "@prisma/client";
import { ErrorTypes } from "./ErrorTypes";
import prisma from "../lib/prisma";

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
    // Check if user with that email exists
    if(exists) return {errorText: "User with provided email already exists", ok: false, errorType: ErrorTypes.EMAIL_EXISTS} 
    // Validate the email
    if(!validateEmail(user.email)) return {errorText: "Invalid email", ok:false, errorType: ErrorTypes.INVALID_EMAIL}
    // Check for password length
    if(user.password.length < 8 || user.password.length > 20) return {errorText: "Password must contain 8-20 characters",
     ok: false, errorType: ErrorTypes.LENGTH};
    // Check for password equality
    if(user.password !== rePassword) return {errorText: "Passwords are not equal", ok:false, errorType: ErrorTypes.NOT_EQUAL};
    return {errorText: "None", ok: true, errorType: ErrorTypes.NONE};
}

export async function okCredentialsLogin(email: string, password: string): Promise<ErrorMessage> {
    const exists = !!await prisma.user.findFirst({
        where: {
            email: email
        }
    });
    const user = await prisma.user.findFirst({where: {email:email}});
    const realPassword = user?.password;
    if(password!==realPassword || !exists) return {errorText: "Password or email is not correct", errorType: ErrorTypes.WRONG_CREDS, ok: false};

    return {errorText: "None", ok: true, errorType: ErrorTypes.NONE}; 
}

// Validate email using regex
export function validateEmail(email: string) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };