import bcrypt from "bcrypt"


import * as authRepository from "../repository/authRepository"

import { IUser} from "../types/authTypes";

export async function createNewUser(user:IUser) {

    console.log(user.email)

    const userExist = await authRepository.findUserWithEmail(user.email)
    if(userExist){
        throw {type:"conflit", message:"Já existe um cadastro feito com esse email"}
    }

    if(user.password!=user.confirmPassword){
        throw {type:"bad_request", message:"As senhas informadas não são idênticas"}
    }

    const userValid = {
        email:user.email.trim(),
        password:bcrypt.hashSync(user.password,10)
    }

    const result = await authRepository.createUser(userValid)


    return result
}




function formatUser(user:IUser){
    const email = user.email.trim()
}