# Supplies Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the "Arcane Supplies" product catalog page pixel-perfect from Stitch design, make Navbar route-aware for `/supplies`.

**Architecture:** New `src/modules/supplies/` module following the same pattern as `src/modules/landing/` and `src/modules/stables/`. Each section is a self-contained component with MUI `sx` styles object and all text via `t()` calls.

**Tech Stack:** React 18, TypeScript strict, MUI 6, react-router-dom 6, react-i18next 15, Emotion 11

**Design Reference:** `temp/stitch-supplies/index.html` and `temp/stitch-supplies/screenshot.png`

---

## File Map

| Action | Path | Responsibility |
|--------|------|----------------|
| Modify | `src/core/components/navbar/index.tsx` | Route-aware active link for `/supplies` |
| Modify | `src/core/router/index.tsx` | Add `/supplies` route |
| Modify | `src/core/locales/es/landing.locale.ts` | Add `supplies` i18n keys (es) |
| Modify | `src/core/locales/en/landing.locale.ts` | Add `supplies` i18n keys (en) |
| Create | `src/modules/supplies/pages/suppliesPage/index.tsx` | Page composer |
| Create | `src/modules/supplies/components/suppliesHero/index.tsx` | Hero section with bg image + badge |
| Create | `src/modules/supplies/components/supplyFilters/index.tsx` | Filter button bar |
| Create | `src/modules/supplies/components/supplyCard/index.tsx` | Product card with rarity badge |
| Create | `src/modules/supplies/components/supplyGrid/index.tsx` | Grid of 6 product cards |
| Create | `src/modules/supplies/components/suppliesCta/index.tsx` | Newsletter CTA with email input |

---

### Task 0: Download Stitch Design Assets

**Files:**
- Download to: `src/assets/supplies/`

**Context:** The Stitch screen `d224b9dddbe94ff2b6ea98ce874e45a3` uses 7 images hosted on Google. Download them before starting implementation.

- [ ] **Step 1: Create assets directory**

```bash
mkdir -p src/assets/supplies
```

- [ ] **Step 2: Download hero background**

```bash
rtk curl -L -o src/assets/supplies/hero-supplies.png "https://lh3.googleusercontent.com/aida-public/AB6AXuBLM1_MZ-SCIfgOibdcJuV8h9PlrAVAthXVCBB5hqTM1o1ChnDbxK8eVY6UueMQBMSfkioI4-1RjBtOf5DZWdbR_IxguSSOVTQQFS7DXzBKm4Ae5_Pm6Npo2ItIRRs2b9yfj7SOsoxa38kvkKcqwouDzy0xHZ_taluYHw0chFzrexvTR63jjki6yxR7pHUGEcmBwDXlM1OzX1pi93YdM4lJj1oyduJeWSC4HQ9cQjvYWa-1UqzuDAOqMGAn-bbNsqMADY7p_hw_Qk5h"
```

Expected: File saved as `src/assets/supplies/hero-supplies.png` (~24KB thumbnail — acceptable per project guidelines: use `opacity: 0.5` + gradient overlay).

- [ ] **Step 3: Download product images**

