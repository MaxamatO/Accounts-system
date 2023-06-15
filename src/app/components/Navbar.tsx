"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"
import React from "react"

export default function Navbar() {
    const {data: session} = useSession();
    if (session && session.user) {
        return (
            <nav className='w-full max-h-24 relative flex-auto flex border-b-2 border-gray-800'>
                <div className=" relative h-full flex flex-1 justify-end gap-10 p-10">
                    <Link href="/">Home</Link>
                    <Link href="https://github.com/MaxamatO" target="_blank">Git Hub</Link>
                    <p>{session.user.email}</p>
                    <button onClick={() => signOut()}>Sign out</button>
                </div>
            </nav>
    )}
    return (
        <nav className='w-full max-h-24 relative flex-auto flex border-b-2 border-gray-800'>
                <div className=" relative h-full flex flex-1 justify-end gap-10 p-10">
                    <Link href="/">Home</Link>
                    <Link href="https://github.com/MaxamatO" target="_blank">Git Hub</Link>
                    <button onClick={() => signIn()}>Sign in</button>
                </div>
            </nav>
    )
}