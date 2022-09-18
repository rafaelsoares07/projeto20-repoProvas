import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export async function tokenGenerator(){

    const data = "TESTE TOKEN"
    
    const token = jwt.sign(data,process.env.JWT_SECRET)

    return token
}