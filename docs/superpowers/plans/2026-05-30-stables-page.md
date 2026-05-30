# Stables Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the "Stables & Habitats" page pixel-perfect from Stitch design, make Navbar route-aware for multi-page navigation.

**Architecture:** New `src/modules/stables/` module following the same pattern as `src/modules/landing/`. The Navbar gets `useLocation()` to highlight active link. Each section is a self-contained component with MUI `sx` styles object and all text via `t()` calls.

**Tech Stack:** React 18, TypeScript strict, MUI 6, react-router-dom 6, react-i18next 15, Emotion 11

**Design Reference:** `temp/stitch-stables/index.html` and `temp/stitch-stables/screenshot.png`

---

## File Map

| Action | Path | Responsibility |
|--------|------|----------------|
| Modify | `src/modules/landing/components/navbar/index.tsx` | Route-aware active link |
| Modify | `src/core/router/index.tsx` | Add `/stables` route |
| Modify | `src/core/locales/es/landing.locale.ts` | Add `stables` i18n keys (es) |
| Modify | `src/core/locales/en/landing.locale.ts` | Add `stables` i18n keys (en) |
| Create | `src/modules/stables/pages/stablesPage/index.tsx` | Page composer |
| Create | `src/modules/stables/components/stablesHero/index.tsx` | Hero section with bg image |
| Create | `src/modules/stables/components/habitatFilters/index.tsx` | Filter button bar |
| Create | `src/modules/stables/components/habitatCard/index.tsx` | Standard + featured habitat card |
| Create | `src/modules/stables/components/habitatGrid/index.tsx` | Grid of habitat cards |
| Create | `src/modules/stables/components/stablesCta/index.tsx` | Final CTA section |

---

### Task 1: Make Navbar Route-Aware

**Files:**
- Modify: `src/modules/landing/components/navbar/index.tsx`

**Context:** Currently the navbar has `activeLink` style hardcoded on "Bestiary". Must use `useLocation()` from react-router-dom to highlight the link matching the current path. Links stay as MUI `<Link>` with `href` for now (only `/` and `/stables` routes exist).

- [ ] **Step 1: Add useLocation import**

Add to the top of the file:
```tsx
import { useLocation } from 'react-router-dom'
```

- [ ] **Step 2: Add useLocation hook and path-to-link mapping**

Inside the `Navbar` function component, after `const { t } = useTranslation()`:
```tsx
const location = useLocation()
```

- [ ] **Step 3: Replace hardcoded active link with conditional logic**

Replace the links JSX block. Find:
```tsx
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
```

Replace with:
```tsx
<Box sx={styles.links}>
  <Link
    href="/"
    underline="none"
    sx={{
      ...styles.link,
      ...(location.pathname === '/' ? styles.activeLink : {}),
    }}
  >
    {t('navbar.links.bestiary')}
  </Link>
  <Link
    href="/stables"
    underline="none"
    sx={{
      ...styles.link,
      ...(location.pathname === '/stables' ? styles.activeLink : {}),
    }}
  >
    {t('navbar.links.stables')}
  </Link>
  <Link href="#" underline="none" sx={styles.link}>
    {t('navbar.links.supplies')}
  </Link>
  <Link href="#" underline="none" sx={styles.link}>
    {t('navbar.links.guild')}
  </Link>
</Box>
```

- [ ] **Step 4: Verify type-check passes**

Run: `npx tsc -b --noEmit`
Expected: No errors.

- [ ] **Step 5: Commit**

```bash
git add src/modules/landing/components/navbar/index.tsx
git commit -m "feat: make navbar links route-aware with useLocation"
```

---

### Task 2: Add Stables Route

**Files:**
- Modify: `src/core/router/index.tsx`

- [ ] **Step 1: Import StablesPage**

Add import after the LandingPage import:
```tsx
import { StablesPage } from '@/modules/stables/pages/stablesPage'
```

- [ ] **Step 2: Add route inside Routes**

Add the new route before the existing landing route:
```tsx
<Route path="/stables" element={<StablesPage />} />
```

The complete file becomes:
```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from '@/core/layouts/mainLayout'
import { LandingPage } from '@/modules/landing/pages/landingPage'
import { StablesPage } from '@/modules/stables/pages/stablesPage'

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/stables" element={<StablesPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
```

