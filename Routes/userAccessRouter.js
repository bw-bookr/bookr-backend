const express = require('express');
// const axios = require('axios');
// const { authenticate } = require('../auth/authenticate');

const router = express.Router();

router.get('/register', (req, res) => {
  // post request
  res.send('register, post');
});

router.get('/login', (req, res) => {
  // post request
  res.send('login, post');
});

module.exports = router;

// authentication