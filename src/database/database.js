import mongoose from "mongoose";
import {config} from '../config.js';

(async ()=>{
    try{
        const db = await mongoose.connect(config.db.production.url);
        console.log('DB connected to', db.connection.name)
    }catch (error){
        console.log(error)
    }
})()