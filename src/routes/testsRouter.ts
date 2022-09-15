import Router from "express"
const router = Router()


import * as testController from "../controllers/testController"

import {validateSchemaMiddleware} from "../middlewares/validateSchemaMiddleware"
import tokenValidation from "../middlewares/validateToken"


import testSchema from "../schemas/testSchema"

router.post(
    "/create/test",
    validateSchemaMiddleware(testSchema),
    testController.createTest
)

router.get(
    "/get/allTests",
    tokenValidation,
    testController.get
)

router.get(
    "/get/tests/teachers",
    tokenValidation,
    testController.getByTeacher
)



export default router