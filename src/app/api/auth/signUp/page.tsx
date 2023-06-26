"use client"
import { useRouter } from "next/navigation";
import React, { useState } from "react"
import { ErrorTypes } from "../../../../../utils/ErrorTypes";

const Register = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [registerError, setRegisterError] = useState(ErrorTypes.NONE);
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
          setRegisterError(resBody.errorType);
          
      }
    return (
        <form  method="POST" onSubmit={handleRegisterSubmit} className="w-full h-full flex flex-col gap-16 place-content-center items-center">
            <div className="flex flex-col w-60 gap-1">
                <label htmlFor="" >email</label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} name="email" className="w-60 h-10 text-black" required />
                {registerError === ErrorTypes.INVALID_EMAIL &&  
                <p className="text-xs text-red-600">Invalid email</p>
                }
                {registerError === ErrorTypes.EMAIL_EXISTS && 
                <p className="text-xs text-red-600">Email exists</p>
                }
            </div>
            <div className="flex flex-col w-60 gap-16">
                <div className="flex  flex-col gap-1">
                    <label htmlFor="">password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" className="w-60 h-10 text-black" required />
                   
                    {registerError === ErrorTypes.LENGTH && 
                        <p className="text-xs text-red-600">Password must contain 8-20 characters</p>                        
                    }
                    {registerError === ErrorTypes.NOT_EQUAL &&
                        <p className="text-xs text-red-600">Passwords are not equal</p>
                    }
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="">repeat password</label>
                    <input type="password" onChange={(e) => setRePassword(e.target.value)} name="rePassword" className="w-60 h-10 text-black" required />
                    {registerError === ErrorTypes.NOT_EQUAL &&
                        <p className="text-xs text-red-600">Passwords are not equal</p>
                    }
                </div>
                
            </div>
            <button type="submit" className="w-32  h-10 bg-gray-700">Register</button>
        </form>
    )
}

export default Register;