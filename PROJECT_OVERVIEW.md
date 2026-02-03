# Jimmys Restaurant - Project Overview

**Last Updated:** February 3, 2026
**Status:** Production
**Domain:** https://jimmysmzt.com
**Location:** Mazatlán, Sinaloa, Mexico

---

## Project Summary

Jimmys is a modern restaurant website for a Detroit-style pizza restaurant based in Mazatlán. The site features an interactive menu system, online ordering capability with shopping cart, and rich multimedia content showcasing their food offerings including pizzas, burgers, wings (alitas), boneless, salads, and desserts.

---

## Technology Stack

### Core Framework
- **Next.js 16.0.8** - React framework with App Router architecture
- **React 19.2.1** - UI library
- **TypeScript 5** - Type-safe development
- **Turbopack** - Fast build tool for development and production

### Styling
- **Tailwind CSS v4** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Framer Motion 12.23.24** - Animation library for smooth transitions
- **Custom fonts:** Geist Sans & Geist Mono

### UI Components & Icons
- **Radix UI** - Accessible component primitives (dropdown-menu, slot)
- **Lucide React** - Icon library
- **React Icons** - Additional icon set
- **FontAwesome** - Social media icons

### 3D Graphics & Animations
- **OGL (1.0.11)** - WebGL library for 3D gallery effects
- **gl-matrix (3.4.4)** - Matrix/vector operations for 3D

### Utilities
- **clsx & tailwind-merge** - Conditional className management
- **class-variance-authority** - Component variant handling

### Testing
- **Jest 30.2.0** - Testing framework
- **Testing Library** - React component testing
- **jsdom** - DOM testing environment

### Analytics & SEO
- **Google Analytics** (G-NG7VWR0K6D)
- **Structured Data** - JSON-LD schema markup
- **OpenGraph & Twitter Cards** - Social media optimization
- **Sitemap generation**
- **robots.txt** configured

---

## Project Structure

```
Jmmys/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with SEO metadata
│   ├── page.tsx                 # Homepage with all sections
│   ├── sitemap.ts               # Dynamic sitemap generation
│   ├── faqs/page.tsx            # FAQ page
│   ├── globals.css              # Global styles & Tailwind config
│   └── menu/                    # Menu category pages
│       ├── pizza/page.tsx
│       ├── hamburguesas/page.tsx
│       ├── alitas/page.tsx
│       ├── ensaladas/page.tsx
│       ├── para-compartir/page.tsx
│       └── postres/page.tsx
│
├── components/                   # React components
│   ├── cart/                    # Shopping cart system
│   │   ├── CartDrawer.tsx       # Slide-out cart interface
│   │   └── FloatingCartButton.tsx
│   ├── layout/                  # Layout components
│   │   ├── Navbar.tsx
│   │   ├── SubNavbar.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── MenuNavigation.tsx
│   │   ├── BannerCoolkies.tsx
│   │   ├── UbicanosSection.tsx  # Location/contact section
│   │   ├── SatisfaceSection.tsx
│   │   ├── SnackGallery.tsx     # 3D burger gallery
│   │   ├── DipsGallery.tsx      # 3D sauce gallery
│   │   ├── SaladGallery.tsx
│   │   ├── CoolkiesBanner.tsx
│   │   └── FoatingWhatsApp.tsx  # WhatsApp contact button
│   ├── ui/                      # UI primitives
│   │   ├── button.tsx
│   │   └── dropdown-menu.tsx
│   ├── CircularGallery.tsx      # 3D pizza carousel (WebGL)
│   ├── InfiniteMenu.tsx         # Animated menu scroll
│   ├── MenuCharacters.tsx       # Animated character section
│   ├── MenuItemCard.tsx         # Product card component
│   ├── OrderBox.tsx             # Order instructions component
│   └── StructuredData.tsx       # SEO structured data
│
├── contexts/
│   └── CartContext.tsx          # Global cart state management
│
├── lib/                         # Utilities & data
│   ├── menu.ts                  # Complete menu data (800+ lines)
│   ├── utils.ts                 # Helper functions
│   └── debounce.ts              # Debounce utility
│
├── public/                      # Static assets
│   ├── img/                     # Images organized by category
│   │   ├── pizzas/
│   │   ├── burgers/
│   │   ├── alitas/
│   │   ├── boneless/
│   │   ├── ensaladas/
│   │   ├── papicar/
│   │   ├── postres/
│   │   ├── bebidas/
│   │   └── toons/               # Character illustrations
│   ├── video/                   # Video assets
│   ├── fonts/                   # Custom fonts
│   ├── robots.txt
│   └── QrWeb.jpg                # QR code for website
│
├── __tests__/
│   └── pizzaPromotion.test.ts   # Unit tests
│
├── .claude/                     # Claude Code configuration
│   └── settings.local.json
│
├── CLAUDE.md                    # Project instructions for AI
├── PROJECT_OVERVIEW.md          # This file
├── package.json
├── tsconfig.json
├── next.config.ts
├── eslint.config.mjs
└── jest.config.js
```

