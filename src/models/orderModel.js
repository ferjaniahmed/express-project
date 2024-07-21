import mongoose, { mongo } from "mongoose";

export const orderSchema = new mongoose.Schema({
    user : {type : mongoose.Schema.Types.ObjectId , ref : "users"},
    product : {type : mongoose.Schema.Types.ObjectId , ref : "products"},
    quantity : Number
})


export const OrderModel = mongoose.model("orders" , orderSchema)