import express from 'express';
import cors from 'cors'; //sinhronizacija domena
import bodyParser from 'body-parser'; //za uzimanje iz bodyja
import mongoose from 'mongoose'; //za bazu
import { infectedRouter } from './routers/infectedRouter';
const app = express();
app.use(cors());
// app.post('/', (req, res) => console.log("Hello world"))
app.post('/', (req, res) => {
    console.log("Hello world")
    res.json({"msg":"existing agency"})
});

mongoose.connect('mongodb://localhost:27017/contact-tracing');

const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("db connection ok");
});
const router=express.Router();
app.use('/',router);

router.use('/infected',infectedRouter);

app.listen(4000, () => console.log(`Express server running on port 4000`));