import express from "express";
import cors from "cors"
import "express-async-errors"

import indexRouter from "./routes/index"

import errorHandleMiddleware from "./middlewares/errorHandleMiddleware"

const app = express()

app.use(cors())
app.use(express.json())

app.use(indexRouter) //Chama todas as rotas da nossa API

app.get("/get",(req,res)=>{
    res.status(200).send("rota get funfando")
})

app.use(errorHandleMiddleware)// Precisa ser chamado depois de todas as rotas!

export default app