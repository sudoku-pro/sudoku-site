import { defineConfig } from 'vitepress'

export default defineConfig({
  // base: '/sudoku/',
  title: 'Sudoku',
  titleTemplate: 'Sudoku — :title',
  description: 'Sudoku — The classic number puzzle, perfectly made. 5 difficulty levels, daily challenges, hints & notes, 8 themes, offline play & zero ads. iPhone, iPad & Mac.',
  lastUpdated: true,
  head: [
    // Favicons
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/logo.png' }],

    // Theme and viewport
    ['meta', { name: 'theme-color', content: '#0084ff' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],

    // SEO
    ['meta', { name: 'keywords', content: 'sudoku, puzzle game, number puzzle, logic game, sudoku app, iphone, ipad, mac, offline' }],
    ['meta', { name: 'author', content: 'Sudoku Project' }],

    // Open Graph / Facebook
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Sudoku' }],
    ['meta', { property: 'og:url', content: 'https://sudoku.w3cub.com/' }],
    ['meta', { property: 'og:title', content: 'Sudoku — The Classic Number Puzzle' }],
    ['meta', { property: 'og:description', content: '5 difficulty levels, daily challenges, hints & notes, 8 beautiful themes. Offline, ad-free. iPhone, iPad & Mac.' }],
    ['meta', { property: 'og:image', content: 'https://sudoku.w3cub.com/preview.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:image:alt', content: 'Sudoku Preview' }],

    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:url', content: 'https://sudoku.w3cub.com/' }],
    ['meta', { name: 'twitter:title', content: 'Sudoku — The Classic Number Puzzle' }],
    ['meta', { name: 'twitter:description', content: '5 difficulty levels, daily challenges, hints & notes, 8 beautiful themes. Offline, ad-free.' }],
    ['meta', { name: 'twitter:image', content: 'https://sudoku.w3cub.com/preview.png' }],
    ['meta', { name: 'twitter:image:alt', content: 'Sudoku Preview' }],
  ],
  themeConfig: {
    siteTitle: 'Sudoku',
    logo: '/logo.png',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'FAQ', link: '/guide/faq' },
      { text: 'Changelog', link: 'https://github.com/sudoku-pro/sudoku-site/blob/main/CHANGELOG.md' },
      { text: 'Repository', link: 'https://github.com/sudoku-pro/sudoku-site' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
              { text: 'Introduction', link: '/guide/introduction' },
              { text: 'Installation', link: '/guide/installation' },
              { text: 'Usage', link: '/guide/usage' },
              { text: 'Troubleshooting', link: '/guide/troubleshooting' },
              { text: 'FAQ', link: '/guide/faq' }
        ]
      },
      {
        text: 'Legal',
        items: [
          { text: 'Privacy Policy', link: '/guide/privacy' },
          { text: 'Privacy Choices', link: '/guide/privacy-choices' },
          { text: 'Terms of Service', link: '/guide/terms' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sudoku-pro' }
    ],
    footer: {
      message: 'Built with ❤️',
      copyright: 'Copyright © 2026 Sudoku Project. All rights reserved.',
      items: [
        {
          text: 'Product',
          items: [
            { text: 'About', link: '/guide/introduction' },
            { text: 'Features', link: '/#features' },
            { text: 'Installation', link: '/guide/installation' }
          ]
        },
        {
          text: 'Support',
          items: [
            { text: 'Documentation', link: '/guide/introduction' },
            { text: 'FAQ', link: '/guide/faq' },
            { text: 'Troubleshooting', link: '/guide/troubleshooting' },
            { text: 'Contact', link: 'mailto:sudoku@w3cub.com' }
          ]
        },
        {
          text: 'Company',
          items: [
            { text: 'About', link: '/guide/introduction' },
            { text: 'Privacy Policy', link: '/guide/privacy' },
            { text: 'Terms of Service', link: '/guide/terms' },
            { text: 'GitHub', link: 'https://github.com/sudoku-pro' }
          ]
        }
      ]
    }
  }
})
