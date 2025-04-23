const users = require("../models/User.model.js");
const Tasks=require("../models/task.model.js")
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken")
const dotenv=require("dotenv")
dotenv.config()

module.exports.signin = async (req, res) => {
  const { fullname, email, password ,role} = req.body;

  try {
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return res.status(409).json("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new users({ fullname, email, password: hashedPassword ,role});
    await newUser.save();

    const token = jwt.sign(
      { id: newUser._id, email: newUser.email, fullname: newUser.fullname,role:newUser.role },
      process.env.JWT_token,
      { expiresIn: "1d" }
    );

    res.cookie('token', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'Strict'
    });

    res.status(201).json({ message: "User created" ,user: newUser});

  } catch (err) {
    console.error("Signin error:", err);
    res.status(500).json("Internal Server Error");
  }
};


module.exports.login = async (req,res)=>{
  const {email,password}=req.body;
  let existeduser = await users.findOne({ email }).select("+password");

  if(!existeduser){
    res.send("user doesnt exist");
  }


  const isMatch = await bcrypt.compare(password, existeduser.password);

  if (!isMatch) {
    return res.status(401).json("Invalid credentials");
  }

  const logedinuser=existeduser;

  const token = jwt.sign({ email,fullname:existeduser.fullname,role:existeduser.role}, process.env.JWT_token, { expiresIn: '1h' });

  res.cookie('token', token, {
    httpOnly: true,
    sameSite: 'Strict',
    maxAge: 3600000
  });

  existeduser.password = undefined;

  res.status(200).json({"message":"user",user:logedinuser});
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
    const {title,assignTo,category,description,date}=req.body;

    const user = await users.findOne({ fullname: assignTo }).select("-password");

    if(!user){
      res.json("user not found")
    }

    const task=new Tasks({
      title,
      description,
      category,
      date
    })
  
    await task.save()
  
    user.tasks.push(task._id)
    await user.save()
  
    res.status(201).send("task created successfully")
  
  }catch(err){
    console.log(err)
  }
}

module.exports.viewTasks = async (req, res) => {
  try {
    const user = await users.findOne({ email: req.user.email }).populate("tasks");

    if (!user) {
      return res.status(404).json("User not found");
    }

    res.status(200).send(user.tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json("Internal Server Error");
  }
};

module.exports.updatetask = async (req,res)=>{
  try {
    const taskId = req.params.id;
    const  {status} = req.body;
    const {fullname,role} = req.user;

    const task = await Tasks.findById(taskId);

    if (!task) {
      return res.status(404).json("Task not found");
    }

    if (task.assignTo !== fullname && role !== "employee") {
      return res.status(403).json("You are not authorized to update this task");
    }

    const validStatuses = ["pending", "in progress", "failed","completed"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json("Invalid status value");
    }

    task.status = status;
    await task.save();

    res.status(200).json({ message: "Task status updated", task });
  } catch (err) {
    console.error("Status update error:", err);
    res.status(500).json("Internal server error");
  }
};

