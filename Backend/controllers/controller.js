const users = require("../models/User.model.js");
const bcrypt = require("bcrypt");

const signin = async (req, res) => {
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

    await newuser.save();
    res.status(201).json("User created");
  } catch (err) {
    res.status(500).json("Internal Server Error");
  }
};

module.exports = signin;