import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from '@/core/layouts/mainLayout'
import { LandingPage } from '@/modules/landing/pages/landingPage'

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