- [ ] **Step 3: Verify build compiles (will fail on missing StablesPage -- expected)**

Run: `npx tsc -b --noEmit`
Expected: Error "Cannot find module '@/modules/stables/pages/stablesPage'" -- this is expected and will be resolved in Task 11.

- [ ] **Step 4: Commit**

```bash
git add src/core/router/index.tsx
git commit -m "feat: add /stables route pointing to StablesPage"
```

---

### Task 3: Add Stables i18n Keys

**Files:**
- Modify: `src/core/locales/es/landing.locale.ts`
- Modify: `src/core/locales/en/landing.locale.ts`

- [ ] **Step 1: Add stables keys to Spanish locale**

In `src/core/locales/es/landing.locale.ts`, add after the `cta` object (before the final `}`):
```ts
  stables: {
    hero: {
      title: 'Nuestros Establos y Hábitats',
      description:
        'Explora los santuarios donde la magia cobra vida. Cada rincón de nuestra colección ha sido forjado para albergar la esencia única de las criaturas más legendarias del reino.',
    },
    filters: {
      all: 'Todos los Reinos',
      air: 'Elementos de Aire',
      volcanic: 'Núcleos Volcánicos',
      jungle: 'Selvas Ancestrales',
      abyss: 'Abismos Marinos',
    },
    habitats: {
      cumbres: {
        name: 'Cumbres Celestiales',
        habitat: 'Altitud Extrema, Aire Raro',
        description:
          'Hogar de los Pegasos de Platino y Fénix de Hielo. Las corrientes aquí fluyen con maná puro.',
        dominantLabel: 'Especies Dominantes:',
        species: ['Pegaso de Platino', 'Grifo Real'],
        rarity: 'Mítico',
      },
      abismos: {
        name: 'Abismos del Alma',
        habitat: 'Presión Abisal, Bioluminiscencia',
        description:
          'Donde residen los Hipocampos de Coral y las Hidras de las Sombras. El agua vibra con sabiduría antigua.',
        dominantLabel: 'Especies Dominantes:',
        species: ['Hipocampo Dorado', 'Leviatán Menor'],
        rarity: '',
      },
      bosque: {
        name: 'Bosque Susurrante',
        habitat: 'Humedad Alta, Magia Terrenal',
        description:
          'Santuario para Unicornios Plateados y Kitsunes de Fuego. El suelo canta con cada paso.',
        dominantLabel: 'Especies Dominantes:',
        species: ['Unicornio del Alba', 'Draco de Bosque'],
        rarity: '',
      },
      nucleo: {
        name: 'Núcleo de Magma Áureo',
        habitat: 'Calor Extremo, Esencia Ígnea',
        description:
          'Un ecosistema diseñado para las Salamandras Reales y los Dragones de Sangre Negra. Las paredes de obsidiana mantienen el calor necesario para el crecimiento de sus escamas primordiales.',
        viewInhabitants: 'Ver Habitantes',
        technicalDetails: 'Detalles Técnicos',
        rarity: '',
      },
      desierto: {
        name: 'Desierto Estelar',
        habitat: 'Radiación Cósmica, Frío Absoluto',
        description:
          'Donde las Bestias del Vacío y los Escorpiones de Cristal meditan bajo las constelaciones.',
        dominantLabel: 'Especies Dominantes:',
        species: ['Bestia del Vacío', 'Espejismo de Arena'],
        rarity: '',
      },
      searchPlaceholder: 'Buscar hábitat...',
    },
    cta: {
      title: '¿Buscas algo más específico?',
      description:
        'Nuestros maestros curadores pueden forjar un hábitat personalizado según las necesidades místicas de tu nuevo compañero.',
      consult: 'Consultar Alquimista',
      guide: 'Guía de Cuidados',
    },
  },
```

- [ ] **Step 2: Add stables keys to English locale**

