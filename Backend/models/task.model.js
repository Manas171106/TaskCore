const mongoose=require("mongoose")

const taskschema=mongoose.Schema({
    title:String,
    date:{
        type:Date
    },
    assign:String,
    category:String,
    description:String,
})

const task=mongoose.model("task",taskschema)
module.exports=task