```bash
rtk curl -L -o src/assets/supplies/supply-phoenix-grain.png "https://lh3.googleusercontent.com/aida-public/AB6AXuCFjoYi9HO35x0MGL8sZ_o256SrdwRwyUPeKfeJufz8A2_1yguhk5VOpFFAioWTplSkL-iQBCe_4yhNea1R__VMJVEwKethwlKNYyJYR9l79kCzjggVIWoH0oP3Nr_jKIPn-5sTfMRD5YEXlPg7ia1sH9gGH-dduqBtIcbb7O16hGtNupqyCsBmuKudy8cNBZQB3R-pKULgqhQrp3qt-kS6ALB8u4GJ-Q6Xabb6hgbi7k7GLpet74nPn9hJaUK4sWQ7eghTGekmamfe"
rtk curl -L -o src/assets/supplies/supply-kraken-salt.png "https://lh3.googleusercontent.com/aida-public/AB6AXuDD-7e6vqQXgLj3Lxifi3j0zDoUZeLgM-eiIxBwCsfV7fqzNsftjOt125MoYxvs3i98ysfAYvEhFYrtxoz-CkgwbLfElPxPfOoq7AhZVVYshRWJmODPb5prsgbniaMdevlSLbxKPQ9G-obOlETyP5icyilNwtnennGsaH-r1pf0QaCf9EKHYQeMR-9fRVyPk7ip2qPWAWuggO1oWmnnpz52fh-GbAhVFNDYcUBZJPA3fDTUk9KNROGIWGRDYLfkrE4eRoP-O6R_D4sD"
rtk curl -L -o src/assets/supplies/supply-grooming-kit.png "https://lh3.googleusercontent.com/aida-public/AB6AXuBcxfZSkTu4tc3UckJOG54Sbh4hnytvGQmLoERkOysy_oqJtla6AV7vfMyl0cAqoUaHXWkeBZKH73u5-I6OAh-SNKQmKNiQvLGRA5Xd4Hc8TZK4UopMCsy4BuY20WTlN8x4kNHnJoPOjvidgop6icBZkkltv9KJCP90ntiAK6vo2RbKrdN4N3gT2RZEetK6G88qd7BWDNqhbQ6JeBZGhj35O2Qnjl1VxJQr9kDKlaS2D-1uyV3hd3hh8an65zE0nlVgaJTMH0q34x5K"
rtk curl -L -o src/assets/supplies/supply-astral-tether.png "https://lh3.googleusercontent.com/aida-public/AB6AXuCGZD8uTTQkRuaRhjOtO6VSJz7Wg5kcfCUnBGv2p2zohqcw9-bY6TfkkrgGceXte9vWJ5tvDQ0AKmTNQ3ZSK5x2MK2fidfezVkB8ulvhco1yPxSKil3U0aE6b46tQHjNpFOe_WXR8QnamfUtNJIt344oY7xKrHkPsqjZpOxYr4pDi1iVwyAnE9KjXWPWFtyjECsd37-VG0OB9mGkNT61-ma6H3_OVwI-l3A_g52dgwawZTYA48Wl5N9FH6aRA2ZE8CR4bRtFm5Czp6E"
rtk curl -L -o src/assets/supplies/supply-void-glass.png "https://lh3.googleusercontent.com/aida-public/AB6AXuAWLWZdtgTLTFHHFoGzVT3WOxy7xvis1GKDwunhQDISU6S1uwrGynk5mkUa-OK-TId31BEcByArOzQ34H6cwg3IkQcrKD3Op1ML9tI5IXnmxPOdX5Uk0WKVGW5l1zxENSTbb766h9VAu5QW00nZmlwRHfsh6uxVcyRZkFP7vuI0J2Xl5d30dXBZ33dgd_B_QJSyBtLTKiwCLvQwakvBlQoullrWzHyq9eQ0WS9YG7FG7ls-v0PfaS5KawRYvNKpMdE_B19R2Ae21Rzf"
rtk curl -L -o src/assets/supplies/supply-mana-flasks.png "https://lh3.googleusercontent.com/aida-public/AB6AXuAwupKHcJNghnE0UIm4VvG4hd9qj4_04WY8Qs_MeQ8YK867CqQC9m4DxmIDkxEy_TQUSUIZ7OUu1OsD9KX66KWF2qA1mRwvO44h7m-U0wFYYNyneI-lWGUWUnuDGOyi4B9iRABMTK67fZMZmGYmrRHozaMdwL8U_27jEv0CbpFtfi7wI7lLvQyQVuqftA_lQCWeHSIUsEuoARI8pF4AD24HzxusCpCx2BhGp3XYelIHTwbv6-XHaJ_IchSqnYk3OFthQZpgeXO8p4iH"
```

Expected: 6 files in `src/assets/supplies/`, each ~300-400KB.

- [ ] **Step 4: Verify asset files**

```bash
ls -lh src/assets/supplies/
```

Expected: 7 files total (hero-supplies.png + 6 product images).

- [ ] **Step 5: Commit**

```bash
git add src/assets/supplies/
git commit -m "feat: add supplies page design assets from Stitch"
```

---

### Task 1: Make Navbar Route-Aware for Supplies

**Files:**
- Modify: `src/core/components/navbar/index.tsx`

**Context:** The Supplies link currently has `href="#"` with no route-aware logic. Must add `useLocation()` check for `/supplies` path.

- [ ] **Step 1: Find the Supplies link in navbar**

Locate the Supplies `<Link>` element (currently around line 90):
```tsx
<Link href="#" underline="none" sx={styles.link}>
  {t('navbar.links.supplies')}
</Link>
```

- [ ] **Step 2: Replace with route-aware link**

