const express = require('express');
const db = require('../data/dbConfig.js');

const router = express.Router();

  // retrive list of books
router.get('/', (req, res) => {
  // return id, title, cover_url
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

  // retrive reviews for selected book and book detials
router.get('/book_review/:id', (req, res) => {
  // sends [{title, auther, publisher, [reviews]}]
  const { id } = req.params;
  db('books')
  .where({id})
  .then(book=> {
    db('reviews')
    .where({book_id: id})
    .then(reviews => {
      book.reviews = [...reviews];
      res.status(200).json({...book});
    })
  })
  .catch(err => res.status(500).json({errorMessage: err}))
});


/////////////////// work in progress /////////////////////////

  // add a new review for a book
  // required authentication
router.post('/add_review', (req, res) => {
  const { review, user_id, book_id } = req.body;
  db(reviews)
  .insert()
  .then()
  .catch()
})

  // delete a review for a book
  // required authentication
router.delete('/delete_review', (req, res) => {

})

  // update a review for a book
  // required authentication
router.put('/edit_review', (req, res) => {
  
})



  // retrive full list of reviews made by user
  // required authentication
  // extra stretch goal


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