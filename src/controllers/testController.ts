import {Request, Response} from "express"

import * as testService from "../services/testService"

export async function createTest(req:Request , res:Response) {
    const testData = req.body

    const result = await testService.createNewUser(testData) 

    res.status(201).send(result)
}


export async function get(req:Request , res:Response) {
    
    const result = await testService.getAll()

    res.status(200).send(result)
}

export async function getByTeacher(req:Request , res:Response) {
    
    const result = await testService.getAllByTeacher()

    res.status(200).send(result)
}