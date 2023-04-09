import { gql } from '@apollo/client';
import { useEffect } from 'react';
import { getClient } from 'src/libs/graphql/client';

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

export default function Products() {
  const client = getClient();

  useEffect(() => {
    (async () => {
      const result = await client.query({ query });
      console.log(result);
    })();
  }, []);

  return (
    <div>
      Products
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
}
