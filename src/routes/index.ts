import Router from "express"
const router = Router()

import authRouter from "../routes/authRouter"


router.use(authRouter)


export default router 