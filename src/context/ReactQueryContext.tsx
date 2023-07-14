'use client';
import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode, useState } from 'react';

export default function ReactQueryContext({
  children,
}: {
  children: ReactNode;
}) {
  const options: QueryClientConfig = {
    defaultOptions: {
      queries: {
        staleTime: 4000,
        refetchOnMount: true,
      },
    },
  };
  const [client, setClient] = useState(new QueryClient(options));
  //const client = new QueryClient(options);
  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
