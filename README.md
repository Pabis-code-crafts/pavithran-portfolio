# Developer Portfolio

A simple personal software engineering portfolio built as a standalone Vite, React, and TypeScript application.

This project is intentionally independent from Schedow. It does not modify or depend on Schedow's Docker Compose, Caddyfile, services, networks, or deployment configuration.

## Sections

- Home
- Timeline
- Projects
- About
- Contact

## Local Development

Install dependencies:

```bash
pnpm install
```

Run the local dev server:

```bash
pnpm dev
```

Open:

```text
http://localhost:5174
```

## Production Build

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

## Docker

Build the image:

```bash
docker build -t developer-portfolio .
```

Run the container locally:

```bash
docker run --rm -p 3001:80 developer-portfolio
```

Or use Docker Compose:

```bash
docker compose up --build
```

Open:

```text
http://localhost:3001
```

## Content To Fill In

Update the editable content files:

- `src/content/profile.ts`
- `src/content/timeline.ts`
- `src/content/projects.ts`

Use real dates, links, screenshots, and personal details once they are available.

## Later EC2 / Caddy Deployment

Later, the portfolio can run as a separate container on the same EC2 instance as Schedow. Caddy should remain the only public entry point and route the portfolio domain to the portfolio container.

Do this later, not in the first scaffold:

- choose the production portfolio domain
- create or attach a shared Docker network for Caddy and the portfolio container
- add a new Caddy site block for the portfolio domain
- keep Schedow's existing domain and service routing unchanged
