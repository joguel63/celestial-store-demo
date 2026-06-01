import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from '@/core/layouts/mainLayout'
import { LandingModule } from '@/modules/landing'
import { StablesModule } from '@/modules/stables'
import { SuppliesModule } from '@/modules/supplies'
import { GuildModule } from '@/modules/guild'

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingModule />} />
        <Route path="/stables" element={<StablesModule />} />
        <Route path="/supplies" element={<SuppliesModule />} />
        <Route path="/guild" element={<GuildModule />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
