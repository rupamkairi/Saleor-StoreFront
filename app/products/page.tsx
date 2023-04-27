'use client';

import ProductCollection from 'src/components/product-collection/ProductCollection';
import { fetchProducts } from 'src/libs/graphql/requests';

export default function ProductsPage() {
  const { data, isLoading } = fetchProducts();

  return (
    <div className="container mx-auto">
      <ProductCollection data={data?.products.edges} />
      {/* <pre>{JSON.stringify({ isLoading, data }, null, 2)}</pre> */}
    </div>
  );
}
