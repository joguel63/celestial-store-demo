import { alpha, createTheme } from '@mui/material/styles'

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
      abyss: string
      moss: string
      thicket: string
      ember: string
      bronze: string
      stone: string
      tealMid: string
      tealDeep: string
      tealAbyss: string
      goldGlass: string
      goldMist: string
      goldVeil: string
      goldHaze: string
      goldFog: string
      goldWash: string
      tealGlass: string
      tealMist: string
      tealGlow: string
      tealVeil: string
      tealFog: string
      voidFog: string
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
      abyss: string
      moss: string
      thicket: string
      ember: string
      bronze: string
      stone: string
      tealMid: string
      tealDeep: string
      tealAbyss: string
      goldGlass: string
      goldMist: string
      goldVeil: string
      goldHaze: string
      goldFog: string
      goldWash: string
      tealGlass: string
      tealMist: string
      tealGlow: string
      tealVeil: string
      tealFog: string
      voidFog: string
    }
  }
}

const gold = '#f2ca50'
const goldDim = '#d4af37'
const teal = '#79dfd4'
const tealDim = '#4db6ac'
const deep = '#2e1a47'
const voidColor = '#131407'
const textPrimary = '#e4e4cc'

const celestialColors = {
  gold,
  goldDim,
  teal,
  tealDim,
  deep,
  void: voidColor,
  parchment: '#f5f5dc',
  chamber: voidColor,
  abyss: '#0e0f03',
  moss: '#343625',
  thicket: '#2a2b1b',
  ember: '#241a00',
  bronze: '#554300',
  stone: '#99907c',
  tealMid: '#5bc3b9',
  tealDeep: '#004e48',
  tealAbyss: '#003733',
  goldGlass: alpha(gold, 0.05),
  goldMist: alpha(gold, 0.1),
  goldVeil: alpha(gold, 0.2),
  goldHaze: alpha(gold, 0.3),
  goldFog: alpha(gold, 0.4),
  goldWash: alpha(gold, 0.6),
  tealGlass: alpha(teal, 0.05),
  tealMist: alpha(teal, 0.1),
  tealGlow: alpha(tealDim, 0.15),
  tealVeil: alpha(teal, 0.3),
  tealFog: alpha(teal, 0.5),
  voidFog: alpha(voidColor, 0.4),
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
          backgroundColor: voidColor,
          color: textPrimary,
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
