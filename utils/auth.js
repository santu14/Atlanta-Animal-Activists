const jwt = require("jsonwebtoken");
exports.createJWT = (email, userId, duration) => {
   const payload = {
      email,
      userId,
      duration
   };
   return jwt.sign(payload, process.env.SECRETKEY, {
     expiresIn: duration,
   });
};