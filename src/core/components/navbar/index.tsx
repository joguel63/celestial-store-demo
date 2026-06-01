import { AppBar, Toolbar, Button, Box, Link, IconButton, Tooltip } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useTranslation } from 'react-i18next'
import { useLocation, Link as RouterLink } from 'react-router-dom'

const styles = {
  nav: {
    bgcolor: 'celestial.voidFog',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid',
    borderColor: 'celestial.goldVeil',
    boxShadow: 'none',
  },
  toolbar: {
    maxWidth: '1280px',
    width: '100%',
    mx: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    height: 80,
    px: { xs: '20px', md: '64px' },
  },
  brand: {
    fontFamily: '"Playfair Display", serif',
    fontWeight: 700,
    fontSize: { xs: '1.25rem', md: '2rem' },
    color: 'primary.main',
  },
  links: {
    display: { xs: 'none', md: 'flex' },
    gap: 5,
  },
  link: {
    fontFamily: '"Manrope", sans-serif',
    fontSize: '0.875rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    color: 'text.secondary',
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      color: 'celestial.teal',
    },
  },
  activeLink: {
    color: 'primary.main',
    fontWeight: 700,
    borderBottom: '2px solid',
    borderColor: 'primary.main',
    paddingBottom: '4px',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: 3,
  },
}

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
            sx={{
              ...styles.link,
              ...(location.pathname === '/' ? styles.activeLink : {}),
            }}
          >
            {t('navbar.links.bestiary')}
          </Link>
          <Link
            component={RouterLink}
            to="/stables"
            underline="none"
            sx={{
              ...styles.link,
              ...(location.pathname === '/stables' ? styles.activeLink : {}),
            }}
          >
            {t('navbar.links.stables')}
          </Link>
          <Link
            component={RouterLink}
            to="/supplies"
            underline="none"
            sx={{
              ...styles.link,
              ...(location.pathname === '/supplies' ? styles.activeLink : {}),
            }}
          >
            {t('navbar.links.supplies')}
          </Link>
          <Link
            component={RouterLink}
            to="/guild"
            underline="none"
            sx={{
              ...styles.link,
              ...(location.pathname === '/guild' ? styles.activeLink : {}),
            }}
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
