
import * as express from 'express'
import * as path from 'path'
import Infected from '../models/infected';


export class InfectedController{

    getInfected=(req:express.Request, resp:express.Response)=>{
        let period:number=parseInt(req.query.period+"");
        console.log(period);
        let today=new Date().getTime()
        Infected.find({'date':{$gt:(today-period)}},(err,infected)=>{
            if(err) console.log(err);
            else{
                console.log(infected);
                resp.json(infected);
            }
        });

    }


    registerInfection=(req:any, resp:express.Response)=>{

        console.log(req.query);
        let keys:string[]=[];
        let dates:number[]=[];
        if(typeof req.query.keys=='string'){
            keys.push(req.query.keys);
            dates.push(req.query.dates);
        }
        else{
            keys=req.query.keys;
            dates=req.query.dates;
        }
        for(let i=0;i<keys.length;i++){
            let infectedDailyKey=new Infected({
                "dailyKey":keys[i],
                "date":dates[i]
            })
            Infected.collection.insertOne(infectedDailyKey,(err,inf)=>{
                if(err){
                    console.log(err)
                    resp.json({"msg":err});
                }
            })
        }
        resp.json({"msg":"ok"})
    }

    
} 