import { AppBar, Toolbar, Button, Box, Link, IconButton, Tooltip } from '@mui/material'
import type { SxProps, Theme } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useTranslation } from 'react-i18next'
import { useLocation, Link as RouterLink } from 'react-router-dom'
import { styles } from './styles'

const mergeLinkStyles = (isActive: boolean): SxProps<Theme> => ({
  ...(styles.link as Record<string, unknown>),
  ...(isActive ? (styles.activeLink as Record<string, unknown>) : {}),
}) as SxProps<Theme>

export const Navbar = () => {
  const { t } = useTranslation()
  const location = useLocation()

  return (
    <AppBar position="fixed" sx={styles.nav}>
      <Toolbar sx={styles.toolbar} disableGutters>
        <Box component="span" sx={styles.brand}>
          {t('navbar.brand')}
        </Box>
        <Box sx={styles.links}>
          <Link
            component={RouterLink}
            to="/"
            underline="none"
            sx={mergeLinkStyles(location.pathname === '/')}
          >
            {t('navbar.links.bestiary')}
          </Link>
          <Link
            component={RouterLink}
            to="/stables"
            underline="none"
            sx={mergeLinkStyles(location.pathname === '/stables')}
          >
            {t('navbar.links.stables')}
          </Link>
          <Link
            component={RouterLink}
            to="/supplies"
            underline="none"
            sx={mergeLinkStyles(location.pathname === '/supplies')}
          >
            {t('navbar.links.supplies')}
          </Link>
          <Link
            component={RouterLink}
            to="/guild"
            underline="none"
            sx={mergeLinkStyles(location.pathname === '/guild')}
          >
            {t('navbar.links.guild')}
          </Link>
        </Box>
        <Box sx={styles.actions}>
          <Tooltip title={t('navbar.searchTooltip')}>
            <IconButton sx={{ color: 'primary.main' }} aria-label={t('navbar.search')}>
              <SearchIcon />
            </IconButton>
          </Tooltip>
          <Button variant="contained" size="medium">
            {t('navbar.adoptNow')}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
