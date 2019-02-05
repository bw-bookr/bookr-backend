const express = require('express');
const db = require('../data/dbConfig.js');
// const axios = require('axios');
// const { authenticate } = require('../auth/authenticate');

const router = express.Router();

  // get list of users for testing
router.get('/users', (req, res) => {
  // return only users and id, not passwords
  db('users')
  .then(users => {
    // only send id and user
    res.status(200).json(users);
  })
  .catch(err => res.status(500).json({
    errorMessage: err
  }))
})


////////////////// work in progress //////////////////////

// protected route
// create new user
router.get('/register', (req, res) => {
  // post request
  res.send('register, post');
});

// protected route
// user login
router.get('/login', (req, res) => {
  // post request
  res.send('login, post');
});

module.exports = router;

// authentication