In `src/core/locales/en/landing.locale.ts`, add after the `cta` object:
```ts
  stables: {
    hero: {
      title: 'Our Stables and Habitats',
      description:
        'Explore the sanctuaries where magic comes to life. Every corner of our collection has been forged to house the unique essence of the most legendary creatures of the realm.',
    },
    filters: {
      all: 'All Realms',
      air: 'Air Elements',
      volcanic: 'Volcanic Cores',
      jungle: 'Ancestral Jungles',
      abyss: 'Marine Abysses',
    },
    habitats: {
      cumbres: {
        name: 'Celestial Peaks',
        habitat: 'Extreme Altitude, Rare Air',
        description:
          'Home to Platinum Pegasi and Ice Phoenixes. The currents here flow with pure mana.',
        dominantLabel: 'Dominant Species:',
        species: ['Platinum Pegasus', 'Royal Gryphon'],
        rarity: 'Mythic',
      },
      abismos: {
        name: 'Soul Abysses',
        habitat: 'Abyssal Pressure, Bioluminescence',
        description:
          'Where Coral Hippocampi and Shadow Hydras dwell. The water vibrates with ancient wisdom.',
        dominantLabel: 'Dominant Species:',
        species: ['Golden Hippocampus', 'Lesser Leviathan'],
        rarity: '',
      },
      bosque: {
        name: 'Whispering Forest',
        habitat: 'High Humidity, Earth Magic',
        description:
          'Sanctuary for Silver Unicorns and Fire Kitsunes. The ground sings with every step.',
        dominantLabel: 'Dominant Species:',
        species: ['Dawn Unicorn', 'Forest Drake'],
        rarity: '',
      },
      nucleo: {
        name: 'Golden Magma Core',
        habitat: 'Extreme Heat, Igneous Essence',
        description:
          'An ecosystem designed for Royal Salamanders and Black Blood Dragons. The obsidian walls maintain the heat needed for their primordial scale growth.',
        viewInhabitants: 'View Inhabitants',
        technicalDetails: 'Technical Details',
        rarity: '',
      },
      desierto: {
        name: 'Stellar Desert',
        habitat: 'Cosmic Radiation, Absolute Cold',
        description:
          'Where Void Beasts and Crystal Scorpions meditate beneath the constellations.',
        dominantLabel: 'Dominant Species:',
        species: ['Void Beast', 'Sand Mirage'],
        rarity: '',
      },
      searchPlaceholder: 'Search habitat...',
    },
    cta: {
      title: 'Looking for something more specific?',
      description:
        'Our master curators can forge a customized habitat according to the mystical needs of your new companion.',
      consult: 'Consult Alchemist',
      guide: 'Care Guide',
    },
  },
```

- [ ] **Step 3: Verify type-check**

Run: `npx tsc -b --noEmit`
Expected: No errors.

- [ ] **Step 4: Commit**

```bash
git add src/core/locales/es/landing.locale.ts src/core/locales/en/landing.locale.ts
git commit -m "feat: add stables i18n keys (es + en)"
```

---

### Task 4: Create StablesHero Component

**Files:**
- Create: `src/modules/stables/components/stablesHero/index.tsx`

**Context:** Full-width hero section (614px tall). Background image from `@/assets/stables/hero-stables.png`. Three layers: image, gradient overlay (bottom-to-top: background → transparent), centered title + description. Title uses `display-lg` style (64px Playfair Display, gold). Description in `body-lg`.

- [ ] **Step 1: Create the component file**

```tsx
import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import heroBg from '@/assets/stables/hero-stables.png'

const styles = {
  section: {
    position: 'relative',
    height: '614px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  bgLayer: {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  gradient: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, #131407, rgba(19,20,7,0.6), transparent)',
  },
  content: {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    maxWidth: '768px',
    px: { xs: '20px', md: '64px' },
  },
  title: {
    fontFamily: '"Playfair Display", serif',
    fontSize: { xs: '2rem', md: '4rem' },
    fontWeight: 700,
    lineHeight: { xs: 1.25, md: 1.125 },
    letterSpacing: '-0.02em',
    color: 'primary.main',
    mb: 3,
    textShadow: '0 0 40px rgba(0,0,0,0.5)',
  },
  description: {
    fontSize: { xs: '1rem', md: '1.125rem' },
    lineHeight: 1.56,
    color: 'text.secondary',
    maxWidth: '672px',
    mx: 'auto',
  },
}

export const StablesHero = () => {
  const { t } = useTranslation()

  return (
    <Box component="section" sx={styles.section}>
      <Box sx={styles.bgLayer}>
        <Box component="img" src={heroBg} alt="" />
        <Box sx={styles.gradient} />
      </Box>
      <Box sx={styles.content}>
        <Typography variant="h1" sx={styles.title}>
          {t('stables.hero.title')}
        </Typography>
        <Typography sx={styles.description}>
          {t('stables.hero.description')}
        </Typography>
      </Box>
    </Box>
  )
}
```

