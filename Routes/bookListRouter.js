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

// extra
// add a book
// update a book
// update a review to a book
// delete a book
// list reviews for a user
// manage reviews for a user

// stretch
// aggregate books and compare prices

// MVP
// add a review to a book
// delete a review to a book

module.exports = router;