import type { MouseEvent } from 'react'
import { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Link,
  ToggleButton,
  ToggleButtonGroup,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import type { SxProps, Theme } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useLocation, Link as RouterLink } from 'react-router-dom'
import { ROUTES } from '@/core/enums/routes'
import { styles } from './styles'

type SupportedLanguage = 'es' | 'en'

const languageOptions: SupportedLanguage[] = ['es', 'en']

const getSupportedLanguage = (language?: string): SupportedLanguage =>
  language?.startsWith('es') ? 'es' : 'en'

const mergeLinkStyles = (isActive: boolean): SxProps<Theme> => ({
  ...(styles.link as Record<string, unknown>),
  ...(isActive ? styles.activeLink : {}),
})

const navItems = [
  { to: ROUTES.HOME, label: 'navbar.links.bestiary' },
  { to: ROUTES.STABLES, label: 'navbar.links.stables' },
  { to: ROUTES.SUPPLIES, label: 'navbar.links.supplies' },
  { to: ROUTES.GUILD, label: 'navbar.links.guild' },
] as const

export const Navbar = () => {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const currentLanguage = getSupportedLanguage(i18n.resolvedLanguage ?? i18n.language)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleLanguageChange = (
    _event: MouseEvent<HTMLElement>,
    nextLanguage: SupportedLanguage | null,
  ) => {
    if (nextLanguage && nextLanguage !== currentLanguage) {
      void i18n.changeLanguage(nextLanguage)
    }
  }

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev)
  }

  const handleDrawerClose = () => {
    setDrawerOpen(false)
  }

  return (
    <AppBar position="fixed" sx={styles.nav} component="nav" aria-label={t('navbar.ariaLabel')}>
      <Toolbar sx={styles.toolbar} disableGutters>
        <Link component={RouterLink} to={ROUTES.HOME} underline="none" sx={styles.brand}>
          {t('navbar.brand')}
        </Link>
        <Box sx={styles.links}>
          {navItems.map((item) => (
            <Link
              key={item.to}
              component={RouterLink}
              to={item.to}
              underline="none"
              sx={mergeLinkStyles(location.pathname === item.to)}
            >
              {t(item.label)}
            </Link>
          ))}
        </Box>
        <Box sx={styles.actions}>
          <ToggleButtonGroup
            value={currentLanguage}
            exclusive
            onChange={handleLanguageChange}
            size="small"
            sx={styles.languageGroup}
            aria-label={t('navbar.language.label')}
          >
            {languageOptions.map((language) => (
              <ToggleButton
                key={language}
                value={language}
                sx={styles.languageButton}
                aria-label={t(
                  language === 'es' ? 'navbar.language.spanish' : 'navbar.language.english',
                )}
              >
                {t(`navbar.language.options.${language}`)}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
          <Button variant="contained" size="medium" sx={{ display: { xs: 'none', md: 'inline-flex' } }}>
            {t('navbar.adoptNow')}
          </Button>
          <IconButton
            sx={styles.hamburger}
            onClick={handleDrawerToggle}
            aria-label={t('navbar.menu.open')}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerClose}
        sx={styles.drawer}
        ModalProps={{ keepMounted: true }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 1, pt: 1 }}>
          <IconButton
            onClick={handleDrawerClose}
            aria-label={t('navbar.menu.close')}
            sx={{ color: 'primary.main' }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => {
            const isActive = location.pathname === item.to
            return (
              <ListItemButton
                key={item.to}
                component={RouterLink}
                to={item.to}
                onClick={handleDrawerClose}
                sx={{
                  py: 2,
                  borderBottom: isActive ? '2px solid' : '2px solid transparent',
                  borderColor: isActive ? 'primary.main' : 'transparent',
                  color: isActive ? 'primary.main' : 'text.secondary',
                  fontWeight: isActive ? 700 : 600,
                  fontFamily: '"Manrope", sans-serif',
                  fontSize: '0.875rem',
                  letterSpacing: '0.1em',
                  '&:hover': {
                    color: 'celestial.teal',
                    bgcolor: 'transparent',
                  },
                }}
              >
                <ListItemText primary={t(item.label)} />
              </ListItemButton>
            )
          })}
        </List>
      </Drawer>
    </AppBar>
  )
}
