exports.up = function(knex, Promise) {
  return knex.schema.createTable("reviews", tbl => {
    tbl.increments();

    tbl.integer('user_id').unsigned().references('id').inTable('users').notNullable();
    tbl.integer('book_id').unsigned().references('id').inTable('books').notNullable();
    tbl.unique(['user_Id', 'book_id']);

    // tbl.string('username').references('username').inTable(users).notNullable

    tbl.integer('rating').notNullable();


    tbl.string('review');

    tbl.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("reviews");
};
