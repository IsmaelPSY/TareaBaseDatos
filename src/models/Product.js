import { Schema, model } from "mongoose";

const product = new Schema({
    image_url: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
    },
    bg: {
        type: String,
    },
    is_popular: {
        type: Number,
        default: 0
    }
},{
    timestamps: true,
    versionKey: false
})

export default model('Products', product)