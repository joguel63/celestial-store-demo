# Celestial Menagerie — Project Guide

## Overview

**Celestial Menagerie** es una landing page tipo "tienda de mascotas mitológicas" con temática fantasiosa oscura. Muestra un bestiario de criaturas legendarias (Fénix, Grifo, Kelpie). SPA estática sin backend.

## Stack

| Tecnología | Versión |
|------------|---------|
| React | ^18.3 |
| Vite | ^5.4 |
| TypeScript | ^5.5 (strict) |
| MUI | ^6.1 |
| react-router-dom | ^6.26 |
| i18next + react-i18next | ^23 / ^15 |
| Emotion | ^11.13 |

## Arquitectura

```
src/
  core/              ← infraestructura compartida (theme, router, i18n, layouts)
    theme/           ← MUI dark theme con paleta celestial
    locales/         ← i18n: es (default) + en, namespace "landing"
    router/          ← BrowserRouter, rutas
    layouts/         ← MainLayout (Navbar + Outlet + Footer)
    components/      ← componentes globales compartidos entre vistas
      navbar/        ← AppBar fijo con glassmorphism + route-aware
      footer/        ← Footer 4 columnas + newsletter
  modules/           ← código de dominio por feature
    landing/
      pages/         ← LandingPage (compone las 5 secciones)
      components/
        hero/        ← Full-screen hero con nebula + estrellas + shimmer title
        featuredCreatures/ ← Grid de 3 cards de criaturas
        testimonials/     ← Quote + avatar del curador
        adoptionGuide/    ← Proceso de 3 pasos
        ctaBanner/        ← CTA final
  assets/             ← imágenes locales por feature
    landing/          ← hero-nebula, phoenix, gryphon, kelpie, testimonial-curator
    stables/          ← hero-stables, habitat-cumbres, etc.
```

### Reglas de arquitectura

- **core** = solo infraestructura compartida (theme, router, i18n, layouts, **componentes globales**). No meter lógica de dominio aquí.
- **modules/<feature>** = páginas, componentes, hooks, servicios por feature.
- **Componentes usados por múltiples vistas** (Navbar, Footer) van en `src/core/components/`, NO en un módulo específico.
- No crear nuevas capas si las existentes ya cubren la responsabilidad.
- Path alias: `@/` → `src/` (configurado en `tsconfig.json` y `vite.config.ts`).

## Componentes

- **Folders en camelCase**, cada componente en su `index.tsx`.
- **Estilos**: objeto `styles` en `styles.ts` aparte con tipado MUI estricto (ver abajo). Solo mantener inline en `index.tsx` si el componente tiene ≤3 reglas simples.
- **useController.ts**: solo si el componente tiene lógica no trivial. No crear archivos vacíos por seguir el patrón.
- **Sin barrel exports** para un solo archivo (excepto `theme/index.ts` que re-exporta el Theme type).

### Tipado de estilos (OBLIGATORIO)

Todo `styles.ts` debe importar `SxProps` y `Theme` de MUI, declarar un tipo `Styles` como `Record` con las keys del objeto, y tipar la exportación:

```ts
import { SxProps, Theme } from '@mui/material'

type Styles = Record<'section' | 'container' | 'title' | 'description', SxProps<Theme>>

export const styles: Styles = {
  section: { py: 8 },
  container: { maxWidth: '1280px' },
  title: { color: 'primary.main' },
  description: { color: 'text.secondary' },
}
```

Para estilos con selectores anidados (`'& img'`, `'&:hover img'`) que escapan del tipado `SxProps<Theme>`, usar `` en esa propiedad individual.

No usar `as const` en valores de texto — el tipado `SxProps<Theme>` ya estrecha los literales.

### Navbar route-aware

El Navbar usa `useLocation()` de react-router-dom para aplicar el estilo `activeLink` condicionalmente según `location.pathname`. Cada link debe comparar su ruta (`/`, `/stables`, etc.) con la ubicación actual.

## Theme / Diseño

