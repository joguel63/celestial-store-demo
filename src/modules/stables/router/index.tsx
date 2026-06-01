import { Route, Routes } from 'react-router-dom'
import { StablesPage } from '../pages/stablesPage'

export const StablesModule = () => (
  <Routes>
    <Route index element={<StablesPage />} />
  </Routes>
)