Replace that single link line block with:
```tsx
<Link
  href="/supplies"
  underline="none"
  sx={{
    ...styles.link,
    ...(location.pathname === '/supplies' ? styles.activeLink : {}),
  }}
>
  {t('navbar.links.supplies')}
</Link>
```

- [ ] **Step 3: Verify type-check passes**

Run: `npx tsc -b --noEmit`
Expected: No errors.

- [ ] **Step 4: Commit**

```bash
git add src/core/components/navbar/index.tsx
git commit -m "feat: make navbar Supplies link route-aware for /supplies"
```

---

### Task 2: Add Supplies Route

**Files:**
- Modify: `src/core/router/index.tsx`

- [ ] **Step 1: Import SuppliesPage**

Add import after the StablesPage import:
```tsx
import { SuppliesPage } from '@/modules/supplies/pages/suppliesPage'
```

- [ ] **Step 2: Add route inside Routes**

Add before the existing routes:
```tsx
<Route path="/supplies" element={<SuppliesPage />} />
```

The complete file becomes:
```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from '@/core/layouts/mainLayout'
import { LandingPage } from '@/modules/landing/pages/landingPage'
import { StablesPage } from '@/modules/stables/pages/stablesPage'
import { SuppliesPage } from '@/modules/supplies/pages/suppliesPage'

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/stables" element={<StablesPage />} />
        <Route path="/supplies" element={<SuppliesPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
```

- [ ] **Step 3: Verify build compiles (expected: will fail on missing SuppliesPage)**

Run: `npx tsc -b --noEmit`
Expected: Error "Cannot find module '@/modules/supplies/pages/suppliesPage'" — this is expected and will be resolved in Task 9.

- [ ] **Step 4: Commit**

```bash
git add src/core/router/index.tsx
git commit -m "feat: add /supplies route pointing to SuppliesPage"
```

---

### Task 3: Add Supplies i18n Keys

**Files:**
- Modify: `src/core/locales/es/landing.locale.ts`
- Modify: `src/core/locales/en/landing.locale.ts`

- [ ] **Step 1: Add supplies keys to Spanish locale**

In `src/core/locales/es/landing.locale.ts`, add after the `stables` object (before the final `}`):
```ts
  supplies: {
    hero: {
      badge: "El Archivo del Curador",
      title: 'Suministros Arcanos',
      description:
        'Cada leyenda requiere nutrición precisa y cuidado encantado. Nuestro archivo curado ofrece los elementos más raros recolectados en los confines de los reinos conocidos para mantener a tus compañeros míticos.',
    },
    filters: {
      all: 'Todas las Colecciones',
      nutrition: 'Nutrición',
      habitats: 'Hábitats',
      gear: 'Equipo Encantado',
      rituals: 'Herramientas Rituales',
    },
    products: {
      phoenixGrain: {
        name: 'Grano de Ascuas de Fénix',
        description:
          'Cosechado de las laderas de ceniza del Monte Ignis, estos granos laten con calor eterno para mantener el plumaje radiante de los espíritus aviares nacidos del fuego.',
        rarity: 'Mítico',
        price: '450',
      },
      krakenSalt: {
        name: 'Bloques de Sal de Kraken',
        description:
          'Enriquecidos con minerales abisales y algas bioluminiscentes, esenciales para la integridad estructural de behemots oceánicos y leviatanes.',
        rarity: 'Legendario',
        price: '320',
      },
      groomingKit: {
        name: 'Kit de Aseo Encantado',
        description:
          'Un conjunto de cepillos con mango de plata y aceites cargados de luna diseñados para desenredar crines de polvo estelar y pulir escamas de dragón sin fricción.',
        rarity: 'Raro',
        price: '1,200',
      },
      astralTether: {
        name: 'Atadura Astral',
        description:
          'Tejida con seda que desafía la gravedad, esta correa permite manejar mascotas etéreas mientras están en fase entre dimensiones.',
        price: '650',
      },
      voidGlass: {
        name: 'Terrario de Cristal de Vacío',
        description:
          'Una unidad de contención forjada con oscuridad solidificada, perfecta para Sombras-Duendes y otras entidades sensibles a los espectros de luz tradicionales.',
        rarity: 'Mítico',
        price: '2,800',
      },
      manaFlasks: {
        name: 'Frascos de Maná Cantarín',
        description:
          'Cada botella tararea una frecuencia específica que calma a los espíritus agitados durante viajes o tratamientos médicos.',
        price: '150',
      },
    },
    cta: {
      title: 'Registro de los Sabios',
      description:
        'Únete a nuestro gremio para acceso anticipado a envíos raros y guías exclusivas de cuidado para compañeros legendarios.',
      placeholder: 'Escribe tu correo...',
      enlist: 'Alistarse',
    },
    buy: 'Comprar',
    currency: 'GP',
  },
```

