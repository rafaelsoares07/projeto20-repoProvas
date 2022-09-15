import Router from "express"
const router = Router()

import * as authController from "../controllers/authController"

import {validateSchemaMiddleware} from "../middlewares/validateSchemaMiddleware"
import signUpSchema from "../schemas/signupSchema"
import signInSchema from "../schemas/signinSchema"

router.post(
    "/signup",
    validateSchemaMiddleware(signUpSchema),
    authController.signUp 
)

router.post(
    "/signin",
    validateSchemaMiddleware(signInSchema),
    authController.signIn 
)


export default router