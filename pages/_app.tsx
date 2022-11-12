import type { AppProps } from 'next/app';
import GlobalStyle from '../src/styles/GlobalStyle';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <GlobalStyle />
      </QueryClientProvider>
    </>
  );
}
