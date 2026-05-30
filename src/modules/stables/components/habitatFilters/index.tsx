import { Box, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { styles } from './styles'

export const HabitatFilters = () => {
  const { t } = useTranslation()

  return (
    <Box component="section" sx={styles.section}>
      <Box sx={styles.container}>
        <Button sx={styles.filterActive}>{t('stables.filters.all')}</Button>
        <Button sx={styles.filterInactive}>{t('stables.filters.air')}</Button>
        <Button sx={styles.filterInactive}>{t('stables.filters.volcanic')}</Button>
        <Button sx={styles.filterInactive}>{t('stables.filters.jungle')}</Button>
        <Button sx={styles.filterInactive}>{t('stables.filters.abyss')}</Button>
      </Box>
    </Box>
  )
}
