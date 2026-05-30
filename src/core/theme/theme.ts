import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    celestial: {
      gold: string
      goldDim: string
      teal: string
      tealDim: string
      deep: string
      void: string
      parchment: string
      chamber: string
    }
  }
  interface PaletteOptions {
    celestial?: {
      gold: string
      goldDim: string
      teal: string
      tealDim: string
      deep: string
      void: string
      parchment: string
      chamber: string
    }
  }
}

const celestialColors = {
  gold: '#f2ca50',
  goldDim: '#d4af37',
  teal: '#79dfd4',
  tealDim: '#4db6ac',
  deep: '#2e1a47',
  void: '#131407',
  parchment: '#f5f5dc',
  chamber: '#131407',
}

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#f2ca50',
      light: '#ffe088',
      dark: '#d4af37',
      contrastText: '#3c2f00',
    },
    secondary: {
      main: '#d6bcf4',
      dark: '#523d6c',
      contrastText: '#3b2754',
    },
    error: {
      main: '#ffb4ab',
      dark: '#93000a',
      contrastText: '#690005',
    },
    background: {
      default: '#131407',
      paper: '#1f2111',
    },
    text: {
      primary: '#e4e4cc',
      secondary: '#d0c5af',
    },
    divider: '#4d4635',
    celestial: celestialColors,
  },
  typography: {
    fontFamily: '"Manrope", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontSize: '4rem',
      fontWeight: 700,
      lineHeight: 1.125,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.17,
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.25,
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.33,
    },
    body1: {
      fontFamily: '"Manrope", sans-serif',
      fontSize: '1.125rem',
      fontWeight: 400,
      lineHeight: 1.56,
    },
    body2: {
      fontFamily: '"Manrope", sans-serif',
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    button: {
      fontFamily: '"Manrope", sans-serif',
      fontSize: '0.875rem',
      fontWeight: 600,
      lineHeight: 1.43,
      letterSpacing: '0.1em',
      textTransform: 'uppercase' as const,
    },
    overline: {
      fontFamily: '"Manrope", sans-serif',
      fontSize: '0.875rem',
      fontWeight: 600,
      lineHeight: 1.43,
      letterSpacing: '0.1em',
      textTransform: 'uppercase' as const,
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#131407',
          color: '#e4e4cc',
          overflowX: 'hidden',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase' as const,
          letterSpacing: '0.1em',
          fontWeight: 600,
          borderRadius: 0,
        },
        containedPrimary: {
          boxShadow: '0 0 20px 2px rgba(77, 182, 172, 0.15)',
          '&:hover': {
            filter: 'brightness(1.1)',
            boxShadow: '0 0 30px rgba(242, 202, 80, 0.3)',
          },
        },
      },
    },
  },
})
