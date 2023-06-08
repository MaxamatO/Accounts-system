"use client"
import { FormEvent, useState } from "react"
import "../globals.css"
import { User } from "../../../types"



export default function Page() {

  async function handleSubmit(event: any) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const rePassword = event.target.rePassword.value;
    console.log(email, password, rePassword);
    
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
                <form onSubmit={handleSubmit} className="w-full h-full flex flex-col gap-16 place-content-center items-center">
                  <div className="flex flex-col w-60 gap-1">
                    <label htmlFor="" >email</label>
                    <input type="text" name="email" className="w-60 h-10 text-black" required />
                  </div>
                  <div className="flex flex-col w-60 gap-16">
                    <div className="flex  flex-col gap-1">
                      <label htmlFor="">password</label>
                      <input type="password" name="password" className="w-60 h-10 text-black" required />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label htmlFor="">repeat password</label>
                      <input type="password" name="rePassword" className="w-60 h-10 text-black" required />
                    </div>
                      
                  </div>
                  <button type="submit" className="w-32  h-10 bg-gray-700">Register</button>
                </form>
              </div>
            </div>
        </div>
      </main>
    )
}