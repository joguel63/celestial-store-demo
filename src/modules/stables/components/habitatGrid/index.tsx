import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { HabitatCard, FeaturedHabitatCard } from '../habitatCard'
import imgCumbres from '@/assets/stables/habitat-cumbres.png'
import imgAbismos from '@/assets/stables/habitat-abismos.png'
import imgNucleo from '@/assets/stables/habitat-nucleo-magma.png'
import imgDesierto from '@/assets/stables/habitat-desierto-estelar.png'

const styles = {
  section: {
    py: 12,
  },
  container: {
    maxWidth: '1280px',
    mx: 'auto',
    px: { xs: '20px', md: '64px' },
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' },
    gap: 3,
  },
}

export const HabitatGrid = () => {
  const { t } = useTranslation()

  return (
    <Box component="section" sx={styles.section}>
      <Box sx={styles.container}>
        <Box sx={styles.grid}>
          <HabitatCard
            image={imgCumbres}
            name={t('stables.habitats.cumbres.name')}
            habitat={t('stables.habitats.cumbres.habitat')}
            habitatIcon="air"
            description={t('stables.habitats.cumbres.description')}
            dominantLabel={t('stables.habitats.cumbres.dominantLabel')}
            species={t('stables.habitats.cumbres.species', { returnObjects: true }) as string[]}
            rarity={t('stables.habitats.cumbres.rarity')}
          />
          <HabitatCard
            image={imgAbismos}
            name={t('stables.habitats.abismos.name')}
            habitat={t('stables.habitats.abismos.habitat')}
            habitatIcon="water"
            description={t('stables.habitats.abismos.description')}
            dominantLabel={t('stables.habitats.abismos.dominantLabel')}
            species={t('stables.habitats.abismos.species', { returnObjects: true }) as string[]}
            rarity={undefined}
          />
          <HabitatCard
            image={imgAbismos}
            name={t('stables.habitats.bosque.name')}
            habitat={t('stables.habitats.bosque.habitat')}
            habitatIcon="forest"
            description={t('stables.habitats.bosque.description')}
            dominantLabel={t('stables.habitats.bosque.dominantLabel')}
            species={t('stables.habitats.bosque.species', { returnObjects: true }) as string[]}
            rarity={undefined}
          />
          <FeaturedHabitatCard
            image={imgNucleo}
            name={t('stables.habitats.nucleo.name')}
            habitat={t('stables.habitats.nucleo.habitat')}
            habitatIcon="fire"
            description={t('stables.habitats.nucleo.description')}
            viewInhabitantsLabel={t('stables.habitats.nucleo.viewInhabitants')}
            technicalDetailsLabel={t('stables.habitats.nucleo.technicalDetails')}
          />
          <HabitatCard
            image={imgDesierto}
            name={t('stables.habitats.desierto.name')}
            habitat={t('stables.habitats.desierto.habitat')}
            habitatIcon="star"
            description={t('stables.habitats.desierto.description')}
            dominantLabel={t('stables.habitats.desierto.dominantLabel')}
            species={t('stables.habitats.desierto.species', { returnObjects: true }) as string[]}
            rarity={undefined}
          />
        </Box>
      </Box>
    </Box>
  )
}
