import axios from "axios"
export const createPayment = async (data )=>{
    const {payment_token , ...rest} = data
    if(!payment_token){
        return
    }
    try{
        const pay = await axios.post("https://sandbox.paymee.tn/api/v2/payments/create" , 
            data , 
            {headers : {"Content-Type":"application/json" , "Authorization": `Token ${payment_token}`}}
        )
        return pay.data
    }catch(err){
        console.log(err)
        return null
    }
    
}

export const transfer = async (data )=>{
    try{
        const pay = await axios.post("https://sandbox.paymee.tn/api/v1/OTRequest" , 
            data , 
            {headers : {"Content-Type":"application/json" , "Authorization": `Token fae3dbf78030a01f10d7228cb7dfada3c93d9357`}}
        )
        return pay.data
    }catch(err){
        
        return null
    }
    
}