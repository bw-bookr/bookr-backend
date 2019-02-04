
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {title: `You don't know JS`, auther: `Kyle Simpson`, publisher: `O'reily`, year: '3000',cover_url: `na`, short_description: `Learn about the basics of JaveScript`, full_description: `this is supposed to be a large discription of this book but I'll keep it short for now`},

        {title: `how to win friends and influence people`, auther: `Dale Carnegie`, publisher: `Simon & Schuster`, year: '3000',cover_url: `na`, short_description: `Learn about how to be a better person`, full_description: `this is supposed to be a large discription of this book but I'll keep it short for now`},

        {title: `Introduction to Algorithms`, auther: `Thomas H. Cormen, Charles E. Leiserson, Ronald Rivest, Clifford Stein`, publisher: `MIT Press`, year: '3000',cover_url: `na`, short_description: `Learn about how to be a better person`, full_description: `this is supposed to be a large discription of this book but I'll keep it short for now`},

        {title: `Grokking Algorithms: An Illustrated Guide for Programmers and Other Curious People`, auther: `Aditya Y. Bhargava`, publisher: `Manning Publications Company, 2016`, year: '3000', cover_url: `na`, short_description: `Learn about the basics of JaveScript`, full_description: `this is supposed to be a large discription of this book but I'll keep it short for now`}
      ]);
    });
};
