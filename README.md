# Fornace — Artisan Wood-Fired Pizza Restaurant Website

A modern, high-end restaurant website for **Fornace**, a Michelin-recognized wood-fired pizza restaurant in Milano. Built with Next.js 15 and React 19.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero video, signature dishes, craft section, menu preview, awards, reservation CTA |
| `/menu` | Full menu with sections: Pizze, Antipasti, Dolci, Vini & Cocktails |
| `/story` | Brand story and restaurant history |
| `/reservations` | Table reservation page |

## Tech Stack

- **Framework:** Next.js 15 (App Router, Turbopack)
- **UI:** React 19
- **Styling:** Global CSS with custom design system (`app/globals.css`)
- **Assets:** Local images and video in `public/assets/`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

```bash
npm run dev      # Start dev server with Turbopack
npm run build    # Production build
npm run start    # Start production server
```

## Project Structure

```
fornace-next/
├── app/
│   ├── globals.css        # Global styles & design tokens
│   ├── page.jsx           # Home page
│   ├── menu/page.jsx      # Menu page
│   ├── story/page.jsx     # Story page
│   └── reservations/page.jsx
├── components/
│   ├── Nav.jsx            # Navigation bar
│   ├── Footer.jsx         # Footer
│   └── ClientEffects.jsx  # Client-side animations (particles, scroll reveals, counters)
└── public/
    └── assets/
        ├── images/        # Restaurant photography
        └── videos/        # Hero background video
```
