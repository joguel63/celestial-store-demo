import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Navbar } from '@/core/components/navbar'
import { Footer } from '@/core/components/footer'

export const MainLayout = () => {
  const { t } = useTranslation()

  return (
    <>
      <Box
        component="a"
        href="#main-content"
        sx={{
          position: 'absolute',
          top: -9999,
          left: -9999,
          zIndex: 9999,
          px: 3,
          py: 2,
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          fontWeight: 700,
          textDecoration: 'none',
          '&:focus': {
            top: 8,
            left: 8,
          },
        }}
      >
        {t('a11y.skipToContent')}
      </Box>
      <Navbar />
      <Box component="main" id="main-content">
        <Outlet />
      </Box>
      <Footer />
    </>
  )
}
