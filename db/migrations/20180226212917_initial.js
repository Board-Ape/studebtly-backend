exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
      table.increments('id').primary();
      table.string('username');
      table.string('password');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('colleges', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.string('tuition_in_state');
      table.string('tuition_out_of_state');
      table.string('state');
      table.string('city');
      table.string('zip');
      table.string('url');
      table.integer('user_id').unsigned()
      table.foreign('user_id')
        .references('users.id');

      table.timestamps(true, true);
    })
  ])
};


exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('colleges'),
    knex.schema.dropTable('users')
  ]);
};
