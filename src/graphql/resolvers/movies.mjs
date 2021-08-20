import { db } from '../../database/index.mjs';
import { prepareQuery } from '../../../src/helpers/index.mjs';

export const resolvers = {
    Query: {
        movies: (_parent, args) => {
            const likeFields = [ 'Title', 'Director', 'Plot' ];
            const model = db({ m: 'Movies' })
                .select(db.raw(`
                    GROUP_CONCAT(g.Name) as 'Genres',
                    m.Id,
                    m.Title,
                    m.Year,
                    m.Director,
                    m.Plot
                `))
                .join({ mg: 'MoviesGenres' }, 'm.Id', '=', 'mg.MovieId')
                .join({ g: 'Genres' }, 'mg.GenreId', '=', 'g.Id')
                .groupBy('m.Id', 'm.Title', 'm.Year', 'm.Director', 'm.Plot');

            return prepareQuery(model, args, likeFields).then((rows) => {
                rows.map((row) => row.Genres = {
                    Name: row.Genres,
                });

                return rows;
            });
        },
    },

    Mutation: {
        createMovie: async (_parent, args) => {
            const id = await db('Movies').insert(args);

            return prepareQuery(db('Movies'), { Id: id });
        },

        updateMovie: (_parent, args) => {
            return db('Movies').where({ Id: args.Id }).update(args).then(() => {
                return prepareQuery(db('Movies'), { Id: args.Id });
            });
        },

        deleteMovie: async (_parent, { Id }) => db('Movies').where({ Id: Id }).del(),
    },
};
