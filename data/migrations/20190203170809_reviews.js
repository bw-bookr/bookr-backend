exports.up = function(knex, Promise) {
  return knex.schema.createTable("reviews", tbl => {
    tbl.increments();

    tbl.integer('user_id').unsigned().references('id').inTable('users');
    tbl.integer('book_id').unsigned().references('id').inTable('books');
    tbl.unique(['user_Id', 'book_id']);

    tbl.integer('rating').notNullable();


    tbl.string('review');

    tbl.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("reviews");
};
