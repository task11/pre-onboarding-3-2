import type { AppProps } from 'next/app';
import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import ProtectRoute from '../src/ProtectRoute';
import store from '../src/store';
import GlobalStyle from '../src/styles/GlobalStyle';

declare module 'react-query/types/react/QueryClientProvider' {
  interface QueryClientProviderProps {
    children?: React.ReactNode;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ProtectRoute>
          <Component {...pageProps} />
          <GlobalStyle />
        </ProtectRoute>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </Provider>
  );
}
