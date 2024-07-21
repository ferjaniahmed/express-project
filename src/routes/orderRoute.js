
import { Router } from "express"
import { createOrder, deleteOrder, updateOrder ,findAllOrders } from "../services/orderService.js"


export const orderRouter = Router()

orderRouter.get("/api/orders" , async (req , res)=>{
    const orders = await findAllOrders()
    res.status(200).send(orders)
})

orderRouter.get("/api/orders/:id" , async (req , res)=>{
    const id = req.params.id ? req.params.id : ""
    try{
        const orders = await findOneOrder(id)
        res.status(200).send(orders)
    }catch(error){
        res.status(404).send({message : "order not found" , error : error})
    }
})

orderRouter.post("/api/orders" , async (req , res)=>{
    const order = req.body
    try{
        const orders = await createOrder(order)
        res.status(201).send(orders)
    }catch(error){
        res.status(400).send({message : "invalid request for creation order" , error : error})
    }
})

orderRouter.patch("/api/orders/:id" , async (req , res)=>{
    const id = req.params.id
    const order = req.body
    try{
        const orders = await updateOrder(id , order)
        res.status(200).send(orders)
    }catch(error){
        res.status(400).send({message : "invalid request for updating order" , error : error})
    }
})

orderRouter.delete("/api/orders/:id" , async (req , res)=>{
    const id = req.params.id
    try{
        const orders = await deleteOrder(id)
        res.status(200).send(orders)
    }catch(error){
        res.status(400).send({message : "invalid request for deleting order" , error : error})
    }
})



