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
    res.status(200).json(books);
  })
  .catch(err => res.status(500).json({
    errorMessage: err
  }))
});

////////// authentication required //////////

  // add a new book
router.post('/add_book', (req, res) => {
  // update with validateToken
  const { title, author, publisher } = req.body;
  let { year, cover_url, short_description, full_description } = req.body;
  if(!year) year = 'na';
  if(!cover_url) cover_url = 'na';
  if(!short_description) short_description = 'na';
  if(!full_description) full_description = 'na';

  db('books')
  .insert({title, author, publisher, year, cover_url, short_description, full_description})
  .then(id => {
    res.status(201).json({id: id[0], title, author, publisher, year, cover_url, short_description, full_description});
  })
  .catch(err => res.status(500).json({errorMessage: err}))
});

  // edit a book
router.put('/edit_book/:book_id', (req, res) => {
  // update with validateToken
  const { book_id } = req.params
  const { title, author, publisher } = req.body;
  let { year, cover_url, short_description, full_description } = req.body;

  db('books')
  .where({id: book_id})
  .update({title, author, publisher, year, cover_url, short_description, full_description})
  .then(id => {
    res.status(201).json({id: id[0], title, author, publisher, year, cover_url, short_description, full_description});
  })
  .catch(err => res.status(500).json({errorMessage: err}))
});

  // delete a review for a book of logged in user, need change endpoint
router.delete('/delete_book/:book_id', (req, res) => {
  // update with validationToken
  const { book_id } = req.params;

  db('books')
  .where({id: book_id})
  .del()
  .then(count => {
    res.status(204).end()
  })
  .catch(err => res.status(500).json({errorMessage: err}))
});


/////////////// extra undecided /////////////

// list reviews for a user
// manage reviews for a user

// stretch
// aggregate books and compare prices

module.exports = router;