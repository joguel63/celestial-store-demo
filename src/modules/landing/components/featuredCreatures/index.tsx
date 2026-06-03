import { Box, Typography, Button, Chip } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useTranslation } from 'react-i18next'
import phoenixImg from '@/assets/landing/phoenix.webp'
import gryphonImg from '@/assets/landing/gryphon.webp'
import kelpieImg from '@/assets/landing/kelpie.webp'
import { styles } from './styles'

interface CreatureCardProps {
  image: string
  name: string
  rarity: string
  rarityColor: string
  description: string
}

const CreatureCard = ({ image, name, rarity, rarityColor, description }: CreatureCardProps) => {
  const { t } = useTranslation()

  return (
    <Box sx={styles.card}>
      <Box sx={styles.imageWrap}>
        <Box component="img" src={image} alt={name} loading="lazy" decoding="async" fetchPriority="low" />
        <Box sx={{ ...styles.gradient, '--bg': 'background.paper' }} />
      </Box>
      <Box sx={styles.body}>
        <Box sx={styles.header}>
          <Typography variant="h3" sx={styles.name}>
            {name}
          </Typography>
          <Chip
            label={rarity}
            size="small"
            variant="outlined"
            sx={{
              ...styles.rarity,
              borderColor: rarityColor,
              color: rarityColor,
            }}
          />
        </Box>
        <Typography sx={styles.description}>{description}</Typography>
        <Button
          variant="outlined"
          fullWidth
          sx={{
            py: 1.5,
            borderColor: 'celestial.goldVeil',
            color: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
              borderColor: 'primary.main',
            },
          }}
        >
          {t('featured.viewDetails')}
        </Button>
      </Box>
    </Box>
  )
}

export const FeaturedCreatures = () => {
  const { t } = useTranslation()

  const creatures = [
    {
      image: phoenixImg,
      name: t('featured.creatures.phoenix.name'),
      rarity: t('featured.creatures.phoenix.rarity'),
      rarityColor: 'celestial.teal',
      description: t('featured.creatures.phoenix.description'),
    },
    {
      image: gryphonImg,
      name: t('featured.creatures.gryphon.name'),
      rarity: t('featured.creatures.gryphon.rarity'),
      rarityColor: 'primary.main',
      description: t('featured.creatures.gryphon.description'),
    },
    {
      image: kelpieImg,
      name: t('featured.creatures.kelpie.name'),
      rarity: t('featured.creatures.kelpie.rarity'),
      rarityColor: 'text.secondary',
      description: t('featured.creatures.kelpie.description'),
    },
  ]

  return (
    <Box component="section" sx={{ py: 12, bgcolor: 'background.default' }}>
      <Box sx={{ maxWidth: '1280px', mx: 'auto', px: { xs: '20px', md: '64px' } }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            mb: 8,
          }}
        >
          <Box>
            <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.2em' }}>
              {t('featured.label')}
            </Typography>
            <Typography variant="h2" sx={{ mt: 1 }}>
              {t('featured.title')}
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Button
              sx={{
                color: 'celestial.teal',
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                '&:hover': { textDecoration: 'underline' },
              }}
              endIcon={<ArrowForwardIcon />}
            >
              {t('featured.viewAll')}
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 3,
          }}
        >
          {creatures.map((creature) => (
            <CreatureCard key={creature.name} {...creature} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}
