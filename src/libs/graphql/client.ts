import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

let client: ApolloClient<any> | null = null;

export const getClient = () => {
  if (!client || typeof window === 'undefined') {
    client = new ApolloClient({
      uri: 'https://model-store.saleor.cloud/graphql/',
      cache: new InMemoryCache(),
    });
  }

  return client;
};