- **Dark mode only** (no hay toggle light/dark).
- **Paleta principal:** gold `#f2ca50`, teal `#79dfd4`, deep purple `#2e1a47`, fondo near-black `#131407`.
- **Paleta celestial extendida** declarada en `theme.ts` vía module augmentation de MUI (`Palette.celestial`): gold, goldDim, teal, tealDim, deep, void, parchment, chamber.
- **Tipografía:** Playfair Display (headings), Manrope (body/UI). Cargadas en `index.html`.
- **Botones:** `textTransform: uppercase`, `letterSpacing: 0.1em`, `borderRadius: 0`. Contained primary tiene glow teal + hover glow gold.
- **Contenedores:** `maxWidth: 1280px`, padding responsive `{ xs: '20px', md: '64px' }`.

### Colores en sx

- Usar tokens del theme: `primary.main`, `text.secondary`, `background.paper`, `divider`.
- NO usar `tertiary.main` — no existe en MUI estándar. Usar el hex directo `#79dfd4` para el teal.
- Colores específicos del diseño (ej. `#0e0f03`, `#d4af37`) pueden ir como hex en el styles object.

## i18n

- **Namespace único:** `landing` (es el `defaultNS`).
- **Idiomas:** `es` (default), `en` (fallback).
- **Uso:** `const { t } = useTranslation()` y luego `t('seccion.clave')` — NO incluir el prefijo `landing.`.
- **NUNCA** hardcodear texto visible en JSX. Todo va en los locale files.
- Cada key nueva debe existir en **ambos** archivos (`es/landing.locale.ts` y `en/landing.locale.ts`) con estructura idéntica.
- Los archivos de locale están en `src/core/locales/{es,en}/landing.locale.ts`.

## Imágenes

- Están en `src/assets/<feature>/` como `.png`.
- Se importan como módulos ES: `import heroBg from '@/assets/landing/hero-nebula.png'`.
- Se usan con `<Box component="img" src={heroBg} alt="..." />`.
- **No usar URLs externas** (CDN de Google) — expiran.

### Imágenes de Stitch

Todas las imágenes AI-generated descargadas de Stitch tienen resolución máxima **512x512**. Para imágenes de fondo grandes (hero sections, banners):
- Usar `opacity: 0.5` o menor en la imagen para que actúe como textura atmosférica.
- Combinar con gradientes overlay (`linear-gradient` o `radial-gradient`) para enmascarar bordes.
- No estirar la imagen a full resolución con `objectFit: 'cover'` sin bajar opacidad — se verá pixelada.

## Iconos

- Usar `@mui/icons-material` (NO Google Material Symbols class names).
- Import individual: `import SearchIcon from '@mui/icons-material/Search'`.
- Todos los `IconButton` deben tener `Tooltip` con texto descriptivo vía i18n.

## Convenciones de código

- **Orden de imports:** React/MUI → i18next → project-local (`@/`).
- **TypeScript strict:** `noUnusedLocals`, `noUnusedParameters` activados.
- **Sin comentarios** a menos que sean estrictamente necesarios.
- **Responsive:** tipografía y layout con breakpoints MUI (`xs`, `md`).
- **Shimmer animation:** keyframes definidos en `<style>` dentro de `index.html`.

## Comandos

| Comando | Acción |
|---------|--------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | `tsc -b && vite build` |
| `npm run preview` | Previsualizar build |

## Flujo de build

1. `tsc -b` → type-check (sin emitir JS)
2. `vite build` → bundle a `dist/`

## Notas importantes

- El navbar usa glassmorphism: `backdropFilter: 'blur(20px)'` + `bgcolor: rgba(19,20,7,0.4)`.
- El hero tiene 3 capas: imagen nebula (40% opacity) + vignette radial-gradient + star-field CSS (15 puntos radial-gradient).
- Las cards de criaturas tienen borde superior dorado de 2px y efecto hover translateY(-8px) + scale(1.1) en la imagen.
- Los badges de rareza son `Chip` con borde del color correspondiente (teal=mythic, gold=legendary, text.secondary=rare).
- El testimonial tiene patrón de estrellas doradas como fondo (opacity 0.05).
- Los pasos de adopción tienen círculos numerados con glow teal y línea conectora con gradiente dorado en desktop.
- El CTA final tiene caja centrada con bordes superior/inferior dorados y botón con glow `0 0 30px rgba(242,202,80,0.3)`.
- El proyecto **NO tiene test framework**. La verificación es `npm run build` (`tsc -b && vite build`). No crear archivos de test.
