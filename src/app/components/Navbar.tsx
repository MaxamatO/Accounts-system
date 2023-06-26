"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"
import React from "react"


export default function Navbar() {
    const {data: session} = useSession();
    return (
        <nav className='w-full h-36 sm:max-h-24 sm:relative sm:flex-auto sm:flex sm:border-b-2 border-gray-800 text-xs sm:text-lg'>
                <div className="flex h-full sm:bg-inherit sm:flex-1 sm:justify-between sm:relative sm:gap-10 sm:p-10">
                    <div className="flex w-full justify-start gap-10 p-10 sm:p-0 sm:flex-row">
                        <Link href="/">Home</Link>
                        <Link href="https://github.com/MaxamatO" target="_blank">Git Hub</Link>
                        <Link href="/accounts">Accounts</Link>
                    </div>
                    {session && session.user ? 
                    <div className="absolute flex flex-col right-0 sm:justify-end sm:gap-10 sm:flex-row">
                        <p>{session.user.email}</p>
                        <button onClick={() => signOut()}>Sign out</button>
                    </div>
                    :
                    <div className="absolute duration-75 flex gap-10 left-0 pl-10 top-24 sm:opacity-100 sm:justify-end sm:w-full sm:relative sm:top-0 sm:gap-10 sm:flex-row">
                        <button onClick={() => signIn()}>Sign in</button>
                        <Link href="/api/auth/signUp">Sign up</Link>
                    </div>
                }
                </div>
            </nav>
    )
}