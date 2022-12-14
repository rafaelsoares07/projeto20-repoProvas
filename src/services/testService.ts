
import * as testRepository from "../repository/testRepository"

import {ITestCreate} from "../types/testTypes"

export async function createNewUser(test:ITestCreate) {

    const categoryExist = await testRepository.findCategoryById(test.categoryId)
    if(!categoryExist){
        throw{type:"bad_request", message:"Categoria informada não existe"}
    }

    const teacherDicipline = await testRepository.findTeacherDiciplineById(test.teacherDisciplineId)
    if(!teacherDicipline){
        throw{type:"bad_request", message:"Esse id de teachDicipline não existe"}
    }

    const createTeste = await testRepository.createTest(test)

    return createTeste
}

export async function getAll() {
    const resul = testRepository.getAllByDiscipline()

    return resul
}

export async function getAllByTeacher() {
    const resul = testRepository.getAllByTeacher()

    return resul
}