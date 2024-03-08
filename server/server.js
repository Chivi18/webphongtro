import express from "express";
import cors from 'cors'
require('dotenv').config()
import initRouter from './src/routes'
import connectDataBase from './src/config/connectDataBase';

const app =express()
app.use(cors({
    origin:process.env.CLIENT_URL,
    methods: ["POST","GET", "PUT","DELETE","OPTION"]
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

initRouter(app)
connectDataBase()

const port =process.env.PORT||8888
const listener=app.listen(port,()=>{
    console.log(`server is running on the port ${listener.address().port}`);
})