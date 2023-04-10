import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

let apolloClient: ApolloClient<any> = new ApolloClient({
  uri: 'https://model-store.saleor.cloud/graphql/',
  cache: new InMemoryCache(),
});

export default apolloClient;