- [ ] **Step 2: Add supplies keys to English locale**

In `src/core/locales/en/landing.locale.ts`, add after the `stables` object:
```ts
  supplies: {
    hero: {
      badge: "The Curator's Archive",
      title: 'Arcane Supplies',
      description:
        'Every legend requires precise nourishment and enchanted care. Our curated archive offers the rarest elements gathered from the edges of the known realms to sustain your mythical companions.',
    },
    filters: {
      all: 'All Collections',
      nutrition: 'Nutrition',
      habitats: 'Habitats',
      gear: 'Enchanted Gear',
      rituals: 'Ritual Tools',
    },
    products: {
      phoenixGrain: {
        name: 'Phoenix Ember-Grain',
        description:
          'Harvested from the ash-slopes of Mount Ignis, these grains pulse with eternal heat to maintain the radiant plumage of fire-born avian spirits.',
        rarity: 'Mythic',
        price: '450',
      },
      krakenSalt: {
        name: 'Kraken Salt-Blocks',
        description:
          'Enriched with abyssal minerals and bioluminescent algae, essential for the structural integrity of oceanic behemoths and leviathans.',
        rarity: 'Legendary',
        price: '320',
      },
      groomingKit: {
        name: 'Enchanted Grooming Kit',
        description:
          'A suite of silver-handled brushes and moon-charged oils designed to untangle stardust manes and polish dragon scales without friction.',
        rarity: 'Rare',
        price: '1,200',
      },
      astralTether: {
        name: 'Astral Tether',
        description:
          'Woven from gravity-defying silk, this leash allows the handling of ethereal pets while they are phased between dimensions.',
        price: '650',
      },
      voidGlass: {
        name: 'Void-Glass Terrarium',
        description:
          'A containment unit forged from solidified darkness, perfect for Shadow-Imps and other entities sensitive to traditional light spectrums.',
        rarity: 'Mythic',
        price: '2,800',
      },
      manaFlasks: {
        name: 'Singing Mana-Flasks',
        description:
          'Each bottle hums a specific frequency that calms agitated spirits during travel or medical treatments.',
        price: '150',
      },
    },
    cta: {
      title: 'Registry of the Wise',
      description:
        'Join our guild for early access to rare shipments and exclusive husbandry guides for legendary companions.',
      placeholder: 'Scribe your email...',
      enlist: 'Enlist',
    },
    buy: 'Buy',
    currency: 'GP',
  },
```

- [ ] **Step 3: Verify type-check**

Run: `npx tsc -b --noEmit`
Expected: No errors.

- [ ] **Step 4: Commit**

```bash
git add src/core/locales/es/landing.locale.ts src/core/locales/en/landing.locale.ts
git commit -m "feat: add supplies i18n keys (es + en)"
```

---

### Task 4: Create SuppliesHero Component

**Files:**
- Create: `src/modules/supplies/components/suppliesHero/index.tsx`

**Context:** Full-viewport hero section. Three layers: background image (50% opacity) + gradient overlay + centered content. Content has a "Curator's Archive" badge pill (tertiary text, primary/30 border), title "Arcane Supplies" (display-lg), and description paragraph. Background uses `hero-supplies.png` with vignette overlay.

- [ ] **Step 1: Create the component file**

