"use client"
import { useEffect, useState } from "react";
import { fetchUsers } from "../../../utils/helper_functions"
import { User } from "../../../types";

export default function Page() {
    const [users, setUsers] = useState<User[]>([]);

    
     useEffect(() => {
        fetchUsers().then(res => setUsers(res));
        
    }, []);
    

    return (
        <>
        {users.map((user) => {
            return (
                <div className="w-full h-full">{user.email}</div>
            )
        })}
        </>
    )
}