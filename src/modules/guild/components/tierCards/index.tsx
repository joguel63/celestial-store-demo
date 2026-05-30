import { Box, Typography, Button } from '@mui/material'
import ExploreIcon from '@mui/icons-material/Explore'
import PetsIcon from '@mui/icons-material/Pets'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { useTranslation } from 'react-i18next'

const styles = {
  section: {
    py: { xs: 12, md: 16 },
  },
  container: {
    maxWidth: '1280px',
    mx: 'auto',
    px: { xs: '20px', md: '64px' },
    textAlign: 'center',
  },
  title: {
    fontFamily: '"Playfair Display", serif',
    fontSize: { xs: '2rem', md: '3rem' },
    fontWeight: 700,
    lineHeight: { xs: 1.25, md: 1.17 },
    mb: 2,
  },
  divider: {
    width: 96,
    height: 4,
    bgcolor: 'primary.main',
    mx: 'auto',
    opacity: 0.5,
    mb: 8,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
    gap: 4,
    alignItems: 'start',
  },
  card: {
    bgcolor: 'background.paper',
    borderTop: '2px solid',
    borderColor: 'primary.main',
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'translateY(-8px)',
    },
  },
  featuredCard: {
    bgcolor: 'background.paper',
    borderTop: '2px solid',
    borderColor: 'primary.main',
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 10,
    transform: { xs: 'none', md: 'scale(1.05)' },
    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: { xs: 'translateY(-8px)', md: 'scale(1.05) translateY(-8px)' },
    },
  },
  icon: {
    fontSize: 48,
    color: 'primary.main',
    mb: 3,
  },
  cardName: {
    fontFamily: '"Playfair Display", serif',
    fontSize: '1.5rem',
    fontWeight: 600,
    lineHeight: 1.33,
    color: 'primary.main',
    mb: 2,
  },
  cardDescription: {
    fontSize: '1rem',
    lineHeight: 1.5,
    color: 'text.secondary',
    mb: 4,
    flexGrow: 1,
  },
  benefitsList: {
    textAlign: 'left',
    width: '100%',
    mb: 4,
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  benefit: {
    display: 'flex',
    alignItems: 'center',
    gap: 1.5,
    fontSize: '0.875rem',
    color: 'text.primary',
  },
  benefitIcon: {
    fontSize: 18,
    color: 'primary.main',
    flexShrink: 0,
  },
  outlineBtn: {
    width: '100%',
    py: 1.5,
    bgcolor: 'rgba(242, 202, 80, 0.1)',
    border: '1px solid',
    borderColor: 'rgba(242, 202, 80, 0.2)',
    color: 'primary.main',
    fontWeight: 700,
    fontSize: '0.875rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    borderRadius: 0,
    '&:hover': {
      bgcolor: 'rgba(242, 202, 80, 0.2)',
    },
  },
  primaryBtn: {
    width: '100%',
    py: 1.5,
    color: '#3c2f00',
    fontWeight: 700,
    fontSize: '0.875rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    borderRadius: 0,
    boxShadow: '0 0 30px rgba(242, 202, 80, 0.3)',
    '&:hover': {
      boxShadow: '0 0 40px rgba(242, 202, 80, 0.5)',
    },
  },
  badge: {
    position: 'absolute',
    top: 16,
    right: 16,
    px: 1.5,
    py: 0.5,
    background: 'linear-gradient(90deg, #f2ca50, #4DB6AC, #f2ca50)',
    backgroundSize: '200% auto',
    color: '#3c2f00',
    fontFamily: '"Manrope", sans-serif',
    fontSize: '0.625rem',
    fontWeight: 700,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    animation: 'shimmer 4s linear infinite',
  },
}

export const TierCards = () => {
  const { t } = useTranslation()

  return (
    <Box component="section" sx={styles.section}>
      <Box sx={styles.container}>
        <Typography sx={styles.title}>{t('guild.tiers.title')}</Typography>
        <Box sx={styles.divider} />
        <Box sx={styles.grid}>
          <Box sx={styles.card}>
            <ExploreIcon sx={styles.icon} />
            <Typography sx={styles.cardName}>
              {t('guild.tiers.explorer.name')}
            </Typography>
            <Typography sx={styles.cardDescription}>
              {t('guild.tiers.explorer.description')}
            </Typography>
            <Box sx={styles.benefitsList}>
              {(t('guild.tiers.explorer.benefits', { returnObjects: true }) as unknown as string[]).map(
                (benefit) => (
                  <Box key={benefit} sx={styles.benefit}>
                    <CheckCircleIcon sx={styles.benefitIcon} />
                    {benefit}
                  </Box>
                )
              )}
            </Box>
            <Button sx={styles.outlineBtn}>{t('guild.tiers.explorer.cta')}</Button>
          </Box>
          <Box sx={styles.featuredCard}>
            <Box sx={styles.badge}>{t('guild.tiers.tamer.badge')}</Box>
            <PetsIcon sx={styles.icon} />
            <Typography sx={styles.cardName}>
              {t('guild.tiers.tamer.name')}
            </Typography>
            <Typography sx={styles.cardDescription}>
              {t('guild.tiers.tamer.description')}
            </Typography>
            <Box sx={styles.benefitsList}>
              {(t('guild.tiers.tamer.benefits', { returnObjects: true }) as unknown as string[]).map(
                (benefit) => (
                  <Box key={benefit} sx={styles.benefit}>
                    <CheckCircleIcon sx={styles.benefitIcon} />
                    {benefit}
                  </Box>
                )
              )}
            </Box>
            <Button variant="contained" sx={styles.primaryBtn}>
              {t('guild.tiers.tamer.cta')}
            </Button>
          </Box>
          <Box sx={styles.card}>
            <MenuBookIcon sx={styles.icon} />
            <Typography sx={styles.cardName}>
              {t('guild.tiers.keeper.name')}
            </Typography>
            <Typography sx={styles.cardDescription}>
              {t('guild.tiers.keeper.description')}
            </Typography>
            <Box sx={styles.benefitsList}>
              {(t('guild.tiers.keeper.benefits', { returnObjects: true }) as unknown as string[]).map(
                (benefit) => (
                  <Box key={benefit} sx={styles.benefit}>
                    <CheckCircleIcon sx={styles.benefitIcon} />
                    {benefit}
                  </Box>
                )
              )}
            </Box>
            <Button sx={styles.outlineBtn}>{t('guild.tiers.keeper.cta')}</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
