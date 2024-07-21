import mongoose, { mongo } from "mongoose";

export const notificationSchema = new mongoose.Schema({
    user : {type : mongoose.Schema.Types.ObjectId , ref : "users"},
    status : Boolean,
    message : String,
    payment_token : String
})


export const NotificationModel = mongoose.model("notifications" , notificationSchema)