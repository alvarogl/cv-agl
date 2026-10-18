# Repository Guidelines

## Project Structure

This is a static Astro resume site. The root page is `src/pages/index.astro`, which renders `src/components/ResumePage.astro` inside `src/layouts/BaseLayout.astro`. Resume and site copy live together in `src/data/me.json`; do not duplicate that content in components. Images and fonts are in `src/assets/`, and shared styles are in `src/styles/global.css`.

`astro.config.mjs` owns the canonical site URL. `src/middleware.js` redirects unresolved routes to `/` during Astro development. The production container serves `dist/` with Nginx; `docker/nginx/default.conf` redirects production 404s to `/`.

## Commands

Use pnpm (the pinned version is declared in `package.json`).

- `pnpm install` installs dependencies.
- `pnpm dev` starts Astro at `http://localhost:4321`.
- `pnpm build` creates the static site in `dist/`.
- `pnpm lint` runs ESLint.

Before handing off changes, run `pnpm lint` and `pnpm build`. For visual changes, check the site in a browser at desktop and mobile widths. For routing or container changes, also build the image with `docker build -t cv-agl-validate:latest .` and verify a known and an unknown route.

## Code and Content Conventions

Use Astro components and 2-space indentation. Keep component names in PascalCase. Use the existing semicolon and single-quote style in JavaScript. Keep resume content data-driven in `src/data/me.json`; each experience includes its own `technologies` array.

The site is English-only. Do not restore Spanish pages, language switching, or duplicate locale data. Keep the public profile concise and avoid experience-specific metrics in global highlights.

## Routing and Deployment

Do not attempt an arbitrary static catch-all redirect in Astro config: the middleware covers local development, and Nginx covers production 404s.

The Docker image builds the static site and serves it with Nginx. Do not commit credentials or deployment secrets.

## Commits and Pull Requests

Use short, imperative, lowercase commit subjects where practical. PRs should summarize content, layout, and routing changes, and include screenshots when the visible UI changes.
