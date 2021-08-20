/* eslint-env jest */

import { db } from '../../src/database/index.mjs';
import apolloTestServer from '../../src/apollo-test.mjs';
import { gql } from 'graphql-tag';

describe('Testing Movies Schema:', () => {
    let server;

    beforeAll((done) => {
        server = apolloTestServer();
        done();
    });

    afterAll((done) => {
        db.destroy();
        done();
    });

    it('Should pass if movies query is valid.', async () => {
        const response = await server.executeOperation({
            query: gql`
                query movies($Title: String, $Year: Int, $Director: String, $Plot: String) {
                    movies(Title: $Title, Year: $Year, Director: $Director, Plot: $Plot) {
                        Title
                        Year
                        Director
                        Plot
                        Genres {
                            Name
                        }
                    }
                }
            `,
        });

        expect(response.errors).toBeUndefined();
        expect(response.data.movies).toBeType('array');
    });

    it('Should pass if createMovie mutation is valid.', async () => {
        const variables = {
            Title: 'Test Movie',
            Year: 1999,
            Director: 'John Doe',
            Plot: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Quisque tincidunt turpis sed fringilla lacinia. Cras euismod tortor nec ullamcorper
                molestie. Vivamus in nulla nisi. Nullam scelerisque in leo ut scelerisque.
                In ac elementum tellus, id interdum felis. In vestibulum non nisl sed cursus.`,
        };
        const response = await server.executeOperation({
            query: gql`
                mutation createMovie(
                    $Title: String!
                    $Year: Int!
                    $Director: String!
                    $Plot: String!
                ) {
                    createMovie(Title: $Title, Year: $Year, Director: $Director, Plot: $Plot) {
                        Title
                        Year
                        Director
                        Plot
                    }
                }
            `,
            variables,
        });

        expect(response.errors).toBeUndefined();
        expect(response.data.createMovie).toBeType('array');
    });

    it('Should pass if updateMovie mutation is valid.', async () => {
        const variables = {
            Id: 1,
            Title: 'Test Movie',
        };
        const response = await server.executeOperation({
            query: gql`
                mutation updateMovie($Id: ID!, $Title: String) {
                    updateMovie(Id: $Id, Title: $Title) {
                        Title
                    }
                }
            `,
            variables,
        });

        expect(response.errors).toBeUndefined();
        expect(response.data.updateMovie).toBeType('array');
    });

    it('Should pass if deleteMovie mutation is valid.', async () => {
        const variables = {
            Id: 2,
        };
        const response = await server.executeOperation({
            query: gql`
                mutation deleteMovie($Id: ID!) {
                    deleteMovie(Id: $Id)
                }
            `,
            variables,
        });

        expect(response.errors).toBeUndefined();
        expect(response.data.deleteMovie).toBeType('number');
    });
});
