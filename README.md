## tanstack-query test with nextjs's router.refresh

branch **main** is well working

branch **not-working-querychche** is not working

## two branch difference is below

difference is to wrap query-client with useState

branch **main**

```typescript
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

  // if state is not used is not to work query-cache
  //const client = new QueryClient(options);
  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
```

branch **not-working-querychche**

```typescript
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

  //const [client, setClient] = useState(new QueryClient(options));

  // if state is not used is not to work query-cache
  const client = new QueryClient(options);
  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
```
