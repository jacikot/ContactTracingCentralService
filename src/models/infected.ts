import mongoose from 'mongoose'

//kreiramo semu
const Schema = mongoose.Schema;

//struktura dokumenata u mongo bazi
let Infected=new Schema({
    dailyKey: {
        type:String
    },
    date: {
        type:Number
    },
});


export default mongoose.model('Infected', Infected,'infected');