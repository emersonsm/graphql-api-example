/* eslint-env jest */

import { db } from '../../../src/database/index.mjs';
import { prepareQuery } from '../../../src/helpers/index.mjs';

describe('Testing Helpers:', () => {
    beforeAll((done) => {
        done();
    });

    afterAll((done) => {
        db.destroy();
        done();
    });

    it('Should prepare query for given valid arguments.', async () => {
        const model = db('Genres');
        const args = {
            Name: 'Drama',
        };
        const response = await prepareQuery(model, args);

        expect(response).toBeType('array');
        expect(response.length).toBe(1);
        expect(response[0].Name).toBe(args.Name);
    });

    it('Should prepare query for invalid arguments.', async () => {
        const model = db('Genres');
        const args = {
            Name: undefined,
        };
        const response = await prepareQuery(model, args);

        expect(response).toBeType('array');
        expect(response.length).toBeGreaterThanOrEqual(1);
    });

    it('Should prepare query for valid arguments with like fields.', async () => {
        const model = db('Genres');
        const likeFields = ['Name'];
        const args = {
            Name: 'ama',
        };
        const response = await prepareQuery(model, args, likeFields);

        expect(response).toBeType('array');
        expect(response.length).toBe(1);
    });
});
