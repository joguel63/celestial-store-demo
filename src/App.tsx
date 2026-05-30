import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { theme } from '@/core/theme'
import { AppRouter } from '@/core/router'
import '@/core/locales'

export const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppRouter />
  </ThemeProvider>
)
