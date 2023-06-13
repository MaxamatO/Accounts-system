import { ErrorTypes } from "./utils/ErrorTypes"

export type User = {
    email: string,
    password: string,
    role: string,
    verified: boolean?
}

export type ErrorMessage = {
    errorType: ErrorTypes,
    ok: boolean,
    errorText: string
}
