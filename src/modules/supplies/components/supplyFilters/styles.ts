import { SxProps, Theme } from '@mui/material'

type Styles = Record<'section' | 'container' | 'filterActive' | 'filterInactive', SxProps<Theme>>

export const styles: Styles = {
  section: {
    py: 6,
    px: { xs: '20px', md: '64px' },
    maxWidth: '1280px',
    mx: 'auto',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 2,
  },
  filterActive: {
    px: 4,
    py: 1.5,
    bgcolor: 'background.paper',
    border: '1px solid',
    borderColor: 'celestial.goldVeil',
    color: 'primary.main',
    fontFamily: '"Manrope", sans-serif',
    fontSize: '0.875rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'none',
    borderRadius: 0,
    '&:hover': {
      borderColor: 'primary.main',
      bgcolor: 'background.paper',
    },
  } as SxProps<Theme>,
  filterInactive: {
    px: 4,
    py: 1.5,
    bgcolor: 'transparent',
    border: '1px solid',
    borderColor: 'rgba(242, 202, 80, 0.1)',
    color: 'text.secondary',
    fontFamily: '"Manrope", sans-serif',
    fontSize: '0.875rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'none',
    borderRadius: 0,
    '&:hover': {
      borderColor: 'celestial.teal',
      color: 'celestial.teal',
      bgcolor: 'transparent',
    },
  } as SxProps<Theme>,
}
