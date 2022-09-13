import { NextFunction, Request, Response } from "express";

export default function errorHandleMiddleware(err:any, req:Request, res:Response, next:NextFunction){
        console.log(err)

        if(err.type==="bad_request"){
            return res.status(400).send(err.message)
        }
}