const mongoose=require("mongoose")

const userschema=mongoose.Schema({
    fullname:{
        type:String,
        unique: true
    },
    email:String,
    password: { type: String },
    role: { type: String, enum: ['admin', 'employee'], default: 'employee' },
    tasks:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Task"
        }
    ]
})

const user=mongoose.model("user",userschema)
module.exports=user