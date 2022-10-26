import { Schema, model } from "mongoose";

const customerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
    },
},{
    timestamps: true,
    versionKey: false
})

export default model('TiendaAlquiler', customerSchema)