import joi from "joi"

const signUpSchema = joi.object({
    email:joi.string().email(),
    password:joi.string()
    .pattern(/(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
    .required(),
    confirmPassword:joi.string().required().valid(joi.ref('password'))
})

export default signUpSchema