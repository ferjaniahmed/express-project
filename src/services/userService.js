import { UserModel } from "../models/userModel.js"


export const findAllUser = async ()=>{

    const users = await UserModel.find()
    return users

}

export const findOne = async (id) =>{
    const user = await UserModel.findById(id)
    if(user) return user
    return null
}

export const createUser = async (data) =>{
    const user = await UserModel.create(data)
    if(user) return user
    return  null
}

export const updateUser = async (id ,data) =>{
    const user = await UserModel.findByIdAndUpdate(id ,data)
    if(user) return user
    return  null
}


export const deleteUser = async (id)=>{

    const user = await UserModel.findByIdAndDelete(id)
    if(user) return user
    return null
}