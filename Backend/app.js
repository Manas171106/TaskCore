const connect=require("./connections/connect.js")
const express=require("express");
const dotenv=require("dotenv")
const userroute=require("./routes/user.route.js")

dotenv.config()
connect()

const port=process.env.Port||8080;

const app=express()
app.use(express.json());


app.use("/user",userroute)

app.listen(port,()=>{
    console.log("server running at ",port)
})