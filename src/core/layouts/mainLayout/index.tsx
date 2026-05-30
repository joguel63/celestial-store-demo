import { Outlet } from 'react-router-dom'
import { Navbar } from '@/core/components/navbar'
import { Footer } from '@/core/components/footer'

export const MainLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
)
