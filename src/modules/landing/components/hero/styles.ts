import { SxProps, Theme } from '@mui/material'

type Styles = Record<
  | 'section'
  | 'bgImage'
  | 'stars'
  | 'vignette'
  | 'content'
  | 'textWrap'
  | 'title'
  | 'shimmer'
  | 'description'
  | 'buttons',
  SxProps<Theme>
>

export const styles: Styles = {
  section: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    pt: '80px',
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
      opacity: 0.4,
    },
  } as SxProps<Theme>,
  stars: {
    position: 'absolute',
    inset: 0,
    zIndex: 1,
    backgroundImage: 'radial-gradient(1px 1px at 10% 15%, rgba(242, 202, 80, 0.6), transparent), radial-gradient(1px 1px at 25% 35%, #fff, transparent), radial-gradient(1.5px 1.5px at 40% 10%, rgba(121, 223, 212, 0.5), transparent), radial-gradient(1px 1px at 55% 25%, rgba(242, 202, 80, 0.4), transparent), radial-gradient(1px 1px at 70% 45%, #fff, transparent), radial-gradient(1.5px 1.5px at 85% 15%, rgba(121, 223, 212, 0.5), transparent), radial-gradient(1px 1px at 15% 60%, rgba(242, 202, 80, 0.3), transparent), radial-gradient(1px 1px at 35% 55%, #fff, transparent), radial-gradient(1px 1px at 60% 70%, rgba(242, 202, 80, 0.4), transparent), radial-gradient(1.5px 1.5px at 80% 65%, #fff, transparent), radial-gradient(1px 1px at 90% 40%, rgba(121, 223, 212, 0.4), transparent), radial-gradient(1px 1px at 5% 85%, #fff, transparent), radial-gradient(1px 1px at 45% 90%, rgba(242, 202, 80, 0.3), transparent), radial-gradient(1px 1px at 65% 85%, #fff, transparent), radial-gradient(1.5px 1.5px at 20% 75%, rgba(121, 223, 212, 0.3), transparent)',
    backgroundSize: '200px 200px, 200px 200px, 200px 200px, 200px 200px, 200px 200px, 200px 200px, 200px 200px, 200px 200px, 200px 200px, 200px 200px, 200px 200px, 200px 200px, 200px 200px, 200px 200px, 200px 200px',
  },
  vignette: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle, transparent 20%, #131407 100%)',
  },
  content: {
    position: 'relative',
    zIndex: 10,
    maxWidth: '1280px',
    width: '100%',
    mx: 'auto',
    px: { xs: '20px', md: '64px' },
  },
  textWrap: {
    maxWidth: '672px',
  },
  title: {
    fontFamily: '"Playfair Display", serif',
    fontSize: { xs: '2rem', md: '4rem' },
    fontWeight: 700,
    lineHeight: { xs: 1.25, md: 1.125 },
    letterSpacing: '-0.02em',
    mb: 3,
  },
  shimmer: {
    background: 'linear-gradient(90deg, #f2ca50, #79dfd4, #f2ca50)',
    backgroundSize: '200% auto',
    animation: 'shimmerAnim 4s linear infinite',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  description: {
    fontSize: { xs: '1rem', md: '1.125rem' },
    lineHeight: 1.56,
    color: 'text.secondary',
    mb: 5,
    maxWidth: '512px',
  },
  buttons: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 2,
  },
}
