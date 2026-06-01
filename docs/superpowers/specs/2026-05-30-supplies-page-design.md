# Supplies Page Design

> Design reference: Stitch screen `d224b9dddbe94ff2b6ea98ce874e45a3` (Arcane Supplies - Enhanced Hero), project `13782579993693958366`.

## Overview

Third page of Celestial Menagerie (after Landing and Stables). "Arcane Supplies" — a product catalog page for mythical creature supplies: nutrition, habitats, enchanted gear, and ritual tools.

## Architecture

New module `src/modules/supplies/` following the established pattern (`modules/<feature>/pages/<feature>Page/` + `modules/<feature>/components/`). All text i18n-compliant. Navbar must be updated to highlight `/supplies` as active.

## Sections

### 1. Supplies Hero

- Full-viewport hero with background image and gradient overlay
- Badge: "The Curator's Archive" (tertiary text, primary/30 border)
- Title: "Arcane Supplies" (display-lg, gold shimmer)
- Description paragraph
- Background image with `opacity: 0.5` + radial-gradient vignette

### 2. Supply Filters

- Horizontal bar with 5 filter buttons
- Active state: gold border + gold text + surface-container bg
- Inactive: outline-variant border + on-surface-variant text
- Hover: border → teal, text → teal
- Filters: All Collections, Nutrition, Habitats, Enchanted Gear, Ritual Tools

### 3. Supply Grid

- 3-column responsive grid (1 col mobile, 2 col tablet, 3 col desktop)
- 6 product cards, each with:
  - Image (aspect-ratio 4/5) with vignette overlay
  - Rarity badge (Mythic: gold gradient, Legendary: teal badge, Rare: secondary badge)
  - Product name (gold, headline-sm)
  - Description text
  - Divider + price in GP + "Buy" button (contained primary)

### 4. Supplies CTA

- Newsletter-style CTA: "Registry of the Wise"
- Description text
- Email input + "Enlist" button
- Teal gradient glow on the right side

### 5. Navbar Update

- Add `useLocation` route-aware logic for `/supplies` link
- Supplies link must already exist in navbar (currently `href="#"`)

## Components

| Component     | Path                                             | Notes                                                             |
| ------------- | ------------------------------------------------ | ----------------------------------------------------------------- |
| SuppliesPage  | `src/modules/supplies/pages/suppliesPage/`       | Composer, wraps all sections in `<main>`                          |
| SuppliesHero  | `src/modules/supplies/components/suppliesHero/`  | Hero with bg image, badge, title, description                     |
| SupplyFilters | `src/modules/supplies/components/supplyFilters/` | 5 filter buttons, active state on first                           |
| SupplyCard    | `src/modules/supplies/components/supplyCard/`    | Product card with image, badge, name, description, price, buy btn |
| SupplyGrid    | `src/modules/supplies/components/supplyGrid/`    | Grid composing 6 SupplyCards                                      |
| SuppliesCta   | `src/modules/supplies/components/suppliesCta/`   | Newsletter CTA with email input                                   |

## Data Flow

- All text via `t('supplies.*')` from i18n
- Product data inlined in SupplyGrid via i18n keys (same pattern as habitatGrid)
- Images imported as ES modules from `@/assets/supplies/`
- No state management needed (static page)

## Assets

- Hero background: `hero-supplies.png`
- Product images: `supply-phoenix-grain.png`, `supply-kraken-salt.png`, `supply-grooming-kit.png`, `supply-astral-tether.png`, `supply-void-glass.png`, `supply-mana-flasks.png`
- Download from Stitch-hosted URLs to `src/assets/supplies/`
