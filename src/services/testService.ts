
import * as testRepository from "../repository/testRepository"

export async function createNewUser(test:any) {

    const categoryExist = await testRepository.findCategoryById(test.categoryId)
    if(!categoryExist){
        throw{type:"bad_request", message:"Categoria informada não existe"}
    }

    const teacherDicipline = await testRepository.findTeacherDiciplineById(test.teacherDisciplineId)
    if(!teacherDicipline){
        throw{type:"bad_request", message:"Erro no id do body teachDicipline"}
    }

    const createTeste = await testRepository.createTest(test)

    return createTeste
}

export async function getAll() {
    const resul = testRepository.getAll()

    return resul
}

export async function getAllByTeacher() {
    const resul = testRepository.getAllByTeacher()

    return resul
}