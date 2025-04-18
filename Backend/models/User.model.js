const mongoose=require("mongoose")

const userschema=mongoose.Schema({
    fullname:String,
    email:String,
    password:String
})

const user=mongoose.model("user",userschema)
module.exports=user