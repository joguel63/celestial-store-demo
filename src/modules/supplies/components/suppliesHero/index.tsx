import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import heroBg from '@/assets/supplies/hero-supplies.png'
import { styles } from './styles'

export const SuppliesHero = () => {
  const { t } = useTranslation()

  return (
    <Box component="section" sx={styles.section}>
      <Box sx={styles.bgImage}>
        <Box component="img" src={heroBg} alt="" />
        <Box sx={styles.overlay} />
      </Box>
      <Box sx={styles.content}>
        <Box sx={styles.badge}>
          <Typography component="span" variant="overline" sx={styles.badgeText}>
            {t('supplies.hero.badge')}
          </Typography>
        </Box>
        <Typography variant="h1" sx={styles.title}>
          {t('supplies.hero.title')}
        </Typography>
        <Typography sx={styles.description}>
          {t('supplies.hero.description')}
        </Typography>
      </Box>
    </Box>
  )
}
