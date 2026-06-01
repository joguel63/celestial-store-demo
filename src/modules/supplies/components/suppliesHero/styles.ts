import { SxProps, Theme } from '@mui/material'

type Styles = Record<
  'section' | 'bgImage' | 'overlay' | 'content' | 'badge' | 'badgeText' | 'title' | 'description',
  SxProps<Theme>
>

export const styles: Styles = {
  section: {
    position: 'relative',
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  bgImage: {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.5,
    },
  } as SxProps<Theme>,
  overlay: {
    position: 'absolute',
    inset: 0,
    background:
      'linear-gradient(to bottom, rgba(19,20,7,0.8), rgba(19,20,7,0.6))',
  },
  content: {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    maxWidth: '896px',
    mx: 'auto',
    px: { xs: '20px', md: '64px' },
    py: { xs: 4, md: 6 },
    backdropFilter: 'blur(8px)',
    bgcolor: 'rgba(19,20,7,0.2)',
    borderRadius: '0.75rem',
    border: '1px solid rgba(255,255,255,0.05)',
  },
  badge: {
    display: 'inline-block',
    px: 2,
    py: 0.5,
    border: '1px solid',
    borderColor: 'rgba(242, 202, 80, 0.3)',
    borderRadius: '9999px',
    mb: 3,
  },
  badgeText: {
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: 'celestial.teal',
  },
  title: {
    fontFamily: '"Playfair Display", serif',
    fontSize: { xs: '2rem', md: '4rem' },
    fontWeight: 700,
    lineHeight: { xs: 1.25, md: 1.125 },
    letterSpacing: '-0.02em',
    color: 'text.primary',
    mb: 3,
    textShadow: '0 0 40px rgba(0,0,0,0.5)',
  },
  description: {
    fontSize: { xs: '1rem', md: '1.125rem' },
    lineHeight: 1.56,
    color: 'text.secondary',
    maxWidth: '672px',
    mx: 'auto',
  },
}
