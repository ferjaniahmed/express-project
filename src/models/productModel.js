import mongoose from "mongoose";

export const productSchema = new mongoose.Schema({
    name : {type: String , require : true},
    description : {type : String , require : true},
    price : {type : String , require : true},
})


export const ProductModel = mongoose.model("products" , productSchema)