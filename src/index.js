import express from "express"
import dotenv from "dotenv"
import { userRouter } from "./routes/userRoute.js"
import { connection } from "./database/connection.js"
import { orderRouter } from "./routes/orderRoute.js"
import { authRouter } from "./routes/authRoute.js"
import { productRouter } from "./routes/productRoute.js"
import { createServer } from "http";
import { Server } from "socket.io";
import passport from "passport"
import { paymentRouter } from "./routes/paymentRoute.js"
import cors from "cors"
import { notificationRouter } from "./routes/notificationRoute.js"

const app  = express()
dotenv.config()
app.use(express.json())
connection() 
app.use(cors())
app.use(passport.initialize())

app.get("/" , (req , res)=>res.send("hello world"))

app.use(userRouter)
app.use(authRouter)
app.use(orderRouter)
app.use(paymentRouter)
app.use(productRouter)
app.use(notificationRouter)



const port = parseInt(process.env.PORT) || 3000
const httpServer = createServer(app);
export const io = new Server(httpServer, { 
    cors : "*"
});

io.on("connection", (socket) => {
    console.log(socket.id)
    socket.on("notification", (message)=>{
        console.log(message)
        socket.broadcast.emit("notification" , message)
    })
});


httpServer.listen(port , ()=> console.log("app running"));