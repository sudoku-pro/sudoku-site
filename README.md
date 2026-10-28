# Sudoku Documentation

This repository hosts documentation for the **Sudoku** project. The site uses the custom domain `sudoku.w3cub.com`.

## App Store

- **App Store ID**: `6793606018`
- **Public App Store link**: https://apps.apple.com/app/id6793606018
- **App Store Connect (developer)**: https://appstoreconnect.apple.com/apps/6793606018/distribution/info
- **Platforms**: iPhone, iPad, Mac (universal app)
- **Bundle Identifier**: `com.w3cub.sudoku`

## About Sudoku

Sudoku is a beautifully crafted number puzzle game for Apple devices:

- **5 difficulty levels** — Easy (45 givens) to Master (24 givens)
- **Smart features** — Hints, pencil notes with auto-clear, error checking, undo
- **Daily Challenge** — A fresh Master-level puzzle every day
- **Statistics** — Track games, win rate, streaks, and per-difficulty times
- **8 themes** — Classic, Midnight, Paper, Forest, Ocean, Sunset, Lavender, Rose
- **iCloud sync** — Continue on any device via CloudKit
- **Game Center** — Leaderboards and achievements
- **25 languages** — Switch at runtime without restarting
- **Print puzzles** — From Mac, print with optional answer keys
- **100% offline core gameplay**, no ads, no in-app purchases

## Documentation

This site is built with [VitePress](https://vitepress.dev/) and contains guides for the Sudoku project.

### Getting Help

- **Submit Issues**: Report bugs or request features at https://github.com/sudoku-pro/sudoku-site/issues
- **Documentation**: Browse the full documentation at https://sudoku.w3cub.com

## Development

### Prerequisites

- Node.js 18+
- pnpm

### Setup

```bash
pnpm install
```

### Development

```bash
pnpm docs:dev
```

This will start a local development server at `http://localhost:5173`.

### Build

```bash
pnpm docs:build
```

### Preview

```bash
pnpm docs:preview
```

## Localization (i18n)

The site is fully localized. English is the **root** locale (served at `/`), and
six additional languages live under their own path segment:

| Locale | Path | File directory |
|--------|------|----------------|
| English | `/` | `docs/` (root) |
| Español | `/es/` | `docs/es/` |
| 简体中文 | `/zh-CN/` | `docs/zh-CN/` |
| 繁體中文 | `/zh-TW/` | `docs/zh-TW/` |
| 日本語 | `/ja/` | `docs/ja/` |
| Deutsch | `/de/` | `docs/de/` |
| Français | `/fr/` | `docs/fr/` |

How it works:

- **Chrome labels** (nav / sidebar / footer / outline / markdown containers) are
  defined per locale in `docs/.vitepress/config.ts` (`STR` and `MD` tables).
  Internal links are auto-prefixed with the locale segment by `tc()`.
- **Page bodies** are translated `.md` files mirrored under `docs/<lang>/`.
  Relative `.md` links stay relative; absolute links must carry the prefix
  (e.g. `/fr/guide/privacy`).
- **Home page copy** (hero text, section titles, testimonials, FAQ, CTA, footer)
  comes from the `home:` block in each `docs/<lang>/index.md` frontmatter.
  Missing keys fall back to the English defaults in `AdvancedHome.vue`, and
  internal links there are auto-prefixed by the `lp()` helper.

### Adding a new language

1. Add the locale to `locales` in `docs/.vitepress/config.ts` and add a `STR`
   (plus optional `MD` / `SEO`) entry.
2. Create `docs/<lang>/` mirroring the English structure (11 files).
3. Add the locale code to the `LOCALES` regex in
   `docs/.vitepress/theme/index.ts` so its homepage renders `AdvancedHome`,
   and to the `LOCALES` list comment in `HomeActions.vue` if you want a
   localized badge label.

## Deployment

This documentation site can be deployed to GitHub Pages; the workflow includes a step to add a `CNAME` for the custom domain `sudoku.w3cub.com`.

### Manual Deployment

To deploy manually:

1. Build the site: `pnpm docs:build`
2. The built files will be in `docs/.vitepress/dist`
3. Deploy to your hosting platform or push to `gh-pages`

## Contributing

We welcome contributions to improve the documentation:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

Documentation may be redistributed according to the repository LICENSE.
