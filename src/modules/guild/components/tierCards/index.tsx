import { Box, Typography, Button } from '@mui/material'
import ExploreIcon from '@mui/icons-material/Explore'
import PetsIcon from '@mui/icons-material/Pets'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { useTranslation } from 'react-i18next'
import { styles } from './styles'

export const TierCards = () => {
  const { t } = useTranslation()

  return (
    <Box component="section" sx={styles.section}>
      <Box sx={styles.container}>
        <Typography sx={styles.title}>{t('guild.tiers.title')}</Typography>
        <Box sx={styles.divider} />
        <Box sx={styles.grid}>
          <Box sx={styles.card}>
            <ExploreIcon sx={styles.icon} />
            <Typography sx={styles.cardName}>
              {t('guild.tiers.explorer.name')}
            </Typography>
            <Typography sx={styles.cardDescription}>
              {t('guild.tiers.explorer.description')}
            </Typography>
            <Box sx={styles.benefitsList}>
              {(t('guild.tiers.explorer.benefits', { returnObjects: true }) as unknown as string[]).map(
                (benefit) => (
                  <Box key={benefit} sx={styles.benefit}>
                    <CheckCircleIcon sx={styles.benefitIcon} />
                    {benefit}
                  </Box>
                )
              )}
            </Box>
            <Button sx={styles.outlineBtn}>{t('guild.tiers.explorer.cta')}</Button>
          </Box>
          <Box sx={styles.featuredCard}>
            <Box sx={styles.badge}>{t('guild.tiers.tamer.badge')}</Box>
            <PetsIcon sx={styles.icon} />
            <Typography sx={styles.cardName}>
              {t('guild.tiers.tamer.name')}
            </Typography>
            <Typography sx={styles.cardDescription}>
              {t('guild.tiers.tamer.description')}
            </Typography>
            <Box sx={styles.benefitsList}>
              {(t('guild.tiers.tamer.benefits', { returnObjects: true }) as unknown as string[]).map(
                (benefit) => (
                  <Box key={benefit} sx={styles.benefit}>
                    <CheckCircleIcon sx={styles.benefitIcon} />
                    {benefit}
                  </Box>
                )
              )}
            </Box>
            <Button variant="contained" sx={styles.primaryBtn}>
              {t('guild.tiers.tamer.cta')}
            </Button>
          </Box>
          <Box sx={styles.card}>
            <MenuBookIcon sx={styles.icon} />
            <Typography sx={styles.cardName}>
              {t('guild.tiers.keeper.name')}
            </Typography>
            <Typography sx={styles.cardDescription}>
              {t('guild.tiers.keeper.description')}
            </Typography>
            <Box sx={styles.benefitsList}>
              {(t('guild.tiers.keeper.benefits', { returnObjects: true }) as unknown as string[]).map(
                (benefit) => (
                  <Box key={benefit} sx={styles.benefit}>
                    <CheckCircleIcon sx={styles.benefitIcon} />
                    {benefit}
                  </Box>
                )
              )}
            </Box>
            <Button sx={styles.outlineBtn}>{t('guild.tiers.keeper.cta')}</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
