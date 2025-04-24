const mongoose=require("mongoose")
const dotenv=require("dotenv")

dotenv.config()
mongo_uri=process.env.MONGO_URI


const connect=()=>{
    mongoose.connect(mongo_uri).then(
        console.log("database connected")
    )
}

module.exports=connect