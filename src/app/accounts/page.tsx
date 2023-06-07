"use client"
import { useEffect, useState } from "react";
import { fetchUsers } from "../../../utils/helper_functions"
import { User } from "../../../types";

export default function Page() {
    const [users, setUsers] = useState<User[]>([]);

    
    useEffect(() => {
        fetchUsers().then(res => setUsers(res));
        console.log(users);
        
    }, []);
    

    return (
        <>
        {users.map((user) => {
            <div>{user.email}</div>
        })}
        </>
    )
}