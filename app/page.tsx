'use client';

import Products from 'src/components/Products';
import Providers from './providers';

export default function Page() {
  return (
    <Providers>
      <div>
        <div className="container mx-auto">
          <Products />
        </div>
      </div>
    </Providers>
  );
}
