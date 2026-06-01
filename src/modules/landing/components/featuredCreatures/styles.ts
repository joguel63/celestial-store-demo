import { SxProps, Theme } from '@mui/material'

type Styles = Record<
  | 'card'
  | 'imageWrap'
  | 'gradient'
  | 'body'
  | 'header'
  | 'name'
  | 'rarity'
  | 'description',
  SxProps<Theme>
>

export const styles: Styles = {
  card: {
    position: 'relative',
    bgcolor: 'background.paper',
    borderTop: '2px solid',
    borderColor: 'primary.main',
    p: '1px',
    transition: 'all 0.3s',
    '&:hover': {
      transform: 'translateY(-8px)',
    },
  },
  imageWrap: {
    aspectRatio: '3/4',
    overflow: 'hidden',
    position: 'relative',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.7s',
    },
    '&:hover img': {
      transform: 'scale(1.1)',
    },
  } ,
  gradient: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, var(--bg, #1f2111), transparent)',
  },
  body: {
    p: 3,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    mb: 2,
  },
  name: {},
  rarity: {
    fontSize: '0.625rem',
    textTransform: 'uppercase',
    letterSpacing: '-0.02em',
    borderRadius: '999px',
    px: 1,
    py: 0.25,
  },
  description: {
    fontSize: '1rem',
    lineHeight: 1.5,
    color: 'text.secondary',
    mb: 3,
  },
}
