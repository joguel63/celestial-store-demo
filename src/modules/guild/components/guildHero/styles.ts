import { SxProps, Theme } from '@mui/material'

type Styles = Record<
  | 'section'
  | 'bgLayer'
  | 'vignette'
  | 'gradient'
  | 'content'
  | 'title'
  | 'description'
  | 'actions'
  | 'primaryBtn'
  | 'ghostBtn',
  SxProps<Theme>
>

export const styles: Styles = {
  section: {
    position: 'relative',
    minHeight: '716px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    pt: '80px',
  },
  bgLayer: {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.4,
    },
  },
  vignette: {
    position: 'absolute',
    inset: 0,
    maskImage: 'radial-gradient(circle, black 50%, transparent 100%)',
    WebkitMaskImage: 'radial-gradient(circle, black 50%, transparent 100%)',
  },
  gradient: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, #131407, transparent, #131407)',
  },
  content: {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    maxWidth: '896px',
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
  },
  description: {
    fontSize: { xs: '1rem', md: '1.125rem' },
    lineHeight: 1.56,
    color: 'text.secondary',
    maxWidth: '672px',
    mx: 'auto',
    mb: 5,
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
    borderRadius: 0,
  },
  ghostBtn: {
    px: 5,
    py: 2,
    border: '1px solid',
    borderColor: 'rgba(242, 202, 80, 0.4)',
    color: 'text.secondary',
    fontSize: '0.875rem',
    fontWeight: 700,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    borderRadius: 0,
    '&:hover': {
      bgcolor: 'rgba(242, 202, 80, 0.05)',
      borderColor: 'primary.main',
    },
  },
}
