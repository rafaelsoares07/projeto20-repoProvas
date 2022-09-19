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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../src/app"));
const supertest_1 = __importDefault(require("supertest"));
const database_1 = __importDefault(require("../src/database/database"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userFactory_1 = require("./factorys/userFactory");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.default.$executeRaw `TRUNCATE TABLE users`;
}));
describe("Testes da roda de cadastro de usuários: /signup", () => {
    it("Deve retornar 201 caso seja criado com sucesso o user", () => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield (0, userFactory_1.userSignUpFactorySucess)();
        const result = yield (0, supertest_1.default)(app_1.default).post("/signup").send(user);
        expect(result.status).toEqual(201);
    }));
    it("Deve retornar 409 caso usuario ja tenha sido cadastrado", () => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield (0, userFactory_1.userSignUpFactorySucess)();
        yield (0, supertest_1.default)(app_1.default).post("/signup").send(user);
        const cadastroConflito = yield (0, supertest_1.default)(app_1.default).post("/signup").send(user);
        expect(cadastroConflito.status).toEqual(409);
    }));
    it("Deve retornar 422 caso receba um body vazio ou com informações erradas", () => __awaiter(void 0, void 0, void 0, function* () {
        const userBodyVazio = {};
        const cadastroBodyVazio = yield (0, supertest_1.default)(app_1.default).post("/signup").send(userBodyVazio);
        const userEmailInvalido = {
            email: "rafaelsoaregamil.com",
            password: "Apollo12@",
            confirmPassword: "Apollo12@"
        };
        const cadastroEmailInvalido = yield (0, supertest_1.default)(app_1.default).post("/signup").send(userEmailInvalido);
        expect(cadastroBodyVazio.status).toEqual(422);
        expect(cadastroEmailInvalido.status).toEqual(422);
    }));
});
describe("Testes da rot de login de usuários: /signin", () => {
    it("Deve retornar 200 para login efetuado com sucesso e o body deve ser um objeto", () => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield (0, userFactory_1.userSignUpFactorySucess)();
        const createUser = yield (0, supertest_1.default)(app_1.default).post("/signup").send(user);
        const userLogin = {
            email: user.email,
            password: user.password
        };
        const result = yield (0, supertest_1.default)(app_1.default).post("/signin").send(userLogin);
        expect(result.body).toBeInstanceOf(Object);
        expect(result.status).toEqual(200);
    }));
    it("Deve estar gerando um token valido, para que o usuário possa usá-lo", () => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield (0, userFactory_1.userSignUpFactorySucess)();
        const createUser = yield (0, supertest_1.default)(app_1.default).post("/signup").send(user);
        const userLogin = {
            email: user.email,
            password: user.password
        };
        const result = yield (0, supertest_1.default)(app_1.default).post("/signin").send(userLogin);
        let tokenIsValid = true;
        const { token } = result.body;
        const tokenValid = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        if (!tokenValid) {
            tokenIsValid = false;
        }
        expect(tokenIsValid).toEqual(true);
    }));
    it("Deve retornar 422 caso receba um body vazio ou com informações erradas", () => __awaiter(void 0, void 0, void 0, function* () {
        const user = {};
        const result = yield (0, supertest_1.default)(app_1.default).post("/signin").send(user);
        expect(result.status).toEqual(422);
    }));
    it("Deve retornar 404 para tentativa de login de usuário que não está cadastrado", () => __awaiter(void 0, void 0, void 0, function* () {
        const userLogin = {
            email: "defaultdefalut@gmail.com",
            password: "Apollo12#@"
        };
        const result = yield (0, supertest_1.default)(app_1.default).post("/signin").send(userLogin);
        expect(result.status).toEqual(404);
    }));
    it("Deve retornar 400 quando o usuário não acerta suas credendiais, nesse caso a sua senha", () => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield (0, userFactory_1.userSignUpFactorySucess)();
        const createUser = yield (0, supertest_1.default)(app_1.default).post("/signup").send(user);
        const userLogin = {
            email: user.email,
            password: user.password + "senhaErrada"
        };
        const result = yield (0, supertest_1.default)(app_1.default).post("/signin").send(userLogin);
        expect(result.status).toEqual(400);
    }));
});
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.default.$executeRaw `TRUNCATE TABLE users`; //Limpar requiscios que sobram da execução do beforeEach
    yield database_1.default.$disconnect();
}));
