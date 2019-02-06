const express = require('express');
const { validateToken } = require('../auth/protected.js')
const db = require('../data/dbConfig.js');

const router = express.Router();


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


///////// protected endpoints /////////
  // add a new review for a book
router.post('/add_review/:book_id', validateToken, (req, res) => {
  const { book_id } = req.params;
  const { rating, review } = req.body;
  const { user_id } = req;

  console.log(book_id,user_id, rating, review);
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


/////////// unprotected endpoints ///////////////

router.post('/add_review/:book_id/:user_id', (req, res) => {
  const { book_id, user_id} = req.params;
  const { rating, review } = req.body;

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

router.delete('/delete_review/:book_id/:user_id',  (req, res) => {
const {user_id, book_id} = req.params;

db('reviews')
.where({user_id, book_id})
.del()
.then(count => {
  res.status(204).end()
})
.catch(err => res.status(500).json({errorMessage: err}))
});

router.put('/edit_review/:book_id/:user_id',  (req, res) => {
  const { book_id, user_id } = req.params;
  const { review, rating } = req.body;

  db('reviews')
  .where({user_id, book_id})
  .update({review, rating})
  .then(count => {
    res.status(201).json({message: 'changes have been succesfully made'});
  })
  .catch(err => res.status(500).json({errorMessage: err}))
});

module.exports = router;