const allowRoles = (role) => {
    return (req, res, next) => {
      const userRole = req.user.role;
  
      if (!userRole) {
        return res.status(401).json("Unauthorized: role not found in token");
      }
  
      if (!(role === userRole)) {
        console.log(userRole)
        return res.status(403).json("Access denied: insufficient permissions");
      }
  
      console.log("Role check passed:", userRole);
      next();
    };
  };
  
  module.exports = allowRoles;