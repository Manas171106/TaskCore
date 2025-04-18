const mongoose=require("mongoose")

const adminschema=mongoose.Schema({
    fullname:String,
    email:String,
    password:String,
})

const admin=mongoose.model("admin",adminschema)
module.exports=admin