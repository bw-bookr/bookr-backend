
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {title: `You don't know JS`, author: `Kyle Simpson`, publisher: `O'reily`, year: '3000',cover_url: `https://image.slidesharecdn.com/downloadyoudontknowjs-180410122836/95/download-you-don-t-know-js-scope-closures-pdf-books-1-638.jpg?cb=1523363328`, short_description: `Learn about the basics of JaveScript`, full_description: `this is supposed to be a large discription of this book but I'll keep it short for now`},

        {title: `how to win friends and influence people`, author: `Dale Carnegie`, publisher: `Simon & Schuster`, year: '3000',cover_url: `https://media.takealot.com/covers_tsins/1077735/ab7684794ac547bbb68e7280e8f4dc36-pdpxl.jpg`, short_description: `Learn about how to be a better person`, full_description: `this is supposed to be a large discription of this book but I'll keep it short for now`},

        {title: `Introduction to Algorithms`, author: `Thomas H. Cormen, Charles E. Leiserson, Ronald Rivest, Clifford Stein`, publisher: `MIT Press`, year: '3000',cover_url: `https://mitpress.mit.edu/sites/default/files/styles/large_book_cover/http/mitp-content-server.mit.edu%3A18180/books/covers/cover/%3Fcollid%3Dbooks_covers_0%26isbn%3D9780262031417%26type%3D.jpg?itok=ZXkwIWml`, short_description: `Learn about algorithms`, full_description: `this is supposed to be a large discription of this book but I'll keep it short for now`},

        {title: `Grokking Algorithms: An Illustrated Guide for Programmers and Other Curious People`, author: `Aditya Y. Bhargava`, publisher: `Manning Publications Company, 2016`, year: '3000', cover_url: `https://target.scene7.com/is/image/Target/GUEST_89507b99-20cd-4ee7-9cf1-6b5955bf0ab4?wid=488&hei=488&fmt=pjpeg`, short_description: `Learn about the basics algorithms`, full_description: `this is supposed to be a large discription of this book but I'll keep it short for now`},

        {title: `the demon's sermon on the martial arts`, author: `Issai Chozanshi`, publisher: `Shambhala Publications, 2013`, year: '2013', cover_url: `https://images-na.ssl-images-amazon.com/images/I/41DpqjTJ0fL._SX340_BO1,204,203,200_.jpg`, short_description: `a story about Japense Demons and martial arts`, full_description: `this is supposed to be a large discription of this book but I'll keep it short for now`},

        {title: `Allegory of the Cave`, author: `Plato`, publisher: `Plato`, year: '3000', cover_url: `https://i5.walmartimages.com/asr/9f823c09-305f-4666-b49a-d6f408da42d7_1.6c737b184768bb8c89362798f0b64b25.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF`, short_description: `platos perspective about life`, full_description: `this is supposed to be a large discription of this book but I'll keep it short for now`},

        {title: `Siddhartha`, author: `Hermann Hesse`, publisher: `A New Directions Books`, year: '1922', cover_url: `https://images-na.ssl-images-amazon.com/images/I/51giy3zae6L._SX329_BO1,204,203,200_.jpg`, short_description: `The life about Buddha`, full_description: `this is supposed to be a large discription of this book but I'll keep it short for now`},

        {title: `Superintelligence: Paths, Dangers, Strategies`, author: `Aditya Y. Bhargava`, publisher: `Manning Publications Company, 2016`, year: '3000', cover_url: `https://nearst-product-images.s3-eu-west-1.amazonaws.com/4b13059a-42f9-4bde-a7e6-2ea2800b0cd1.jpg`, short_description: `Learn about AI`, full_description: `this is supposed to be a large discription of this book but I'll keep it short for now`},
        
        {title: `How to Create a Mind`, author: `Ray Kurzweil`, publisher: `Manning Publications Company, 2016`, year: '2012', cover_url: `https://images-na.ssl-images-amazon.com/images/I/41BMTeTEOfL._SX324_BO1,204,203,200_.jpg`, short_description: `Learn about AI`, full_description: `this is supposed to be a large discription of this book but I'll keep it short for now`},

        {title: `Vagabonding`, author: `Rolf Potts`, publisher: `Manning Publications Company, 2016`, year: '2002', cover_url: `https://i5.walmartimages.com/asr/c60c0a4e-d6c2-4c1a-8723-2bc741f76828_1.b05e65d2e1b21af21f567689c5c5940f.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF`, short_description: `traveling the road less taken`, full_description: `this is supposed to be a large discription of this book but I'll keep it short for now`},

        {title: `Introduction to Korean history and culture =`, author: `Andrew C. Nahm`, publisher: `Hollym, 1993`, year: '1993', cover_url: `https://m.media-amazon.com/images/I/51WXB7QEEVL._SR500,500_.jpg`, short_description: `Learn about korean culture and history`, full_description: `this is supposed to be a large discription of this book but I'll keep it short for now`}
      ]);
    });
};
