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
