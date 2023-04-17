'use client';

import Product from 'src/components/product/Product';
import { fetchProductById } from 'src/libs/graphql/requests';

export default function ProductPage({ params }: any) {
  const { id } = params;
  const { data, isLoading, error } = fetchProductById(id);

  return (
    <div>
      <Product />
      <pre>{JSON.stringify({ isLoading, data, error }, null, 2)}</pre>
      {/* <ProductMainPreview />   */}
    </div>
  );
}
