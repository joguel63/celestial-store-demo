import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { styles } from './styles'

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
                <Typography variant="h3" sx={styles.stepNumber}>{step.number}</Typography>
              </Box>
              <Typography variant="h4" sx={styles.stepTitle}>{step.title}</Typography>
              <Typography sx={styles.stepDescription}>{step.description}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
