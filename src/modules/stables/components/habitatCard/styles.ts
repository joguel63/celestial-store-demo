import { SxProps, Theme } from '@mui/material'

type Styles = Record<
  | 'card'
  | 'imageWrap'
  | 'vignette'
  | 'badge'
  | 'body'
  | 'name'
  | 'habitatRow'
  | 'habitatText'
  | 'description'
  | 'divider'
  | 'dominantLabel'
  | 'speciesList'
  | 'species'
  | 'featuredGrid'
  | 'featuredImage'
  | 'featuredBody'
  | 'featuredName'
  | 'featuredDescription'
  | 'featuredActions'
  | 'primaryBtn'
  | 'secondaryBtn',
  SxProps<Theme>
>

export const styles: Styles = {
  card: {
    position: 'relative',
    bgcolor: 'background.paper',
    borderTop: '2px solid',
    borderColor: 'primary.main',
    overflow: 'hidden',
    boxShadow: '0 0 15px 0 rgba(77, 182, 172, 0.15)',
    transition: 'transform 0.5s',
    '&:hover': {
      transform: 'translateY(-8px)',
    },
  },
  imageWrap: {
    position: 'relative',
    aspectRatio: '1 / 1',
    overflow: 'hidden',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.7s',
    },
    '&:hover img': {
      transform: 'scale(1.1)',
    },
  },
  vignette: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle, rgba(26,15,41,0) 0%, rgba(26,15,41,0.8) 100%)',
  },
  badge: {
    position: 'absolute',
    top: 16,
    right: 16,
    px: 1.5,
    py: 0.5,
    background: 'linear-gradient(90deg, #f2ca50, #79dfd4)',
    color: 'celestial.ember',
    fontFamily: '"Manrope", sans-serif',
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
  },
  body: {
    p: 4,
  },
  name: {
    color: 'primary.main',
    mb: 1,
  },
  habitatRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    mb: 2,
    color: 'celestial.teal',
  },
  habitatText: {},
  description: {
    fontSize: '1rem',
    lineHeight: 1.5,
    color: 'text.secondary',
    mb: 3,
    height: 48,
    overflow: 'hidden',
  },
  divider: {
    borderTop: '1px solid',
    borderColor: 'rgba(242, 202, 80, 0.1)',
    pt: 2,
  },
  dominantLabel: {
    color: 'celestial.goldWash',
    display: 'block',
    mb: 1,
  },
  speciesList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 1,
  },
  species: {
    fontSize: '1rem',
    color: 'text.primary',
  },
  featuredGrid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
  },
  featuredImage: {
    position: 'relative',
    aspectRatio: '1 / 1',
    overflow: 'hidden',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 1s',
    },
    '&:hover img': {
      transform: 'scale(1.05)',
    },
  },
  featuredBody: {
    p: { xs: 4, md: 5 },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  featuredName: {
    fontFamily: '"Playfair Display", serif',
    fontSize: { xs: '1.5rem', md: '2rem' },
    fontWeight: 600,
    lineHeight: 1.25,
    color: 'primary.main',
    mb: 2,
  },
  featuredDescription: {
    fontSize: '1rem',
    lineHeight: 1.5,
    color: 'text.secondary',
    mb: 4,
  },
  featuredActions: {
    display: 'flex',
    gap: 2,
  },
  primaryBtn: {
    bgcolor: 'rgba(242, 202, 80, 0.1)',
    border: '1px solid',
    borderColor: 'primary.main',
    color: 'primary.main',
    px: 3,
    py: 1.5,
    fontSize: '0.875rem',
    fontWeight: 700,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    borderRadius: 0,
    '&:hover': {
      bgcolor: 'primary.main',
      color: 'primary.contrastText',
    },
  },
  secondaryBtn: {
    color: 'text.primary',
    fontSize: '0.875rem',
    fontWeight: 700,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    '&:hover': {
      color: 'celestial.teal',
      bgcolor: 'transparent',
    },
  },
}
