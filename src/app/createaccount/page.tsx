"use client"
import { FormEvent, useEffect, useState } from "react"
import "../globals.css"
import { User } from "../../../types"
import { useRouter } from "next/navigation"
import Register from "../components/Register"

export default function Page() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  async function handleSubmit(event: any) {
    event.preventDefault();
    await fetch('http://localhost:3000/api/register', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        email, password, rePassword
      })});
      
  }

    return (
      <main className='h-full w-full flex flex-col'>
        <div className='flex h-full'>
            <div className='flex h-full w-1/2 justify-center items-center border-r-2 border-gray-800'>
              <div className="w-2/3 h-2/3">
                <form action="" className="w-full h-full flex flex-col gap-16 place-content-center items-center">
                  <div className="flex flex-col w-60 gap-1">
                    <label htmlFor="">email</label>
                    <input type="text" className="w-60 h-10 text-black" required/>
                  </div>
                  <div className="flex flex-col w-60 gap-1">
                  <label htmlFor="">password</label>
                  <input type="password" className="w-60 h-10 text-black" required />
                  </div>
                  <button type="submit" className="w-32  h-10 bg-gray-700">Log in</button>
                </form>
              </div>
            </div>
            <div className='relative flex justify-center items-center h-full w-1/2'> 
              <div className="w-2/3 h-2/3">
                <Register 
                  handleSubmit={handleSubmit}
                  setEmail={(e) => setEmail(e.target.value)} 
                  setPassword={(e) => setPassword(e.target.value)} 
                  setRePassword={(e) => setRePassword(e.target.value)}/>
              </div>
            </div>
        </div>
      </main>
    )
}