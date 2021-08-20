exports.seed = (knex) => {
    return knex('MoviesGenres').del().then(() => {
        return knex('MoviesGenres').insert([
            {
                MovieId: 1,
                GenreId: 1,
            },
            {
                MovieId: 1,
                GenreId: 2,
            },
            {
                MovieId: 2,
                GenreId: 3,
            },
            {
                MovieId: 2,
                GenreId: 4,
            },
            {
                MovieId: 2,
                GenreId: 5,
            },
            {
                MovieId: 3,
                GenreId: 3,
            },
            {
                MovieId: 3,
                GenreId: 4,
            },
            {
                MovieId: 4,
                GenreId: 6,
            },
            {
                MovieId: 4,
                GenreId: 1,
            },
            {
                MovieId: 5,
                GenreId: 4,
            },
            {
                MovieId: 5,
                GenreId: 7,
            },
            {
                MovieId: 5,
                GenreId: 1,
            },
            {
                MovieId: 6,
                GenreId: 9,
            },
            {
                MovieId: 6,
                GenreId: 1,
            },
            {
                MovieId: 6,
                GenreId: 10,
            },
            {
                MovieId: 7,
                GenreId: 3,
            },
            {
                MovieId: 7,
                GenreId: 4,
            },
            {
                MovieId: 8,
                GenreId: 11,
            },
            {
                MovieId: 8,
                GenreId: 8,
            },
            {
                MovieId: 9,
                GenreId: 12,
            },
            {
                MovieId: 9,
                GenreId: 1,
            },
            {
                MovieId: 9,
                GenreId: 4,
            },
            {
                MovieId: 10,
                GenreId: 6,
            },
            {
                MovieId: 10,
                GenreId: 2,
            },
            {
                MovieId: 10,
                GenreId: 10,
            },
            {
                MovieId: 11,
                GenreId: 13,
            },
            {
                MovieId: 11,
                GenreId: 6,
            },
            {
                MovieId: 11,
                GenreId: 4,
            },
            {
                MovieId: 12,
                GenreId: 3,
            },
            {
                MovieId: 12,
                GenreId: 4,
            },
            {
                MovieId: 13,
                GenreId: 3,
            },
            {
                MovieId: 13,
                GenreId: 4,
            },
            {
                MovieId: 13,
                GenreId: 8,
            },
            {
                MovieId: 14,
                GenreId: 9,
            },
            {
                MovieId: 14,
                GenreId: 6,
            },
            {
                MovieId: 14,
                GenreId: 1,
            },
            {
                MovieId: 15,
                GenreId: 13,
            },
            {
                MovieId: 15,
                GenreId: 3,
            },
            {
                MovieId: 15,
                GenreId: 4,
            },
        ]);
    });
};