---

## Key Features

### 1. Interactive 3D Galleries
- **CircularGallery.tsx** - WebGL-powered 3D pizza carousel with bend effects
- **SnackGallery.tsx** - 3D burger gallery
- **DipsGallery.tsx** - 3D sauce display
- Uses OGL library for performant WebGL rendering
- Custom scroll-based animations with configurable bend, scroll ease, and border radius

### 2. Shopping Cart System
- **Context-based state management** via CartContext
- **Persistent cart** - localStorage with debounced saves (500ms)
- **Cart operations:** add, remove, update quantity, clear
- **Floating cart button** with item count badge
- **Slide-out drawer** interface for cart review
- Supports item options, add-ons, and notes

### 3. Menu System
- **Comprehensive menu data** in `lib/menu.ts`
- **Menu categories:**
  - PA_PICAR_Y_COMPARTIR (Appetizers)
  - ENSALADAS (Salads)
  - ALITAS (Wings)
  - BONELESS (Boneless wings)
  - BURGERS (Burgers)
  - PIZZAS (Detroit-style pizzas)
  - POSTRES (Desserts & Beverages)
  - SALSAS (House sauces)
- **Structured data types:**
  - MenuItem with options and add-ons
  - MenuOptionGroup (single/multiple selection)
  - MenuAddOn with price deltas
  - MoneyMXN type for pricing
- **Special features:**
  - Signature sauces: Ay Caramba, Mambo Yambo, Yum Yum
  - Customizable items with protein add-ons (chicken, shrimp)
  - Detroit Cheese Crust pizzas
  - Specialty drinks: Rookys (coffee-based) & Juzzys (fruit-based)

### 4. Animations & Interactions
- **Framer Motion** throughout for smooth transitions
- **Scroll-triggered animations** with `whileInView`
- **Hover effects** on buttons and cards
- **Custom cubano font** for headers
- **Responsive design** - mobile-first approach

### 5. SEO & Performance
- **Metadata optimization** in layout.tsx
- **OpenGraph & Twitter cards** configured
- **Google Analytics** integration
- **Structured data** for Restaurant schema
- **Sitemap** generation
- **robots.txt** for crawler control
- **Image optimization** - WebP format
- **Fast refresh** with Turbopack

### 6. Contact & Location
- **WhatsApp floating button** for instant contact
- **Embedded Google Maps** in UbicanosSection
- **Business hours & phone** prominently displayed
- **Address:** Av. Carlos Canseco 603 - Mazatlán, Sin.
- **Hours:** Wednesday-Monday, 1:00 PM - 10:00 PM
- **Phone:** (669) 213 9090

---

## Menu Highlights

### Signature Pizzas (Detroit Cheese Crust)
- La Pepperonísima - Classic pepperoni ($199)
- Hot Mammy - Jalapeños & pepperoni ($239)
- La Pork Belly - Korean-style pork belly ($295)
- Truffalo Chica Wow (TCW) - Truffle boneless ($259)
- La Rockefeller - Premium shrimp pizza ($299)

### Burgers
- La Original Cheeseburger - Classic ($99)
- JIMMYS Royale - Double meat with bourbon bacon jam ($189)
- CrunchyLishus Korean - Korean fried chicken ($169)
- La Bestia Ruffles - Mac & cheese burger ($189)

### Wings & Boneless
- Buffalo Classic ($179)
- Jack BBQ Smoke - Bourbon BBQ ($179)
- Hot Honey - Sweet heat glaze ($179)
- Korean Crunch - Gochujang sauce ($179)
- Truffalo Supreme - Buffalo with truffle ($179)

### Desserts
- Coolkie Skillets - Giant warm cookies with ice cream ($179)
- Individual Coolkies - Various flavors ($55)
- Coolkies Combo - 3 cookies special ($149)

### Beverages
- **Rookys** - Coffee-based drinks ($89)
  - Fresas con Crema, Cajeta, Matcha Azul, Chocoreta, Nutella
- **Juzzys** - Fruit-based drinks ($89)
  - Honey Limonada, Jazmín Soda, Frutos Rojos, Maracuyá

---

## Development Workflow

