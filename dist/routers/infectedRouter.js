"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.infectedRouter = void 0;
const express_1 = __importDefault(require("express"));
const infected_controller_1 = require("../controllers/infected_controller");
exports.infectedRouter = express_1.default.Router();
exports.infectedRouter.route("/register").post((req, res) => {
    return new infected_controller_1.InfectedController().registerInfection(req, res);
});
exports.infectedRouter.route("/getInfected").post((req, res) => {
    return new infected_controller_1.InfectedController().getInfected(req, res);
});
//# sourceMappingURL=infectedRouter.js.map