import { client, connection } from './knexfile.mjs';
import knex from 'knex';

export const db = knex({ client, connection });
