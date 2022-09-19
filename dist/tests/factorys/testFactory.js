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
exports.testFactoryFailByTeacherDisciplineId = exports.testFactoryFailByCategoryId = exports.testFactorySucess = void 0;
const faker_1 = require("@faker-js/faker");
function testFactorySucess() {
    return __awaiter(this, void 0, void 0, function* () {
        const test = {
            name: faker_1.faker.lorem.words(8),
            pdfUrl: faker_1.faker.internet.url(),
            categoryId: 1,
            teacherDisciplineId: 1
        };
        return test;
    });
}
exports.testFactorySucess = testFactorySucess;
function testFactoryFailByCategoryId() {
    return __awaiter(this, void 0, void 0, function* () {
        const test = {
            name: faker_1.faker.lorem.words(8),
            pdfUrl: faker_1.faker.internet.url(),
            categoryId: 190,
            teacherDisciplineId: 1
        };
        return test;
    });
}
exports.testFactoryFailByCategoryId = testFactoryFailByCategoryId;
function testFactoryFailByTeacherDisciplineId() {
    return __awaiter(this, void 0, void 0, function* () {
        const test = {
            name: faker_1.faker.lorem.words(8),
            pdfUrl: faker_1.faker.internet.url(),
            categoryId: 1,
            teacherDisciplineId: 190
        };
        return test;
    });
}
exports.testFactoryFailByTeacherDisciplineId = testFactoryFailByTeacherDisciplineId;
