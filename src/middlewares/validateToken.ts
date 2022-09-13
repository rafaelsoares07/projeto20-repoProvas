import jwt from "jsonwebtoken"
import { Request, Response, NextFunction } from "express"

export default async function tokenValidation(req: Request, res:Response, next:NextFunction){

    try{ 
        
        const token = req.headers.authorization?.replace("Bearer ","").trim();
        if(!token){
            res.status(401).send('nao veio token')
            return
        }

        const tokenValid = jwt.verify(token,"secret")
        if(!tokenValid){
            
            res.status(401).send('token invalido')
            return
        }
        console.log(tokenValid)
        res.locals.token =  tokenValid
        next()

    }
    catch(err){
        res.status(401).send("Token Invalido")
        return
    }
}