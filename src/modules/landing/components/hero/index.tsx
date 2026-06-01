import { Box, Typography, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'
import heroBg from '@/assets/landing/hero-nebula.png'
import { styles } from './styles'

export const Hero = () => {
  const { t } = useTranslation()

  return (
    <Box component="header" sx={styles.section}>
      <Box sx={styles.bgImage}>
        <Box component="img" src={heroBg} alt="" />
        <Box sx={styles.vignette} />
      </Box>
      <Box sx={styles.stars} />
      <Box sx={styles.content}>
        <Box sx={styles.textWrap}>
          <Typography variant="h1" sx={styles.title}>
            {t('hero.titlePart1')}{' '}
            <Box component="span" sx={styles.shimmer}>
              {t('hero.titleHighlight')}
            </Box>
          </Typography>
          <Typography sx={styles.description}>{t('hero.description')}</Typography>
          <Box sx={styles.buttons}>
            <Button variant="contained" size="large" sx={{ px: 5, py: 2 }}>
              {t('hero.exploreButton')}
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                px: 5,
                py: 2,
                borderColor: 'celestial.goldFog',
                color: 'primary.main',
                '&:hover': {
                  borderColor: 'primary.main',
                  bgcolor: 'celestial.goldMist',
                },
              }}
            >
              {t('hero.ritualButton')}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
