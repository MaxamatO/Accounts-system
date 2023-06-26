import prisma from "../../../../lib/prisma";
import { isSame } from "../../../../utils/hashing";

interface RequestBody {
    email: string;
    password: string;
}

export async function POST(req: Request) {
    const body: RequestBody = await req.json();
    // const areCredentialsOk: ErrorMessage = await okCredentialsLogin(body.username, body.password); 
    // const errorMessage: ErrorMessage = {
    //     errorType: areCredentialsOk.errorType,
    //     ok: areCredentialsOk.ok,
    //     errorText: areCredentialsOk.errorText
    // }
    const user = await prisma.user.findFirst({where: {email: body.email}})
    const compare = await isSame(body.password, user!!.password);
    if(user && compare) {
        const {password, ...userWithoutPass} = user; 
        return new Response(JSON.stringify(userWithoutPass));
    }
    
    return new Response(JSON.stringify(null));
}