import { Box, Typography, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { styles } from './styles'

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
