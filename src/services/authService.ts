import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()


import * as authRepository from "../repository/authRepository"

import { IUserCreate, IUserCreateDB, IUserLogin} from "../types/authTypes";

export async function createNewUser(user:IUserCreate) {

    const userExist = await authRepository.findUserWithEmail(user.email)
    if(userExist){
        throw {type:"conflit", message:"Já existe um cadastro feito com esse emaild"}
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

export async function loginUser(user:IUserCreateDB) {
    
    const userExist = await authRepository.findUserWithEmail(user.email)
    if(!userExist){
        throw {type:"not_found", message:"Usuário não existe, faça um cadastro antes de tentar logar"}
    }
    
    const passwordValid = bcrypt.compareSync(user.password,userExist.password)

    if(!passwordValid){
        throw {type:"bad_request", message:"Credenciais inválidas"}
    }

    const id = (userExist.id.toString())
    const secretJWT = process.env.JWT_SECRET
    const token = jwt.sign(id,secretJWT)

    const returnUser = {
        userExist,
        token
    };
    
    
    return returnUser
}

