const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json("Access Denied. No token provided.");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_token);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json("Invalid or expired token");
  }
};

module.exports = authenticate;