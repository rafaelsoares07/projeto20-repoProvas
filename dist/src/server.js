"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const dotenv_1 = __importDefault(require("dotenv"));
const chalk_1 = __importDefault(require("chalk"));
dotenv_1.default.config();
const MODE = process.env.MODE;
const PORT = process.env.PORT || 5001;
app_1.default.listen(PORT, () => {
    console.log(chalk_1.default.blue("Rodando na porta: " + PORT));
});
