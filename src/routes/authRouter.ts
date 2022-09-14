import Router from "express"
const router = Router()

import * as authController from "../controllers/authController"

import {validateSchemaMiddleware} from "../middlewares/validateSchemaMiddleware"
import signupSchema from "../schemas/signupSchema"


router.post(
    "/signup",
    validateSchemaMiddleware(signupSchema),
    authController.signUp 
)

export default router