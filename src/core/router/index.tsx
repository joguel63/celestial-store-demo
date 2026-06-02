import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box, CircularProgress } from '@mui/material'
import { MainLayout } from '@/core/layouts/mainLayout'
import { ROUTES } from '@/core/enums/routes'

const LandingModule = lazy(() => import('@/modules/landing'))
const StablesModule = lazy(() => import('@/modules/stables'))
const SuppliesModule = lazy(() => import('@/modules/supplies'))
const GuildModule = lazy(() => import('@/modules/guild'))

const routerBasename = import.meta.env.BASE_URL === '/'
  ? undefined
  : import.meta.env.BASE_URL.replace(/\/$/, '')

const PageFallback = () => (
  <Box
    sx={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      bgcolor: 'background.default',
    }}
  >
    <CircularProgress sx={{ color: 'primary.main' }} />
  </Box>
)

export const AppRouter = () => (
  <BrowserRouter basename={routerBasename}>
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path={ROUTES.HOME}
          element={
            <Suspense fallback={<PageFallback />}>
              <LandingModule />
            </Suspense>
          }
        />
        <Route
          path={`${ROUTES.STABLES}/*`}
          element={
            <Suspense fallback={<PageFallback />}>
              <StablesModule />
            </Suspense>
          }
        />
        <Route
          path={`${ROUTES.SUPPLIES}/*`}
          element={
            <Suspense fallback={<PageFallback />}>
              <SuppliesModule />
            </Suspense>
          }
        />
        <Route
          path={`${ROUTES.GUILD}/*`}
          element={
            <Suspense fallback={<PageFallback />}>
              <GuildModule />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
)
