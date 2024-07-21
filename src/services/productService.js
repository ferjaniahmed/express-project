import { ProductModel } from "../models/productModel.js"


export const findAllProducts = async ()=>{

    const products = await ProductModel.find()
    return products

}

export const findOneProduct = async (id) =>{
    const product = await ProductModel.findById(id)
    if(product) return product
    return null
}

export const createProduct = async (data) =>{ 
    const product = await ProductModel.create(data)
    if(product) return product
    return  null
}
