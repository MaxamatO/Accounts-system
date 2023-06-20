"use client"
import { useEffect, useState } from "react";
import { fetchUsers } from "../../../utils/helper_functions"
import { User } from "../../../types";
import { useSession } from "next-auth/react";
import { Roles } from "../../../utils/Roles";
import UsersTable from "../components/UsersTable";

export default function Page() {
    const {data: session} = useSession();
    const [users, setUsers] = useState<User[]>([]);

     useEffect(() => {
        fetchUsers().then(res => setUsers(res));
    }, []);

    const handleDelete = async (email: string) => {
        console.log(email);
        const response = await fetch(`http://localhost:3000/api/deleteaccount?id=${email}`, {
          method: "DELETE"
        })
        fetchUsers().then(res => setUsers(res));
        
    }
    
    if(session && session.user?.role === Roles.ADMIN){
        return (
            <div className="mx-auto max-w-7xl">
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <UsersTable
                    users={users}
                    handleDelete={handleDelete}
                    />
                    {/* TODO: Pagination */}
                    <nav
                    className="flex items-center justify-between gap-4 py-3"
                    aria-label="Pagination"
                    >
                    <div className="hidden sm:block">
                        <p className="text-sm">
                        Showing <span className="font-medium">1</span> to{" "}
                        <span className="font-medium">1</span> of{" "}
                        <span className="font-medium">N</span> results
                        </p>
                    </div>
                    <div className="flex flex-1 justify-between sm:justify-end">
                        <a
                        href="#"
                        className="relative inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
                        >
                        Previous
                        </a>
                        <a
                        href="#"
                        className="relative ml-3 inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
                        >
                        Next
                        </a>
                    </div>
                    </nav>
                </div>
                </div>
            </div>
            </div>
        )
    }
    return (
        <main className="w-full h-full flex justify-center items-center">
            <h1 className="text-4xl">Page is only visible for admins</h1>
        </main>
    )
   
}