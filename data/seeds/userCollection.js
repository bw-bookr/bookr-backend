
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'nomadic4life', password: '1234pass'},
        {username: 'tempUser', password: '1234pass'},
        {username: 'anotherTemp', password: '1234pass'},
      ]);
    });
};
