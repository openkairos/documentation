# Kairos Docs

This repository contains only end-user documentation for Kairos.

The docs website is generated with Docusaurus and published to GitHub Pages with branch-based version paths.

## Version publishing model

Only these branches are deployed:

- `main`
- `*.x` (for example: `1.x`, `2.x`, `beta.x`)

Published paths:

- `main` -> `/docs/next`
- `1.x` -> `/docs/1.x`
- `2.x` -> `/docs/2.x`
- `beta.x` -> `/docs/beta.x`

Branches outside this policy (for example `feature/*`) are not deployed.

A version selector in the navbar is generated from `docs/versions.json` on the `gh-pages` branch.

## Local development

Requirements:

- Node.js 24.x
- npm
- `.npmrc` enforces `engine-strict=true` (installation fails on non-24 Node runtimes)

Install dependencies:

```bash
npm install
```

Run the docs locally:

```bash
npm run start
```

Build static files:

```bash
npm run build
```

Serve the built site:

```bash
npm run serve
```

Run validation:

```bash
npm run validate
```

## Branding

The Docusaurus theme uses `#ff343a` as its primary brand color.

Landing page illustrations live in `static/img/illustrations/` and can be replaced with downloaded SVG assets from
unDraw.

## Repository structure

- `docs/`: end-user markdown documentation
- `scripts/resolve-version.mjs`: branch-to-version mapping
- `scripts/build-version-catalog.mjs`: version catalog merge/update utility
- `.github/workflows/ci.yml`: lint and build checks
- `.github/workflows/deploy-docs.yml`: branch-aware GitHub Pages deployment
- `.github/dependabot.yml`: dependency update automation

## GitHub Pages setup

Set GitHub Pages source to the `gh-pages` branch root.

The deploy workflow updates:

- `/docs/<version>/` for the current branch build
- `/docs/versions.json` for version navigation
- root redirects to `./docs/next/` (relative redirect, base-path safe)
