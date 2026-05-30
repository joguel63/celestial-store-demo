import { AppBar, Toolbar, Button, Box, Link, IconButton, Tooltip } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useTranslation } from 'react-i18next'

const styles = {
  nav: {
    bgcolor: 'rgba(19, 20, 7, 0.4)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid',
    borderColor: 'rgba(242, 202, 80, 0.2)',
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
      color: '#79dfd4',
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

  return (
    <AppBar position="fixed" sx={styles.nav}>
      <Toolbar sx={styles.toolbar} disableGutters>
        <Box component="span" sx={styles.brand}>
          {t('navbar.brand')}
        </Box>
        <Box sx={styles.links}>
          <Link href="#" underline="none" sx={{ ...styles.link, ...styles.activeLink }}>
            {t('navbar.links.bestiary')}
          </Link>
          <Link href="#" underline="none" sx={styles.link}>
            {t('navbar.links.stables')}
          </Link>
          <Link href="#" underline="none" sx={styles.link}>
            {t('navbar.links.supplies')}
          </Link>
          <Link href="#" underline="none" sx={styles.link}>
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
