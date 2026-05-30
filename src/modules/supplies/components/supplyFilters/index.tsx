import { Box, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'

const styles = {
  section: {
    py: 6,
    px: { xs: '20px', md: '64px' },
    maxWidth: '1280px',
    mx: 'auto',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 2,
  },
  filterActive: {
    px: 4,
    py: 1.5,
    bgcolor: '#1f2111',
    border: '1px solid',
    borderColor: 'rgba(242, 202, 80, 0.2)',
    color: 'primary.main',
    fontFamily: '"Manrope", sans-serif',
    fontSize: '0.875rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'none',
    borderRadius: 0,
    '&:hover': {
      borderColor: 'primary.main',
      bgcolor: '#1f2111',
    },
  },
  filterInactive: {
    px: 4,
    py: 1.5,
    bgcolor: 'transparent',
    border: '1px solid',
    borderColor: 'rgba(242, 202, 80, 0.1)',
    color: 'text.secondary',
    fontFamily: '"Manrope", sans-serif',
    fontSize: '0.875rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'none',
    borderRadius: 0,
    '&:hover': {
      borderColor: '#79dfd4',
      color: '#79dfd4',
      bgcolor: 'transparent',
    },
  },
}

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
