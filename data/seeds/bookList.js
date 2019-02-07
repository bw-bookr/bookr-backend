
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {title: `You don't know JS`, author: `Kyle Simpson`, publisher: `O'reily`, year: '3000',cover_url: `https://bookr-site.netlify.com/imgs/books/you-dont-know-js.jpg`, short_description: `Learn about the basics of JaveScript`, full_description: `this is supposed to be a large discription of this book but I'll keep it short for now`},

        {title: `how to win friends and influence people`, author: `Dale Carnegie`, publisher: `Simon & Schuster`, year: '3000',cover_url: `https://bookr-site.netlify.com/imgs/books/how-to-win-friends-and-influence-people.jpg`, short_description: `Learn about how to be a better person`, full_description: `this is supposed to be a large discription of this book but I'll keep it short for now`},

        {title: `Introduction to Algorithms`, author: `Thomas H. Cormen, Charles E. Leiserson, Ronald Rivest, Clifford Stein`, publisher: `MIT Press`, year: '3000',cover_url: `https://bookr-site.netlify.com/imgs/books/introduction-to-algorithms.jpg`, short_description: `Learn about algorithms`, full_description: `this is supposed to be a large discription of this book but I'll keep it short for now`},

        {title: `Grokking Algorithms: An Illustrated Guide for Programmers and Other Curious People`, author: `Aditya Y. Bhargava`, publisher: `Manning Publications Company, 2016`, year: '3000', cover_url: `https://bookr-site.netlify.com/imgs/books/grokking-algorithms.jpg`, short_description: `Learn about the basics algorithms`, full_description: `this is supposed to be a large discription of this book but I'll keep it short for now`},

        {title: `the demon's sermon on the martial arts`, author: `Issai Chozanshi`, publisher: `Shambhala Publications, 2013`, year: '2013', cover_url: `https://images-na.ssl-images-amazon.com/images/I/41DpqjTJ0fL._SX340_BO1,204,203,200_.jpg`, short_description: `a story about Japense Demons and martial arts`, full_description: `this is supposed to be a large discription of this book but I'll keep it short for now`},

        {title: `Allegory of the Cave`, author: `Plato`, publisher: `Plato`, year: '3000', cover_url: `https://i5.walmartimages.com/asr/9f823c09-305f-4666-b49a-d6f408da42d7_1.6c737b184768bb8c89362798f0b64b25.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF`, short_description: `platos perspective about life`, full_description: `this is supposed to be a large discription of this book but I'll keep it short for now`},

        {title: `Siddhartha`, author: `Hermann Hesse`, publisher: `A New Directions Books`, year: '1922', cover_url: `https://images-na.ssl-images-amazon.com/images/I/51giy3zae6L._SX329_BO1,204,203,200_.jpg`, short_description: `The life about Buddha`, full_description: `this is supposed to be a large discription of this book but I'll keep it short for now`},

        {title: `Superintelligence: Paths, Dangers, Strategies`, author: `Aditya Y. Bhargava`, publisher: `Manning Publications Company, 2016`, year: '3000', cover_url: `https://bookr-site.netlify.com/imgs/books/superintelligence-paths-dangers-strategies.jpg`, short_description: `Learn about AI`, full_description: `this is supposed to be a large discription of this book but I'll keep it short for now`},
        
        {title: `How to Create a Mind`, author: `Ray Kurzweil`, publisher: `Manning Publications Company, 2016`, year: '2012', cover_url: `https://bookr-site.netlify.com/imgs/books/how-to-create-a-mind.jpg`, short_description: `Learn about AI`, full_description: `this is supposed to be a large discription of this book but I'll keep it short for now`},

        {title: `Vagabonding`, author: `Rolf Potts`, publisher: `Manning Publications Company, 2016`, year: '2002', cover_url: `https://i5.walmartimages.com/asr/c60c0a4e-d6c2-4c1a-8723-2bc741f76828_1.b05e65d2e1b21af21f567689c5c5940f.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF`, short_description: `traveling the road less taken`, full_description: `this is supposed to be a large discription of this book but I'll keep it short for now`},

        {title: `Introduction to Korean history and culture =`, author: `Andrew C. Nahm`, publisher: `Hollym, 1993`, year: '1993', cover_url: `https://bookr-site.netlify.com/imgs/books/introduction-to-korean-history-and-culture.jpg`, short_description: `Learn about korean culture and history`, full_description: `this is supposed to be a large discription of this book but I'll keep it short for now`},
        
          {
            title: "Born a Crime",
            author: "Trevor Noah",
            publisher: "Spiegel & Grau",
            year: "2016",
            cover_url: "https://bookr-site.netlify.com/imgs/books/born-a-crime.jpg",
            short_description: "Trevor Noah's unlikely path from apartheid South Africa to the desk of The Daily Show began with a criminal act: his birth.",
            full_description: "Trevor Noah's unlikely path from apartheid South Africa to the desk of The Daily Show began with a criminal act: his birth. Trevor was born to a white Swiss father and a black Xhosa mother at a time when such a union was punishable by five years in prison. Living proof of his parents' indiscretion, Trevor was kept mostly indoors for the earliest years of his life, bound by the extreme and often absurd measures his mother took to hide him from a government that could, at any moment, steal him away. Finally liberated by the end of South Africa's tyrannical white rule, Trevor and his mother set forth on a grand adventure, living openly and freely and embracing the opportunities won by a centuries-long struggle.",
          },
          {
            title: "Hitchhiker's Guide",
            author: "Douglas Adams, Eoin Colfer",
            publisher: "Pan Books",
            year: "1978",
            cover_url: "https://bookr-site.netlify.com/imgs/books/hitchhikers-guide.jpg",
            short_description: "The Hitchhiker's Guide to the Galaxy is the first of five books in the Galaxy comedy science fiction",
            full_description: "The Hitchhiker's Guide to the Galaxy is the first of five books in the Hitchhiker's Guide to the Galaxy comedy science fiction trilogy by Douglas Adams. The novel is an adaptation of the first four parts of Adams' radio series of the same name. The novel was first published in London on 12 October 1979.",
          },
          {
            title: "The Catcher in the Rye",
            author: "J. D. Salinger",
            publisher: "Little, Brown and Company",
            year: "1951",
            cover_url: "https://bookr-site.netlify.com/imgs/books/the-catcher-in-the-rye.jpg",
            short_description: "The Catcher in the Rye is a story partially published in serial form in 1945.",
            full_description: "The Catcher in the Rye is a story by J. D. Salinger, partially published in serial form in 1945–1946 and as a novel in 1951. A classic novel originally published for adults, it has since become popular among adolescent readers for its themes of angst and alienation.",
          },
          {
            title: "Pride and Prejudice",
            author: "Jane Austen",
            publisher: "Thomas Egerton",
            year: "1813",
            cover_url: "https://bookr-site.netlify.com/imgs/books/pride-and-prejudice.jpg",
            short_description: "Pride and Prejudice is an 1813 romantic novel by Jane Austen. ",
            full_description: "Pride and Prejudice is an 1813 romantic novel by Jane Austen. It charts the emotional development of the protagonist Elizabeth Bennet, who learns the error of making hasty judgments and comes to appreciate the difference between the superficial and the essential.",
          },
          {
            title: "The Lion and the Mouse",
            author: "Aesop",
            publisher: "Aesop",
            year: "2009",
            cover_url: "https://bookr-site.netlify.com/imgs/books/the-lion-and-the-mouse.jpg",
            short_description: "The Lion and the Mouse is one of Aesop's Fables, numbered 150 in the Perry Index.",
            full_description: "The Lion and the Mouse is one of Aesop's Fables, numbered 150 in the Perry Index. There are also Eastern variants of the story, all of which demonstrate mutual dependence regardless of size or status. In the Renaissance the fable was provided with a sequel condemning social ambition.",
          },
          {
            title: "Aesop's Fables",
            author: "Aesop",
            publisher: "Aesop",
            year: "1983",
            cover_url: "https://bookr-site.netlify.com/imgs/books/aesop-fables.jpg",
            short_description: "Aesop's Fables, or the Aesopica, is a collection of fables credited to Aesop.",
            full_description: "Aesop's Fables, or the Aesopica, is a collection of fables credited to Aesop, a slave and storyteller believed to have lived in ancient Greece between 620 and 564 BCE.",
          },
          {
            title: "Go Tell it on the Mountain",
            author: "James Baldwin",
            publisher: "Vintage",
            year: "1924",
            cover_url:"https://bookr-site.netlify.com/imgs/books/go-tell-it-on-the-mountain.jpg",
            short_description: "On The Mountain, first published in 1953, is Baldwin's first major work, a novel that has established itself as an American classic.",
            full_description: "On The Mountain, first published in 1953, is Baldwin's first major work, a novel that has established itself as an American classic. With lyrical precision, psychological directness, resonating symbolic power, and a rage that is at once unrelenting and compassionate, Baldwin chronicles a fourteen-year-old boy's discovery of the terms of his identity as the stepson of the minister of a storefront Pentecostal church in Harlem one Saturday in March of 1935.",
          },
          {
            title: "The Unbearable Lightness of Being",
            author: "Milan Kundera",
            publisher: "Harper Perennial Modern Classics",
            year: "2009",
            cover_url:"https://bookr-site.netlify.com/imgs/books/the-unbearable-lightness-of-being.jpg",
            short_description: "Milan Kundera tells the story of a young woman in love with a man torn between his love for her.",
            full_description: "In The Unbearable Lightness of Being, Milan Kundera tells the story of a young woman in love with a man torn between his love for her and his incorrigible womanizing and one of his mistresses and her humbly faithful lover. This magnificent novel juxtaposes geographically distant places; brilliant and playful reflections; and a variety of styles to take its place as perhaps the major achievement of one of the world's truly great writers.",
          }
      ]);
    });
};
