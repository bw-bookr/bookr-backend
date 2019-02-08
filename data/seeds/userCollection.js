const bcrypt = require('bcryptjs');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'nomadic', password: bcrypt.hashSync("pass", 12)},
        {username: 'mutiny', password: bcrypt.hashSync("pass", 12)},
        {username: 'expat', password: bcrypt.hashSync("pass", 12)},
        {username: 'hawk', password: bcrypt.hashSync("pass", 12)},
        {username: 'wolfpack', password: bcrypt.hashSync("pass", 12)},
        {username: 'viking', password: bcrypt.hashSync("pass", 12)},
        {username: 'shinobi', password: bcrypt.hashSync("pass", 12)},
      ]);
    });
};
