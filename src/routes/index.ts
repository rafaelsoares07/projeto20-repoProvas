import Router from "express"
const router = Router()

import authRouter from "../routes/authRouter"
import testRouter from "../routes/testsRouter"

import validateToken from "../middlewares/validateToken"

router.use(authRouter)

//Rotas que precisam do token jwt
router.use(validateToken)
router.use(testRouter)



export default router 