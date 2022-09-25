import mongoose from "mongoose";

(async ()=>{
    try{
        const db = await mongoose.connect("mongodb://localhost/tasks");
        console.log('DB connected to', db.connection.name)
    }catch (error){
        console.log(error)
    }
})()