import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

const styles = {
  section: {
    py: 12,
    bgcolor: 'background.default',
  },
  container: {
    maxWidth: '1280px',
    mx: 'auto',
    px: { xs: '20px', md: '64px' },
  },
  header: {
    textAlign: 'center',
    mb: 10,
  },
  title: {
    fontFamily: '"Playfair Display", serif',
    fontSize: { xs: '2rem', md: '3rem' },
    fontWeight: 700,
    lineHeight: 1.17,
    mb: 2,
  },
  subtitle: {
    color: 'text.secondary',
    maxWidth: '576px',
    mx: 'auto',
  },
  steps: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
    gap: 6,
    position: 'relative',
  },
  connector: {
    display: { xs: 'none', md: 'block' },
    position: 'absolute',
    top: 48,
    left: 0,
    width: '100%',
    height: '1px',
    background: 'linear-gradient(to right, transparent, rgba(242, 202, 80, 0.3), transparent)',
    zIndex: 0,
  },
  step: {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
  },
  circle: {
    width: 96,
    height: 96,
    bgcolor: '#343625',
    borderRadius: '50%',
    border: '1px solid',
    borderColor: 'rgba(242, 202, 80, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mx: 'auto',
    mb: 4,
    boxShadow: '0 0 20px 2px rgba(77, 182, 172, 0.15)',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  stepNumber: {
    fontFamily: '"Playfair Display", serif',
    fontSize: '2rem',
    fontWeight: 600,
    color: 'primary.main',
  },
  stepTitle: {
    fontFamily: '"Playfair Display", serif',
    fontSize: '1.5rem',
    fontWeight: 600,
    mb: 2,
  },
  stepDescription: {
    fontSize: '1rem',
    lineHeight: 1.5,
    color: 'text.secondary',
  },
}

export const AdoptionGuide = () => {
  const { t } = useTranslation()

  const steps = [
    {
      number: '1',
      title: t('adoption.steps.call.title'),
      description: t('adoption.steps.call.description'),
    },
    {
      number: '2',
      title: t('adoption.steps.trial.title'),
      description: t('adoption.steps.trial.description'),
    },
    {
      number: '3',
      title: t('adoption.steps.union.title'),
      description: t('adoption.steps.union.description'),
    },
  ]

  return (
    <Box component="section" sx={styles.section}>
      <Box sx={styles.container}>
        <Box sx={styles.header}>
          <Typography variant="h2" sx={styles.title}>
            {t('adoption.title')}
          </Typography>
          <Typography sx={styles.subtitle}>
            {t('adoption.description')}
          </Typography>
        </Box>
        <Box sx={styles.steps}>
          <Box sx={styles.connector} />
          {steps.map((step) => (
            <Box key={step.number} sx={styles.step}>
              <Box sx={styles.circle}>
                <Typography sx={styles.stepNumber}>{step.number}</Typography>
              </Box>
              <Typography sx={styles.stepTitle}>{step.title}</Typography>
              <Typography sx={styles.stepDescription}>{step.description}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
