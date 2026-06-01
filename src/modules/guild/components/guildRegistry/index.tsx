import { Box, Typography, Button } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import VisibilityIcon from '@mui/icons-material/Visibility'
import FilterListIcon from '@mui/icons-material/FilterList'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useTranslation } from 'react-i18next'
import { getStringArray } from '@/core/utils/getStringArray'
import { styles } from './styles'

import imgValerius from '@/assets/guild/member-valerius.png'
import imgElara from '@/assets/guild/member-elara.png'
import imgKaelen from '@/assets/guild/member-kaelen.png'
import imgSeraphina from '@/assets/guild/member-seraphina.png'

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
            ...(styles.avatarBadge as Record<string, unknown>),
            ...((badge === 'shimmer' ? styles.badgeShimmer : styles.badgeTeal) as Record<
              string,
              unknown
            >),
          }}
        >
          {badgeIcon}
        </Box>
      ) : null}
    </Box>
    <Box>
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
            tags={getStringArray(t, 'guild.registry.members.valerius.tags')}
            badge="shimmer"
            badgeIcon={<StarIcon sx={styles.badgeIcon} />}
          />
          <MemberCard
            image={imgElara}
            name={t('guild.registry.members.elara.name')}
            role={t('guild.registry.members.elara.role')}
            tags={getStringArray(t, 'guild.registry.members.elara.tags')}
            badge="teal"
            badgeIcon={<AutoAwesomeIcon sx={styles.badgeIconTeal} />}
          />
          <MemberCard
            image={imgKaelen}
            name={t('guild.registry.members.kaelen.name')}
            role={t('guild.registry.members.kaelen.role')}
            tags={getStringArray(t, 'guild.registry.members.kaelen.tags')}
            badgeIcon={null}
          />
          <MemberCard
            image={imgSeraphina}
            name={t('guild.registry.members.seraphina.name')}
            role={t('guild.registry.members.seraphina.role')}
            tags={getStringArray(t, 'guild.registry.members.seraphina.tags')}
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
