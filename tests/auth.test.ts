import app from "../src/app"
import supertest from "supertest"
import prisma from "../src/database/database"
import jwt from "jsonwebtoken"
import { userSignUpFactorySucess } from "./factorys/userFactory"
import dotenv from "dotenv"
dotenv.config()

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE users`
})

describe("Testes da roda de cadastro de usuários: /signup", () => {

    it("Deve retornar 201 caso seja criado com sucesso o user", async () => {

        const user = await userSignUpFactorySucess()

        const result = await supertest(app).post("/signup").send(user)

        expect(result.status).toEqual(201)

    });

    it("Deve retornar 409 caso usuario ja tenha sido cadastrado", async () => {

        const user = await userSignUpFactorySucess()

        await supertest(app).post("/signup").send(user)

        const cadastroConflito = await supertest(app).post("/signup").send(user)

        expect(cadastroConflito.status).toEqual(409)

    });

    it("Deve retornar 422 caso receba um body vazio ou com informações erradas", async () => {

        const userBodyVazio = {}
        const cadastroBodyVazio = await supertest(app).post("/signup").send(userBodyVazio)

        const userEmailInvalido = {
            email:"rafaelsoaregamil.com",
            password:"Apollo12@",
            confirmPassword:"Apollo12@"
        }
        const cadastroEmailInvalido = await supertest(app).post("/signup").send(userEmailInvalido)



        expect(cadastroBodyVazio.status).toEqual(422)
        expect(cadastroEmailInvalido.status).toEqual(422)

    });

});


describe("Testes da rota de login de usuários: /signin",()=>{

    it("Deve retornar 200 para login efetuado com sucesso e o body deve ser um objeto",async()=>{

        const user = await userSignUpFactorySucess()
        const createUser = await supertest(app).post("/signup").send(user)

        const userLogin ={
            email:user.email,
            password:user.password
        }
        const result = await supertest(app).post("/signin").send(userLogin)


        expect(result.body).toBeInstanceOf(Object)
        expect(result.status).toEqual(200)
    });

    it("Deve retornar 422 caso receba um body vazio ou com informações erradas",async()=>{
        const user = {}

        const result = await supertest(app).post("/signin").send(user)

        expect(result.status).toEqual(422)
    });

    it("Deve retornar 404 para tentativa de login de usuário que não está cadastrado",async()=>{


        const userLogin ={
            email:"defaultdefalut@gmail.com",
            password:"Apollo12#@"
        }
        const result = await supertest(app).post("/signin").send(userLogin)

        expect(result.status).toEqual(404)
    });

    it("Deve retornar 400 quando o usuário não acerta suas credendiais, nesse caso a sua senha",async()=>{
        const user = await userSignUpFactorySucess()
        const createUser = await supertest(app).post("/signup").send(user)

        const userLogin ={
            email:user.email,
            password:user.password+"senhaErrada"
        }
        const result = await supertest(app).post("/signin").send(userLogin)

        expect(result.status).toEqual(400)
    });

});


afterAll(async()=>{
    await prisma.$executeRaw`TRUNCATE TABLE users` //Limpar requiscios que sobram da execução do beforeEach
    await prisma.$disconnect()
})