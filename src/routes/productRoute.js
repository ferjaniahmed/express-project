import { Router } from "express";
import { createProduct, findAllProducts, findOneProduct } from "../services/productService.js";


export const productRouter = Router()

productRouter.get("/api/products" , async (req , res)=>{
    const products = await findAllProducts()
    if(!products){
        res.status(404).send("we dent have product yet!!")
    }
    res.status(200).send(products)
}
)

productRouter.get("/api/products/:id" ,async (req , res)=>{
    const id = req.params.id
    if(!id){
        res.status(400).send("check your id") 
    }
    product = await findOneProduct(id)
    res.status(200).send(product)
})

productRouter.post("/api/products" , async (req , res)=>{
    const data = req.body
    if(!data){
        res.status(400).send("invalid data")
    }
    const product = await createProduct(data)
    if(!product){
        res.status(401).send("error") 
    }
    res.status(201).send(product)
})