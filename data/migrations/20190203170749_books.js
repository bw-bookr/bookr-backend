
exports.up = function(knex, Promise) {
  return knex.schema.createTable("books", tbl => {
    tbl.increments();

    tbl.string('title', 255).notNullable();

    tbl.string('author', 255).notNullable();

    tbl.string('publisher', 255).notNullable();

    tbl.string('year', 20);

    tbl.string('cover_url');

    tbl.string('short_description', 255);

    tbl.string('full_description');

    tbl.timestamps(true, true);
  });
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("books");
};