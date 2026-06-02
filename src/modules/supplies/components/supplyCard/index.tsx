import { Box, Typography, Button } from '@mui/material'

type RarityKey = 'mythic' | 'legendary' | 'rare'

const RARITY_STYLES: Record<RarityKey, object> = {
  mythic: {
    background: 'linear-gradient(90deg, #f2ca50, #79dfd4)',
    color: 'celestial.ember',
  },
  legendary: {
    bgcolor: 'celestial.tealMid',
    color: 'celestial.tealDeep',
  },
  rare: {
    bgcolor: 'secondary.main',
    color: 'secondary.contrastText',
  },
}

import { styles } from './styles'

export interface SupplyCardProps {
  image: string
  name: string
  description: string
  price: string
  rarity?: RarityKey
  rarityLabel?: string
  buyLabel: string
  currencyLabel: string
}

export const SupplyCard = ({
  image,
  name,
  description,
  price,
  rarity,
  rarityLabel,
  buyLabel,
  currencyLabel,
}: SupplyCardProps) => (
  <Box sx={styles.card}>
    <Box sx={styles.imageWrap}>
      <Box component="img" src={image} alt={name} loading="lazy" decoding="async" />
      {rarity ? <Box sx={{ ...styles.badge, ...RARITY_STYLES[rarity] }}>{rarityLabel}</Box> : null}
    </Box>
    <Typography variant="h4" sx={styles.name}>
      {name}
    </Typography>
    <Typography sx={styles.description}>{description}</Typography>
    <Box sx={styles.footer}>
      <Typography component="span" variant="h4" sx={styles.price}>
        {price}{' '}
        <Typography component="span" variant="overline" sx={styles.gpUnit}>
          {currencyLabel}
        </Typography>
      </Typography>
      <Button variant="contained" sx={styles.buyBtn}>
        {buyLabel}
      </Button>
    </Box>
  </Box>
)
