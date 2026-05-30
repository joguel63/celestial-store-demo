import { Outlet } from 'react-router-dom'
import { Navbar } from '@/modules/landing/components/navbar'
import { Footer } from '@/modules/landing/components/footer'

export const MainLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
)
