/* eslint-env jest */

import request from 'supertest';
import { default as server } from '../../src/index.mjs';

describe('Testing Express', () => {
    afterEach(() => {
        server.close();
    });

    it('Should status 404 every route.', () => {
        request(server)
            .get('/foo/bar')
            .expect(404);
    });
});
