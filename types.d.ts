import { Roles } from "./utils/Roles"
import { ErrorTypes } from "./utils/ErrorTypes"

export type User = {
    email: string,
    password: string,
    role: Roles,
    verified: boolean?
}

export type ErrorMessage = {
    errorType: ErrorTypes,
    ok: boolean,
    errorText: string
}
