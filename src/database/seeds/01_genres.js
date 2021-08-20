exports.seed = (knex) => {
    return knex('Genres').del().then(() => {
        return knex('Genres').insert([
            { Name: 'Comedy' },
            { Name: 'Fantasy' },
            { Name: 'Crime' },
            { Name: 'Drama' },
            { Name: 'Music' },
            { Name: 'Adventure' },
            { Name: 'History' },
            { Name: 'Thriller' },
            { Name: 'Animation' },
            { Name: 'Family' },
            { Name: 'Mystery' },
            { Name: 'Biography' },
            { Name: 'Action' },
            { Name: 'Film-Noir' },
            { Name: 'Romance' },
            { Name: 'Sci-Fi' },
            { Name: 'War' },
            { Name: 'Western' },
            { Name: 'Horror' },
            { Name: 'Musical' },
            { Name: 'Sport' },
        ]);
    });
};
