const express=require("express");
const app=express()
const connect=require("./connections/connect.js")
const dotenv=require("dotenv")
const cookieParser = require('cookie-parser')
const userroute=require("./routes/user.route.js")
app.use(express.json());

const cors = require("cors");

app.use(cookieParser())

dotenv.config()
connect()

app.use(cors({
  origin: [
    "http://localhost:5173"
  ],
  credentials: true,
}));


const port=process.env.Port||8080;

app.use("/user",userroute)

app.listen(port,()=>{
    console.log("server running at ",port)
})