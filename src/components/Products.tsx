import { fetchProducts } from 'src/libs/graphql/requests';

export default function Products() {
  const { data, isLoading } = fetchProducts();

  return (
    <div>
      Products
      <pre>{JSON.stringify({ isLoading, data }, null, 2)}</pre>
    </div>
  );
}
