exports.up = (knex) => {
    return knex.schema.createTable('MoviesGenres', (table) => {
        table.increments('id').primary();
        table.integer('MovieId').unsigned().notNullable();
        table.integer('GenreId').unsigned().notNullable();
        table.timestamp('CreatedAt').defaultTo(knex.fn.now());
        table.timestamp('UpdatedAt').defaultTo(knex.fn.now());

        table.foreign('GenreId').references('Id').inTable('Genres')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.foreign('MovieId').references('Id').inTable('Movies')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
};

exports.down = (knex) => {
    return knex.schema.dropTable('MoviesGenres');
};
