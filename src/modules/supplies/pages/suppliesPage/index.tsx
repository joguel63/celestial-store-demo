import { Box } from '@mui/material'
import { SuppliesHero } from '../../components/suppliesHero'
import { SupplyFilters } from '../../components/supplyFilters'
import { SupplyGrid } from '../../components/supplyGrid'
import { SuppliesCta } from '../../components/suppliesCta'

export const SuppliesPage = () => (
  <Box component="main">
    <SuppliesHero />
    <SupplyFilters />
    <SupplyGrid />
    <SuppliesCta />
  </Box>
)
