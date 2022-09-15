import joi from "joi"

const signInSchema = joi.object({
    email:joi.string().email(),
    password:joi.string().required(),
    confirmPassword:joi.ref("password")
})

export default signInSchema