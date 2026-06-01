import { SxProps, Theme } from '@mui/material'

type Styles = Record<'section' | 'container' | 'grid', SxProps<Theme>>

export const styles: Styles = {
  section: {
    py: 12,
  },
  container: {
    maxWidth: '1280px',
    mx: 'auto',
    px: { xs: '20px', md: '64px' },
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' },
    gap: 3,
  },
}
