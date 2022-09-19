"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userFactoryFailConfirmPassword = exports.userSignUpFactorySucess = void 0;
const faker_1 = require("@faker-js/faker");
//USERS FACTORYS DE POST /signup
function userSignUpFactorySucess() {
    return __awaiter(this, void 0, void 0, function* () {
        const passwordFaker = faker_1.faker.internet.password(8) + "A$3s";
        const user = {
            email: faker_1.faker.internet.email(),
            password: passwordFaker,
            confirmPassword: passwordFaker
        };
        return user;
    });
}
exports.userSignUpFactorySucess = userSignUpFactorySucess;
function userFactoryFailConfirmPassword() {
    return __awaiter(this, void 0, void 0, function* () {
        const passwordFaker = faker_1.faker.internet.password(8) + "A$3s";
        const confirmPasswordFaker = faker_1.faker.internet.password(5) + "B#4g";
        const user = {
            email: faker_1.faker.internet.email(),
            password: passwordFaker,
            confirmPassword: confirmPasswordFaker
        };
        return user;
    });
}
exports.userFactoryFailConfirmPassword = userFactoryFailConfirmPassword;
