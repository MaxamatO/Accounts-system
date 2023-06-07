import { User } from "../types";

export async function fetchUsers(): Promise<User[]> {
    return await fetch("http://localhost:3000/api/users").then(res => res.json());
}