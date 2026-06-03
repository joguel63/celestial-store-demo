import { Box, Typography, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { styles } from './styles'
import heroBg from '@/assets/guild/hero-guild.webp'

export const GuildHero = () => {
  const { t } = useTranslation()

  return (
    <Box component="section" sx={styles.section}>
      <Box sx={styles.bgLayer}>
        <Box component="img" src={heroBg} alt="" decoding="async" />
        <Box sx={styles.vignette} />
        <Box sx={styles.gradient} />
      </Box>
      <Box sx={styles.content}>
        <Typography variant="h1" sx={styles.title}>
          {t('guild.hero.title')}
        </Typography>
        <Typography sx={styles.description}>{t('guild.hero.description')}</Typography>
        <Box sx={styles.actions}>
          <Button variant="contained" size="large" sx={styles.primaryBtn}>
            {t('guild.hero.join')}
          </Button>
          <Button size="large" sx={styles.ghostBtn}>
            {t('guild.hero.explore')}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
