const express=require("express")
const controller=require("../controllers/controller.js")
const authenticate =require("../middelwares/auth.js")

const router=express.Router()

router.post("/register",controller.signin)

router.post("/login",controller.login)

router.post("/logout",controller.logout)

router.get("/profile",authenticate,(req,res)=>{
    console.log(req.user)
})

module.exports=router

