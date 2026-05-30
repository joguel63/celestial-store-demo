import { SxProps, Theme } from '@mui/material'

type Styles = Record<
  'section' | 'glow' | 'container' | 'title' | 'description' | 'actions' | 'primaryBtn' | 'ghostBtn',
  SxProps<Theme>
>

export const styles: Styles = {
  section: {
    py: 16,
    bgcolor: '#131407',
    position: 'relative',
    overflow: 'hidden',
  },
  glow: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '800px',
    height: '400px',
    bgcolor: 'rgba(121, 223, 212, 0.05)',
    borderRadius: '50%',
    filter: 'blur(120px)',
  },
  container: {
    maxWidth: '896px',
    mx: 'auto',
    px: { xs: '20px', md: '64px' },
    textAlign: 'center',
    position: 'relative',
    zIndex: 10,
  },
  title: {
    fontFamily: '"Playfair Display", serif',
    fontSize: { xs: '2rem', md: '3rem' },
    fontWeight: 700,
    lineHeight: { xs: 1.33, md: 1.17 },
    color: 'primary.main',
    mb: 4,
  },
  description: {
    fontSize: { xs: '1rem', md: '1.125rem' },
    lineHeight: 1.56,
    color: 'text.secondary',
    mb: 6,
  },
  actions: {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    justifyContent: 'center',
    gap: 3,
  },
  primaryBtn: {
    px: 5,
    py: 2,
    fontSize: '0.875rem',
    fontWeight: 700,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
    transition: 'transform 0.2s',
    '&:active': {
      transform: 'scale(0.95)',
    },
  },
  ghostBtn: {
    px: 5,
    py: 2,
    border: '1px solid',
    borderColor: 'rgba(121, 223, 212, 0.5)',
    color: '#79dfd4',
    fontSize: '0.875rem',
    fontWeight: 700,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    borderRadius: 0,
    '&:hover': {
      bgcolor: 'rgba(121, 223, 212, 0.1)',
      borderColor: '#79dfd4',
    },
  },
}
