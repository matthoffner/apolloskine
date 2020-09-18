import { InMemoryCache, ApolloClient } from '@apollo/client';

import { resolvers, typeDefs, defaults } from './clientState';
import { GET_NOTES } from './queries';

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  resolvers,
  typeDefs,
});

cache.writeQuery({
  query: GET_NOTES,
  data: defaults,
});

export default client;
