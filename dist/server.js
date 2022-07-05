"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors")); //sinhronizacija domena
const mongoose_1 = __importDefault(require("mongoose")); //za bazu
const infectedRouter_1 = require("./routers/infectedRouter");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
// app.post('/', (req, res) => console.log("Hello world"))
app.post('/', (req, res) => {
    console.log("Hello world");
    res.json({ "msg": "existing agency" });
});
mongoose_1.default.connect('mongodb://localhost:27017/contact-tracing');
const connection = mongoose_1.default.connection;
connection.once('open', () => {
    console.log("db connection ok");
});
const router = express_1.default.Router();
app.use('/', router);
router.use('/infected', infectedRouter_1.infectedRouter);
app.listen(4000, () => console.log(`Express server running on port 4000`));
//# sourceMappingURL=server.js.map