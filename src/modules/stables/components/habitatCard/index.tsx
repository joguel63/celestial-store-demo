import { Box, Typography, Button } from '@mui/material'
import AirIcon from '@mui/icons-material/Air'
import WaterDropIcon from '@mui/icons-material/WaterDrop'
import ParkIcon from '@mui/icons-material/Park'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import StarIcon from '@mui/icons-material/Star'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { styles } from './styles'

const habitatIcons: Record<string, React.ReactNode> = {
  air: <AirIcon sx={{ fontSize: 18 }} />,
  water: <WaterDropIcon sx={{ fontSize: 18 }} />,
  forest: <ParkIcon sx={{ fontSize: 18 }} />,
  fire: <LocalFireDepartmentIcon sx={{ fontSize: 18 }} />,
  star: <StarIcon sx={{ fontSize: 18 }} />,
}

interface HabitatCardProps {
  image: string
  name: string
  habitat: string
  habitatIcon: string
  description: string
  dominantLabel: string
  species: string[]
  rarity?: string
}

export const HabitatCard = ({
  image,
  name,
  habitat,
  habitatIcon,
  description,
  dominantLabel,
  species,
  rarity,
}: HabitatCardProps) => (
  <Box sx={styles.card}>
    <Box sx={styles.imageWrap}>
      <Box component="img" src={image} alt={name} loading="lazy" decoding="async" />
      <Box sx={styles.vignette} />
      {rarity ? <Box sx={styles.badge}>{rarity}</Box> : null}
    </Box>
    <Box sx={styles.body}>
      <Typography variant="h3" sx={styles.name}>
        {name}
      </Typography>
      <Box sx={styles.habitatRow}>
        {habitatIcons[habitatIcon]}
        <Typography variant="overline" sx={styles.habitatText}>
          {habitat}
        </Typography>
      </Box>
      <Typography sx={styles.description}>{description}</Typography>
      <Box sx={styles.divider}>
        <Typography component="span" variant="overline" sx={styles.dominantLabel}>
          {dominantLabel}
        </Typography>
        <Box sx={styles.speciesList}>
          {species.map((s) => (
            <Typography key={s} sx={styles.species}>
              &bull; {s}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  </Box>
)

interface FeaturedHabitatCardProps {
  image: string
  name: string
  habitat: string
  habitatIcon: string
  description: string
  viewInhabitantsLabel: string
  technicalDetailsLabel: string
}

export const FeaturedHabitatCard = ({
  image,
  name,
  habitat,
  habitatIcon,
  description,
  viewInhabitantsLabel,
  technicalDetailsLabel,
}: FeaturedHabitatCardProps) => (
  <Box sx={{ ...styles.card, gridColumn: { lg: 'span 2' } }}>
    <Box sx={styles.featuredGrid}>
      <Box sx={styles.featuredImage}>
        <Box component="img" src={image} alt={name} loading="lazy" decoding="async" />
        <Box sx={styles.vignette} />
      </Box>
      <Box sx={styles.featuredBody}>
        <Typography sx={styles.featuredName}>{name}</Typography>
        <Box sx={styles.habitatRow}>
          {habitatIcons[habitatIcon]}
          <Typography variant="overline" sx={styles.habitatText}>
            {habitat}
          </Typography>
        </Box>
        <Typography sx={styles.featuredDescription}>{description}</Typography>
        <Box sx={styles.featuredActions}>
          <Button sx={styles.primaryBtn}>{viewInhabitantsLabel}</Button>
          <Button sx={styles.secondaryBtn} endIcon={<ArrowForwardIcon />}>
            {technicalDetailsLabel}
          </Button>
        </Box>
      </Box>
    </Box>
  </Box>
)
