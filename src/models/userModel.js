import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    firstname : {type: String , require : true},
    lastname : {type : String , require : true},
    email : {type : String , require : true},
    password : {type : String , require : true},
    isAdmin : {type : Boolean , require : true , default : false},
    phone : { type: String  , default : ""},
    payment_token : {type : String , default : ""},
    compte_code : {type : String , require : true}
})


export const UserModel = mongoose.model("users" , userSchema)