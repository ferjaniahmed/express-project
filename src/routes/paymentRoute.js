import { Router } from "express";
import { createPayment, transfer } from "../services/paymentService.js";
import { io } from "../index.js";
import { NotificationModel } from "../models/notificationModel.js";

export const paymentRouter = Router()


paymentRouter.post("/api/payments" , async (req , res)=>{
  const {user , ...data }= req.body
  const payment = await createPayment(data)
  
  if(payment === null){
    res.status(401).send({
      detail: "Invalid token."
      })
  }else{
    io.emit("notification" , payment)
    await NotificationModel.create(
      { status : payment.status , 
        message : payment.message , 
        user : user ,
        payment_token : payment.data.token
      })
    res.status(200).send({status : payment.status , message : payment.message , code : payment.code })
    
  }
  
})

paymentRouter.post("/api/transfer" , async (req,res)=>{
  const data = req.body
  const payment = await transfer(data)
  
  if(payment === null){
    res.status(401).send({
      detail: "transfer error."
      })
  }else{
    io.emit("notification" , payment)
    res.status(200).send(payment)
    
  }

})