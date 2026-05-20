# Shaik Shoaib — Portfolio

> B.Tech CSE(AI) Student · AI & Web Developer

A fully responsive, accessible, and SEO-optimized multi-page portfolio website built
with **pure HTML5**, **CSS3**, and **Vanilla JavaScript** — no frameworks.

---

## Project Structure

```
portfolio/
├── index.html       — Home page
├── about.html       — About Me
├── projects.html    — Projects gallery (with category filter)
├── contact.html     — Contact form + social links
├── style.css        — Complete stylesheet (dark / light mode)
├── script.js        — All JavaScript interactivity
├── images/          — SVG icons (GitHub, LinkedIn, Email)
└── README.md        — This file
```

---

## Features

| Category | Details |
|---|---|
| **Semantic HTML5** | `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>` |
| **WCAG Accessibility** | Skip-to-content link, ARIA labels, `aria-current`, `aria-expanded`, `aria-live`, `role` attributes, focus outlines |
| **SEO** | `meta description`, `keywords`, `author`, `robots`, `og:*`, canonical tag on every page |
| **Dark / Light Mode** | Toggle button, persisted via `localStorage`, respects `prefers-color-scheme` |
| **Sticky Navbar** | Glassmorphism `backdrop-filter`, hamburger overlay on mobile |
| **Mobile Menu** | Hamburger icon, ESC to close, `aria-expanded` state |
| **Animated Typing Effect** | Three role strings typed & deleted endlessly |
| **Animated Background** | Floating gradient blurs on hero section |
| **Scroll-Reveal** | `IntersectionObserver` — elements fade up on scroll |
| **Skill Progress Bars** | Animated fill on viewport entry |
| **Project Filter** | Filter by All / AI & ML / Web with animated reveal |
| **Contact Form** | Full inline validation, `aria-invalid`, `aria-live` error messages, toast notification |
| **Scroll-to-Top** | FAB button, appears after scrolling 400 px |
| **Active Nav Highlight** | URL-matched link gets `aria-current="page"` + highlighted style |
| **Responsive** | Mobile (`< 480 px`), Tablet (`< 768 px`), Laptop (`< 1024 px`), Desktop |
| **CSS Variables** | All colours defined as custom properties; dark mode swaps them in one block |
| **Hover / Focus States** | 2 px solid focus rings on all interactive elements |

---

## Lighthouse Target

| Metric | Goal |
|---|---|
| Accessibility | 100 |
| SEO | 100 |
| Best Practices | 100 |
| Performance | 90+ |

---

## Browser Support

- Chrome / Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Getting Started

**1.** Open `portfolio/index.html` in a browser, or serve locally:

```bash
cd portfolio && python -m http.server 8000
```
Then open `http://localhost:8000`.

**2.** To deploy on **GitHub Pages**, push the `portfolio/` folder to a GitHub repo and enable Pages from **Settings → Pages → Branch: main / folder: root** (or `docs/`).

---

## Accessibility Checklist ✔

- [x] Skip-to-content `<a>` link (`.skip-link`)
- [x] `<nav aria-label="Main Navigation">`
- [x] `aria-label` on every form field
- [x] `aria-required="true"` on required inputs
- [x] `aria-invalid` updated on validation
- [x] `aria-live="polite"` error messages (`role="alert"`)
- [x] `aria-current="page"` on active nav link
- [x] `aria-expanded` on hamburger button
- [x] `aria-controls` links button ↔ menu
- [x] Focus outlines preserved on all elements
- [x] Keyboard tab + enter navigation working
- [x] High colour contrast in both themes
- [x] `alt` on all functional `<img>` tags

---

## Credits

Designed & developed by **Shaik Shoaib**.

MIT licence — feel free to fork and adapt.
