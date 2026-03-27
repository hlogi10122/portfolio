## Repo-specific instructions for AI coding agents

This project is a small React + TypeScript portfolio built with Vite and Tailwind. The file tree is minimal: a single-page UI lives in `src/App.tsx` and the app is mounted from `src/main.tsx`.

Keep the guidance below short and focused on patterns an automated agent will need to be productive in this codebase.

### Big picture
- Frameworks: React 19 + TypeScript, built with Vite. See `package.json` and `vite.config.ts`.
- UI: Single-page portfolio composed in `src/App.tsx`. The app uses Tailwind utility classes for styling, `framer-motion` for animation, and `lucide-react` for icons.
- Build: type-check-first build. The `build` script runs `tsc -b` before `vite build` (so prioritize TypeScript project references and incremental compilation).

### Important files to read/modify
- `src/App.tsx` — primary UI. Patterns used: arrays of data (projects, skills, experience, links) are mapped to JSX cards. Use the same pattern when adding new sections/components.
- `src/main.tsx` — root mount (ReactDOM.createRoot). Keep `index.css` import here.
- `vite.config.ts` — Vite plugins (React + Tailwind plugin). Changes here affect dev server and build transforms.
- `package.json` — scripts you can call: `npm run dev`, `npm run build`, `npm run preview`, `npm run lint`.
- `tsconfig.json` and referenced `tsconfig.app.json`/`tsconfig.node.json` — project references used by `tsc -b`. If adding new TS packages or composite builds, update these files.
- `public/` — static assets (favicon, icons). Images also live under `src/assets/` and are imported directly.

### Coding patterns and conventions (concrete)
- Visual sections reuse small data arrays in `App.tsx` (e.g., `projects`, `techSkills`, `experience`) and map to JSX cards. Follow the same data-driven pattern for new content.
- Styling is Tailwind-first. Avoid adding global CSS overrides unless necessary; prefer utility classes and small local component wrappers.
- Animations use `framer-motion` components (imported as `motion`) and simple initial/animate props. Reuse that pattern rather than raw imperative animations.
- Icons use `lucide-react` as React components (e.g., `<Shield />`, `<Disc3 />`) — import individual icons where needed.

### Developer workflows (concrete commands)
- Start dev server (HMR): `npm run dev` — opens Vite dev server.
- Type-check + build: `npm run build` — runs `tsc -b` then `vite build`. Expect type errors to fail the build step.
- Linting: `npm run lint` — runs ESLint across the repo. Fix lint problems in place where possible.
- Preview production build: `npm run preview` (serves `dist` locally).

### Integration points & external dependencies
- Spotify embed iframe in `App.tsx` (external `open.spotify.com` URL) — changes to this area affect privacy and CSP; keep iframe attributes consistent (loading=lazy, allow attributes).
- External links (GitHub, LinkedIn, Spotify) open in new tabs (`target="_blank" rel="noreferrer"`) — preserve this pattern for security.
- Tailwind + Vite plugin used instead of postcss pipeline here (`@tailwindcss/vite`). Modify `vite.config.ts` if you need custom Tailwind setup.

### TypeScript and linting notes
- Build script intentionally type-checks before bundling (see `package.json`). Do not remove `tsc -b` unless you intentionally change the CI expectation.
- ESLint is configured via `eslint.config.js` in the repo root — prefer to run `npm run lint` rather than ad-hoc lint runs to use repo configuration.

### Quick examples (copyable snippets for this repo)
- Add a new project card in `src/App.tsx` (follow the existing `projects` array):

  const projects = [
    // ...existing items
    { title: 'New App', type: 'Personal', description: 'Short description', stack: 'React, TypeScript' },
  ]

- Use `framer-motion` pattern when adding animated wrapper:

  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
    {/* content */}
  </motion.div>

### What not to change without PR notes
- Do not remove `tsc -b` from `build` without an explicit CI/owner decision — CI relies on a type-checked artifact.
- Avoid adding global CSS files that conflict with Tailwind reset styles. If you must, add them under `src/` and import in `src/main.tsx`.

If any part of this file is unclear or you want additional examples (component extraction, testing suggestions, or a small CI snippet), tell me which area to expand and I'll iterate. 
