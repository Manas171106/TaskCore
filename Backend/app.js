const express = require("express");
const dotenv = require("dotenv")

dotenv.config()

const port = process.env.Port || 8080;

const app = express()

const connect = require("./connections/connect.js")


connect().then(() => {
    app.listen(port, () => {

        console.log("server running at ", port)
    })
}).catch(err=>{console.log(err)})