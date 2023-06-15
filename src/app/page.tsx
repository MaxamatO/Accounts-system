import Link from "next/link";
import  "./globals.css";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <>
      <div className='h-full w-screen flex m-auto relative justify-center items-center '>
        <div className='h-3/5 w-2/5 justify-center items-center flex text-4xl' >
          <Link className='drop-shadow-xl font-bold' href="http://localhost:3000/createaccount">Create your account or log in</Link>
        </div>
      </div>
    </>
  )
}
