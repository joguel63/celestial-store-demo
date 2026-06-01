import { Route, Routes } from 'react-router-dom'
import { LandingPage } from '../pages/landingPage'

export const LandingModule = () => (
  <Routes>
    <Route index element={<LandingPage />} />
  </Routes>
)
