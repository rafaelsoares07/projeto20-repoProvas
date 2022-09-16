import { faker } from '@faker-js/faker';

//USERS FACTORYS DE POST /signup
export async function userSignUpFactorySucess() {

    const passwordFaker = faker.internet.password(8)+"A$3s"

    const user = {
        email:faker.internet.email(),
        password:passwordFaker,
        confirmPassword:passwordFaker
    }

    return user
}
export async function userFactoryFailConfirmPassword() {

    const passwordFaker = faker.internet.password(8)+"A$3s"
    const confirmPasswordFaker = faker.internet.password(5)+"B#4g"

    const user = {
        email:faker.internet.email(),
        password:passwordFaker,
        confirmPassword:confirmPasswordFaker
    }

    return user
}

