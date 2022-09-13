"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const chalk_1 = __importDefault(require("chalk"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/teste", (req, res) => {
    res.status(200).send("funfouuu");
});
const MODE = process.env.MODE;
const PORT = process.env.PORT || 4002;
app.listen(PORT, () => {
    console.log(chalk_1.default.magenta("MODO: " + MODE));
    console.log(chalk_1.default.blue("Rodando na porta: " + PORT));
});
