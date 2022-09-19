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
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const testFactory_1 = require("./factorys/testFactory");
const userFactory_1 = require("./factorys/userFactory");
beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.default.$executeRaw `TRUNCATE TABLE tests`;
    yield database_1.default.$executeRaw `TRUNCATE TABLE users`;
}));
describe("Testes da roda de cadastro de testes: /create/test", () => {
    it("Deve retornar 201 caso o teste seja criado com sucesso", () => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield (0, userFactory_1.userSignUpFactorySucess)();
        const userCadastrado = yield (0, supertest_1.default)(app_1.default).post("/signup").send(user);
        const userLog = {
            email: user.email,
            password: user.password
        };
        const userLogado = yield (0, supertest_1.default)(app_1.default).post("/signin").send(userLog);
        const token = userLogado.body.token;
        const test = yield (0, testFactory_1.testFactorySucess)();
        const result = yield (0, supertest_1.default)(app_1.default).
            post("/create/test").
            set({ Authorization: `Bearer ${token}` }).
            send(test);
        expect(result.status).toEqual(201);
    }));
    it("Deve retornar 400 caso o teacherDisciplineId informado não exista", () => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield (0, userFactory_1.userSignUpFactorySucess)();
        const userCadastrado = yield (0, supertest_1.default)(app_1.default).post("/signup").send(user);
        const userLog = {
            email: user.email,
            password: user.password
        };
        const userLogado = yield (0, supertest_1.default)(app_1.default).post("/signin").send(userLog);
        const token = userLogado.body.token;
        const test = yield (0, testFactory_1.testFactoryFailByTeacherDisciplineId)();
        const result = yield (0, supertest_1.default)(app_1.default).
            post("/create/test").
            set({ Authorization: `Bearer ${token}` }).
            send(test);
        expect(result.status).toEqual(400);
    }));
    it("Deve retornar 400 caso o categoryId informado não exista", () => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield (0, userFactory_1.userSignUpFactorySucess)();
        const userCadastrado = yield (0, supertest_1.default)(app_1.default).post("/signup").send(user);
        const userLog = {
            email: user.email,
            password: user.password
        };
        const userLogado = yield (0, supertest_1.default)(app_1.default).post("/signin").send(userLog);
        const token = userLogado.body.token;
        const test = yield (0, testFactory_1.testFactoryFailByCategoryId)();
        const result = yield (0, supertest_1.default)(app_1.default).
            post("/create/test").
            set({ Authorization: `Bearer ${token}` }).
            send(test);
        expect(result.status).toEqual(400);
    }));
});
describe("Testes da roda de pegar provas /test/by/disciplines", () => {
    it("Deve retornar 200 caso a requisição da rota /test/by/disciplines tenha sido um sucesso", () => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield (0, userFactory_1.userSignUpFactorySucess)();
        const userCadastrado = yield (0, supertest_1.default)(app_1.default).post("/signup").send(user);
        const userLog = {
            email: user.email,
            password: user.password
        };
        const userLogado = yield (0, supertest_1.default)(app_1.default).post("/signin").send(userLog);
        const token = userLogado.body.token;
        const result = yield (0, supertest_1.default)(app_1.default).
            get("/test/by/disciplines").
            set({ Authorization: `Bearer ${token}` }).send();
        expect(result.status).toEqual(200);
    }));
});
describe("Testes da roda de pegar provas /tests/by/teachers", () => {
    it("Deve retornar 200 caso a requisição da rota /tests/by/teachers tenha sido um sucesso", () => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield (0, userFactory_1.userSignUpFactorySucess)();
        const userCadastrado = yield (0, supertest_1.default)(app_1.default).post("/signup").send(user);
        const userLog = {
            email: user.email,
            password: user.password
        };
        const userLogado = yield (0, supertest_1.default)(app_1.default).post("/signin").send(userLog);
        const token = userLogado.body.token;
        const result = yield (0, supertest_1.default)(app_1.default).
            get("/tests/by/teachers").
            set({ Authorization: `Bearer ${token}` }).send();
        expect(result.status).toEqual(200);
    }));
});
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.default.$disconnect();
}));
