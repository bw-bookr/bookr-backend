const express = require('express');

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