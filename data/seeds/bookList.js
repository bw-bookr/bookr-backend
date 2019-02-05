
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {title: `You don't know JS`, auther: `Kyle Simpson`, publisher: `O'reily`, year: '3000',cover_url: `na`, short_description: `Learn about the basics of JaveScript`, full_description: `this is supposed to be a large discription of this book but I'll keep it short for now`},

        {title: `how to win friends and influence people`, auther: `Dale Carnegie`, publisher: `Simon & Schuster`, year: '3000',cover_url: `na`, short_description: `Learn about how to be a better person`, full_description: `this is supposed to be a large discription of this book but I'll keep it short for now`},

        {title: `Introduction to Algorithms`, auther: `Thomas H. Cormen, Charles E. Leiserson, Ronald Rivest, Clifford Stein`, publisher: `MIT Press`, year: '3000',cover_url: `na`, short_description: `Learn about how to be a better person`, full_description: `this is supposed to be a large discription of this book but I'll keep it short for now`},

        {title: `Grokking Algorithms: An Illustrated Guide for Programmers and Other Curious People`, auther: `Aditya Y. Bhargava`, publisher: `Manning Publications Company, 2016`, year: '3000', cover_url: `na`, short_description: `Learn about the basics of JaveScript`, full_description: `this is supposed to be a large discription of this book but I'll keep it short for now`},

        {title: `the demon's sermon on the martial arts`, auther: `Issai Chozanshi`, publisher: `Shambhala Publications, 2013`, year: '2013', cover_url: `na`, short_description: `a story about Japense Demons and martial arts`, full_description: `this is supposed to be a large discription of this book but I'll keep it short for now`},

        {title: `Allegory of the Cave`, auther: `Plato`, publisher: `Plato`, year: '3000', cover_url: `na`, short_description: `platos perspective about life`, full_description: `this is supposed to be a large discription of this book but I'll keep it short for now`},

        {title: `Siddhartha`, auther: `Hermann Hesse`, publisher: `A New Directions Books`, year: '1922', cover_url: `na`, short_description: `The life about Buddha`, full_description: `this is supposed to be a large discription of this book but I'll keep it short for now`},

        {title: `Superintelligence: Paths, Dangers, Strategies`, auther: `Aditya Y. Bhargava`, publisher: `Manning Publications Company, 2016`, year: '3000', cover_url: `na`, short_description: `Learn about the basics of JaveScript`, full_description: `this is supposed to be a large discription of this book but I'll keep it short for now`},
        
        {title: `How to Create a Mind`, auther: `Ray Kurzweil`, publisher: `Manning Publications Company, 2016`, year: '2012', cover_url: `na`, short_description: `Learn about the basics of JaveScript`, full_description: `this is supposed to be a large discription of this book but I'll keep it short for now`},

        {title: `Vagabonding`, auther: `Rolf Potts`, publisher: `Manning Publications Company, 2016`, year: '2002', cover_url: `na`, short_description: `Learn about the basics of JaveScript`, full_description: `this is supposed to be a large discription of this book but I'll keep it short for now`},

        {title: `Introduction to Korean history and culture =`, auther: `Andrew C. Nahm`, publisher: `Hollym, 1993`, year: '1993', cover_url: `na`, short_description: `Learn about the basics of JaveScript`, full_description: `this is supposed to be a large discription of this book but I'll keep it short for now`}
      ]);
    });
};
