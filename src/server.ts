import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import chalk from "chalk";



dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())


const MODE = process.env.MODE
const PORT = process.env.PORT || 4002

app.listen(PORT,()=>{
    console.log(chalk.magenta("MODO: " + MODE ))
    console.log(chalk.blue("Rodando na porta: " + PORT)) 
})