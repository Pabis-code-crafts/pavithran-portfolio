# Developer Portfolio

Personal software engineering portfolio for Pavithran Gurusamy, built as a static Vite, React, and TypeScript application.

This project is independent from Schedow. It does not modify or depend on Schedow's Docker Compose, Caddyfile, services, networks, or deployment configuration.

## Local development

Install dependencies:

```bash
pnpm install
```

Run the local dev server:

```bash
pnpm dev
```

Local URL:

```text
http://localhost:5174
```

## Production build

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

## GitHub Pages deployment

This repository deploys to GitHub Pages with the workflow in `.github/workflows/deploy-pages.yml`.

The workflow:

- installs dependencies with pnpm
- runs the existing production build
- uploads the generated `dist/` directory
- deploys the static site to GitHub Pages

For GitHub Pages, Vite uses the repository base path `/pavithran-portfolio/`. Local development keeps the root base path `/`.

## GitHub Pages URL

Expected URL after Pages is enabled for the repository:

```text
https://pabis-code-crafts.github.io/pavithran-portfolio/
```

## Docker

Docker support is still available for local container testing or future non-GitHub-Pages hosting:

```bash
docker build -t developer-portfolio .
docker run --rm -p 3001:80 developer-portfolio
```