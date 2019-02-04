
exports.up = function(knex, Promise) {
  return knex.schema.createTable("books", tbl => {
    tbl.increments();

    tbl.string('title', 255).notNullable();

    tbl.string('auther', 255).notNullable();

    tbl.string('publisher', 255);

    tbl.string('cover_location');

    tbl.string('small_discription', 255);

    tbl.string('large_discription');

    tbl.timestamps(true, true);
  });
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("books");
};