# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands run from the `frontend/` directory:

```bash
npm run dev      # Start dev server (http://localhost:5173)
npm run build    # TypeScript compile + Vite build to dist/
npm run lint     # ESLint with typescript-eslint + react-hooks rules
npm run preview  # Preview the production build locally
```

## Architecture

Single-page portfolio built with React + TypeScript + Vite. No router — the site is one long scrollable page with anchor-linked sections.

**Content is data-driven.** All text, links, and structured data live in `src/data/profile.ts`. Components receive typed content via props; they never hardcode strings. When adding or editing site content, only `profile.ts` needs to change.

**Types are canonical.** `src/types/site.ts` defines every content shape (`HeroContent`, `AboutContent`, `ProjectsContent`, `SectionContent`, etc.). Update types here first when introducing new content fields.

**Section lifecycle — stub → full:**
- Placeholder sections (not yet built) render via `SectionShell`, which takes a `SectionContent` object and shows a heading + description.
- Fully built sections (Hero, About, Projects) have their own component in `src/sections/` and receive a richer typed content object.
- When implementing a new section, replace the `SectionShell` render in `HomePage.tsx` with the new section component, and add its content type to `profile.ts` / `types/site.ts`.

**Rendering order is controlled in `HomePage.tsx`.** Sections are split around the Projects section; `sectionsBeforeProjects` and `sectionsAfterProjects` use `sections[]` from `profile.ts`.

**Nav and routes are in `src/routes/appRoutes.ts`.** `navItems` drives the header links; each `href` is an anchor (`#section-id`) matching the `id` on the corresponding `<section>` element.

**Styling is one flat CSS file (`App.css`).** No CSS modules, no Tailwind. Class names follow a BEM-like convention (`.section`, `.about-layout`, `.project-showcase`). All design tokens (colors, fonts) are CSS custom properties defined in `index.css` / the root. Responsive breakpoints are at the bottom of `App.css`: 760 px, 560 px, 520 px.

**Layout wrapper:** `AppLayout` composes `StarField` (fixed decorative background) + `Header` + page children. It always renders — don't add layout concerns to individual sections.
