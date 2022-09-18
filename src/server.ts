import app from "./app"
import dotenv from "dotenv"
import chalk from "chalk"
dotenv.config()

const MODE = process.env.MODE
const PORT = process.env.PORT || 5001

app.listen(PORT,()=>{
    console.log(chalk.blue("Rodando na porta: " + PORT)) 
})