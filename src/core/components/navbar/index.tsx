import type { MouseEvent } from 'react'
import { AppBar, Toolbar, Button, Box, Link, ToggleButton, ToggleButtonGroup } from '@mui/material'
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

export const Navbar = () => {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const currentLanguage = getSupportedLanguage(i18n.resolvedLanguage ?? i18n.language)

  const handleLanguageChange = (
    _event: MouseEvent<HTMLElement>,
    nextLanguage: SupportedLanguage | null,
  ) => {
    if (nextLanguage && nextLanguage !== currentLanguage) {
      void i18n.changeLanguage(nextLanguage)
    }
  }

  return (
    <AppBar position="fixed" sx={styles.nav} component="nav" aria-label={t('navbar.ariaLabel')}>
      <Toolbar sx={styles.toolbar} disableGutters>
        <Box component="span" sx={styles.brand}>
          {t('navbar.brand')}
        </Box>
        <Box sx={styles.links}>
          <Link
            component={RouterLink}
            to={ROUTES.HOME}
            underline="none"
            sx={mergeLinkStyles(location.pathname === ROUTES.HOME)}
          >
            {t('navbar.links.bestiary')}
          </Link>
          <Link
            component={RouterLink}
            to={ROUTES.STABLES}
            underline="none"
            sx={mergeLinkStyles(location.pathname === ROUTES.STABLES)}
          >
            {t('navbar.links.stables')}
          </Link>
          <Link
            component={RouterLink}
            to={ROUTES.SUPPLIES}
            underline="none"
            sx={mergeLinkStyles(location.pathname === ROUTES.SUPPLIES)}
          >
            {t('navbar.links.supplies')}
          </Link>
          <Link
            component={RouterLink}
            to={ROUTES.GUILD}
            underline="none"
            sx={mergeLinkStyles(location.pathname === ROUTES.GUILD)}
          >
            {t('navbar.links.guild')}
          </Link>
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
          <Button variant="contained" size="medium">
            {t('navbar.adoptNow')}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
