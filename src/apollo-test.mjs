import { ApolloServer } from 'apollo-server-express';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { resolvers } from './graphql/resolvers/index.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const typeDefs = readFileSync(join(__dirname, './graphql/types.graphql')).toString('utf-8');

export default function() {
    return new ApolloServer({
        typeDefs,
        resolvers,
        mocks: true,
    });
}
