import { Box } from '@mui/material'
import { GuildHero } from '../../components/guildHero'
import { TierCards } from '../../components/tierCards'
import { GuildRegistry } from '../../components/guildRegistry'
import { GuildCta } from '../../components/guildCta'

export const GuildPage = () => (
  <Box component="main">
    <GuildHero />
    <TierCards />
    <GuildRegistry />
    <GuildCta />
  </Box>
)
