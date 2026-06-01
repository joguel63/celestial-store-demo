import { Box, Typography, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { styles } from './styles'

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
