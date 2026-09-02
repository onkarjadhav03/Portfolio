# Onkar Jadhav — Portfolio (React + Vite)

React rebuild of the portfolio, structured as one component per section.

## Structure

```
src/
  main.jsx           entry point
  App.jsx             composes all sections
  index.css           design tokens (colors, fonts), reset, shared classes
  components/
    Navbar.jsx / .css
    Hero.jsx / .css
    About.jsx / .css
    Skills.jsx / .css
    Experience.jsx / .css
    Projects.jsx / .css
    Contact.jsx / .css
    Footer.jsx
public/
  resume.pdf          linked from the Contact section
  favicon.svg
```

Each section's content (skills, experience, projects, contact links) lives
as a small array at the top of its component file — edit those arrays to
update the site instead of hunting through JSX.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build      # outputs static files to dist/
npm run preview     # preview the production build locally
```

## Deploying to GitHub Pages

This repo is set up for the `onkarjadhav03.github.io/Portfolio/` project
page, so `vite.config.js` sets `base: '/Portfolio/'`. If you rename the repo
or move to a custom domain, update that value first.

**Option A — gh-pages package (already in devDependencies):**

```bash
npm install
npm run deploy
```

This builds the site and pushes `dist/` to a `gh-pages` branch. In the repo
settings, set GitHub Pages to serve from the `gh-pages` branch.

**Option B — GitHub Actions (auto-deploy on push):**
Add a workflow that runs `npm run build` and publishes `dist/` using
`actions/deploy-pages`. Happy to generate that workflow file if you'd
rather auto-deploy on every push to `main` instead of running `deploy`
manually.
