import app from "../src/app"
import supertest from "supertest"
import prisma from "../src/database/database"
import dotenv from "dotenv"
dotenv.config()

beforeEach(async()=>{
    await prisma.$executeRaw`TRUNCATE TABLE users`
})

describe("/Testes na rota de cadastro de usuários:", ()=>{

    console.log("rodando com o banco de dados: " + process.env.DATABASE_URL)
    
    it("Deve retornar 201 caso seja criado com sucesso o user",async ()=>{
        const user = {
            email:"rafael01teste?@gmail.com",
            password:"Apolo12@",
            confirmPassword:"Apolo12@"
        }

        const result = await supertest(app).post("/signup").send(user)
        const status= result.status
        expect(status).toEqual(201)
    });

    it("Deve retornar 409 caso usuario ja tenha sido cadastrado",async()=>{
        const user = {
            email:"rafael01teste?@gmail.com",
            password:"Apolo12@",
            confirmPassword:"Apolo12@"
        }

        await supertest(app).post("/signup").send(user)
        const cadastro_second = await supertest(app).post("/signup").send(user)
        expect(cadastro_second.status).toEqual(409)
    });


});