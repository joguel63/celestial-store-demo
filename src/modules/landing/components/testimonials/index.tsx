import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import curatorImg from '@/assets/landing/testimonial-curator.png'

const styles = {
  section: {
    py: 12,
    bgcolor: 'celestial.abyss',
    position: 'relative',
    overflow: 'hidden',
  },
  starBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.05,
    pointerEvents: 'none',
    backgroundImage: 'radial-gradient(#f2ca50 1px, transparent 1px)',
    backgroundSize: '40px 40px',
  },
  container: {
    maxWidth: '768px',
    mx: 'auto',
    px: '20px',
    textAlign: 'center',
    position: 'relative',
    zIndex: 10,
  },
  label: {
    color: 'primary.main',
    fontSize: '0.875rem',
    fontWeight: 600,
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    mb: 4,
    display: 'block',
  },
  quoteIcon: {
    color: 'primary.main',
    fontSize: '3.75rem',
    mb: 4,
    display: 'block',
  },
  quote: {
    fontFamily: '"Playfair Display", serif',
    fontSize: { xs: '2rem', md: '3rem' },
    fontWeight: 700,
    lineHeight: { xs: 1.33, md: 1.17 },
    fontStyle: 'italic',
    mb: 5,
  },
  authorRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  avatarWrap: {
    width: 48,
    height: 48,
    borderRadius: '50%',
    border: '1px solid',
    borderColor: 'rgba(242, 202, 80, 0.3)',
    p: 0.5,
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '50%',
    },
  },
  authorInfo: {
    textAlign: 'left',
  },
  authorName: {
    fontWeight: 700,
    color: 'primary.main',
  },
  authorTitle: {
    fontSize: '0.875rem',
    color: 'text.secondary',
  },
}

export const Testimonials = () => {
  const { t } = useTranslation()

  return (
    <Box component="section" sx={styles.section}>
      <Box sx={styles.starBg} />
      <Box sx={styles.container}>
        <Typography component="span" sx={styles.label}>
          {t('testimonials.label')}
        </Typography>
        <Box component="span" sx={styles.quoteIcon}>
          &ldquo;
        </Box>
        <Typography component="blockquote" sx={styles.quote}>
          {t('testimonials.quote')}
        </Typography>
        <Box sx={styles.authorRow}>
          <Box sx={styles.avatarWrap}>
              <Box component="img" src={curatorImg} alt="" />
          </Box>
          <Box sx={styles.authorInfo}>
            <Typography sx={styles.authorName}>
              {t('testimonials.author')}
            </Typography>
            <Typography sx={styles.authorTitle}>
              {t('testimonials.title')}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
