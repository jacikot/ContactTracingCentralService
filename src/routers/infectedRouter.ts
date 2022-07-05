import express from 'express';
import { InfectedController } from '../controllers/infected_controller';

export const infectedRouter=express.Router();

infectedRouter.route("/register").post((req,res)=>{

    return new InfectedController().registerInfection(req,res);
});

infectedRouter.route("/getInfected").post((req,res)=>{

    return new InfectedController().getInfected(req,res);
});