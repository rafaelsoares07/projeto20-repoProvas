import app from "../src/app"
import supertest from "supertest"
import prisma from "../src/database/database"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

beforeEach(async () => {
    
})

describe("Testes da roda de cadastro de testes: /create/test", () => {


});




afterAll(async()=>{
    
    await prisma.$disconnect()
})