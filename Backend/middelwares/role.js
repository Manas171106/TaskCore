const allowRoles = (role) => {
    return (req, res, next) => {
      const userRole = req.user.role;
  
      if (!userRole) {
        return res.status(401).json("Unauthorized: role not found in token");
      }

    };
  };
  
  module.exports = allowRoles;