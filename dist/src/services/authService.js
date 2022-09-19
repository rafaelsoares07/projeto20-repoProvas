"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.createNewUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const authRepository = __importStar(require("../repository/authRepository"));
function createNewUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const userExist = yield authRepository.findUserWithEmail(user.email);
        if (userExist) {
            throw { type: "conflit", message: "Já existe um cadastro feito com esse emaild" };
        }
        if (user.password != user.confirmPassword) {
            throw { type: "bad_request", message: "As senhas informadas não são idênticas" };
        }
        const userValid = {
            email: user.email.trim(),
            password: bcrypt_1.default.hashSync(user.password, 10)
        };
        const result = yield authRepository.createUser(userValid);
        return result;
    });
}
exports.createNewUser = createNewUser;
function loginUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const userExist = yield authRepository.findUserWithEmail(user.email);
        if (!userExist) {
            throw { type: "not_found", message: "Usuário não existe, faça um cadastro antes de tentar logar" };
        }
        const passwordValid = bcrypt_1.default.compareSync(user.password, userExist.password);
        if (!passwordValid) {
            throw { type: "bad_request", message: "Credenciais inválidas" };
        }
        const id = (userExist.id.toString());
        const secretJWT = process.env.JWT_SECRET;
        const token = jsonwebtoken_1.default.sign(id, secretJWT);
        const returnUser = {
            userExist,
            token
        };
        return returnUser;
    });
}
exports.loginUser = loginUser;