```tsx
import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import heroBg from '@/assets/supplies/hero-supplies.png'

const styles = {
  section: {
    position: 'relative',
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  bgImage: {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.5,
    },
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background:
      'linear-gradient(to bottom, rgba(19,20,7,0.8), rgba(19,20,7,0.6))',
  },
  content: {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    maxWidth: '896px',
    mx: 'auto',
    px: { xs: '20px', md: '64px' },
    py: { xs: 4, md: 6 },
    backdropFilter: 'blur(8px)',
    bgcolor: 'rgba(19,20,7,0.2)',
    borderRadius: '0.75rem',
    border: '1px solid rgba(255,255,255,0.05)',
  },
  badge: {
    display: 'inline-block',
    px: 2,
    py: 0.5,
    border: '1px solid',
    borderColor: 'rgba(242, 202, 80, 0.3)',
    borderRadius: '9999px',
    mb: 3,
  },
  badgeText: {
    fontFamily: '"Manrope", sans-serif',
    fontSize: '0.875rem',
    fontWeight: 600,
    letterSpacing: '0.15em',
    textTransform: 'uppercase' as const,
    color: '#79dfd4',
  },
  title: {
    fontFamily: '"Playfair Display", serif',
    fontSize: { xs: '2rem', md: '4rem' },
    fontWeight: 700,
    lineHeight: { xs: 1.25, md: 1.125 },
    letterSpacing: '-0.02em',
    color: 'text.primary',
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

export const SuppliesHero = () => {
  const { t } = useTranslation()

  return (
    <Box component="section" sx={styles.section}>
      <Box sx={styles.bgImage}>
        <Box component="img" src={heroBg} alt="" />
        <Box sx={styles.overlay} />
      </Box>
      <Box sx={styles.content}>
        <Box sx={styles.badge}>
          <Typography component="span" sx={styles.badgeText}>
            {t('supplies.hero.badge')}
          </Typography>
        </Box>
        <Typography variant="h1" sx={styles.title}>
          {t('supplies.hero.title')}
        </Typography>
        <Typography sx={styles.description}>
          {t('supplies.hero.description')}
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
git add src/modules/supplies/components/suppliesHero/index.tsx
git commit -m "feat: create SuppliesHero component with badge and bg image"
```

---

### Task 5: Create SupplyFilters Component

**Files:**
- Create: `src/modules/supplies/components/supplyFilters/index.tsx`

**Context:** Horizontal filter bar with 5 buttons. First button ("All Collections") has border + text gold with surface-container bg (active). Rest have transparent bg, outline-variant border, on-surface-variant text. Hover: border → teal, text → teal.

- [ ] **Step 1: Create the component file**

```tsx
import { Box, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'

const styles = {
  section: {
    py: 6,
    px: { xs: '20px', md: '64px' },
    maxWidth: '1280px',
    mx: 'auto',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 2,
  },
  filterActive: {
    px: 4,
    py: 1.5,
    bgcolor: '#1f2111',
    border: '1px solid',
    borderColor: 'rgba(242, 202, 80, 0.2)',
    color: 'primary.main',
    fontFamily: '"Manrope", sans-serif',
    fontSize: '0.875rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'none',
    borderRadius: 0,
    '&:hover': {
      borderColor: 'primary.main',
      bgcolor: '#1f2111',
    },
  },
  filterInactive: {
    px: 4,
    py: 1.5,
    bgcolor: 'transparent',
    border: '1px solid',
    borderColor: 'rgba(242, 202, 80, 0.1)',
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

export const SupplyFilters = () => {
  const { t } = useTranslation()

  return (
    <Box component="section" sx={styles.section}>
      <Box sx={styles.container}>
        <Button sx={styles.filterActive}>{t('supplies.filters.all')}</Button>
        <Button sx={styles.filterInactive}>{t('supplies.filters.nutrition')}</Button>
        <Button sx={styles.filterInactive}>{t('supplies.filters.habitats')}</Button>
        <Button sx={styles.filterInactive}>{t('supplies.filters.gear')}</Button>
        <Button sx={styles.filterInactive}>{t('supplies.filters.rituals')}</Button>
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
git add src/modules/supplies/components/supplyFilters/index.tsx
git commit -m "feat: create SupplyFilters bar component with 5 buttons"
```

---

### Task 6: Create SupplyCard Component

**Files:**
- Create: `src/modules/supplies/components/supplyCard/index.tsx`

**Context:** Product card with aspect-ratio 4:5 image, vignette overlay, optional rarity badge (Mythic: gold gradient, Legendary: teal, Rare: secondary/purple), product name (gold, headline-sm), description, divider, price with "GP" suffix, and "Buy" button (contained primary).

Badge color variants:
- **Mythic**: `background: 'linear-gradient(90deg, #f2ca50, #79dfd4)'`, text `#241a00`
- **Legendary**: `bgcolor: '#5bc3b9'`, text `#004e48` (tertiary-container / on-tertiary-container)
- **Rare**: `bgcolor: '#d6bcf4'`, text `#3b2754` (secondary / on-secondary)

- [ ] **Step 1: Create the component file**

