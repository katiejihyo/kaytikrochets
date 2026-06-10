# Kayti Krochets 🧶

A cozy, handmade-inspired site for free crochet patterns — each with written
step-by-step instructions and a video tutorial.

Built with React + Vite + Tailwind CSS v4, deployed on Netlify.

## What's new in this redesign

- **Fully responsive** — works cleanly from 390px phones up to desktop
- **Warm yarn-tone design system** (see CSS variables in `src/index.css`)
- **Filtering** by difficulty and category, plus search, on the Patterns page
- **Interactive pattern pages** — a row counter + tap-to-check instruction steps
- **Cleaner routes** — `/patterns` and `/about` (old `/pages/*` links still work)

## Run locally

```bash
npm install
npm run dev      # start dev server
npm run build    # production build to /dist
npm run preview  # preview the production build
```

## Project structure

```
src/
  components/   Navbar, Footer, HomeMain (hero), PopularDesigns
  pages/        Home, AllPatterns, AboutMe, PatternPage
  data/         patterns.js  — single source of truth for all patterns
  index.css     design system (colors, type, components)
```

## Adding a pattern

Add an object to the array in `src/data/patterns.js`:

```js
{
  id: 'my-pattern',           // used in the URL
  difficulty: 'Beginner',     // Beginner | Intermediate | Advanced
  category: 'Bags',           // shows up as a filter
  time: '2-3 hours',
  title: 'My Pattern',
  image: '/images/my-pattern.jpg',
  description: '...',
  materials: ['...'],
  abbreviations: ['...'],
  instructions: `...<strong>Section</strong><br>Step one<br>...`,
  video: 'youtubeVideoId',
}
```

Section headers in `instructions` should be wrapped in `<strong>…</strong>` —
the pattern page parses these into headed groups of checkable steps.