### Available Scripts
```bash
npm run dev       # Start dev server (localhost:3000) with Turbopack
npm run build     # Production build with Turbopack
npm start         # Start production server (requires build first)
npm run lint      # Run ESLint checks
npm test          # Run Jest tests
npm test:watch    # Run tests in watch mode
```

### Path Aliases
- `@/*` maps to root directory
- Example: `import Component from '@/components/Component'`

### Coding Conventions
- **Server Components by default** (no 'use client' unless needed)
- **'use client'** only for interactive features, hooks, or browser APIs
- **File-based routing** in app/ directory
- **Metadata exports** in layouts/pages for SEO
- **TypeScript strict mode** enabled

---

## State Management

### CartContext
- Global cart state using React Context API
- Persistent across page navigation
- Auto-saves to localStorage with debounce
- Type-safe with TypeScript interfaces
- Hook: `useCart()` for accessing cart functions

---

## Styling Architecture

### Tailwind CSS v4
- Inline theme configuration in `globals.css`
- CSS variables for theming:
  - `--background`
  - `--foreground`
- Automatic dark mode support via `prefers-color-scheme`
- Custom color palette:
  - Orange primary: `#ff6b35`
  - Sky blue: `#87CEEB`
  - Green: Various shades for salads

### Custom Fonts
- **Geist Sans** - Main UI font
- **Geist Mono** - Code/monospace elements
- **Cubano** - Custom display font for headers
- **Demo Relgone** - Script font for decorative text

---

## Third-Party Integrations

1. **Google Analytics** - User behavior tracking
2. **Google Maps** - Location embedding
3. **WhatsApp** - Direct messaging integration
4. **WebGL/OGL** - 3D graphics rendering

---

## Git Information

**Branch:** main
**Recent Commits:**
- ee0c4dd - pizza promotion added
- 134edff - new prices veggy
- e67a615 - new prices
- d10d466 - seo improved
- 6b589a9 - llm texts added

---

## Testing

- **Framework:** Jest with jsdom
- **React Testing:** Testing Library
- **Test files:** `__tests__/` directory
- **Coverage:** Pizza promotion logic tested

---

## Performance Optimizations

1. **Turbopack** - Fast builds and HMR
2. **Image optimization** - WebP format, responsive images
3. **Debounced localStorage** - Reduces write operations
4. **Code splitting** - Next.js automatic code splitting
5. **Font optimization** - next/font/google loader
6. **Lazy loading** - Images and components as needed

---

## Business Information

**Restaurant Name:** Jimmys
**Tagline:** "Tu próxima obsesión"
**Specialty:** Detroit-style Cheese Crust Pizza
**Cuisine:** American-style fast casual (pizzas, burgers, wings)
**Target Market:** Mazatlán, Sinaloa, Mexico
**Service Model:** Dine-in & Delivery

**Unique Selling Points:**
- Authentic Detroit Cheese Crust pizza
- House-made sauces (Ay Caramba, Mambo Yambo, Yum Yum)
- Premium ingredients (Top Sirloin beef, fresh vegetables)
- Creative fusion flavors (Korean, Mexican, American)
- Specialty desserts (Coolkie Skillets)
- Craft beverages (Rookys & Juzzys)

---

## Future Enhancements / TODOs

Based on codebase analysis:
- Complete online ordering flow (currently displays menu only)
- Payment gateway integration
- Order tracking system
- User accounts / order history
- Delivery zone calculator
- Promotional system (coupons/discounts)
- Reviews/ratings system
- Reservation system
- Enhanced mobile app experience

---

## Contact & Support

**Business Contact:**
- Phone: (669) 213 9090
- Location: Av. Carlos Canseco 603, Mazatlán, Sin.
- Hours: Wed-Mon, 1:00 PM - 10:00 PM (Closed Tuesdays)

**Technical:**
- Repository: Git-based version control
- Claude Code configuration: `.claude/` directory
- Project instructions: `CLAUDE.md`

---

## Notes for AI Assistants

- This is a production restaurant website
- Menu data is extensive (800+ lines in menu.ts)
- 3D galleries use WebGL - handle with care
- Cart system uses localStorage - test browser compatibility
- All prices in Mexican Pesos (MXN)
- Text content includes Spanish and English
- SEO is critical - maintain metadata when editing
- Images are optimized WebP format
- Business hours: closed on Tuesdays

**When making changes:**
1. Preserve SEO metadata
2. Test cart functionality after menu changes
3. Verify responsive design on mobile
4. Check WebGL compatibility for gallery components
5. Maintain TypeScript type safety
6. Follow existing animation patterns
7. Keep accessibility in mind (Radix UI components)
