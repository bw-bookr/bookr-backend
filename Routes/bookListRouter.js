const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('retriving a list of books');
});

router.get('/review', (req, res) => {
  res.send('retriving review for book');
});

router.get('/user-review', (req, res) => {
  res.send('retriving reviews for user');
});

module.exports = router;