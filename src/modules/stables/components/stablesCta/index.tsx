import { Box, Typography, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { styles } from './styles'

export const StablesCta = () => {
  const { t } = useTranslation()

  return (
    <Box component="section" sx={styles.section}>
      <Box sx={styles.glow} />
      <Box sx={styles.container}>
        <Typography sx={styles.title}>
          {t('stables.cta.title')}
        </Typography>
        <Typography sx={styles.description}>
          {t('stables.cta.description')}
        </Typography>
        <Box sx={styles.actions}>
          <Button variant="contained" size="large" sx={styles.primaryBtn}>
            {t('stables.cta.consult')}
          </Button>
          <Button sx={styles.ghostBtn}>
            {t('stables.cta.guide')}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
