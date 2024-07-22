
import { Router } from "express"
import { createUser, deleteUser, findAllUser, findOne, updateUser } from "../services/userService.js"
export const userRouter = Router()

userRouter.get("/api/users" , async (req , res)=>{
    const users = await findAllUser()
    res.status(200).send(users)
})

userRouter.get("/api/users/:id" , async (req , res)=>{
    const id = req.params.id ? req.params.id : ""
    try{
        const users = await findOne(id)
        res.status(200).send(users)
    }catch(error){
        res.status(404).send({message : "user not found" , error : error})
    }
})

userRouter.post("/api/users" , async (req , res)=>{
    const user = req.body
    try{
        const users = await createUser(user)
        res.status(201).send(users)
    }catch(error){
        res.status(400).send({message : "invalid request for creation user" , error : error})
    }
})

userRouter.patch("/api/users/:id" , async (req , res)=>{
    const id = req.params.id
    const user = req.body
    try{
        const users = await updateUser(id , user)
        res.status(200).send(users)
    }catch(error){
        res.status(400).send({message : "invalid request for updating user" , error : error})
    }
})

userRouter.delete("/api/users/:id" , async (req , res)=>{
    const id = req.params.id
    try{
        const users = await deleteUser(id)
        res.status(200).send(users)
    }catch(error){
        res.status(400).send({message : "invalid request for deleting user" , error : error})
    }
})



