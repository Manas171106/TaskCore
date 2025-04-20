const users = require("../models/User.model.js");
const Tasks=require("../models/task.model.js")
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken")
const dotenv=require("dotenv")
dotenv.config()


module.exports.signin = async (req, res) => {
  const { fullname, email, password } = req.body;

  try {
    const user = await users.findOne({ email });

    if (user) {
      return res.status(409).json("User already exists");
    }

    const hashedpassword = await bcrypt.hash(password, 10);

    const newuser = new users({
      fullname,
      email,
      password: hashedpassword,
    });

    const token=jwt.sign({email,fullname},process.env.JWT_token)
    console.log(token)
    res.cookie('token', token, {
      httpOnly: true,    
      secure: true,     
      sameSite: 'Strict'
    });

    await newuser.save();
    

    res.status(201).json("User created");
  } catch (err) {
    res.status(500).json("Internal Server Error");
  }
};

module.exports.login = async (req,res)=>{
  const {email,password}=req.body;
  let existeduser = await users.findOne( { email } )

  if(!existeduser){
    res.send("user doesnt exist");
  }


  const isMatch = await bcrypt.compare(password, existeduser.password);

  if (!isMatch) {
    return res.status(401).json("Invalid credentials");
  }

  const token = jwt.sign({ email,fullname:existeduser.fullname}, process.env.JWT_token, { expiresIn: '1h' });

  res.cookie('token', token, {
    httpOnly: true,
    sameSite: 'Strict',
    maxAge: 3600000
  });

  res.status(200).json("Login successful");
}

module.exports.logout = (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    sameSite: 'Strict',
  });
  res.status(200).json("Logged out successfully");
};

module.exports.createtask = async (req,res)=>{
  try{
    const {title,assignTo,category,description}=req.body;

    const user = await users.findOne({ fullname: assignTo });
    console.log(user)

    if(!user){
      res.json("user not found")
    }

    const task=new Tasks({
      title,
      description,
      category,
    })
  
  }catch(err){
    console.log(err)
  }
}