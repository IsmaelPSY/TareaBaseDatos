import mongoose from "mongoose";

(async ()=>{
    try{
        const db = await mongoose.connect("mongodb+srv://Deskrel:170520210921@cluster0.mcjqsyc.mongodb.net/test");
        console.log('DB connected to', db.connection.name)
    }catch (error){
        console.log(error)
    }
})()