import { faker } from '@faker-js/faker';

export async function testFactorySucess() {

    const test = {
        name:faker.lorem.words(8),
        pdfUrl:faker.internet.url(),
        categoryId:1,
        teacherDisciplineId:1
    }
    return test
}

export async function testFactoryFailByCategoryId() {

    const test = {
        name:faker.lorem.words(8),
        pdfUrl:faker.internet.url(),
        categoryId:190,
        teacherDisciplineId:1
    }
    return test
}

export async function testFactoryFailByTeacherDisciplineId() {

    const test = {
        name:faker.lorem.words(8),
        pdfUrl:faker.internet.url(),
        categoryId:1,
        teacherDisciplineId:190
    }
    return test
}
