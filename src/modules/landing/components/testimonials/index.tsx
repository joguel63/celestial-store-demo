import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import curatorImg from '@/assets/landing/testimonial-curator.webp'
import { styles } from './styles'

export const Testimonials = () => {
  const { t } = useTranslation()

  return (
    <Box component="section" sx={styles.section}>
      <Box sx={styles.starBg} />
      <Box sx={styles.container}>
        <Typography component="span" sx={styles.label}>
          {t('testimonials.label')}
        </Typography>
        <Box component="span" sx={styles.quoteIcon}>
          &ldquo;
        </Box>
        <Typography component="blockquote" sx={styles.quote}>
          {t('testimonials.quote')}
        </Typography>
        <Box sx={styles.authorRow}>
          <Box sx={styles.avatarWrap}>
            <Box component="img" src={curatorImg} alt="" loading="lazy" decoding="async" />
          </Box>
          <Box sx={styles.authorInfo}>
            <Typography sx={styles.authorName}>{t('testimonials.author')}</Typography>
            <Typography sx={styles.authorTitle}>{t('testimonials.title')}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
