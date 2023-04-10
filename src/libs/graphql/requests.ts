import { useQuery } from 'react-query';
import apolloClient from './apollo-client';
import { gql } from '@apollo/client';

const query = gql`
  query ProductGetThreeElements {
    products(first: 3, channel: "default-channel") {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;

export function fetchProducts() {
  return useQuery('fetch-products', async () => {
    const { data } = await apolloClient.query({ query });
    return data;
  });
}
