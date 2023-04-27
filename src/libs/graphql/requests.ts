import apolloClient from './apollo-client';
import { useQuery } from 'react-query';
import { gql } from '@apollo/client';

const fetchProductsQuery = gql`
  query ProductGetFiveElements {
    products(first: 5, channel: "default-channel") {
      edges {
        node {
          id
          name
          variants {
            id
            name
            pricing {
              price {
                gross {
                  currency
                  amount
                }
              }
            }
          }
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
            gross {
              currency
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

const createCheckoutMutation = gql`
  mutation CheckoutCreate($email: String!, $lines: [CheckoutLineInput!]!) {
    checkoutCreate(
      input: { channel: "default-channel", email: $email, lines: $lines }
    ) {
      checkout {
        token
      }
      errors {
        field
        code
      }
    }
  }
`;

// finalize order with shipping address billing address & shipping method

export async function createCheckout(data: any) {
  const lines = data.products.map((el: any) => el.variant);
  // console.log({ data, email: data.customer.email, lines });

  // return useQuery('create-checkout', async () => {
  try {
    const result = await apolloClient.mutate({
      mutation: createCheckoutMutation,
      variables: {
        email: data.customer.email,
        lines,
      },
    });

    console.log({ result });
  } catch (error) {
    // console.log(error);
    throw error;
  }
  // });
}
