exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('create_favorites', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.string('tuition_in_state');
      table.string('tuition_out_of_state');
      table.string('state');
      table.string('city');
      table.string('zip');
      table.string('url');

      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('create_favorites')
  ]); //end promise.all
};
