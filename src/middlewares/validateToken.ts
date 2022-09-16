import jwt from "jsonwebtoken"
import { Request, Response, NextFunction } from "express"

import dotenv from "dotenv"
dotenv.config()

export default async function tokenValidation(req: Request, res:Response, next:NextFunction){

    try{ 
        
        const token = req.headers.authorization?.replace("Bearer ","").trim();
        if(!token){
            res.status(401).send('nao veio tokenn')
            return
        }

        const tokenValid = jwt.verify(token,process.env.JWT_SECRET)
        if(!tokenValid){
            
            res.status(401).send('token invalido')
            return
        }
        res.locals.token =  tokenValid
        next()

    }
    catch(err){
        res.status(401).send("Token Invalido")
        return
    }
}