```tsx
import { Box, Typography, Button } from '@mui/material'

const rarityStyles: Record<string, object> = {
  Mythic: {
    background: 'linear-gradient(90deg, #f2ca50, #79dfd4)',
    color: '#241a00',
  },
  Legendary: {
    bgcolor: '#5bc3b9',
    color: '#004e48',
  },
  Rare: {
    bgcolor: '#d6bcf4',
    color: '#3b2754',
  },
}

const styles = {
  card: {
    bgcolor: '#1f2111',
    borderTop: '2px solid',
    borderColor: 'primary.main',
    p: 3,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 0 15px 0 rgba(77, 182, 172, 0.15)',
    transition: 'transform 0.3s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.3s',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 12px 24px -10px rgba(242, 202, 80, 0.2)',
    },
  },
  imageWrap: {
    aspectRatio: '4 / 5',
    mb: 3,
    overflow: 'hidden',
    bgcolor: '#343625',
    position: 'relative',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      maskImage: 'radial-gradient(circle, black 60%, transparent 100%)',
      WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)',
      transition: 'transform 0.7s',
    },
    '&:hover img': {
      transform: 'scale(1.1)',
    },
  },
  badge: {
    position: 'absolute',
    top: 16,
    right: 16,
    px: 1.5,
    py: 0.5,
    fontFamily: '"Manrope", sans-serif',
    fontSize: '0.625rem',
    fontWeight: 700,
    letterSpacing: '0.15em',
    textTransform: 'uppercase' as const,
  },
  name: {
    fontFamily: '"Playfair Display", serif',
    fontSize: '1.5rem',
    fontWeight: 600,
    lineHeight: 1.33,
    color: 'primary.main',
    mb: 1,
  },
  description: {
    fontSize: '1rem',
    lineHeight: 1.5,
    color: 'text.secondary',
    mb: 3,
    flexGrow: 1,
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    pt: 3,
    borderTop: '1px solid',
    borderColor: 'rgba(242, 202, 80, 0.1)',
  },
  price: {
    fontFamily: '"Playfair Display", serif',
    fontSize: '1.5rem',
    fontWeight: 600,
    color: 'text.primary',
  },
  gpUnit: {
    fontFamily: '"Manrope", sans-serif',
    fontSize: '0.875rem',
    fontWeight: 600,
    color: 'rgba(242, 202, 80, 0.6)',
    letterSpacing: '0.1em',
  },
  buyBtn: {
    px: 4,
    py: 1,
    fontSize: '0.875rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'none',
    borderRadius: 0,
  },
}

export interface SupplyCardProps {
  image: string
  name: string
  description: string
  price: string
  rarity?: 'Mythic' | 'Legendary' | 'Rare'
  buyLabel: string
  currencyLabel: string
}

export const SupplyCard = ({
  image,
  name,
  description,
  price,
  rarity,
  buyLabel,
  currencyLabel,
}: SupplyCardProps) => (
  <Box sx={styles.card}>
    <Box sx={styles.imageWrap}>
      <Box component="img" src={image} alt={name} />
      {rarity ? (
        <Box sx={{ ...styles.badge, ...rarityStyles[rarity] }}>
          {rarity}
        </Box>
      ) : null}
    </Box>
    <Typography sx={styles.name}>{name}</Typography>
    <Typography sx={styles.description}>{description}</Typography>
    <Box sx={styles.footer}>
      <Typography component="span" sx={styles.price}>
        {price}{' '}
        <Typography component="span" sx={styles.gpUnit}>
          {currencyLabel}
        </Typography>
      </Typography>
      <Button variant="contained" sx={styles.buyBtn}>
        {buyLabel}
      </Button>
    </Box>
  </Box>
)
```

- [ ] **Step 2: Verify type-check**

Run: `npx tsc -b --noEmit`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add src/modules/supplies/components/supplyCard/index.tsx
git commit -m "feat: create SupplyCard component with rarity badge variants"
```

---

### Task 7: Create SupplyGrid Component

**Files:**
- Create: `src/modules/supplies/components/supplyGrid/index.tsx`

**Context:** Responsive 3-column grid composing all 6 product cards. Images imported from `@/assets/supplies/`. Product data from i18n keys `supplies.products.*`. Rarity badges: Mythic (Phoenix Ember-Grain, Void-Glass Terrarium), Legendary (Kraken Salt-Blocks), Rare (Enchanted Grooming Kit), none (Astral Tether, Singing Mana-Flasks).

- [ ] **Step 1: Create the component file**

```tsx
import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { SupplyCard } from '../supplyCard'
import imgPhoenix from '@/assets/supplies/supply-phoenix-grain.png'
import imgKraken from '@/assets/supplies/supply-kraken-salt.png'
import imgGrooming from '@/assets/supplies/supply-grooming-kit.png'
import imgAstral from '@/assets/supplies/supply-astral-tether.png'
import imgVoid from '@/assets/supplies/supply-void-glass.png'
import imgMana from '@/assets/supplies/supply-mana-flasks.png'

