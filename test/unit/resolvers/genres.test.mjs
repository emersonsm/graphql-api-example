/* eslint-env jest */

import { db } from '../../../src/database/index.mjs';
import { resolvers } from '../../../src/graphql/resolvers/genres.mjs';

describe('Testing Genres Resolvers:', () => {
    beforeAll((done) => {
        done();
    });

    afterAll((done) => {
        db.destroy();
        done();
    });

    it('Should execute genres query for given valid arguments.', async () => {
        const args = {
            Name: 'Drama',
        };
        const response = await resolvers.Query.genres(null, args);

        expect(response).toBeType('array');
        expect(response.errors).toBeUndefined();
        expect(response.length).toBe(1);
        expect(response[0].Name).toBe(args.Name);
    });

    it('Should clean arguments and execute genres query, bringing all the results.', async () => {
        const args = {
            Name: undefined,
        };
        const response = await resolvers.Query.genres(null, args);

        expect(response).toBeType('array');
        expect(response.errors).toBeUndefined();
        expect(response.length).toBeGreaterThanOrEqual(1);
    });

    it('Should execute createGenre mutation and return result.', async () => {
        const args = {
            Name: 'Test Genre',
        };
        const response = await resolvers.Mutation.createGenre(null, args);

        expect(response).toBeType('array');
        expect(response.errors).toBeUndefined();
        expect(response.length).toBe(1);
        expect(response[0].Name).toBe(args.Name);
    });

    it('Should execute updateGenre mutation and return result.', async () => {
        const args = {
            Id: 2,
            Name: 'Test Genre',
        };
        const response = await resolvers.Mutation.updateGenre(null, args);

        expect(response).toBeType('array');
        expect(response.errors).toBeUndefined();
        expect(response.length).toBe(1);
        expect(response[0].Name).toBe(args.Name);
    });

    it('Should execute deleteGenre mutation and return result.', async () => {
        const args = {
            Id: 1,
        };
        const response = await resolvers.Mutation.deleteGenre(null, args);

        expect(response.errors).toBeUndefined();
        expect(response).toBeType('number');
    });
});
