import express from 'express'
import connectDB from './config/mongodb.js'
import dotenv from 'dotenv';
dotenv.config()
import cors from 'cors'
import cookieParser from 'cookie-parser';
import userrouter from './routes/user.js'

const app=express()
const Port = process.env.PORT || 5001

app.use(express.json()) 
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials:true,
}))
app.use(cookieParser())
connectDB()

app.get('/',(req,res)=>{
    res.send("API is running")
})


app.use('/api/user',userrouter)


app.listen(Port,()=> console.log("Server Started"))