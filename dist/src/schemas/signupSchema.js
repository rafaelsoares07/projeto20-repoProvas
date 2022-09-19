"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const signUpSchema = joi_1.default.object({
    email: joi_1.default.string().email(),
    password: joi_1.default.string()
        .pattern(/(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
        .required(),
    confirmPassword: joi_1.default.string().required().valid(joi_1.default.ref('password'))
});
exports.default = signUpSchema;
