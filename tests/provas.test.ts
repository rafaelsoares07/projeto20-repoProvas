import app from "../src/app"
import supertest from "supertest"
import prisma from "../src/database/database"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

import {testFactoryFailByCategoryId, testFactorySucess,testFactoryFailByTeacherDisciplineId} from "./factorys/testFactory"
import { userSignUpFactorySucess } from "./factorys/userFactory"

beforeEach(async () => {
   await prisma.$executeRaw`TRUNCATE TABLE tests`
   await prisma.$executeRaw`TRUNCATE TABLE users`
})

describe("Testes da roda de cadastro de testes: POST '/test' ", () => {

    it("Deve retornar 201 caso o teste seja criado com sucesso", async () => {
        
        const user = await userSignUpFactorySucess()
        const userCadastrado = await supertest(app).post("/signup").send(user) // tirar uresr
        
        const userLog={
            email:user.email,
            password:user.password
        }
        const userLogado = await supertest(app).post("/signin").send(userLog)
    
        const token = userLogado.body.token

        const test = await testFactorySucess()
       

        const result = 
        await supertest(app).
        post("/create/test").
        set({ Authorization:`Bearer ${token}` }).
        send(test)
    

        expect(result.status).toEqual(201)
    });

    it("Deve retornar 404 caso o teacherDisciplineId informado não exista", async()=>{ //404 é melhor
        const user = await userSignUpFactorySucess()
        const userCadastrado = await supertest(app).post("/signup").send(user)
        
        const userLog={
            email:user.email,
            password:user.password
        }
        const userLogado = await supertest(app).post("/signin").send(userLog)
    
        const token = userLogado.body.token

        const test = await testFactoryFailByTeacherDisciplineId()
       

        const result = 
        await supertest(app).
        post("/create/test").
        set({ Authorization:`Bearer ${token}` }).
        send(test)
    

        expect(result.status).toEqual(400)
    })

    it("Deve retornar 404 caso o categoryId informado não exista", async()=>{
        const user = await userSignUpFactorySucess()
        const userCadastrado = await supertest(app).post("/signup").send(user)
        
        const userLog={
            email:user.email,
            password:user.password
        }
        const userLogado = await supertest(app).post("/signin").send(userLog)
    
        const token = userLogado.body.token

        const test = await testFactoryFailByCategoryId()
       

        const result = 
        await supertest(app).
        post("/create/test").
        set({ Authorization:`Bearer ${token}` }).
        send(test)
    

        expect(result.status).toEqual(400)
    })

});

describe("Testes da roda de pegar provas /tests/by/disciplines", () => {

    it("Deve retornar 200 caso a requisição da rota /test/by/disciplines tenha sido um sucesso", async () => {
        
        const user = await userSignUpFactorySucess()
        const userCadastrado = await supertest(app).post("/signup").send(user)
        
        const userLog={
            email:user.email,
            password:user.password
        }
        const userLogado = await supertest(app).post("/signin").send(userLog)
    
        const token = userLogado.body.token
       
        const result = 
        await supertest(app).
        get("/test/by/disciplines").
        set({ Authorization:`Bearer ${token}` }).send()
    
        expect(result.status).toEqual(200)
    });


});

describe("Testes da roda de pegar provas /tests/by/teachers", () => {

    it("Deve retornar 200 caso a requisição da rota /tests/by/teachers tenha sido um sucesso", async () => {
        
        const user = await userSignUpFactorySucess()
        const userCadastrado = await supertest(app).post("/signup").send(user)
        
        const userLog={
            email:user.email,
            password:user.password
        }
        const userLogado = await supertest(app).post("/signin").send(userLog)
    
        const token = userLogado.body.token
       
        const result = 
        await supertest(app).
        get("/tests/by/teachers").
        set({ Authorization:`Bearer ${token}` }).send()
    
        expect(result.status).toEqual(200)
    });


});


afterAll(async()=>{
    await prisma.$disconnect()
})





