"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfectedController = void 0;
const infected_1 = __importDefault(require("../models/infected"));
class InfectedController {
    constructor() {
        this.getInfected = (req, resp) => {
            let period = req.body.period;
            let today = new Date().getTime();
            infected_1.default.findOne({ 'date': { $gt: period } }, (err, users) => {
                if (err)
                    console.log(err);
                else {
                    resp.json(users);
                }
            });
        };
        this.registerInfection = (req, resp) => {
            // console.log(req.body.date);
            let list = req.body.keys;
            list.forEach(elem => {
                let infectedDailyKey = new infected_1.default({
                    "dailyKey": elem.key,
                    "date": elem.date
                });
                infected_1.default.collection.insertOne(infectedDailyKey, (err, inf) => {
                    if (err) {
                        console.log(err);
                        resp.json({ "msg": err });
                    }
                });
            });
            resp.json({ "msg": "ok" });
        };
    }
}
exports.InfectedController = InfectedController;
//# sourceMappingURL=user_controller.js.map