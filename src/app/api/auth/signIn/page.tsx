"use client"
import { signIn } from 'next-auth/react'
import React, {useState } from 'react'

function LoginPage() {
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")

    const onSubmit = async () => {
        const result = await signIn("credentials", {
            email: email,
            password: password,
            redirect: true,
            callbackUrl:"http://localhost:3000/accounts"
        });
    }

  return (
    <div className="w-full h-full flex flex-col gap-16 place-content-center items-center">
            <div className="flex flex-col w-60 gap-1">
            <label htmlFor='email'>email</label>
            <input name='email' type="text" id='email' onChange={(e) => setEmail(e.target.value)} className="w-60 h-10 text-black" required/>
            </div>
            <div className="flex flex-col w-60 gap-1">
            <label htmlFor='password'>password</label>
            <input name='password' id='password' type="password" onChange={(e) => setPassword(e.target.value)} className="w-60 h-10 text-black" required />
            </div>
            <button type="submit" onClick={onSubmit} className="w-32  h-10 bg-gray-700">Log in</button>
        </div>
  )
}

export default LoginPage;