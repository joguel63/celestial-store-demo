import { Route, Routes } from 'react-router-dom'
import { SuppliesPage } from '../pages/suppliesPage'

export const SuppliesModule = () => (
  <Routes>
    <Route index element={<SuppliesPage />} />
  </Routes>
)
