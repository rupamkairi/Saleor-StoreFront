'use client';

import Product from 'src/components/product/Product';
import { createCheckout, fetchProductById } from 'src/libs/graphql/requests';

export default function ProductPage({ params }: any) {
  const { id } = params;
  const { data, isLoading, error } = fetchProductById(id);

  function placeOrder() {
    const _data = {
      products: [
        {
          id: data?.product?.id,
          variant: {
            quantity: 1,
            variantId: data?.product?.variants?.[0]?.id,
          },
        },
        {
          id: data?.product?.id,
          variant: {
            quantity: 1,
            variantId: data?.product?.variants?.[1]?.id,
          },
        },
      ],
      customer: {
        email: 'rupamkairi@hotmail.com',
      },
    };
    createCheckout(_data);
  }

  return (
    <div>
      <button
        className="rounded bg-gray-300 px-6 py-3 text-sm font-semibold"
        onClick={() => {
          placeOrder();
        }}
      >
        Create Checkout with {data?.product?.name}({data?.product?.id})
      </button>
      <Product />
      <pre>{JSON.stringify({ isLoading, data, error }, null, 2)}</pre>
      {/* <ProductMainPreview />   */}
    </div>
  );
}
