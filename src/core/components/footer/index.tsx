import { Box, Typography, TextField, IconButton, Link, Tooltip } from '@mui/material'
import PublicIcon from '@mui/icons-material/Public'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import HistoryEduIcon from '@mui/icons-material/HistoryEdu'
import SendIcon from '@mui/icons-material/Send'
import { useTranslation } from 'react-i18next'

const styles = {
  footer: {
    bgcolor: 'background.default',
    borderTop: '1px solid',
    borderColor: 'celestial.goldMist',
    py: 8,
    px: { xs: '20px', md: '64px' },
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' },
    gap: 3,
    maxWidth: '1280px',
    mx: 'auto',
  },
  brand: {
    fontFamily: '"Playfair Display", serif',
    fontSize: '1.5rem',
    fontWeight: 600,
    color: 'primary.main',
    mb: 2,
    display: 'block',
  },
  tagline: {
    color: 'text.secondary',
    fontSize: '1rem',
    mb: 3,
    pr: 2,
  },
  socials: {
    display: 'flex',
    gap: 1,
  },
  socialIcon: {
    color: 'celestial.goldDim',
    '&:hover': { color: 'celestial.teal', bgcolor: 'transparent' },
  },
  columnTitle: {
    color: 'primary.main',
    fontWeight: 700,
    fontSize: '0.875rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    mb: 3,
  },
  linkList: {
    listStyle: 'none',
    p: 0,
    m: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  link: {
    color: 'text.secondary',
    fontSize: '0.875rem',
    textDecoration: 'underline',
    textDecorationColor: 'celestial.tealVeil',
    textUnderlineOffset: '4px',
    cursor: 'pointer',
    '&:hover': {
      color: 'celestial.teal',
    },
  },
  newsletterDesc: {
    color: 'text.secondary',
    fontSize: '1rem',
    mb: 2,
  },
  inputRow: {
    display: 'flex',
  },
  input: {
    bgcolor: 'background.paper',
    '& .MuiOutlinedInput-root': {
      '& fieldset': { border: 'none' },
      '&:focus-within fieldset': {
        border: '1px solid',
        borderColor: 'celestial.teal',
      },
    },
    '& input': {
      color: 'text.primary',
      '&::placeholder': { color: 'celestial.stone' },
    },
  },
  sendButton: {
    bgcolor: 'celestial.goldDim',
    color: 'celestial.bronze',
    borderRadius: 0,
    '&:hover': {
      bgcolor: 'primary.main',
    },
  },
  bottom: {
    maxWidth: '1280px',
    mx: 'auto',
    mt: 8,
    pt: 4,
    borderTop: '1px solid',
    borderColor: 'celestial.goldGlass',
    textAlign: 'center',
  },
  copyright: {
    color: 'text.secondary',
    fontSize: '0.875rem',
  },
}

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <Box component="footer" sx={styles.footer}>
      <Box sx={styles.grid}>
        <Box>
          <Typography component="span" sx={styles.brand}>
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
            <li><Link underline="none" sx={styles.link}>{t('footer.navigation.stables')}</Link></li>
            <li><Link underline="none" sx={styles.link}>{t('footer.navigation.supplies')}</Link></li>
            <li><Link underline="none" sx={styles.link}>{t('footer.navigation.guild')}</Link></li>
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