- [ ] **Step 2: Verify type-check**

Run: `npx tsc -b --noEmit`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add src/modules/stables/components/stablesHero/index.tsx
git commit -m "feat: create StablesHero component with background image"
```

---

### Task 5: Create HabitatFilters Component

**Files:**
- Create: `src/modules/stables/components/habitatFilters/index.tsx`

**Context:** Horizontal filter bar with 5 buttons. First button ("Todos los Reinos") has gold border + gold text (active). Rest have outline-variant border + on-surface-variant text. On hover: border → teal, text → teal. Background: `surface-container-lowest`. Top/bottom border: `primary/10`.

- [ ] **Step 1: Create the component file**

```tsx
import { Box, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'

const styles = {
  section: {
    py: 6,
    borderTop: '1px solid',
    borderBottom: '1px solid',
    borderColor: 'rgba(242, 202, 80, 0.1)',
    bgcolor: '#0e0f03',
  },
  container: {
    maxWidth: '1280px',
    mx: 'auto',
    px: { xs: '20px', md: '64px' },
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 2,
  },
  filterActive: {
    px: 3,
    py: 1,
    border: '1px solid',
    borderColor: 'primary.main',
    color: 'primary.main',
    fontFamily: '"Manrope", sans-serif',
    fontSize: '0.875rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'none',
    borderRadius: 0,
    '&:hover': {
      bgcolor: 'rgba(242, 202, 80, 0.1)',
      borderColor: 'primary.main',
      color: 'primary.main',
    },
  },
  filterInactive: {
    px: 3,
    py: 1,
    border: '1px solid',
    borderColor: '#4d4635',
    color: 'text.secondary',
    fontFamily: '"Manrope", sans-serif',
    fontSize: '0.875rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'none',
    borderRadius: 0,
    '&:hover': {
      borderColor: '#79dfd4',
      color: '#79dfd4',
      bgcolor: 'transparent',
    },
  },
}

export const HabitatFilters = () => {
  const { t } = useTranslation()

  return (
    <Box component="section" sx={styles.section}>
      <Box sx={styles.container}>
        <Button sx={styles.filterActive}>{t('stables.filters.all')}</Button>
        <Button sx={styles.filterInactive}>{t('stables.filters.air')}</Button>
        <Button sx={styles.filterInactive}>{t('stables.filters.volcanic')}</Button>
        <Button sx={styles.filterInactive}>{t('stables.filters.jungle')}</Button>
        <Button sx={styles.filterInactive}>{t('stables.filters.abyss')}</Button>
      </Box>
    </Box>
  )
}
```

- [ ] **Step 2: Verify type-check**

Run: `npx tsc -b --noEmit`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add src/modules/stables/components/habitatFilters/index.tsx
git commit -m "feat: create HabitatFilters bar component"
```

---

### Task 6: Create HabitatCard Component

**Files:**
- Create: `src/modules/stables/components/habitatCard/index.tsx`

**Context:** Two card variants in one file: `HabitatCard` (standard, 1-col) and `FeaturedHabitatCard` (featured, spans 2 cols, horizontal layout). Standard card: image (256px tall) with vignette overlay, optional mythic badge (gold→teal gradient with shimmer), title, icon + habitat tag (teal), description, dominant species list with label. Featured card: horizontal grid with image on left, text + 2 buttons on right.

Icons used: `AirIcon`, `WaterDropIcon`, `ParkIcon`, `LocalFireDepartmentIcon`, `StarIcon`, `ArrowForwardIcon`.

- [ ] **Step 1: Create the component file**

```tsx
import { Box, Typography, Button } from '@mui/material'
import AirIcon from '@mui/icons-material/Air'
import WaterDropIcon from '@mui/icons-material/WaterDrop'
import ParkIcon from '@mui/icons-material/Park'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import StarIcon from '@mui/icons-material/Star'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useTranslation } from 'react-i18next'

const habitatIcons: Record<string, React.ReactNode> = {
  air: <AirIcon sx={{ fontSize: 18 }} />,
  water: <WaterDropIcon sx={{ fontSize: 18 }} />,
  forest: <ParkIcon sx={{ fontSize: 18 }} />,
  fire: <LocalFireDepartmentIcon sx={{ fontSize: 18 }} />,
  star: <StarIcon sx={{ fontSize: 18 }} />,
}

const styles = {
  card: {
    position: 'relative',
    bgcolor: 'background.paper',
    borderTop: '2px solid',
    borderColor: 'primary.main',
    overflow: 'hidden',
    boxShadow: '0 0 15px 0 rgba(77, 182, 172, 0.15)',
    transition: 'transform 0.5s',
    '&:hover': {
      transform: 'translateY(-8px)',
    },
  },
  imageWrap: {
    position: 'relative',
    height: 256,
    overflow: 'hidden',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.7s',
    },
    '&:hover img': {
      transform: 'scale(1.1)',
    },
  },
  vignette: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle, rgba(26,15,41,0) 0%, rgba(26,15,41,0.8) 100%)',
  },
  badge: {
    position: 'absolute',
    top: 16,
    right: 16,
    px: 1.5,
    py: 0.5,
    background: 'linear-gradient(90deg, #f2ca50, #79dfd4)',
    color: '#241a00',
    fontFamily: '"Manrope", sans-serif',
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.15em',
    textTransform: 'uppercase' as const,
  },
  body: {
    p: 4,
  },
  name: {
    fontFamily: '"Playfair Display", serif',
    fontSize: '1.5rem',
    fontWeight: 600,
    color: 'primary.main',
    mb: 1,
  },
  habitatRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    mb: 2,
    color: '#79dfd4',
  },
  habitatText: {
    fontFamily: '"Manrope", sans-serif',
    fontSize: '0.875rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
  },
  description: {
    fontSize: '1rem',
    lineHeight: 1.5,
    color: 'text.secondary',
    mb: 3,
    height: 48,
    overflow: 'hidden',
  },
  divider: {
    borderTop: '1px solid',
    borderColor: 'rgba(242, 202, 80, 0.1)',
    pt: 2,
  },
  dominantLabel: {
    fontFamily: '"Manrope", sans-serif',
    fontSize: '0.875rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    color: 'rgba(242, 202, 80, 0.6)',
    display: 'block',
    mb: 1,
  },
  speciesList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 1,
  },
  species: {
    fontSize: '1rem',
    color: 'text.primary',
  },
  featuredGrid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
  },
  featuredImage: {
    position: 'relative',
    height: { xs: 256, md: '100%' },
    minHeight: 300,
    overflow: 'hidden',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 1s',
    },
    '&:hover img': {
      transform: 'scale(1.05)',
    },
  },
  featuredBody: {
    p: { xs: 4, md: 5 },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  featuredName: {
    fontFamily: '"Playfair Display", serif',
    fontSize: { xs: '1.5rem', md: '2rem' },
    fontWeight: 600,
    lineHeight: 1.25,
    color: 'primary.main',
    mb: 2,
  },
  featuredHabitatRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    mb: 3,
    color: '#79dfd4',
  },
  featuredDescription: {
    fontSize: '1rem',
    lineHeight: 1.5,
    color: 'text.secondary',
    mb: 4,
  },
  featuredActions: {
    display: 'flex',
    gap: 2,
  },
  primaryBtn: {
    bgcolor: 'rgba(242, 202, 80, 0.1)',
    border: '1px solid',
    borderColor: 'primary.main',
    color: 'primary.main',
    px: 3,
    py: 1.5,
    fontSize: '0.875rem',
    fontWeight: 700,
    letterSpacing: '0.15em',
    textTransform: 'uppercase' as const,
    borderRadius: 0,
    '&:hover': {
      bgcolor: 'primary.main',
      color: '#3c2f00',
    },
  },
  secondaryBtn: {
    color: 'text.primary',
    fontSize: '0.875rem',
    fontWeight: 700,
    letterSpacing: '0.15em',
    textTransform: 'uppercase' as const,
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    '&:hover': {
      color: '#79dfd4',
      bgcolor: 'transparent',
    },
  },
}

interface HabitatCardProps {
  image: string
  name: string
  habitat: string
  habitatIcon: string
  description: string
  dominantLabel: string
  species: string[]
  rarity?: string
}

export const HabitatCard = ({
  image,
  name,
  habitat,
  habitatIcon,
  description,
  dominantLabel,
  species,
  rarity,
}: HabitatCardProps) => (
  <Box sx={styles.card}>
    <Box sx={styles.imageWrap} className="group">
      <Box component="img" src={image} alt={name} />
      <Box sx={styles.vignette} />
      {rarity ? <Box sx={styles.badge}>{rarity}</Box> : null}
    </Box>
    <Box sx={styles.body}>
      <Typography sx={styles.name}>{name}</Typography>
      <Box sx={styles.habitatRow}>
        {habitatIcons[habitatIcon]}
        <Typography sx={styles.habitatText}>{habitat}</Typography>
      </Box>
      <Typography sx={styles.description}>{description}</Typography>
      <Box sx={styles.divider}>
        <Typography component="span" sx={styles.dominantLabel}>
          {dominantLabel}
        </Typography>
        <Box sx={styles.speciesList}>
          {species.map((s) => (
            <Typography key={s} sx={styles.species}>
              &bull; {s}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  </Box>
)

interface FeaturedHabitatCardProps {
  image: string
  name: string
  habitat: string
  habitatIcon: string
  description: string
  viewInhabitantsLabel: string
  technicalDetailsLabel: string
}

export const FeaturedHabitatCard = ({
  image,
  name,
  habitat,
  habitatIcon,
  description,
  viewInhabitantsLabel,
  technicalDetailsLabel,
}: FeaturedHabitatCardProps) => (
  <Box sx={{ ...styles.card, gridColumn: { lg: 'span 2' } }}>
    <Box sx={styles.featuredGrid}>
      <Box sx={styles.featuredImage}>
        <Box component="img" src={image} alt={name} />
        <Box sx={styles.vignette} />
      </Box>
      <Box sx={styles.featuredBody}>
        <Typography sx={styles.featuredName}>{name}</Typography>
        <Box sx={styles.featuredHabitatRow}>
          {habitatIcons[habitatIcon]}
          <Typography sx={styles.habitatText}>{habitat}</Typography>
        </Box>
        <Typography sx={styles.featuredDescription}>{description}</Typography>
        <Box sx={styles.featuredActions}>
          <Button sx={styles.primaryBtn}>{viewInhabitantsLabel}</Button>
          <Button sx={styles.secondaryBtn} endIcon={<ArrowForwardIcon />}>
            {technicalDetailsLabel}
          </Button>
        </Box>
      </Box>
    </Box>
  </Box>
)
```

- [ ] **Step 2: Verify type-check**

Run: `npx tsc -b --noEmit`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add src/modules/stables/components/habitatCard/index.tsx
git commit -m "feat: create HabitatCard and FeaturedHabitatCard components"
```

---

### Task 7: Create HabitatGrid Component

**Files:**
- Create: `src/modules/stables/components/habitatGrid/index.tsx`

**Context:** Composes all 5 habitat cards in a responsive 3-column grid (1 col mobile, 2 col tablet, 3 col desktop). The "Núcleo de Magma Áureo" card spans 2 columns on desktop. Images imported from `@/assets/stables/`. Uses i18n keys from `stables.habitats.*`.

- [ ] **Step 1: Create the component file**

```tsx
import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { HabitatCard, FeaturedHabitatCard } from '../habitatCard'
import imgCumbres from '@/assets/stables/habitat-cumbres.png'
import imgAbismos from '@/assets/stables/habitat-abismos.png'
import imgNucleo from '@/assets/stables/habitat-nucleo-magma.png'
import imgDesierto from '@/assets/stables/habitat-desierto-estelar.png'

const styles = {
  section: {
    py: 12,
  },
  container: {
    maxWidth: '1280px',
    mx: 'auto',
    px: { xs: '20px', md: '64px' },
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' },
    gap: 3,
  },
}

export const HabitatGrid = () => {
  const { t } = useTranslation()

  return (
    <Box component="section" sx={styles.section}>
      <Box sx={styles.container}>
        <Box sx={styles.grid}>
          <HabitatCard
            image={imgCumbres}
            name={t('stables.habitats.cumbres.name')}
            habitat={t('stables.habitats.cumbres.habitat')}
            habitatIcon="air"
            description={t('stables.habitats.cumbres.description')}
            dominantLabel={t('stables.habitats.cumbres.dominantLabel')}
            species={t('stables.habitats.cumbres.species', { returnObjects: true }) as unknown as string[]}
            rarity={t('stables.habitats.cumbres.rarity')}
          />
          <HabitatCard
            image={imgAbismos}
            name={t('stables.habitats.abismos.name')}
            habitat={t('stables.habitats.abismos.habitat')}
            habitatIcon="water"
            description={t('stables.habitats.abismos.description')}
            dominantLabel={t('stables.habitats.abismos.dominantLabel')}
            species={t('stables.habitats.abismos.species', { returnObjects: true }) as unknown as string[]}
            rarity={undefined}
          />
          <HabitatCard
            image={imgAbismos}
            name={t('stables.habitats.bosque.name')}
            habitat={t('stables.habitats.bosque.habitat')}
            habitatIcon="forest"
            description={t('stables.habitats.bosque.description')}
            dominantLabel={t('stables.habitats.bosque.dominantLabel')}
            species={t('stables.habitats.bosque.species', { returnObjects: true }) as unknown as string[]}
            rarity={undefined}
          />
          <FeaturedHabitatCard
            image={imgNucleo}
            name={t('stables.habitats.nucleo.name')}
            habitat={t('stables.habitats.nucleo.habitat')}
            habitatIcon="fire"
            description={t('stables.habitats.nucleo.description')}
            viewInhabitantsLabel={t('stables.habitats.nucleo.viewInhabitants')}
            technicalDetailsLabel={t('stables.habitats.nucleo.technicalDetails')}
          />
          <HabitatCard
            image={imgDesierto}
            name={t('stables.habitats.desierto.name')}
            habitat={t('stables.habitats.desierto.habitat')}
            habitatIcon="star"
            description={t('stables.habitats.desierto.description')}
            dominantLabel={t('stables.habitats.desierto.dominantLabel')}
            species={t('stables.habitats.desierto.species', { returnObjects: true }) as unknown as string[]}
            rarity={undefined}
          />
        </Box>
      </Box>
    </Box>
  )
}
```

- [ ] **Step 2: Verify type-check**

Run: `npx tsc -b --noEmit`
Expected: No errors. (Note: `returnObjects: true` for array keys works with react-i18next.)

- [ ] **Step 3: Commit**

```bash
git add src/modules/stables/components/habitatGrid/index.tsx
git commit -m "feat: create HabitatGrid composing all 5 habitat cards"
```

---

### Task 8: Create StablesCta Component

**Files:**
- Create: `src/modules/stables/components/stablesCta/index.tsx`

**Context:** Final CTA section with dark background (`surface-dim`), decorative teal glow blob (positioned absolute, blurred), centered heading + description + two buttons. Buttons: primary contained (gold) + outlined (teal border).

- [ ] **Step 1: Create the component file**

```tsx
import { Box, Typography, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'

const styles = {
  section: {
    py: 16,
    bgcolor: '#131407',
    position: 'relative',
    overflow: 'hidden',
  },
  glow: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '800px',
    height: '400px',
    bgcolor: 'rgba(121, 223, 212, 0.05)',
    borderRadius: '50%',
    filter: 'blur(120px)',
  },
  container: {
    maxWidth: '896px',
    mx: 'auto',
    px: { xs: '20px', md: '64px' },
    textAlign: 'center',
    position: 'relative',
    zIndex: 10,
  },
  title: {
    fontFamily: '"Playfair Display", serif',
    fontSize: { xs: '2rem', md: '3rem' },
    fontWeight: 700,
    lineHeight: { xs: 1.33, md: 1.17 },
    color: 'primary.main',
    mb: 4,
  },
  description: {
    fontSize: { xs: '1rem', md: '1.125rem' },
    lineHeight: 1.56,
    color: 'text.secondary',
    mb: 6,
  },
  actions: {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    justifyContent: 'center',
    gap: 3,
  },
  primaryBtn: {
    px: 5,
    py: 2,
    fontSize: '0.875rem',
    fontWeight: 700,
    letterSpacing: '0.15em',
    textTransform: 'uppercase' as const,
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
    transition: 'transform 0.2s',
    '&:active': {
      transform: 'scale(0.95)',
    },
  },
  ghostBtn: {
    px: 5,
    py: 2,
    border: '1px solid',
    borderColor: 'rgba(121, 223, 212, 0.5)',
    color: '#79dfd4',
    fontSize: '0.875rem',
    fontWeight: 700,
    letterSpacing: '0.15em',
    textTransform: 'uppercase' as const,
    borderRadius: 0,
    '&:hover': {
      bgcolor: 'rgba(121, 223, 212, 0.1)',
      borderColor: '#79dfd4',
    },
  },
}

export const StablesCta = () => {
  const { t } = useTranslation()

  return (
    <Box component="section" sx={styles.section}>
      <Box sx={styles.glow} />
      <Box sx={styles.container}>
        <Typography sx={styles.title}>
          {t('stables.cta.title')}
        </Typography>
        <Typography sx={styles.description}>
          {t('stables.cta.description')}
        </Typography>
        <Box sx={styles.actions}>
          <Button variant="contained" size="large" sx={styles.primaryBtn}>
            {t('stables.cta.consult')}
          </Button>
          <Button sx={styles.ghostBtn}>
            {t('stables.cta.guide')}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
```

- [ ] **Step 2: Verify type-check**

Run: `npx tsc -b --noEmit`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add src/modules/stables/components/stablesCta/index.tsx
git commit -m "feat: create StablesCta section component"
```

---

### Task 9: Create StablesPage Composer

**Files:**
- Create: `src/modules/stables/pages/stablesPage/index.tsx`

**Context:** Composes all stables section components in a `<main>` wrapper, same pattern as `LandingPage`.

- [ ] **Step 1: Create the page file**

```tsx
import { Box } from '@mui/material'
import { StablesHero } from '../../components/stablesHero'
import { HabitatFilters } from '../../components/habitatFilters'
import { HabitatGrid } from '../../components/habitatGrid'
import { StablesCta } from '../../components/stablesCta'

export const StablesPage = () => (
  <Box component="main">
    <StablesHero />
    <HabitatFilters />
    <HabitatGrid />
    <StablesCta />
  </Box>
)
```

- [ ] **Step 2: Verify type-check**

Run: `npx tsc -b --noEmit`
Expected: No errors from stables module. (If errors from other modules exist they are pre-existing.)

- [ ] **Step 3: Commit**

```bash
git add src/modules/stables/pages/stablesPage/index.tsx
git commit -m "feat: create StablesPage composing all stables sections"
```

---

### Task 10: Full Build Verification

**Files:** All

- [ ] **Step 1: Run full type-check**

```bash
npx tsc -b
```

Expected: No errors.

- [ ] **Step 2: Run full build**

```bash
npm run build
```

Expected: `vite build` completes successfully, output in `dist/`.

- [ ] **Step 3: Verify dev server starts**

```bash
npm run dev
```

Navigate to `http://localhost:5173/stables` and verify:
- Navbar shows "Stables" as active (gold underline)
- Hero section renders with background image
- Filter buttons display
- All 5 habitat cards render with correct images
- Featured card (Nucleo de Magma) has horizontal layout with 2 buttons
- CTA section renders with glow effect
- Footer renders at bottom
- Switch language and verify all text translates

- [ ] **Step 4: Commit if any fixes were needed**

Only if changes were made during verification.

---

## Self-Review

**Spec coverage:**
- The landing page gets a new navbar and footer so they are shared globally by MainLayout.
- The navbar is route-aware to avoid inconsistencies between views.
- The stables page is built pixel-perfect following the Stitch HTML.
- All text is i18n-compliant with both es and en keys.
- All components follow the existing patterns: MUI sx styles, camelCase folders, `index.tsx` single file.
- Images are imported as ES modules from `@/assets/stables/`.
- Icons use `@mui/icons-material`, not Google Material Symbols class names.

**Placeholder scan:** No TBD, TODO, or "implement later" found. All code is complete.

**Type consistency:**
- `HabitatCardProps` and `FeaturedHabitatCardProps` are defined in Task 6, consumed in Task 7.
- i18n keys in Task 3 match exactly what Tasks 4-9 use via `t('stables.*')`.
- Image imports in Task 7 match files in `src/assets/stables/` from the download step.
