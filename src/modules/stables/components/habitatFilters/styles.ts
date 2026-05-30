import { SxProps, Theme } from '@mui/material'

type Styles = Record<'section' | 'container' | 'filterActive' | 'filterInactive', SxProps<Theme>>

export const styles: Styles = {
  section: {
    py: 6,
    borderTop: '1px solid',
    borderBottom: '1px solid',
    borderColor: 'rgba(242, 202, 80, 0.1)',
    bgcolor: '#0e0f03',
  },
  container: {
    maxWidth: '1280px',
    mx: 'auto',
    px: { xs: '20px', md: '64px' },
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 2,
  },
  filterActive: {
    px: 3,
    py: 1,
    border: '1px solid',
    borderColor: 'primary.main',
    color: 'primary.main',
    fontFamily: '"Manrope", sans-serif',
    fontSize: '0.875rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'none',
    borderRadius: 0,
    '&:hover': {
      bgcolor: 'rgba(242, 202, 80, 0.1)',
      borderColor: 'primary.main',
      color: 'primary.main',
    },
  },
  filterInactive: {
    px: 3,
    py: 1,
    border: '1px solid',
    borderColor: '#4d4635',
    color: 'text.secondary',
    fontFamily: '"Manrope", sans-serif',
    fontSize: '0.875rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'none',
    borderRadius: 0,
    '&:hover': {
      borderColor: '#79dfd4',
      color: '#79dfd4',
      bgcolor: 'transparent',
    },
  },
}
