# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-10-28

### Added
- Full internationalization with 6 new locales (English remains the root locale):
  - Spanish (`/es/`), Simplified Chinese (`/zh-CN/`), Traditional Chinese (`/zh-TW/`),
    Japanese (`/ja/`), German (`/de/`), French (`/fr/`)
- Per-locale nav / sidebar / footer / outline labels and markdown container strings
- Per-locale SEO metadata (title, description, Open Graph / Twitter cards)
- Language switcher in the homepage navbar
- Home page copy is now frontmatter-driven (`home:` block), so hero text,
  section titles, testimonials, FAQ, CTA, and footer can be translated per locale
  while English stays the fallback

### Changed
- `AdvancedHome.vue` reads all copy from the page frontmatter with English defaults
- Internal links on the homepage are auto-prefixed with the active locale
- `theme/index.ts` `Layout` is now a stateful component so the homepage re-renders
  with the correct locale data on client-side navigation

## [1.0.0] - 2026-07-29

### Added
- Initial release of Sudoku documentation site
- Complete VitePress setup with TypeScript configuration
- Comprehensive user guides:
  - Introduction to Sudoku (features, difficulty levels, themes, iCloud sync, Game Center)
  - Installation instructions for iPhone, iPad, and Mac
  - Usage guide with controls, pencil notes system, hints, statistics, and print feature
  - Troubleshooting section (crashes, performance, iCloud sync, Game Center)
  - Frequently Asked Questions
- Legal pages:
  - Privacy Policy (offline-first, iCloud sync, Game Center details)
  - Privacy Choices (user control over data)
  - Terms of Service
- Custom AdvancedHome.vue landing page with hero, features, screenshots, testimonials, FAQ, CTA, and footer
- Sudoku brand theming (#0084FF blue accent color)
- App Store integration (ID: 6793606018)
- Responsive design for mobile, tablet, and desktop
- SEO optimized with Open Graph and Twitter Card meta tags
- Automatic CI/CD deployment to GitHub Pages via `sudoku.w3cub.com`
- Project structure with essential files (.gitignore, LICENSE, CONTRIBUTING.md, CODE_OF_CONDUCT.md)
- Local search functionality
- Social links and footer navigation

### Technical Details
- Built with VitePress 2.0.0-alpha.18
- Uses pnpm for package management
- GitHub Actions workflow for automated deployment
- Sudoku-specific content: 5 difficulty levels, 8 themes, 25 languages, Daily Challenge, Statistics, Game Center achievements, Print Puzzles

---
*Site converted from Minesweeper documentation to Sudoku documentation on July 29, 2026*

## Contributing to the Changelog

When making changes to the documentation:

- Add entries to the "Unreleased" section above (or create a new version section).
- Use the following types: `Added`, `Changed`, `Deprecated`, `Removed`, `Fixed`, `Security`.
- Keep descriptions clear and concise.
- Reference issue numbers when applicable.

## Release Process

1. Update version in `package.json`
2. Move items from "Unreleased" to a new version section
3. Commit with message "Release vX.X.X"
4. Push to trigger deployment
