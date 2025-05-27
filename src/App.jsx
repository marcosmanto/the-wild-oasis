import Account from '@/pages/Account'
import Bookings from '@/pages/Bookings'
import Cabins from '@/pages/Cabins'
import Dashboard from '@/pages/Dashboard'
import Login from '@/pages/Login'
import PageNotFound from '@/pages/PageNotFound'
import Settings from '@/pages/Settings'
import NewUsers from '@/pages/Users'
import { colors } from '@/styles/constants'
import GlobalStyles from '@/styles/GlobalStyles'
import AppLayout from '@/ui/AppLayout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { queryConfig, appConfig } from '@/config/env'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: queryConfig.staleTime,
      cacheTime: queryConfig.cacheTime,
      refetchOnWindowFocus: queryConfig.refetchOnWindowFocus,
      retry: queryConfig.retry,
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000)
    },
    mutations: {
      retry: 1,
      retryDelay: 1000
    }
  }
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {appConfig.enableDevtools && <ReactQueryDevtools initialIsOpen={false} />}

      <GlobalStyles />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/cabins" element={<Cabins />} />
            <Route path="/users" element={<NewUsers />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/account" element={<Account />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000
          },
          error: {
            duration: 5000
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: colors['grey-0'],
            color: colors['grey-700']
          }
        }}
      />
    </QueryClientProvider>
  )
}

export default App
