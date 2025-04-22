const express=require("express")
const controller=require("../controllers/controller.js")
const authenticate =require("../middelwares/auth.js")
const allowRoles =require("../middelwares/roles.js")

const router=express.Router()

router.post("/register",controller.signin)

router.post("/login",controller.login)

router.post("/logout",controller.logout)

router.post("/create",authenticate,allowRoles("admin"),controller.createtask)

router.get("/view",authenticate,allowRoles("employee"),controller.viewTasks)

router.post("/task/:id/update", authenticate,allowRoles("employee"),controller.updatetask)

module.exports=router
