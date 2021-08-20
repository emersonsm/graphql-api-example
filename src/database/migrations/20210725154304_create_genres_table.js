exports.up = (knex) => {
    return knex.schema.createTable('Genres', (table) => {
        table.increments('Id').primary();
        table.string('Name').notNullable();
        table.timestamp('CreatedAt').defaultTo(knex.fn.now());
        table.timestamp('UpdatedAt').defaultTo(knex.fn.now());
    });
};

exports.down = (knex) => {
    return knex.schema.dropTable('Genres');
};
