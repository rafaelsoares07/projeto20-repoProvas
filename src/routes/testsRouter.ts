import Router from "express"
const router = Router()


import * as testController from "../controllers/testController"

import {validateSchemaMiddleware} from "../middlewares/validateSchemaMiddleware"
import tokenValidation from "../middlewares/validateToken"


import testSchema from "../schemas/testSchema"

router.post(
    "/test",
    validateSchemaMiddleware(testSchema),
    tokenValidation,
    testController.createTest
)

router.get(
    "/test/by/disciplines",
    tokenValidation,
    testController.get
)

router.get(
    "/tests/by/teachers",
    tokenValidation,
    testController.getByTeacher
)



export default router