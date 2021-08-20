import { db } from '../../database/index.mjs';
import { prepareQuery } from '../../../src/helpers/index.mjs';

export const resolvers = {
    Query: {
        genres: async (_parent, args) => {
            const likeFields = ['Name'];

            return prepareQuery(db('Genres'), args, likeFields);
        },
    },

    Mutation: {
        createGenre: async (_parent, args) => {
            const id = await db('Genres').insert(args);

            return prepareQuery(db('Genres'), { Id: id });
        },

        updateGenre: (_parent, args) => {
            return db('Genres').where({ Id: args.Id }).update(args).then(() => {
                return prepareQuery(db('Genres'), { Id: args.Id });
            });
        },

        deleteGenre: async (_parent, { Id }) => db('Genres').where({ Id: Id }).del(),
    },
};
