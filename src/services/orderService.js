import { OrderModel } from "../models/orderModel.js"


export const findAllOrders = async ()=>{

    const orders = await OrderModel.find().populate(["product" , "user" ])
    return orders

}

export const findOneOrder = async (id) =>{
    const order = await OrderModel.findById(id)
    if(order) return order
    return null
}

export const createOrder = async (data) =>{
    const order = await OrderModel.create(data)
    if(order) return order
    return  null
}

export const updateOrder = async (id ,data) =>{
    const order = await OrderModel.findByIdAndUpdate(id ,data)
    if(order) return order
    return  null
}


export const deleteOrder = async (id)=>{

    const order = await OrderModel.findByIdAndDelete(id)
    if(order) return order
    return null
}