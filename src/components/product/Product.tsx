import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Product({ data }: any) {
  const [no, setNo] = useState(1);

  useEffect(() => {
    console.log(no);
  }, [no]);

  return (
    <section>
      <div className="relative mx-auto max-w-screen-xl px-4 py-8">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            <img
              alt="Les Paul"
              src="https://loremflickr.com/cache/resized/65535_49106573593_d53d798540_z_360_360_nofilter.jpg"
              className="aspect-square w-full rounded-xl object-cover"
            />

            <div className="grid grid-cols-2 gap-4 lg:mt-4"></div>
          </div>

          <div className="sticky top-0">
            <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
              Some Tag
            </strong>

            <div className="mt-8 flex justify-between">
              <div className="max-w-[35ch] space-y-2">
                <h1 className="text-xl font-bold sm:text-2xl">{data?.name} </h1>
                <p className="text-sm">Highest Rated Product</p>
              </div>
            </div>

            <div className="mt-4">
              <div className="prose max-w-none">
                {/* <p>{data?.description}</p> */}
                <p>Description</p>
              </div>
            </div>

            <form className="mt-8">
              <fieldset>
                <legend className="mb-2 text-sm font-medium">Variants</legend>
                <div className="flex flex-wrap gap-1">
                  {data?.variants?.map((variant: any) => (
                    <label
                      key={variant.id}
                      htmlFor={variant.id}
                      className="cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="color"
                        id={variant.id}
                        className="peer sr-only"
                      />

                      <div className="group inline-block rounded-full border px-6 py-1 text-center text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        <div>{variant.name}</div>
                        <div className="text-base">
                          {variant.pricing.price.gross.amount}{' '}
                          {variant.pricing.price.gross.currency}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="mt-8 flex gap-4">
                <div>
                  <label htmlFor="quantity" className="sr-only">
                    Qty
                  </label>

                  <input
                    type="number"
                    id="quantity"
                    value={no}
                    className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                    onChange={(e: any) => setNo(e.target.value)}
                  />
                </div>

                <Link
                  href={`/checkout`}
                  className="block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                >
                  Add to Cart
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
