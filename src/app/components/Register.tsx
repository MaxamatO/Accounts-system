import React, { FunctionComponent } from "react"
import { ErrorTypes } from "../../../utils/ErrorTypes";

interface Props {
    handleRegisterSubmit: (e: any) => void,
    setEmail: (e: any) => void,
    setPassword: (e: any) => void,
    setRePassword: (e: any) => void,
    registerError: ErrorTypes,
}


const Register: FunctionComponent<Props> = ({handleRegisterSubmit, setEmail, setPassword, setRePassword, registerError}) => {
    return (
        <form  method="POST" onSubmit={handleRegisterSubmit} className="w-full h-full flex flex-col gap-16 place-content-center items-center">
            <div className="flex flex-col w-60 gap-1">
                <label htmlFor="" >email</label>
                <input type="text" onChange={setEmail} name="email" className="w-60 h-10 text-black" required />
                {registerError === ErrorTypes.INVALID_EMAIL &&  
                <p className="text-xs text-red-600">Invalid email</p>
                }
            </div>
            <div className="flex flex-col w-60 gap-16">
                <div className="flex  flex-col gap-1">
                    <label htmlFor="">password</label>
                    <input type="password" onChange={setPassword} name="password" className="w-60 h-10 text-black" required />
                   
                    {registerError === ErrorTypes.LENGTH && 
                        <p className="text-xs text-red-600">Password must contain 8-20 characters</p>                        
                    }
                    {registerError === ErrorTypes.NOT_EQUAL &&
                        <p className="text-xs text-red-600">Passwords are not equal</p>
                    }
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="">repeat password</label>
                    <input type="password" onChange={setRePassword} name="rePassword" className="w-60 h-10 text-black" required />
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