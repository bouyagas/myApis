exports.up = knex => {
  return knex.schema.createTable('person', table => {
    table
      .increments('id')
      .unsigned()
      .primary();
    table.string('name').notNullable();
    table.string('gender').notNullable();
    table.integer('age').notNullable();
  });
};

exports.down = knex => {
  return knex.schema.dropTable('person');
};
