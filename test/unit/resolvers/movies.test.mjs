/* eslint-env jest */

import { db } from '../../../src/database/index.mjs';
import { resolvers } from '../../../src/graphql/resolvers/movies.mjs';

describe('Testing Movies Resolvers:', () => {
    beforeAll((done) => {
        done();
    });

    afterAll((done) => {
        db.destroy();
        done();
    });

    it('Should execute movies query for given valid arguments.', async () => {
        const args = {
            Title: 'to',
            Director: 'nolan',
        };
        const response = await resolvers.Query.movies(null, args);

        expect(response).toBeType('array');
        expect(response.errors).toBeUndefined();
        expect(response.length).toBe(1);
        expect(response[0].Name).toBe(args.name);
    });

    it('Should clean arguments and execute movies query, bringing all the results.', async () => {
        const args = {
            Title: undefined,
        };
        const response = await resolvers.Query.movies(null, args);

        expect(response).toBeType('array');
        expect(response.errors).toBeUndefined();
        expect(response.length).toBeGreaterThanOrEqual(1);
    });

    it('Should execute createMovie mutation and return result.', async () => {
        const args = {
            Title: 'Test Movie',
            Year: 1999,
            Director: 'John Doe',
            Plot: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Quisque tincidunt turpis sed fringilla lacinia. Cras euismod tortor nec ullamcorper
                molestie. Vivamus in nulla nisi. Nullam scelerisque in leo ut scelerisque.
                In ac elementum tellus, id interdum felis. In vestibulum non nisl sed cursus.`,
        };
        const response = await resolvers.Mutation.createMovie(null, args);

        expect(response).toBeType('array');
        expect(response.errors).toBeUndefined();
        expect(response.length).toBe(1);
        expect(response[0].Title).toBe(args.Title);
        expect(response[0].Year).toBe(args.Year);
        expect(response[0].Director).toBe(args.Director);
        expect(response[0].Plot).toBe(args.Plot);
    });

    it('Should execute updateMovie mutation and return result.', async () => {
        const args = {
            Id: 2,
            Title: 'Test Movie',
        };
        const response = await resolvers.Mutation.updateMovie(null, args);

        expect(response).toBeType('array');
        expect(response.errors).toBeUndefined();
        expect(response.length).toBe(1);
        expect(response[0].Title).toBe(args.Title);
    });

    it('Should execute deleteMovie mutation and return result.', async () => {
        const args = {
            Id: 1,
        };
        const response = await resolvers.Mutation.deleteMovie(null, args);

        expect(response.errors).toBeUndefined();
        expect(response).toBeType('number');
    });
});
