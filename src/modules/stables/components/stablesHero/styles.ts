import { SxProps, Theme } from '@mui/material'

type Styles = Record<
  'section' | 'bgLayer' | 'gradient' | 'content' | 'title' | 'description',
  SxProps<Theme>
>

export const styles: Styles = {
  section: {
    position: 'relative',
    height: '614px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  bgLayer: {
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
  gradient: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, #131407, rgba(19,20,7,0.4), transparent)',
  },
  content: {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    maxWidth: '768px',
    px: { xs: '20px', md: '64px' },
  },
  title: {
    fontFamily: '"Playfair Display", serif',
    fontSize: { xs: '2rem', md: '4rem' },
    fontWeight: 700,
    lineHeight: { xs: 1.25, md: 1.125 },
    letterSpacing: '-0.02em',
    color: 'primary.main',
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
