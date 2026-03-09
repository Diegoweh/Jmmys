# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the website for **Jimmy's Restaurant** — a food venue in Mazatlán, Mexico. Built with Next.js 15 (App Router), TypeScript, React 19, Tailwind CSS v4, and Framer Motion. The site includes a full menu browser, cart system, time-based promotions, and SEO/structured data.

## Development Commands

```bash
npm run dev       # Start dev server with Turbopack at http://localhost:3000
npm run build     # Production build with Turbopack
npm start         # Start production server (requires build first)
npm run lint      # ESLint with next/core-web-vitals + next/typescript
npm test          # Run Jest tests
npm run test:watch  # Run Jest in watch mode
```

## Architecture

### Routes (`app/`)
- `/` — Home page with hero, galleries, and sections
- `/menu/[category]` — Individual menu category pages: `pizza`, `hamburguesas`, `ensaladas`, `alitas`, `para-compartir`, `postres`, `promociones`
- `/faqs` — FAQ page
- `app/sitemap.ts` — Auto-generated sitemap

### Data Layer (`lib/`)
- **`lib/menu.ts`** — Single source of truth for all menu data. Defines `MenuItem`, `MenuCategory`, `MenuOptionGroup`, `MenuAddOn` types. Exports `menuItems[]`, `menuSalsas[]`, `menuAddOns`, and `menuByCategory` (pre-grouped by category). To add/modify menu items, edit this file only.
- **`lib/promotions.ts`** — Monday pizza promotion logic. Active only on Mondays 1pm–10pm (America/Mazatlan timezone). Test mode: add `?testMonday=true` to URL or `localStorage.setItem('testMondayPromo', 'true')`.
- **`lib/utils.ts`** — `cn()` helper (clsx + tailwind-merge).
- **`lib/debounce.ts`** — Debounce utility used by CartContext.

### State Management
- **`contexts/CartContext.tsx`** — React Context for cart state. Persists to localStorage under key `jimmys-cart` with 500ms debounce. Filters out stale promotional items on load if Monday promo is inactive. Use `useCart()` hook to access.

### Components
- **`components/layout/`** — `Navbar`, `SubNavbar`, `Header` (video hero), `Footer`, `MenuNavigation`, `SaladGallery`, `SnackGallery`, `DipsGallery`, `SatisfaceSection`, `UbicanosSection`
- **`components/cart/`** — `FloatingCartButton`, `CartDrawer`
- **`components/ui/`** — `button` (CVA-based), `dropdown-menu` (Radix), `FoatingWhatsApp` (note: intentional typo in filename)
- **`components/`** — `MenuItemCard`, `OrderBox`, `InfiniteMenu`, `CircularGallery` (uses OGL/WebGL + gl-matrix), `PromoPopup`, `PromoDevTools` (dev-only promo testing UI), `StructuredData` (JSON-LD SEO)

### Key Conventions
- All prices are in `MoneyMXN` (number, Mexican pesos)
- `available?: boolean` on `MenuItem` — omitting it hides the item from menus
- Commented-out items in `lib/menu.ts` are intentionally disabled, not deleted
- `PromoDevTools` is commented out in `app/layout.tsx` for production; uncomment for local promo testing
- Beverages and cookies are categorized under `"POSTRES"` in `MenuCategory`
- The `FoatingWhatsApp` filename has a typo — keep it as-is to avoid breaking imports

### Testing
Jest with `jest-environment-jsdom` and `@testing-library/react`. Tests go in `__tests__/` directories or as `*.test.tsx` / `*.spec.tsx` files. The `@/` path alias works in tests via `moduleNameMapper`.

### Notable Dependencies
- **Framer Motion** — animations throughout the site
- **OGL + gl-matrix** — WebGL 3D gallery (`CircularGallery`)
- **Radix UI** — dropdown menus and slot primitives
- **Font Awesome + Lucide + React Icons** — icons (mixed usage across components)
- **Google Analytics** — `G-NG7VWR0K6D`, loaded via `next/script` in root layout
