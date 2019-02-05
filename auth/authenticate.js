require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = {
  generateToken
};

function generateToken(user) {

  const payload = {
    id: user.id,
    username: user.username,
  };

  const secret = process.env.JWT_SECRET  || 'this is a secret if JWT_SECRET does not exist, but hey here it goes, super long but not really, just for testing;;';

  const options = {
    expiresIn: "10m"
  };

  return jwt.sign(payload, secret, options);
}