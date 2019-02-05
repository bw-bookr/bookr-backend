const express = require('express');
const checkLoginInput = require('../common/checkLoginInput.js')
const db = require('../data/dbConfig.js');
const bcrypt = require('bcryptjs');
const authenticate = require('../auth/authenticate');

const router = express.Router();

  // get list of users for testing
router.get('/users', (req, res) => {
  db('users')
  .then(users => {
    users = users.map(user => {
      return {id: user.id, username: user.username}
    })
    res.status(200).json(users);
  })
  .catch(err => res.status(500).json({
    errorMessage: err
  }))
});

  // create new user
router.post('/register', async (req, res) => {

  const { username, password } = req.body;

  try {

    if(username && password){
      
      const hash = bcrypt.hashSync(password, 14);

      const newUser = await db('users').insert({ username, password: hash });

      const token = authenticate.generateToken({username});

      res.status(201).json({username, token});

    } else {

      res.status(400).json({ errorMessage: 'Username and password required to complete registration.' });

    }
  } catch (err) {

    res.status(500).json({ errorMessage: 'Signup failed, try again.', err });
  }
});

  // user login
router.post('/login', checkLoginInput, async (req, res) => {

  const { username, password } = req.body;
  
  try {

    const validateUser = await db("users").where({ username }).first();

    if (validateUser && bcrypt.compareSync(password, validateUser.password)) {

      const token = authenticate.generateToken(validateUser);

      res.status(200).json({ username: validateUser.username, token });

    } else {

      res.status(401).json({ message: 'Your login attempt failed. Please check login and password and try again.' });

    }
  } catch (err) {

    res.status(500).json({ errorMessage: err });
  }
});

module.exports = router;