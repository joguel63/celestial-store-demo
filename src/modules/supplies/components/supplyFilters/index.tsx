import { Box, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { styles } from './styles'

export const SupplyFilters = () => {
  const { t } = useTranslation()

  return (
    <Box component="section" sx={styles.section}>
      <Box sx={styles.container}>
        <Button sx={styles.filterActive}>{t('supplies.filters.all')}</Button>
        <Button sx={styles.filterInactive}>{t('supplies.filters.nutrition')}</Button>
        <Button sx={styles.filterInactive}>{t('supplies.filters.habitats')}</Button>
        <Button sx={styles.filterInactive}>{t('supplies.filters.gear')}</Button>
        <Button sx={styles.filterInactive}>{t('supplies.filters.rituals')}</Button>
      </Box>
    </Box>
  )
}
