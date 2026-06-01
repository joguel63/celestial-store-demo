import { Box, Typography, TextField, IconButton, Link, Tooltip } from '@mui/material'
import PublicIcon from '@mui/icons-material/Public'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import HistoryEduIcon from '@mui/icons-material/HistoryEdu'
import SendIcon from '@mui/icons-material/Send'
import { useTranslation } from 'react-i18next'
import { Link as RouterLink } from 'react-router-dom'
import { ROUTES } from '@/core/enums/routes'
import { styles } from './styles'

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <Box component="footer" sx={styles.footer}>
      <Box sx={styles.grid}>
        <Box>
          <Typography component="span" variant="h4" sx={styles.brand}>
            {t('footer.brand')}
          </Typography>
          <Typography sx={styles.tagline}>{t('footer.tagline')}</Typography>
          <Box sx={styles.socials}>
            <Tooltip title={t('footer.socialTooltips.network')}>
              <IconButton sx={styles.socialIcon}><PublicIcon /></IconButton>
            </Tooltip>
            <Tooltip title={t('footer.socialTooltips.scrolls')}>
              <IconButton sx={styles.socialIcon}><AutoAwesomeIcon /></IconButton>
            </Tooltip>
            <Tooltip title={t('footer.socialTooltips.archive')}>
              <IconButton sx={styles.socialIcon}><HistoryEduIcon /></IconButton>
            </Tooltip>
          </Box>
        </Box>
        <Box>
          <Typography component="h4" sx={styles.columnTitle}>
            {t('footer.navigation.title')}
          </Typography>
          <Box component="ul" sx={styles.linkList}>
            <li><Link component={RouterLink} to={ROUTES.STABLES} underline="none" sx={styles.link}>{t('footer.navigation.stables')}</Link></li>
            <li><Link component={RouterLink} to={ROUTES.SUPPLIES} underline="none" sx={styles.link}>{t('footer.navigation.supplies')}</Link></li>
            <li><Link component={RouterLink} to={ROUTES.GUILD} underline="none" sx={styles.link}>{t('footer.navigation.guild')}</Link></li>
          </Box>
        </Box>
        <Box>
          <Typography component="h4" sx={styles.columnTitle}>
            {t('footer.legal.title')}
          </Typography>
          <Box component="ul" sx={styles.linkList}>
            <li><Link underline="none" sx={styles.link}>{t('footer.legal.terms')}</Link></li>
            <li><Link underline="none" sx={styles.link}>{t('footer.legal.privacy')}</Link></li>
            <li><Link underline="none" sx={styles.link}>{t('footer.legal.cookies')}</Link></li>
          </Box>
        </Box>
        <Box>
          <Typography component="h4" sx={styles.columnTitle}>
            {t('footer.newsletter.title')}
          </Typography>
          <Typography sx={styles.newsletterDesc}>
            {t('footer.newsletter.description')}
          </Typography>
          <Box sx={styles.inputRow}>
            <TextField
              placeholder={t('footer.newsletter.placeholder')}
              type="email"
              size="small"
              fullWidth
              sx={styles.input}
            />
            <Tooltip title={t('footer.newsletter.send')}>
              <IconButton sx={styles.sendButton} aria-label={t('footer.newsletter.send')}>
                <SendIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Box>
      <Box sx={styles.bottom}>
        <Typography sx={styles.copyright}>
          {t('footer.copyright')}
        </Typography>
      </Box>
    </Box>
  )
}
