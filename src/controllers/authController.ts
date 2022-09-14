import {Request, Response} from "express"


import * as authService from "../services/authService"


import { IUser } from "../types/authTypes";

export async function signUp(req:Request , res:Response) {
    const userData = req.body

    const result = await authService.createNewUser(userData) 

    res.status(200).send(result)
}