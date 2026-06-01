import { Route, Routes } from 'react-router-dom'
import { GuildPage } from '../pages/guildPage'

export const GuildModule = () => (
  <Routes>
    <Route index element={<GuildPage />} />
  </Routes>
)
