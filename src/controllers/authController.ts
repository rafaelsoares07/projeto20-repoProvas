import {Request, Response} from "express"

import * as authService from "../services/authService"


export async function signUp(req:Request , res:Response) {
    const userData = req.body

    const result = await authService.createNewUser(userData) 

    res.status(201).send(result)
}

export async function signIn(req:Request , res:Response) {
    const userData = req.body

    const result = await authService.loginUser(userData)

    res.status(200).send(result)

}