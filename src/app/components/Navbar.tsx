"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"
import React from "react"

export default function Navbar() {
    const {data: session} = useSession();
    return (
        <nav className='w-full max-h-24 relative flex-auto flex border-b-2 border-gray-800'>
                <div className=" relative h-full flex flex-1 justify-between gap-10 p-10">
                    <div className="flex w-full justify-start gap-10">
                        <Link href="/">Home</Link>
                        <Link href="https://github.com/MaxamatO" target="_blank">Git Hub</Link>
                    </div>
                    {session && session.user ? 
                    <div className="flex w-full justify-end gap-10">
                        <p>{session.user.email}</p>
                        <button onClick={() => signOut()}>Sign out</button>
                    </div>
                    :
                    <div className="flex w-full justify-end gap-10">
                        <button onClick={() => signIn()}>Sign in</button>
                        <Link href="http://localhost:3000/api/auth/signUp">Sign up</Link>
                    </div>
                        
                }
                    
                </div>
            </nav>
    )
}