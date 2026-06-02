import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { getStringArray } from '@/core/utils/getStringArray'
import { HabitatCard, FeaturedHabitatCard } from '../habitatCard'
import { styles } from './styles'
import imgCumbres from '@/assets/stables/habitat-cumbres.webp'
import imgAbismos from '@/assets/stables/habitat-abismos.webp'
import imgBosque from '@/assets/stables/habitat-bosque.webp'
import imgNucleo from '@/assets/stables/habitat-nucleo-magma.webp'
import imgDesierto from '@/assets/stables/habitat-desierto-estelar.webp'

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
            species={getStringArray(t, 'stables.habitats.cumbres.species')}
            rarity={t('stables.habitats.cumbres.rarity')}
          />
          <HabitatCard
            image={imgAbismos}
            name={t('stables.habitats.abismos.name')}
            habitat={t('stables.habitats.abismos.habitat')}
            habitatIcon="water"
            description={t('stables.habitats.abismos.description')}
            dominantLabel={t('stables.habitats.abismos.dominantLabel')}
            species={getStringArray(t, 'stables.habitats.abismos.species')}
            rarity={undefined}
          />
          <HabitatCard
            image={imgBosque}
            name={t('stables.habitats.bosque.name')}
            habitat={t('stables.habitats.bosque.habitat')}
            habitatIcon="forest"
            description={t('stables.habitats.bosque.description')}
            dominantLabel={t('stables.habitats.bosque.dominantLabel')}
            species={getStringArray(t, 'stables.habitats.bosque.species')}
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
            species={getStringArray(t, 'stables.habitats.desierto.species')}
            rarity={undefined}
          />
        </Box>
      </Box>
    </Box>
  )
}
