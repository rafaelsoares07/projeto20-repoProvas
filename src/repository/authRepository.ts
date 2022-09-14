import prisma from "../database/database"

import { IUserCreateDB } from "../types/authTypes"

export async function findUserWithEmail(email:string) {
    
    const result = await prisma.users.findUnique({where:{email:email}})

    return result
}

export async function createUser(user:IUserCreateDB) {

    const result = await prisma.users.create({data:user})

    return result
}