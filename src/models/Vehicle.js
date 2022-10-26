import { Schema, model } from "mongoose";

const vehicleSchema = new Schema({
    model: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    alquilado: {
        type: Boolean,
        default: false
    },
},{
    timestamps: true,
    versionKey: false
})

export default model('TiendaAlquiler', vehicleSchema)