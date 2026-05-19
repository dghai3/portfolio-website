# Dhruv Ghai — Portfolio

Personal portfolio site. React + TypeScript + Vite, single-page with case study routes.

## Local development

```bash
cd frontend
npm install
npm run dev        # http://localhost:5173
```

Other commands (all from `frontend/`):

```bash
npm run build      # TypeScript check + Vite production build → dist/
npm run preview    # Serve the production build locally
npm run lint       # ESLint
```

## Deploy (Vercel)

The site deploys from the `frontend/` directory.

1. Import the repo in Vercel.
2. Set **Root Directory** to `frontend`.
3. Vercel auto-detects Vite — no build command override needed.
4. Add a `vercel.json` at repo root if you need SPA rewrites (all paths → `index.html`):

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## Stack

- React 19 + TypeScript 6
- Vite 8 with `@tailwindcss/vite` (Tailwind v4, CSS-first config)
- `framer-motion` — hero text reveal, page transitions
- `cmdk` — ⌘K command palette
- `react-router-dom` — client-side routing
- Geist Sans + Geist Mono (self-hosted via `@fontsource-variable`)
