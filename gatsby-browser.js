import React from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { AnimateSharedLayout } from "framer-motion"

const twentyFourHours = 1000 * 60 * 60 * 24

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: twentyFourHours,
    },
  },
})

export const wrapPageElement = ({ element }) => (
  <QueryClientProvider client={queryClient}>
    <AnimateSharedLayout type="crossfade">{element}</AnimateSharedLayout>
  </QueryClientProvider>
)
