import { FunctionComponent } from "react";

interface Props {
    setLoginEmail: (e: any) => void;
    setLoginPass: (e: any) => void;
    handleLoginSubmit: (e: any) => void;
}

const Login: FunctionComponent<Props> = ({setLoginEmail, setLoginPass, handleLoginSubmit}) => {
    return (
        <form onSubmit={handleLoginSubmit} className="w-full h-full flex flex-col gap-16 place-content-center items-center">
            <div className="flex flex-col w-60 gap-1">
            <label htmlFor="">email</label>
            <input type="text" onChange={setLoginEmail} className="w-60 h-10 text-black" required/>
            </div>
            <div className="flex flex-col w-60 gap-1">
            <label htmlFor="">password</label>
            <input type="password" onChange={setLoginPass} className="w-60 h-10 text-black" required />
            </div>
            <button type="submit" className="w-32  h-10 bg-gray-700">Log in</button>
        </form>
    )
}

export default Login;