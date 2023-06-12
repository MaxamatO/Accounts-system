"use client"
import { FormEvent, useEffect, useState } from "react"
import "../globals.css"
import { User } from "../../../types"
import { useRouter } from "next/navigation"
import Register from "../components/Register"
import Login from "../components/Login"

export default function Page() {

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');

  const [loginError, setLoginError] = useState('');
  const [registerError, setRegisterError] = useState('');

  async function handleRegisterSubmit(event: any) {
    event.preventDefault();
    const response = await fetch('http://localhost:3000/api/register', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        email, password, rePassword
      })})
      if (response.ok) {
        router.push("http://localhost:3000/accounts");
        return;
      }
      const resBody = await response.json();
      console.log(resBody);
      setRegisterError(resBody.statusText);
      
  }

  async function handleLoginSubmit(event: any) {
    event.preventDefault();
    await fetch('http://localhost:3000/api/login', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        email:loginEmail, password:loginPass
      })});
    router.push("http://localhost:3000/accounts");

  }

    return (
      <main className='h-full w-full flex flex-col'>
        <div className='flex h-full'>
            <div className='flex h-full w-1/2 justify-center items-center border-r-2 border-gray-800'>
              <div className="w-2/3 h-2/3">
                <Login
                  setLoginEmail={(e) => setLoginEmail(e.target.value)}
                  setLoginPass={(e) => setLoginPass(e.target.value)}
                  handleLoginSubmit={handleLoginSubmit}
                />
              </div>
            </div>
            <div className='relative flex justify-center items-center h-full w-1/2'> 
              <div className="w-2/3 h-2/3">
                <Register 
                  handleRegisterSubmit={handleRegisterSubmit}
                  setEmail={(e) => setEmail(e.target.value)} 
                  setPassword={(e) => setPassword(e.target.value)} 
                  setRePassword={(e) => setRePassword(e.target.value)}/>
              </div>
            </div>
        </div>
      </main>
    )
}