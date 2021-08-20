import { resolvers as movies } from './movies.mjs';
import { resolvers as genres } from './genres.mjs';

export const resolvers = [ { ...movies }, { ...genres } ];
