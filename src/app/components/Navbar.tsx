import Link from "next/link"
import React from "react"

export default function Navbar() {
    return (
        <nav className='w-full max-h-24 relative flex-auto flex border-b-2 border-gray-800'>
            <div className=" relative h-full flex flex-1 justify-end gap-10 p-10">
                <Link href="/">Home</Link>
                <Link href="https://github.com/MaxamatO" target="_blank">Git Hub</Link>
            </div>
        </nav>
    )
}