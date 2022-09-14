import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import chalk from "chalk";
import "express-async-errors"
dotenv.config()


import indexRouter from "./routes/index"

import errorHandleMiddleware from "./middlewares/errorHandleMiddleware"

const app = express()

app.use(cors())
app.use(express.json())


app.use(indexRouter)
app.use(errorHandleMiddleware)


const MODE = process.env.MODE
const PORT = process.env.PORT || 4002

app.listen(PORT,()=>{
    console.log(chalk.magenta("MODO: " + MODE ))
    console.log(chalk.blue("Rodando na porta: " + PORT)) 
})