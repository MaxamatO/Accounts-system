import Link from "next/link"
import React, { FunctionComponent } from "react"

interface Props {
    handleSubmit: (e: any) => void,
    setEmail: (e: any) => void,
    setPassword: (e: any) => void,
    setRePassword: (e: any) => void,

}


const Register: FunctionComponent<Props> = ({handleSubmit, setEmail, setPassword, setRePassword}) => {
    return (
        <form  method="POST" onSubmit={handleSubmit} className="w-full h-full flex flex-col gap-16 place-content-center items-center">
            <div className="flex flex-col w-60 gap-1">
                <label htmlFor="" >email</label>
                <input type="text" onChange={setEmail} name="email" className="w-60 h-10 text-black" required />
            </div>
            <div className="flex flex-col w-60 gap-16">
                <div className="flex  flex-col gap-1">
                    <label htmlFor="">password</label>
                    <input type="password" onChange={setPassword} name="password" className="w-60 h-10 text-black" required />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="">repeat password</label>
                    <input type="password" onChange={setRePassword} name="rePassword" className="w-60 h-10 text-black" required />
                </div>
                
            </div>
            <button type="submit" className="w-32  h-10 bg-gray-700">Register</button>
        </form>
    )
}

export default Register;