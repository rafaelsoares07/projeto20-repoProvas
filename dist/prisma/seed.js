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
const database_1 = __importDefault(require("../src/database/database"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield database_1.default.categories.upsert({ where: { name: "Projeto" }, update: {}, create: { name: "Projeto" } });
        yield database_1.default.categories.upsert({ where: { name: "Prática" }, update: {}, create: { name: "Prática" } });
        yield database_1.default.categories.upsert({ where: { name: "Recuperação" }, update: {}, create: { name: "Recuperação" } });
        yield database_1.default.terms.upsert({ where: { number: 1 }, update: {}, create: { number: 1 } });
        yield database_1.default.terms.upsert({ where: { number: 2 }, update: {}, create: { number: 2 } });
        yield database_1.default.terms.upsert({ where: { number: 3 }, update: {}, create: { number: 3 } });
        yield database_1.default.terms.upsert({ where: { number: 4 }, update: {}, create: { number: 4 } });
        yield database_1.default.terms.upsert({ where: { number: 5 }, update: {}, create: { number: 5 } });
        yield database_1.default.terms.upsert({ where: { number: 6 }, update: {}, create: { number: 6 } });
        yield database_1.default.teachers.upsert({ where: { name: "Diego Pinho" }, update: {}, create: { name: "Diego Pinho" } });
        yield database_1.default.teachers.upsert({ where: { name: "Bruna Hamori" }, update: {}, create: { name: "Bruna Hamori" } });
        yield database_1.default.disciplines.upsert({ where: { name: "HTML e CSS" }, update: {}, create: { name: "HTML e CSS", termId: 1 } });
        yield database_1.default.disciplines.upsert({ where: { name: "JavaScript" }, update: {}, create: { name: "JavaScript", termId: 2 } });
        yield database_1.default.disciplines.upsert({ where: { name: "React" }, update: {}, create: { name: "React", termId: 3 } });
        yield database_1.default.disciplines.upsert({ where: { name: "Humildade" }, update: {}, create: { name: "Humildade", termId: 1 } });
        yield database_1.default.disciplines.upsert({ where: { name: "Planejamento" }, update: {}, create: { name: "Planejamento", termId: 2 } });
        yield database_1.default.disciplines.upsert({ where: { name: "Autoconfiança" }, update: {}, create: { name: "Autoconfiança", termId: 3 } });
        const sqlQueries = [
            `INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (1, 1) ON CONFLICT DO NOTHING;`,
            `INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (1, 2) ON CONFLICT DO NOTHING;`,
            `INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (1, 3) ON CONFLICT DO NOTHING;`,
            `INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (2, 4) ON CONFLICT DO NOTHING;`,
            `INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (2, 5) ON CONFLICT DO NOTHING;`,
            `INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (2, 6) ON CONFLICT DO NOTHING;`
        ];
        sqlQueries.forEach((sqlRow) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.$executeRawUnsafe(sqlRow);
        }));
    });
}
main().catch(e => {
    console.log(e);
    process.exit(1);
}).finally(() => {
    database_1.default.$disconnect();
});
