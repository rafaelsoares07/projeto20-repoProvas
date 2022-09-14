import joi from "joi"

const authSchema = joi.object({
    email:joi.string().email(),
    password:joi.string().required(),
    confirmPassword:joi.ref("password")
})

export default authSchema