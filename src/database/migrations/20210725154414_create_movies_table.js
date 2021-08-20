exports.up = (knex) => {
    return knex.schema.createTable('Movies', (table) => {
        table.increments('Id').primary();
        table.string('Title').notNullable();
        table.integer('Year').notNullable();
        table.string('Director').notNullable();
        table.text('Plot').notNullable();
        table.timestamp('CreatedAt').defaultTo(knex.fn.now());
        table.timestamp('UpdatedAt').defaultTo(knex.fn.now());
    });
};

exports.down = (knex) => {
    return knex.schema.dropTable('Movies');
};
