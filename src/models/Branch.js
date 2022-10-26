import { Schema, model } from "mongoose";

const branchSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    direction: {
        type: String,
    },
},{
    timestamps: true,
    versionKey: false
})

export default model('Branchs', branchSchema)