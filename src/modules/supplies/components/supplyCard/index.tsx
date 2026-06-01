import { Box, Typography, Button } from '@mui/material'

const rarityStyles: Record<string, object> = {
  Mythic: {
    background: 'linear-gradient(90deg, #f2ca50, #79dfd4)',
    color: 'celestial.ember',
  },
  Legendary: {
    bgcolor: 'celestial.tealMid',
    color: 'celestial.tealDeep',
  },
  Rare: {
    bgcolor: 'secondary.main',
    color: 'secondary.contrastText',
  },
}

const styles = {
  card: {
    bgcolor: 'background.paper',
    borderTop: '2px solid',
    borderColor: 'primary.main',
    p: 3,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 0 15px 0 rgba(77, 182, 172, 0.15)',
    transition: 'transform 0.3s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.3s',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 12px 24px -10px rgba(242, 202, 80, 0.2)',
    },
  },
  imageWrap: {
    aspectRatio: '4 / 5',
    mb: 3,
    overflow: 'hidden',
    bgcolor: 'celestial.moss',
    position: 'relative',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      maskImage: 'radial-gradient(circle, black 60%, transparent 100%)',
      WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)',
      transition: 'transform 0.7s',
    },
    '&:hover img': {
      transform: 'scale(1.1)',
    },
  },
  badge: {
    position: 'absolute',
    top: 16,
    right: 16,
    px: 1.5,
    py: 0.5,
    fontFamily: '"Manrope", sans-serif',
    fontSize: '0.625rem',
    fontWeight: 700,
    letterSpacing: '0.15em',
    textTransform: 'uppercase' as const,
  },
  name: {
    fontFamily: '"Playfair Display", serif',
    fontSize: '1.5rem',
    fontWeight: 600,
    lineHeight: 1.33,
    color: 'primary.main',
    mb: 1,
  },
  description: {
    fontSize: '1rem',
    lineHeight: 1.5,
    color: 'text.secondary',
    mb: 3,
    flexGrow: 1,
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    pt: 3,
    borderTop: '1px solid',
    borderColor: 'rgba(242, 202, 80, 0.1)',
  },
  price: {
    fontFamily: '"Playfair Display", serif',
    fontSize: '1.5rem',
    fontWeight: 600,
    color: 'text.primary',
  },
  gpUnit: {
    fontFamily: '"Manrope", sans-serif',
    fontSize: '0.875rem',
    fontWeight: 600,
    color: 'rgba(242, 202, 80, 0.6)',
    letterSpacing: '0.1em',
  },
  buyBtn: {
    px: 4,
    py: 1,
    fontSize: '0.875rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'none',
    borderRadius: 0,
  },
}

export interface SupplyCardProps {
  image: string
  name: string
  description: string
  price: string
  rarity?: 'Mythic' | 'Legendary' | 'Rare'
  buyLabel: string
  currencyLabel: string
}

export const SupplyCard = ({
  image,
  name,
  description,
  price,
  rarity,
  buyLabel,
  currencyLabel,
}: SupplyCardProps) => (
  <Box sx={styles.card}>
    <Box sx={styles.imageWrap}>
      <Box component="img" src={image} alt={name} />
      {rarity ? (
        <Box sx={{ ...styles.badge, ...rarityStyles[rarity] }}>
          {rarity}
        </Box>
      ) : null}
    </Box>
    <Typography sx={styles.name}>{name}</Typography>
    <Typography sx={styles.description}>{description}</Typography>
    <Box sx={styles.footer}>
      <Typography component="span" sx={styles.price}>
        {price}{' '}
        <Typography component="span" sx={styles.gpUnit}>
          {currencyLabel}
        </Typography>
      </Typography>
      <Button variant="contained" sx={styles.buyBtn}>
        {buyLabel}
      </Button>
    </Box>
  </Box>
)
