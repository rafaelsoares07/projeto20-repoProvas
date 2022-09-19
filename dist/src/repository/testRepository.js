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
exports.getAllByTeacher = exports.getAllByDiscipline = exports.createTest = exports.findTeacherDiciplineById = exports.findCategoryById = void 0;
const database_1 = __importDefault(require("../database/database"));
function findCategoryById(categoryId) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield database_1.default.categories.findUnique({ where: { id: categoryId } });
        return result;
    });
}
exports.findCategoryById = findCategoryById;
function findTeacherDiciplineById(teacherDisciplineId) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield database_1.default.teachersDisciplines.findUnique({ where: { id: teacherDisciplineId } });
        return result;
    });
}
exports.findTeacherDiciplineById = findTeacherDiciplineById;
function createTest(test) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield database_1.default.tests.create({ data: test });
        return result;
    });
}
exports.createTest = createTest;
function getAllByDiscipline() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield database_1.default.terms.findMany({
            select: {
                number: true,
                disciplines: {
                    select: {
                        name: true,
                        teachersDisciplines: {
                            include: {
                                teachers: {
                                    select: {
                                        name: true,
                                    },
                                },
                                tests: {
                                    include: {
                                        categories: {
                                            select: {
                                                name: true,
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
        return result;
    });
}
exports.getAllByDiscipline = getAllByDiscipline;
function getAllByTeacher() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield database_1.default.teachers.findMany({
            select: {
                id: true,
                name: true,
                teachersDisciplines: {
                    include: {
                        disciplines: true,
                        tests: {
                            include: {
                                categories: true
                            }
                        }
                    }
                }
            }
        });
        return result;
    });
}
exports.getAllByTeacher = getAllByTeacher;
