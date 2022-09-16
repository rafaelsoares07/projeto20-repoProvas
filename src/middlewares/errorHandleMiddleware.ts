import { NextFunction, Request, Response } from "express";

export default function errorHandleMiddleware(err:any, req:Request, res:Response, next:NextFunction){

        if(err.type==="bad_request"){
            return res.status(400).send(err.message)
        }

        if(err.type==="conflit"){
            return res.status(409).send(err.message)
        }

        if(err.type==="not_found"){
            return res.status(404).send(err.message)
        }
}