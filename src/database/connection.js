import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

export const connection = async ()=>{
    try{
        const con = await mongoose.connect(process.env.MONGO_DB_URI)
        return con;
    }catch{
        console.log("mongo didn't connect")
    }
}