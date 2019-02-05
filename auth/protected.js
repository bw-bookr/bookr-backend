require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = {
  validateToken
};

function validateToken(req, res, next) {
    
  const token = req.headers.authorization;

  if (token) {

    const secret = process.env.JWT_SECRET || 'this is a secret if JWT_SECRET does not exist, but hey here it goes, super long but not really, just for testing;;';

    jwt.verify(token, secret, (err, decodedToken) => {
      
      if (err) {

        res.status(401).json({ errorMessage: "Invalid token" });

      } else {
        
        req.user_id = decodedToken.id;

        next();

      }
    });
  } else {
    res.status(401).json({ errorMessage: "Please provide a token" });
  }
}