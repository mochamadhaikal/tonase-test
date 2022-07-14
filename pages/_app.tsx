import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'

import Layout from "@components/section/Layout";
import '@styles/global.css'

const queryClient = new QueryClient()

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Layout>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </Layout>
  )
}
