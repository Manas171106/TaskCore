const express=require("express")
const signin=require("../controllers/controller.js")

const router=express.Router()

router.post("/register",signin)

module.exports=router

