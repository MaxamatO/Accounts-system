import React from 'react'
import { User } from '../../../types'

interface Props {
    users: User[]
    handleDelete: (e: string) => void;
}

function UsersTable({users, handleDelete}: Props) {
  return (
    <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                        <tr>
                        <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                        >
                            Email
                        </th>
                        <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                        >
                            Role
                        </th>
                        <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                        >
                            Delete
                        </th>
                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                            <span className="sr-only">Edit</span>
                        </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                        {users.map((person) => (
                        <tr key={person.email}>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                            {person.email}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                            {person.role}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                                <button className="text-red-600 hover:text-red-300" onClick={() => handleDelete(person.email)}>delete</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
  )
}

export default UsersTable