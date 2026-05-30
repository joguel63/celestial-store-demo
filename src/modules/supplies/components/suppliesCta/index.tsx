import { Box, Typography, Button, TextField } from '@mui/material'
import { useTranslation } from 'react-i18next'

const styles = {
  section: {
    py: { xs: 8, md: 10 },
    px: { xs: '20px', md: '64px' },
    mb: { xs: 8, md: 10 },
    bgcolor: '#2a2b1b',
    position: 'relative',
    overflow: 'hidden',
  },
  glow: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '33%',
    height: '100%',
    background: 'linear-gradient(to left, rgba(121, 223, 212, 0.1), transparent)',
  },
  container: {
    maxWidth: '1280px',
    mx: 'auto',
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 6,
    position: 'relative',
    zIndex: 10,
  },
  textBlock: {
    flex: { md: '50%' },
  },
  title: {
    fontFamily: '"Playfair Display", serif',
    fontSize: { xs: '2rem', md: '3rem' },
    fontWeight: 700,
    color: 'primary.main',
    mb: 2,
  },
  description: {
    fontSize: { xs: '1rem', md: '1.125rem' },
    lineHeight: 1.56,
    color: 'text.secondary',
  },
  form: {
    flex: { md: '50%' },
    display: 'flex',
    width: '100%',
    maxWidth: '448px',
  },
  input: {
    flexGrow: 1,
    '& .MuiOutlinedInput-root': {
      bgcolor: 'background.default',
      borderRadius: 0,
      '& fieldset': {
        border: 'none',
      },
      '&:hover fieldset': {
        border: '1px solid',
        borderColor: '#79dfd4',
      },
      '&.Mui-focused fieldset': {
        border: '1px solid',
        borderColor: '#79dfd4',
      },
      '& input': {
        py: 2,
        px: 3,
        fontFamily: '"Manrope", sans-serif',
        fontSize: '1rem',
        color: 'text.primary',
        '&::placeholder': {
          color: 'rgba(153, 144, 124, 0.5)',
        },
      },
    },
  },
  button: {
    px: 4,
    py: 2,
    fontSize: '0.875rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'none',
    borderRadius: 0,
    '&:hover': {
      filter: 'brightness(1.1)',
    },
    '&:active': {
      transform: 'scale(0.95)',
    },
  },
}

export const SuppliesCta = () => {
  const { t } = useTranslation()

  return (
    <Box component="section" sx={styles.section}>
      <Box sx={styles.glow} />
      <Box sx={styles.container}>
        <Box sx={styles.textBlock}>
          <Typography sx={styles.title}>
            {t('supplies.cta.title')}
          </Typography>
          <Typography sx={styles.description}>
            {t('supplies.cta.description')}
          </Typography>
        </Box>
        <Box sx={styles.form}>
          <TextField
            placeholder={t('supplies.cta.placeholder')}
            sx={styles.input}
          />
          <Button variant="contained" sx={styles.button}>
            {t('supplies.cta.enlist')}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
