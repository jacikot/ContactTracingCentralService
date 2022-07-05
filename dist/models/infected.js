"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
//kreiramo semu
const Schema = mongoose_1.default.Schema;
//struktura dokumenata u mongo bazi
let Infected = new Schema({
    dailyKey: {
        type: String
    },
    date: {
        type: Number
    },
});
exports.default = mongoose_1.default.model('Infected', Infected, 'infected');
//# sourceMappingURL=infected.js.map