const styles = {
  section: {
    py: 12,
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

export const SupplyGrid = () => {
  const { t } = useTranslation()

  const buyLabel = t('supplies.buy')
  const currency = t('supplies.currency')

  const products = [
    {
      image: imgPhoenix,
      name: t('supplies.products.phoenixGrain.name'),
      description: t('supplies.products.phoenixGrain.description'),
      price: t('supplies.products.phoenixGrain.price'),
      rarity: 'Mythic' as const,
    },
    {
      image: imgKraken,
      name: t('supplies.products.krakenSalt.name'),
      description: t('supplies.products.krakenSalt.description'),
      price: t('supplies.products.krakenSalt.price'),
      rarity: 'Legendary' as const,
    },
    {
      image: imgGrooming,
      name: t('supplies.products.groomingKit.name'),
      description: t('supplies.products.groomingKit.description'),
      price: t('supplies.products.groomingKit.price'),
      rarity: 'Rare' as const,
    },
    {
      image: imgAstral,
      name: t('supplies.products.astralTether.name'),
      description: t('supplies.products.astralTether.description'),
      price: t('supplies.products.astralTether.price'),
    },
    {
      image: imgVoid,
      name: t('supplies.products.voidGlass.name'),
      description: t('supplies.products.voidGlass.description'),
      price: t('supplies.products.voidGlass.price'),
      rarity: 'Mythic' as const,
    },
    {
      image: imgMana,
      name: t('supplies.products.manaFlasks.name'),
      description: t('supplies.products.manaFlasks.description'),
      price: t('supplies.products.manaFlasks.price'),
    },
  ]

  return (
    <Box component="section" sx={styles.section}>
      <Box sx={styles.grid}>
        {products.map((product, i) => (
          <SupplyCard
            key={i}
            image={product.image}
            name={product.name}
            description={product.description}
            price={product.price}
            rarity={product.rarity}
            buyLabel={buyLabel}
            currencyLabel={currency}
          />
        ))}
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
git add src/modules/supplies/components/supplyGrid/index.tsx
git commit -m "feat: create SupplyGrid composing 6 product cards in 3-col layout"
```

---

### Task 8: Create SuppliesCta Component

**Files:**
- Create: `src/modules/supplies/components/suppliesCta/index.tsx`

**Context:** Newsletter-style CTA section with dark surface-container-high background, teal gradient glow on the right side (positioned absolute, blurred). Left side: title "Registry of the Wise" + description. Right side: email input + "Enlist" button.

- [ ] **Step 1: Create the component file**

```tsx
import { Box, Typography, Button, TextField } from '@mui/material'
import { useTranslation } from 'react-i18next'

const styles = {
  section: {
    py: { xs: 8, md: 10 },
    px: { xs: '20px', md: '64px' },
    mb: { xs: 8, md: 10 },
    bgcolor: '#2a2b1b',
    position: 'relative',
    overflow: 'hidden',
  },
  glow: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '33%',
    height: '100%',
    background: 'linear-gradient(to left, rgba(121, 223, 212, 0.1), transparent)',
  },
  container: {
    maxWidth: '1280px',
    mx: 'auto',
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 6,
    position: 'relative',
    zIndex: 10,
  },
  textBlock: {
    flex: { md: '50%' },
  },
  title: {
    fontFamily: '"Playfair Display", serif',
    fontSize: { xs: '2rem', md: '3rem' },
    fontWeight: 700,
    color: 'primary.main',
    mb: 2,
  },
  description: {
    fontSize: { xs: '1rem', md: '1.125rem' },
    lineHeight: 1.56,
    color: 'text.secondary',
  },
  form: {
    flex: { md: '50%' },
    display: 'flex',
    width: '100%',
    maxWidth: '448px',
  },
  input: {
    flexGrow: 1,
    '& .MuiOutlinedInput-root': {
      bgcolor: 'background.default',
      borderRadius: 0,
      '& fieldset': {
        border: 'none',
      },
      '&:hover fieldset': {
        border: '1px solid',
        borderColor: '#79dfd4',
      },
      '&.Mui-focused fieldset': {
        border: '1px solid',
        borderColor: '#79dfd4',
      },
      '& input': {
        py: 2,
        px: 3,
        fontFamily: '"Manrope", sans-serif',
        fontSize: '1rem',
        color: 'text.primary',
        '&::placeholder': {
          color: 'rgba(153, 144, 124, 0.5)',
        },
      },
    },
  },
  button: {
    px: 4,
    py: 2,
    fontSize: '0.875rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'none',
    borderRadius: 0,
    '&:hover': {
      filter: 'brightness(1.1)',
    },
    '&:active': {
      transform: 'scale(0.95)',
    },
  },
}

export const SuppliesCta = () => {
  const { t } = useTranslation()

  return (
    <Box component="section" sx={styles.section}>
      <Box sx={styles.glow} />
      <Box sx={styles.container}>
        <Box sx={styles.textBlock}>
          <Typography sx={styles.title}>
            {t('supplies.cta.title')}
          </Typography>
          <Typography sx={styles.description}>
            {t('supplies.cta.description')}
          </Typography>
        </Box>
        <Box sx={styles.form}>
          <TextField
            placeholder={t('supplies.cta.placeholder')}
            sx={styles.input}
          />
          <Button variant="contained" sx={styles.button}>
            {t('supplies.cta.enlist')}
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
git add src/modules/supplies/components/suppliesCta/index.tsx
git commit -m "feat: create SuppliesCta newsletter section with email input"
```

---

### Task 9: Create SuppliesPage Composer

**Files:**
- Create: `src/modules/supplies/pages/suppliesPage/index.tsx`

**Context:** Composes all supplies section components in a `<main>` wrapper, same pattern as `LandingPage` and `StablesPage`.

- [ ] **Step 1: Create the page file**

```tsx
import { Box } from '@mui/material'
import { SuppliesHero } from '../../components/suppliesHero'
import { SupplyFilters } from '../../components/supplyFilters'
import { SupplyGrid } from '../../components/supplyGrid'
import { SuppliesCta } from '../../components/suppliesCta'

export const SuppliesPage = () => (
  <Box component="main">
    <SuppliesHero />
    <SupplyFilters />
    <SupplyGrid />
    <SuppliesCta />
  </Box>
)
```

- [ ] **Step 2: Verify type-check**

Run: `npx tsc -b --noEmit`
Expected: No errors from supplies module. (Pre-existing errors from other modules may exist.)

- [ ] **Step 3: Commit**

```bash
git add src/modules/supplies/pages/suppliesPage/index.tsx
git commit -m "feat: create SuppliesPage composing all supplies sections"
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

Navigate to `http://localhost:5173/supplies` and verify:
- Navbar shows "Supplies" as active (gold underline)
- Hero section renders with badge, title, description, and background image
- Filter buttons display (All Collections active, rest inactive)
- All 6 product cards render with correct images, rarity badges, prices, and Buy buttons
- CTA section renders with title, description, email input, and Enlist button
- Footer renders at bottom
- Switch language and verify all text translates (es <-> en)

- [ ] **Step 4: Commit if any fixes were needed**

Only if changes were made during verification.

---

## Self-Review

**Spec coverage:**
- Hero with badge, title, description, bg image → Task 4
- Filter bar with 5 buttons → Task 5
- 6 product cards in 3-col grid → Tasks 6 + 7
- Newsletter CTA with email input → Task 8
- Navbar route-aware for `/supplies` → Task 1
- Route added to AppRouter → Task 2
- All text i18n-compliant (es + en) → Task 3
- Images imported as ES modules → Tasks 4, 7
- All components follow existing patterns: MUI sx styles, camelCase folders, `index.tsx` single file

**Placeholder scan:** No TBD, TODO, or "implement later" found. All code is complete.

**Type consistency:**
- `SupplyCardProps` defined in Task 6, consumed in Task 7
- i18n keys in Task 3 match exactly what Tasks 4-9 use via `t('supplies.*')`
- Image imports in Tasks 4 and 7 match files in `src/assets/supplies/` from Task 0
- `SupplyGrid` passes `rarity` as `'Mythic' | 'Legendary' | 'Rare' | undefined` matching `SupplyCardProps`
