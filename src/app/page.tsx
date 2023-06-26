import Link from "next/link";
import  "./globals.css";

export default function Home() {
  return (
    <>
      <div className='h-full w-screen flex m-auto relative justify-center items-center '>
        <div className='h-3/5 w-2/5 justify-center items-center flex text-center lg:text-4xl md:text-3xl' >
          <Link className='drop-shadow-xl' href="/createaccount">Create your account or log in</Link>
        </div>
      </div>
    </>
  )
}
