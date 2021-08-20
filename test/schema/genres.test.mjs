/* eslint-env jest */

import { db } from '../../src/database/index.mjs';
import apolloTestServer from '../../src/apollo-test.mjs';
import { gql } from 'graphql-tag';

describe('Testing Genres Schema:', () => {
    let server;

    beforeAll((done) => {
        server = apolloTestServer();
        done();
    });

    afterAll((done) => {
        db.destroy();
        done();
    });

    it('Should pass if genres query is valid.', async () => {
        const response = await server.executeOperation({
            query: gql`
                query genres($Name: String) {
                    genres(Name: $Name) {
                        Name
                    }
                }
            `,
        });

        expect(response.errors).toBeUndefined();
        expect(response.data.genres).toBeType('array');
    });

    it('Should pass if createGenre mutation is valid.', async () => {
        const variables = {
            Name: 'Test Genre',
        };
        const response = await server.executeOperation({
            query: gql`
                mutation createGenre($Name: String!) {
                    createGenre(Name: $Name) {
                        Name
                    }
                }
            `,
            variables,
        });

        expect(response.errors).toBeUndefined();
        expect(response.data.createGenre).toBeType('array');
    });

    it('Should pass if updateGenre mutation is valid.', async () => {
        const variables = {
            Id: 1,
            Name: 'Test Genre',
        };
        const response = await server.executeOperation({
            query: gql`
                mutation updateGenre($Id: ID!, $Name: String) {
                    updateGenre(Id: $Id, Name: $Name) {
                        Name
                    }
                }
            `,
            variables,
        });

        expect(response.errors).toBeUndefined();
        expect(response.data.updateGenre).toBeType('array');
    });

    it('Should pass if deleteGenre mutation is valid.', async () => {
        const variables = {
            Id: 1,
        };
        const response = await server.executeOperation({
            query: gql`
                mutation deleteGenre($Id: ID!) {
                    deleteGenre(Id: $Id)
                }
            `,
            variables,
        });

        expect(response.errors).toBeUndefined();
        expect(response.data.deleteGenre).toBeType('number');
    });
});
