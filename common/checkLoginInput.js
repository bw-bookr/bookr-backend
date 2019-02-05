
const checkLoginInput = (req, res, next) => {
  const { username, password } = req.body;
  if(!username || !password) {
    res.status(400).json({message: 'enter your username and password.'});
  } else next();
};

module.exports = checkLoginInput;