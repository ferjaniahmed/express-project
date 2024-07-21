import { Router } from "express";
import { UserModel } from "../models/userModel.js";
import jwt from "jsonwebtoken"
import passport from "passport"
import "../strategies/jwtStrategy.js"


export const authRouter  = Router()


authRouter.post("/api/login" ,async (req , res)=>{
    const { email, password } = req.body;
    try{
        const user = await UserModel.findOne({ email: email});
        if(!user){
            res.status(404).json({
                success : false,
                message : "user not found"
            })
        }

        if(user.password && password !== user.password){
            res.status(400).json({
                success : false,
                message : "invalid credential"
            })
        }
        const  payload = {
            sub : user._id,
            email : user.email
        }
        const token = jwt.sign(payload,process.env.SECRET_KEY , {expiresIn :"1d"})
        res.status(200).json({access_token : token ,success : true})
    }catch(err){
            console.log(err)
    }
    

});


authRouter.get("/api/profile",passport.authenticate('jwt', { session: false }), (req , res)=>{
    const user = req.user
    if(!user){
        res.status(400).send("Unauthorize")
    }
    res.status(200).send(user)
})
