const express = require('express');
const { validateToken } = require('../auth/protected.js')
const db = require('../data/dbConfig.js');

const router = express.Router();

  // retrive list of books
router.get('/', (req, res) => {
  db('books')
  .then(books => {
    const bookCollection = books.map(book => {
      return { id: book.id, title: book.title, cover_url: book.cover_url };
    });
    res.status(200).json(bookCollection);
  })
  .catch(err => res.status(500).json({
    errorMessage: err
  }))
});

  // retrive list of all the reviews
router.get('/all_reviews', (req, res) => {
  db('reviews')
  .then(reviews => {
    res.status(200).json(reviews);
  })
  .catch(err => res.status(500).json({
    errorMessage: err
  }))
});

  // retrive reviews for selected book and book details
router.get('/book_review/:book_id', (req, res) => {
  const { book_id: id } = req.params;
  db('books')
  .where({id})
  .then(book=> {
    db('reviews')
    .where({book_id: id})
    .then(reviews => {
      res.status(200).json({book: book[0], reviews});
    })
  })
  .catch(err => res.status(500).json({errorMessage: err}))
});


  // add a new review for a book
  // required authentication
router.post('/add_review/:book_id', validateToken, (req, res) => {
  const { book_id } = req.params;
  const { rating, review } = req.body;
  const { user_id } = req;

  if(!review || !book_id) {
    res.status(400).json({errorMessage: 'invalid input'});
  }

  db('reviews')
  .insert({user_id, book_id, review, rating})
  .then(id => {
    res.status(201).json({id: id[0], review, rating});
  })
  .catch(err => res.status(500).json({errorMessage: err}))
});


  // delete a review for a book of logged in user, need change endpoint
  // required authentication
router.delete('/delete_review/:book_id', validateToken, (req, res) => {
  const { book_id } = req.params;
  const { user_id } = req;

  db('reviews')
  .where({user_id, book_id})
  .del()
  .then(count => {
    res.status(204).end()
  })
  .catch(err => res.status(500).json({errorMessage: err}))
});


  // update a review for a book
  // required authentication
router.put('/edit_review/:book_id', validateToken, (req, res) => {
  const { book_id } = req.params;
  const { user_id } = req;
  const { review, rating } = req.body;

  db('reviews')
  .where({user_id, book_id})
  .update({review, rating})
  .then(count => {
    res.status(201).json({message: 'changes have been succesfully made'});
  })
  .catch(err => res.status(500).json({errorMessage: err}))
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