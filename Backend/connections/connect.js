// const mongoose=require("mongoose")
// const dotenv=require("dotenv")

// dotenv.config()
// mongo_uri=process.env.MONGO_URI


// const connect=()=>{
//     mongoose.connect(mongo_uri).then(
//         console.log("database connected")
//     )
// }

// module.exports = connect

const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const mongo_uri = process.env.MONGO_URI;

const connect = async () => {
  try {
    await mongoose.connect(mongo_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1); // Stop app if DB doesn't connect
  }
};

module.exports = connect;
