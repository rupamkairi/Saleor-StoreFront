import apolloClient from './apollo-client';
import { useQuery } from 'react-query';
import { gql } from '@apollo/client';

const fetchProductsQuery = gql`
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
    try {
      const { data } = await apolloClient.query({ query: fetchProductsQuery });
      return data;
    } catch (error) {
      throw error;
    }
  });
}

const fetchProductByIdQuery = gql`
  query ProductGetById($id: ID!) {
    product(id: $id) {
      id
      name
      description
      rating
      variants {
        id
        name
        pricing {
          price {
            currency
            gross {
              amount
            }
          }
        }
      }
    }
  }
`;

export function fetchProductById(id: string) {
  return useQuery('fetch-product-by-id', async () => {
    try {
      const { data } = await apolloClient.query({
        query: fetchProductByIdQuery,
        variables: { id },
      });

      return data;
    } catch (error) {
      throw error;
    }
  });
}
