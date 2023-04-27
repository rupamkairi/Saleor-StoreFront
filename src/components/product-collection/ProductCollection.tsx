import Link from 'next/link';
import React from 'react';

export default function ProductCollection({ data }: any) {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Product Collection
          </h2>
          <p className="mt-4 max-w-md text-gray-500">Description</p>
        </header>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data?.map((product: any) => (
            <li key={product?.node.id}>
              <Link
                href={`/product/${product?.node.id}`}
                className="group block overflow-hidden"
              >
                {/* <img src="" alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              /> */}
                <div className="relative bg-white pt-3">
                  <h3 className="text-lg group-hover:underline group-hover:underline-offset-4">
                    {product?.node.name}
                    <div className="text-xs">{product?.node.id}</div>
                  </h3>
                  <div className="mt-2">
                    {product?.node.variants?.length === 1 && (
                      <div className="tracking-wider">
                        {product?.node.variants.pricing.price.gross.amount}{' '}
                        {product?.node.variants.pricing.price.gross.currency}
                      </div>
                    )}
                    {product?.node.variants?.length > 1 && (
                      <>
                        <div className="tracking-wider">
                          {product?.node.variants[0].pricing.price.gross.amount}{' '}
                          {
                            product?.node.variants[0].pricing.price.gross
                              .currency
                          }
                        </div>
                        <div>
                          <div className="text-xs">Other options at</div>
                          <span className="text-sm tracking-wider">
                            {product?.node.variants
                              .slice(1)
                              .map(
                                (variant: any) =>
                                  variant.pricing.price.gross.amount +
                                  ' ' +
                                  variant.pricing.price.gross.currency,
                              )
                              .join(', ')}
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
