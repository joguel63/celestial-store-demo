import { Box } from '@mui/material'
import { StablesHero } from '../../components/stablesHero'
import { HabitatFilters } from '../../components/habitatFilters'
import { HabitatGrid } from '../../components/habitatGrid'
import { StablesCta } from '../../components/stablesCta'

export const StablesPage = () => (
  <Box component="main">
    <StablesHero />
    <HabitatFilters />
    <HabitatGrid />
    <StablesCta />
  </Box>
)
