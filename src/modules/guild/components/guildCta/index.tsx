import { Box, Typography, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'

const styles = {
  section: {
    py: { xs: 12, md: 16 },
    px: { xs: '20px', md: '64px' },
    position: 'relative',
    overflow: 'hidden',
  },
  glow: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle at center, rgba(242,202,80,0.1), transparent, transparent)',
  },
  card: {
    position: 'relative',
    zIndex: 10,
    maxWidth: '1280px',
    mx: 'auto',
    bgcolor: 'background.default',
    border: '1px solid',
    borderColor: 'rgba(242, 202, 80, 0.2)',
    borderRadius: '1.5rem',
    p: { xs: 6, md: 10 },
    textAlign: 'center',
    backdropFilter: 'blur(20px)',
  },
  title: {
    fontFamily: '"Playfair Display", serif',
    fontSize: { xs: '2rem', md: '4rem' },
    fontWeight: 700,
    lineHeight: { xs: 1.25, md: 1.125 },
    letterSpacing: '-0.02em',
    color: 'primary.main',
    mb: 3,
  },
  description: {
    fontSize: { xs: '1rem', md: '1.125rem' },
    lineHeight: 1.56,
    color: 'text.secondary',
    maxWidth: '576px',
    mx: 'auto',
    mb: 6,
  },
  actions: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    gap: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctaBtn: {
    px: 6,
    py: 2.5,
    background: 'linear-gradient(90deg, #f2ca50, #4DB6AC, #f2ca50)',
    backgroundSize: '200% auto',
    color: '#3c2f00',
    fontFamily: '"Manrope", sans-serif',
    fontSize: '0.875rem',
    fontWeight: 700,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    borderRadius: 0,
    animation: 'shimmer 4s linear infinite',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
    '&:active': {
      transform: 'scale(0.95)',
    },
  },
  quote: {
    fontFamily: '"Playfair Display", serif',
    fontStyle: 'italic',
    fontSize: '1rem',
    color: 'text.secondary',
  },
}

export const GuildCta = () => {
  const { t } = useTranslation()

  return (
    <Box component="section" sx={styles.section}>
      <Box sx={styles.glow} />
      <Box sx={styles.card}>
        <Typography sx={styles.title}>{t('guild.cta.title')}</Typography>
        <Typography sx={styles.description}>{t('guild.cta.description')}</Typography>
        <Box sx={styles.actions}>
          <Button sx={styles.ctaBtn}>{t('guild.cta.button')}</Button>
          <Typography sx={styles.quote}>{t('guild.cta.quote')}</Typography>
        </Box>
      </Box>
    </Box>
  )
}
