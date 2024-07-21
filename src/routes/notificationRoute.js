import { Router } from "express";
import { NotificationModel } from "../models/notificationModel.js";


export const notificationRouter = Router()

notificationRouter.get("/api/notifications" , async (req , res)=>{
    const notif = await NotificationModel.find()
    res.status(200).send(notif)
})