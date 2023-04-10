import { ApolloProvider } from '@apollo/client';
import { Fragment, ReactNode } from 'react';
import { QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import apolloClient from 'src/libs/graphql/apollo-client';
import queryClient from 'src/libs/quey-client';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
      </QueryClientProvider>
    </Fragment>
  );
}
