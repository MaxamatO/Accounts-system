"use client"
import "../globals.css"
import { signIn } from "next-auth/react"
import Link from "next/link"

export default function Page() {
    return (
      <main className='h-full w-full flex flex-col'>
        <div className='flex h-full'>
            <div className='flex h-full w-1/2 justify-center items-center border-r-2 border-gray-800'>
              <div className="w-2/3 h-2/3 flex justify-center items-center">
                <button className="w-24 h-10 bg-gray-700" onClick={() => signIn()}>Login</button>
              </div>
            </div>
            <div className='relative flex justify-center items-center h-full w-1/2'> 
              <div className="w-2/3 flex justify-center items-center h-2/3">
                  <Link href="/api/auth/signUp" className=" w-24 sm:w-36 h-10 flex justify-center items-center bg-gray-700">Register</Link>
              </div>
            </div>
        </div>
      </main>
    )
}