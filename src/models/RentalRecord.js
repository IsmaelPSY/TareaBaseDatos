import { Schema, model } from "mongoose";

const rentalRecordSchema = new Schema({
    branch: {
        type: String
    },
    customer: {
        type: String,
        required: true,
    },
    vehicle: {
        type: String
    },
    start_date: {
        type: String
    },
    end_date: {
        type: String
    }
},{
    timestamps: true,
    versionKey: false
})

export default model('TiendaAlquiler', rentalRecordSchema)