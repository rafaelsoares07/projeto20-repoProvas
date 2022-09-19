import Router from "express"
const router = Router()

import authRouter from "../routes/authRouter"
import testRouter from "../routes/testsRouter"

router.use(authRouter)
router.use(testRouter)



export default router 