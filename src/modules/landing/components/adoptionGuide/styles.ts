import { SxProps, Theme } from '@mui/material'

type Styles = Record<
  | 'section'
  | 'container'
  | 'header'
  | 'title'
  | 'subtitle'
  | 'steps'
  | 'connector'
  | 'step'
  | 'circle'
  | 'stepNumber'
  | 'stepTitle'
  | 'stepDescription',
  SxProps<Theme>
>

export const styles: Styles = {
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
    bgcolor: 'celestial.moss',
    borderRadius: '50%',
    border: '1px solid',
    borderColor: 'celestial.goldVeil',
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
    color: 'primary.main',
  },
  stepTitle: {
    mb: 2,
  },
  stepDescription: {
    fontSize: '1rem',
    lineHeight: 1.5,
    color: 'text.secondary',
  },
}
