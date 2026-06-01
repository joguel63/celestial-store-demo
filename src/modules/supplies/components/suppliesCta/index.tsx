import { Box, Typography, Button, TextField } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { styles } from './styles'

export const SuppliesCta = () => {
  const { t } = useTranslation()

  return (
    <Box component="section" sx={styles.section}>
      <Box sx={styles.glow} />
      <Box sx={styles.container}>
        <Box sx={styles.textBlock}>
          <Typography sx={styles.title}>
            {t('supplies.cta.title')}
          </Typography>
          <Typography sx={styles.description}>
            {t('supplies.cta.description')}
          </Typography>
        </Box>
        <Box sx={styles.form}>
          <TextField
            placeholder={t('supplies.cta.placeholder')}
            sx={styles.input}
          />
          <Button variant="contained" sx={styles.button}>
            {t('supplies.cta.enlist')}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
