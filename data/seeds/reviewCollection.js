
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {user_id: 1, book_id: 1, rating: 5, review: 'this is a review of a book'},
        {user_id: 1, book_id: 2, rating: 5, review: 'this is a review of a book'},
        {user_id: 2, book_id: 1, rating: 5, review: 'this is a review of a book'},
      ]);
    });
};
