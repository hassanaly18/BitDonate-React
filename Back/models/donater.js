import mongoose from "mongoose";

const donaterSchema=new mongoose.Schema({
    name:String,
    email:String,
    amount:{
        type: String,
        required: true
    },
    orderId:{
        type: String,
        required: true,
    },
    paymentStatus: String
})

export const Donater = mongoose.model("Donater", donaterSchema)