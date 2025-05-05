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

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

app.use(cors({
  origin: [
    "http://localhost:5173"
  ],
  origin: "https://taskcore-1.onrender.com",
}));


const port=process.env.Port||8080;

app.use("/user",userroute)

app.listen(port,()=>{
    console.log("server running at ",port)
})

