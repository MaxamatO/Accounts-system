type User = {
    id: number,
    email: string,
    password: string,
    role: Roles,
    verified: boolean

}


interface Roles {
    ADMIN, USER
}