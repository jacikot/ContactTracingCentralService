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
            let period = parseInt(req.query.period + "");
            console.log(period);
            let today = new Date().getTime();
            infected_1.default.find({ 'date': { $gt: (today - period) } }, (err, infected) => {
                if (err)
                    console.log(err);
                else {
                    console.log(infected);
                    resp.json(infected);
                }
            });
        };
        this.registerInfection = (req, resp) => {
            console.log(req.query);
            let keys = [];
            let dates = [];
            if (typeof req.query.keys == 'string') {
                keys.push(req.query.keys);
                dates.push(req.query.dates);
            }
            else {
                keys = req.query.keys;
                dates = req.query.dates;
            }
            for (let i = 0; i < keys.length; i++) {
                let infectedDailyKey = new infected_1.default({
                    "dailyKey": keys[i],
                    "date": dates[i]
                });
                infected_1.default.collection.insertOne(infectedDailyKey, (err, inf) => {
                    if (err) {
                        console.log(err);
                        resp.json({ "msg": err });
                    }
                });
            }
            resp.json({ "msg": "ok" });
        };
    }
}
exports.InfectedController = InfectedController;
//# sourceMappingURL=infected_controller.js.map