import { Schema, model } from "mongoose";

const user = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        required: true,
        type: String,
    },
    age: {
        type: Number,
    },
    direction: {
        type: String,
    }
},{
    timestamps: true,
    versionKey: false
})

export default model('Users', user)