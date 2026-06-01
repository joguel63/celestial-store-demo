import { Box, Typography, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'

const styles = {
  section: {
    py: 16,
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    bgcolor: 'celestial.goldGlass',
  },
  container: {
    maxWidth: '1280px',
    mx: 'auto',
    px: { xs: '20px', md: '64px' },
    position: 'relative',
    textAlign: 'center',
  },
  inner: {
    maxWidth: '896px',
    mx: 'auto',
    borderTop: '1px solid',
    borderBottom: '1px solid',
    borderColor: 'celestial.goldVeil',
    py: 10,
  },
  title: {
    fontFamily: '"Playfair Display", serif',
    fontSize: { xs: '2rem', md: '4rem' },
    fontWeight: 700,
    lineHeight: { xs: 1.25, md: 1.125 },
    letterSpacing: '-0.02em',
    mb: 4,
  },
  description: {
    fontSize: '1.125rem',
    lineHeight: 1.56,
    color: 'text.secondary',
    mb: 6,
    maxWidth: '672px',
    mx: 'auto',
  },
  button: {
    px: 6,
    py: 2.5,
    fontSize: '1.125rem',
    letterSpacing: '0.2em',
    boxShadow: '0 0 30px rgba(242, 202, 80, 0.3)',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 0 40px rgba(242, 202, 80, 0.4)',
    },
  },
}

export const CtaBanner = () => {
  const { t } = useTranslation()

  return (
    <Box component="section" sx={styles.section}>
      <Box sx={styles.overlay} />
      <Box sx={styles.container}>
        <Box sx={styles.inner}>
          <Typography variant="h1" sx={styles.title}>
            {t('cta.title')}
          </Typography>
          <Typography sx={styles.description}>
            {t('cta.description')}
          </Typography>
          <Button variant="contained" size="large" sx={styles.button}>
            {t('cta.button')}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
