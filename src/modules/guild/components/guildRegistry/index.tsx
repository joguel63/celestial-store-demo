import { Box, Typography, Button } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import VisibilityIcon from '@mui/icons-material/Visibility'
import FilterListIcon from '@mui/icons-material/FilterList'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useTranslation } from 'react-i18next'

import imgValerius from '@/assets/guild/member-valerius.png'
import imgElara from '@/assets/guild/member-elara.png'
import imgKaelen from '@/assets/guild/member-kaelen.png'
import imgSeraphina from '@/assets/guild/member-seraphina.png'

const styles = {
  section: {
    py: { xs: 12, md: 16 },
    bgcolor: '#0e0f03',
  },
  container: {
    maxWidth: '1280px',
    mx: 'auto',
    px: { xs: '20px', md: '64px' },
  },
  headerRow: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: 'space-between',
    alignItems: { xs: 'flex-start', md: 'flex-end' },
    mb: 6,
    gap: 3,
  },
  title: {
    fontFamily: '"Playfair Display", serif',
    fontSize: { xs: '2rem', md: '3rem' },
    fontWeight: 700,
    lineHeight: { xs: 1.25, md: 1.17 },
    color: 'primary.main',
  },
  subtitle: {
    fontSize: '1rem',
    lineHeight: 1.5,
    color: 'text.secondary',
    mt: 1,
  },
  filterBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    px: 2,
    py: 1,
    bgcolor: 'rgba(19, 20, 7, 0.5)',
    border: '1px solid',
    borderColor: 'rgba(242, 202, 80, 0.1)',
    borderRadius: 0,
    color: 'text.secondary',
    fontFamily: '"Manrope", sans-serif',
    fontSize: '0.875rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'none',
    '&:hover': {
      borderColor: 'rgba(242, 202, 80, 0.3)',
      bgcolor: 'rgba(19, 20, 7, 0.5)',
    },
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
    gap: 3,
  },
  card: {
    display: 'flex',
    gap: 3,
    p: 3,
    bgcolor: 'background.paper',
    border: '1px solid',
    borderColor: 'rgba(242, 202, 80, 0.05)',
    alignItems: 'center',
    transition: 'border-color 0.3s',
    '&:hover': {
      borderColor: 'rgba(242, 202, 80, 0.2)',
    },
  },
  avatarWrap: {
    position: 'relative',
    width: 96,
    height: 96,
    flexShrink: 0,
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '50%',
      filter: 'grayscale(100%)',
      transition: 'filter 0.5s',
    },
    '&:hover img': {
      filter: 'grayscale(0%)',
    },
  },
  avatarBadge: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 32,
    height: 32,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid',
    borderColor: '#131407',
  },
  badgeShimmer: {
    background: 'linear-gradient(90deg, #f2ca50, #4DB6AC, #f2ca50)',
    backgroundSize: '200% auto',
    animation: 'shimmer 4s linear infinite',
  },
  badgeTeal: {
    bgcolor: '#79dfd4',
  },
  badgeIcon: {
    fontSize: 14,
    color: '#3c2f00',
  },
  badgeIconTeal: {
    fontSize: 14,
    color: '#003733',
  },
  info: {},
  memberName: {
    fontFamily: '"Playfair Display", serif',
    fontSize: '1.25rem',
    fontWeight: 700,
    lineHeight: 1.33,
    color: 'primary.main',
  },
  memberRole: {
    fontSize: '0.875rem',
    color: 'text.secondary',
    mb: 1,
    mt: 0.5,
  },
  tags: {
    display: 'flex',
    gap: 1,
    flexWrap: 'wrap',
  },
  tag: {
    px: 1,
    py: 0.5,
    bgcolor: 'rgba(242, 202, 80, 0.05)',
    border: '1px solid',
    borderColor: 'rgba(242, 202, 80, 0.1)',
    fontFamily: '"Manrope", sans-serif',
    fontSize: '0.625rem',
    fontWeight: 700,
    letterSpacing: '0.1em',
    color: 'primary.main',
    textTransform: 'uppercase',
  },
  viewAll: {
    mt: 6,
    textAlign: 'center',
  },
  viewAllLink: {
    fontFamily: '"Manrope", sans-serif',
    fontSize: '0.875rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    color: 'primary.main',
    textTransform: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 1,
    '&:hover': {
      textDecoration: 'underline',
      bgcolor: 'transparent',
    },
  },
}

interface MemberProps {
  image: string
  name: string
  role: string
  tags: string[]
  badge?: 'shimmer' | 'teal'
  badgeIcon: React.ReactNode
}

const MemberCard = ({ image, name, role, tags, badge, badgeIcon }: MemberProps) => (
  <Box sx={styles.card}>
    <Box sx={styles.avatarWrap}>
      <Box component="img" src={image} alt={name} />
      {badge ? (
        <Box
          sx={{
            ...styles.avatarBadge,
            ...(badge === 'shimmer' ? styles.badgeShimmer : styles.badgeTeal),
          }}
        >
          {badgeIcon}
        </Box>
      ) : null}
    </Box>
    <Box sx={styles.info}>
      <Typography sx={styles.memberName}>{name}</Typography>
      <Typography sx={styles.memberRole}>{role}</Typography>
      <Box sx={styles.tags}>
        {tags.map((tag) => (
          <Typography key={tag} component="span" sx={styles.tag}>
            {tag}
          </Typography>
        ))}
      </Box>
    </Box>
  </Box>
)

export const GuildRegistry = () => {
  const { t } = useTranslation()

  return (
    <Box component="section" sx={styles.section}>
      <Box sx={styles.container}>
        <Box sx={styles.headerRow}>
          <Box>
            <Typography sx={styles.title}>{t('guild.registry.title')}</Typography>
            <Typography sx={styles.subtitle}>{t('guild.registry.subtitle')}</Typography>
          </Box>
          <Button sx={styles.filterBtn} startIcon={<FilterListIcon sx={{ fontSize: 16 }} />}>
            {t('guild.registry.filter')}
          </Button>
        </Box>
        <Box sx={styles.grid}>
          <MemberCard
            image={imgValerius}
            name={t('guild.registry.members.valerius.name')}
            role={t('guild.registry.members.valerius.role')}
            tags={t('guild.registry.members.valerius.tags', { returnObjects: true }) as unknown as string[]}
            badge="shimmer"
            badgeIcon={<StarIcon sx={styles.badgeIcon} />}
          />
          <MemberCard
            image={imgElara}
            name={t('guild.registry.members.elara.name')}
            role={t('guild.registry.members.elara.role')}
            tags={t('guild.registry.members.elara.tags', { returnObjects: true }) as unknown as string[]}
            badge="teal"
            badgeIcon={<AutoAwesomeIcon sx={styles.badgeIconTeal} />}
          />
          <MemberCard
            image={imgKaelen}
            name={t('guild.registry.members.kaelen.name')}
            role={t('guild.registry.members.kaelen.role')}
            tags={t('guild.registry.members.kaelen.tags', { returnObjects: true }) as unknown as string[]}
            badgeIcon={null}
          />
          <MemberCard
            image={imgSeraphina}
            name={t('guild.registry.members.seraphina.name')}
            role={t('guild.registry.members.seraphina.role')}
            tags={t('guild.registry.members.seraphina.tags', { returnObjects: true }) as unknown as string[]}
            badge="shimmer"
            badgeIcon={<VisibilityIcon sx={styles.badgeIcon} />}
          />
        </Box>
        <Box sx={styles.viewAll}>
          <Button sx={styles.viewAllLink} endIcon={<ArrowForwardIcon />}>
            {t('guild.registry.viewAll')}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
