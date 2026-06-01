import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import heroBg from '@/assets/stables/hero-stables.png'
import { styles } from './styles'

export const StablesHero = () => {
  const { t } = useTranslation()

  return (
    <Box component="section" sx={styles.section}>
      <Box sx={styles.bgLayer}>
        <Box component="img" src={heroBg} alt="" />
        <Box sx={styles.gradient} />
      </Box>
      <Box sx={styles.content}>
        <Typography variant="h1" sx={styles.title}>
          {t('stables.hero.title')}
        </Typography>
        <Typography sx={styles.description}>{t('stables.hero.description')}</Typography>
      </Box>
    </Box>
  )
}
