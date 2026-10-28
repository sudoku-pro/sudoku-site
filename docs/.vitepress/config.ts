import { defineConfig } from 'vitepress'

// ── Per-locale UI strings (nav / sidebar / footer) ────────────────
// Guide/Legal body .md files are translated per-locale under
// docs/<lang>/. This object only holds the chrome labels.
const STR = {
  en: {
    home: 'Home', guide: 'Guide', faq: 'FAQ', changelog: 'Changelog', repository: 'Repository',
    guideGroup: 'Guide', intro: 'Introduction', install: 'Installation', usage: 'Usage',
    troubleshooting: 'Troubleshooting', faqLabel: 'FAQ',
    legalGroup: 'Legal', privacy: 'Privacy Policy', privacyChoices: 'Privacy Choices', terms: 'Terms of Service',
    footerMessage: 'Built with ❤️',
    footerCopyright: 'Copyright © 2026 Sudoku Project. All rights reserved.',
    product: 'Product', about: 'About', features: 'Features', installF: 'Installation',
    support: 'Support', documentation: 'Documentation', faqF: 'FAQ', troubleshootingF: 'Troubleshooting', contact: 'Contact',
    company: 'Company', privacyC: 'Privacy Policy', termsC: 'Terms of Service', githubC: 'GitHub',
    outline: 'On this page',
  },
  es: {
    home: 'Inicio', guide: 'Guía', faq: 'Preguntas', changelog: 'Novedades', repository: 'Repositorio',
    guideGroup: 'Guía', intro: 'Introducción', install: 'Instalación', usage: 'Uso',
    troubleshooting: 'Solución de problemas', faqLabel: 'Preguntas frecuentes',
    legalGroup: 'Legal', privacy: 'Política de privacidad', privacyChoices: 'Opciones de privacidad', terms: 'Términos del servicio',
    footerMessage: 'Hecho con ❤️',
    footerCopyright: 'Copyright © 2026 Sudoku Project. Todos los derechos reservados.',
    product: 'Producto', about: 'Acerca de', features: 'Funciones', installF: 'Instalación',
    support: 'Soporte', documentation: 'Documentación', faqF: 'Preguntas frecuentes', troubleshootingF: 'Solución de problemas', contact: 'Contacto',
    company: 'Empresa', privacyC: 'Política de privacidad', termsC: 'Términos del servicio', githubC: 'GitHub',
    outline: 'En esta página',
  },
  'zh-CN': {
    home: '首页', guide: '指南', faq: '常见问题', changelog: '更新日志', repository: '代码仓库',
    guideGroup: '指南', intro: '简介', install: '安装', usage: '使用',
    troubleshooting: '故障排除', faqLabel: '常见问题',
    legalGroup: '法律', privacy: '隐私政策', privacyChoices: '隐私选项', terms: '服务条款',
    footerMessage: '用心打造 ❤️',
    footerCopyright: '© 2026 Sudoku 项目。保留所有权利。',
    product: '产品', about: '关于', features: '功能', installF: '安装',
    support: '支持', documentation: '文档', faqF: '常见问题', troubleshootingF: '故障排除', contact: '联系我们',
    company: '公司', privacyC: '隐私政策', termsC: '服务条款', githubC: 'GitHub',
    outline: '本页目录',
  },
  'zh-TW': {
    home: '首頁', guide: '指南', faq: '常見問題', changelog: '更新日誌', repository: '程式碼倉庫',
    guideGroup: '指南', intro: '簡介', install: '安裝', usage: '使用',
    troubleshooting: '故障排除', faqLabel: '常見問題',
    legalGroup: '法律', privacy: '隱私政策', privacyChoices: '隱私選項', terms: '服務條款',
    footerMessage: '用心打造 ❤️',
    footerCopyright: '© 2026 Sudoku 專案。保留所有權利。',
    product: '產品', about: '關於', features: '功能', installF: '安裝',
    support: '支援', documentation: '文件', faqF: '常見問題', troubleshootingF: '故障排除', contact: '聯絡我們',
    company: '公司', privacyC: '隱私政策', termsC: '服務條款', githubC: 'GitHub',
    outline: '本頁目錄',
  },
  ja: {
    home: 'ホーム', guide: 'ガイド', faq: 'よくある質問', changelog: '変更履歴', repository: 'リポジトリ',
    guideGroup: 'ガイド', intro: 'はじめに', install: 'インストール', usage: '使い方',
    troubleshooting: 'トラブルシューティング', faqLabel: 'よくある質問',
    legalGroup: '法的事項', privacy: 'プライバシーポリシー', privacyChoices: 'プライバシーの選択', terms: '利用規約',
    footerMessage: '❤️ を込めて作りました',
    footerCopyright: 'Copyright © 2026 Sudoku Project. All rights reserved.',
    product: '製品', about: '概要', features: '機能', installF: 'インストール',
    support: 'サポート', documentation: 'ドキュメント', faqF: 'よくある質問', troubleshootingF: 'トラブルシューティング', contact: 'お問い合わせ',
    company: '会社', privacyC: 'プライバシーポリシー', termsC: '利用規約', githubC: 'GitHub',
    outline: 'このページ',
  },
  de: {
    home: 'Start', guide: 'Anleitung', faq: 'FAQ', changelog: 'Änderungen', repository: 'Repository',
    guideGroup: 'Anleitung', intro: 'Einführung', install: 'Installation', usage: 'Nutzung',
    troubleshooting: 'Fehlerbehebung', faqLabel: 'FAQ',
    legalGroup: 'Rechtliches', privacy: 'Datenschutzerklärung', privacyChoices: 'Datenschutz-Optionen', terms: 'Nutzungsbedingungen',
    footerMessage: 'Mit ❤️ gebaut',
    footerCopyright: 'Copyright © 2026 Sudoku Project. Alle Rechte vorbehalten.',
    product: 'Produkt', about: 'Über', features: 'Funktionen', installF: 'Installation',
    support: 'Support', documentation: 'Dokumentation', faqF: 'FAQ', troubleshootingF: 'Fehlerbehebung', contact: 'Kontakt',
    company: 'Unternehmen', privacyC: 'Datenschutzerklärung', termsC: 'Nutzungsbedingungen', githubC: 'GitHub',
    outline: 'Auf dieser Seite',
  },
  fr: {
    home: 'Accueil', guide: 'Guide', faq: 'FAQ', changelog: 'Nouveautés', repository: 'Dépôt',
    guideGroup: 'Guide', intro: 'Introduction', install: 'Installation', usage: 'Utilisation',
    troubleshooting: 'Dépannage', faqLabel: 'FAQ',
    legalGroup: 'Mentions légales', privacy: 'Politique de confidentialité', privacyChoices: 'Options de confidentialité', terms: 'Conditions d’utilisation',
    footerMessage: 'Conçu avec ❤️',
    footerCopyright: 'Copyright © 2026 Sudoku Project. Tous droits réservés.',
    product: 'Produit', about: 'À propos', features: 'Fonctionnalités', installF: 'Installation',
    support: 'Assistance', documentation: 'Documentation', faqF: 'FAQ', troubleshootingF: 'Dépannage', contact: 'Contact',
    company: 'Société', privacyC: 'Politique de confidentialité', termsC: 'Conditions d’utilisation', githubC: 'GitHub',
    outline: 'Sur cette page',
  },
}

const REPO = 'https://github.com/sudoku-pro/sudoku-site'

// ── Per-locale local-search UI strings ────────────────────────────
const SEARCH: Record<string, any> = {
  en: {
    button: { buttonText: 'Search', buttonAriaLabel: 'Search' },
    modal: {
      displayDetails: 'Display detailed list',
      resetButtonTitle: 'Reset search',
      backButtonTitle: 'Close search',
      noResultsText: 'No results for',
      footer: {
        selectText: 'to select',
        selectKeyAriaLabel: 'Enter',
        navigateText: 'to navigate',
        navigateUpKeyAriaLabel: 'Up arrow',
        navigateDownKeyAriaLabel: 'Down arrow',
        closeText: 'to close',
        closeKeyAriaLabel: 'Escape',
      },
    },
  },
  es: {
    button: { buttonText: 'Buscar', buttonAriaLabel: 'Buscar' },
    modal: {
      displayDetails: 'Mostrar lista detallada',
      resetButtonTitle: 'Restablecer búsqueda',
      backButtonTitle: 'Cerrar búsqueda',
      noResultsText: 'Sin resultados para',
      footer: {
        selectText: 'para seleccionar',
        selectKeyAriaLabel: 'Intro',
        navigateText: 'para navegar',
        navigateUpKeyAriaLabel: 'Flecha arriba',
        navigateDownKeyAriaLabel: 'Flecha abajo',
        closeText: 'para cerrar',
        closeKeyAriaLabel: 'Escape',
      },
    },
  },
  'zh-CN': {
    button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
    modal: {
      displayDetails: '显示详细列表',
      resetButtonTitle: '重置搜索',
      backButtonTitle: '关闭搜索',
      noResultsText: '未找到相关结果：',
      footer: {
        selectText: '选择',
        selectKeyAriaLabel: '回车',
        navigateText: '切换',
        navigateUpKeyAriaLabel: '上箭头',
        navigateDownKeyAriaLabel: '下箭头',
        closeText: '关闭',
        closeKeyAriaLabel: 'Esc',
      },
    },
  },
  'zh-TW': {
    button: { buttonText: '搜尋', buttonAriaLabel: '搜尋' },
    modal: {
      displayDetails: '顯示詳細清單',
      resetButtonTitle: '重設搜尋',
      backButtonTitle: '關閉搜尋',
      noResultsText: '找不到符合的結果：',
      footer: {
        selectText: '選擇',
        selectKeyAriaLabel: 'Enter',
        navigateText: '切換',
        navigateUpKeyAriaLabel: '上箭頭',
        navigateDownKeyAriaLabel: '下箭頭',
        closeText: '關閉',
        closeKeyAriaLabel: 'Esc',
      },
    },
  },
  ja: {
    button: { buttonText: '検索', buttonAriaLabel: '検索' },
    modal: {
      displayDetails: '詳細リストを表示',
      resetButtonTitle: '検索をリセット',
      backButtonTitle: '検索を閉じる',
      noResultsText: '該当する結果がありません：',
      footer: {
        selectText: '選択',
        selectKeyAriaLabel: 'Enter',
        navigateText: '移動',
        navigateUpKeyAriaLabel: '上矢印',
        navigateDownKeyAriaLabel: '下矢印',
        closeText: '閉じる',
        closeKeyAriaLabel: 'Esc',
      },
    },
  },
  de: {
    button: { buttonText: 'Suchen', buttonAriaLabel: 'Suchen' },
    modal: {
      displayDetails: 'Detaillierte Liste anzeigen',
      resetButtonTitle: 'Suche zurücksetzen',
      backButtonTitle: 'Suche schließen',
      noResultsText: 'Keine Ergebnisse für',
      footer: {
        selectText: 'auswählen',
        selectKeyAriaLabel: 'Eingabe',
        navigateText: 'navigieren',
        navigateUpKeyAriaLabel: 'Pfeil nach oben',
        navigateDownKeyAriaLabel: 'Pfeil nach unten',
        closeText: 'schließen',
        closeKeyAriaLabel: 'Escape',
      },
    },
  },
  fr: {
    button: { buttonText: 'Rechercher', buttonAriaLabel: 'Rechercher' },
    modal: {
      displayDetails: 'Afficher la liste détaillée',
      resetButtonTitle: 'Réinitialiser la recherche',
      backButtonTitle: 'Fermer la recherche',
      noResultsText: 'Aucun résultat pour',
      footer: {
        selectText: 'pour sélectionner',
        selectKeyAriaLabel: 'Entrée',
        navigateText: 'pour naviguer',
        navigateUpKeyAriaLabel: 'Flèche haut',
        navigateDownKeyAriaLabel: 'Flèche bas',
        closeText: 'pour fermer',
        closeKeyAriaLabel: 'Échap',
      },
    },
  },
}

function searchFor(lang: string) {
  return { provider: 'local' as const, options: { translations: SEARCH[lang] || SEARCH.en } }
}

// ── Build a themeConfig for a given locale ────────────────────────
// All *internal* links are prefixed with the locale segment so the
// default VitePress nav / sidebar / footer resolve to the localized
// page in every language. External (http/https/mailto) links are left
// untouched.
function tc(S: typeof STR.en, lang: string) {
  const base = !lang || lang === 'en' ? '' : `/${lang}`
  const L = (p: string) =>
    /^https?:\/\//.test(p) || p.startsWith('mailto:') || p.startsWith(base)
      ? p
      : `${base}${p}`
  return {
    search: searchFor(lang || 'en'),
    nav: [
      { text: S.home, link: L('/') },
      { text: S.guide, link: L('/guide/introduction') },
      { text: S.faq, link: L('/guide/faq') },
      { text: S.changelog, link: `${REPO}/blob/main/CHANGELOG.md` },
      { text: S.repository, link: REPO },
    ],
    sidebar: [
      {
        text: S.guideGroup,
        items: [
          { text: S.intro, link: L('/guide/introduction') },
          { text: S.install, link: L('/guide/installation') },
          { text: S.usage, link: L('/guide/usage') },
          { text: S.troubleshooting, link: L('/guide/troubleshooting') },
          { text: S.faqLabel, link: L('/guide/faq') },
        ],
      },
      {
        text: S.legalGroup,
        items: [
          { text: S.privacy, link: L('/guide/privacy') },
          { text: S.privacyChoices, link: L('/guide/privacy-choices') },
          { text: S.terms, link: L('/guide/terms') },
        ],
      },
    ],
    outline: { label: S.outline },
    footer: {
      message: S.footerMessage,
      copyright: S.footerCopyright,
      items: [
        {
          text: S.product,
          items: [
            { text: S.about, link: L('/guide/introduction') },
            { text: S.features, link: L('/#features') },
            { text: S.installF, link: L('/guide/installation') },
          ],
        },
        {
          text: S.support,
          items: [
            { text: S.documentation, link: L('/guide/introduction') },
            { text: S.faqF, link: L('/guide/faq') },
            { text: S.troubleshootingF, link: L('/guide/troubleshooting') },
            { text: S.contact, link: 'mailto:sudoku@w3cub.com' },
          ],
        },
        {
          text: S.company,
          items: [
            { text: S.about, link: L('/guide/introduction') },
            { text: S.privacyC, link: L('/guide/privacy') },
            { text: S.termsC, link: L('/guide/terms') },
            { text: S.githubC, link: REPO },
          ],
        },
      ],
    },
  }
}

// ── Per-locale markdown renderer strings (containers + code copy) ─
const MD = {
  es: {
    container: {
      tipLabel: 'Consejo', warningLabel: 'Advertencia', dangerLabel: 'Peligro', infoLabel: 'Información', detailsLabel: 'Detalles',
    },
    codeCopyButton: { tooltipText: 'Copiar código', copiedText: 'Copiado' },
    darkModeSwitchLabel: 'Apariencia',
    lightModeSwitchTitle: 'Cambiar al modo claro',
    darkModeSwitchTitle: 'Cambiar al modo oscuro',
    sidebarMenuLabel: 'Menú',
    returnToTopLabel: 'Volver arriba',
    langMenuLabel: 'Cambiar idioma',
  },
  'zh-CN': {
    container: {
      tipLabel: '提示', warningLabel: '警告', dangerLabel: '危险', infoLabel: '信息', detailsLabel: '详情',
    },
    codeCopyButton: { tooltipText: '复制代码', copiedText: '已复制' },
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    langMenuLabel: '切换语言',
  },
  'zh-TW': {
    container: {
      tipLabel: '提示', warningLabel: '警告', dangerLabel: '危險', infoLabel: '資訊', detailsLabel: '詳情',
    },
    codeCopyButton: { tooltipText: '複製程式碼', copiedText: '已複製' },
    darkModeSwitchLabel: '主題',
    lightModeSwitchTitle: '切換到淺色模式',
    darkModeSwitchTitle: '切換到深色模式',
    sidebarMenuLabel: '選單',
    returnToTopLabel: '回到頂部',
    langMenuLabel: '切換語言',
  },
  ja: {
    container: {
      tipLabel: 'ヒント', warningLabel: '警告', dangerLabel: '危険', infoLabel: '情報', detailsLabel: '詳細',
    },
    codeCopyButton: { tooltipText: 'コードをコピー', copiedText: 'コピーしました' },
    darkModeSwitchLabel: '外観',
    lightModeSwitchTitle: 'ライトモードに切り替え',
    darkModeSwitchTitle: 'ダークモードに切り替え',
    sidebarMenuLabel: 'メニュー',
    returnToTopLabel: 'トップへ戻る',
    langMenuLabel: '言語を変更',
  },
  de: {
    container: {
      tipLabel: 'Tipp', warningLabel: 'Warnung', dangerLabel: 'Gefahr', infoLabel: 'Info', detailsLabel: 'Details',
    },
    codeCopyButton: { tooltipText: 'Code kopieren', copiedText: 'Kopiert' },
    darkModeSwitchLabel: 'Darstellung',
    lightModeSwitchTitle: 'Zum hellen Modus wechseln',
    darkModeSwitchTitle: 'Zum dunklen Modus wechseln',
    sidebarMenuLabel: 'Menü',
    returnToTopLabel: 'Nach oben',
    langMenuLabel: 'Sprache ändern',
  },
  fr: {
    container: {
      tipLabel: 'Conseil', warningLabel: 'Avertissement', dangerLabel: 'Danger', infoLabel: 'Info', detailsLabel: 'Détails',
    },
    codeCopyButton: { tooltipText: 'Copier le code', copiedText: 'Copié' },
    darkModeSwitchLabel: 'Apparence',
    lightModeSwitchTitle: 'Passer au mode clair',
    darkModeSwitchTitle: 'Passer au mode sombre',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Retour en haut',
    langMenuLabel: 'Changer de langue',
  },
}

// ── Per-locale SEO head (title / description / OG) ────────────────
// `title` here is the *descriptive* half only — `titleTemplate`
// ('Sudoku — :title') supplies the product prefix.
const SEO = {
  en: {
    title: 'The Classic Number Puzzle',
    ogLocale: 'en_US',
    description: 'Sudoku — The classic number puzzle, perfectly made. 5 difficulty levels, daily challenges, hints & notes, 8 themes, offline play & zero ads. iPhone, iPad & Mac.',
  },
  es: {
    title: 'El clásico rompecabezas de números',
    ogLocale: 'es_ES',
    description: 'Sudoku — El clásico rompecabezas de números, perfectamente realizado. 5 niveles de dificultad, retos diarios, pistas y notas, 8 temas, juego sin conexión y sin anuncios. iPhone, iPad y Mac.',
  },
  'zh-CN': {
    title: '经典数字逻辑解谜',
    ogLocale: 'zh_CN',
    description: '数独 — 经典数字解谜，精心打磨。5 种难度、每日挑战、提示与笔记、8 款主题、完全离线、零广告。支持 iPhone、iPad 与 Mac。',
  },
  'zh-TW': {
    title: '經典數字邏輯解謎',
    ogLocale: 'zh_TW',
    description: '數獨 — 經典數字解謎，精心打造。5 種難度、每日挑戰、提示與筆記、8 款主題、完全離線、零廣告。支援 iPhone、iPad 與 Mac。',
  },
  ja: {
    title: '定番の数字パズル',
    ogLocale: 'ja_JP',
    description: '数独 — 定番の数字パズルを、完璧な形に。5 段階の難易度、デイリーチャレンジ、ヒントとメモ、8 種類のテーマ、オフライン対応、広告なし。iPhone・iPad・Mac 対応。',
  },
  de: {
    title: 'Das klassische Zahlenrätsel',
    ogLocale: 'de_DE',
    description: 'Sudoku — Das klassische Zahlenrätsel, perfekt umgesetzt. 5 Schwierigkeitsgrade, tägliche Herausforderungen, Hinweise & Notizen, 8 Designs, offline spielbar & werbefrei. iPhone, iPad & Mac.',
  },
  fr: {
    title: 'Le jeu de chiffres classique',
    ogLocale: 'fr_FR',
    description: 'Sudoku — Le jeu de chiffres classique, parfaitement réalisé. 5 niveaux de difficulté, défis quotidiens, indices et notes, 8 thèmes, jeu hors ligne et sans publicité. iPhone, iPad et Mac.',
  },
}

function seoHead(code: keyof typeof SEO, path: string) {
  const s = SEO[code]
  const url = `https://sudoku.w3cub.com${path}`
  return [
    ['meta', { property: 'og:locale', content: s.ogLocale }],
    ['meta', { property: 'og:url', content: url }],
    ['meta', { property: 'og:title', content: s.title }],
    ['meta', { property: 'og:description', content: s.description }],
    ['meta', { name: 'twitter:url', content: url }],
    ['meta', { name: 'twitter:title', content: s.title }],
    ['meta', { name: 'twitter:description', content: s.description }],
  ]
}

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
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sudoku-pro' }
    ],
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: SEO.en.title,
      description: SEO.en.description,
      head: seoHead('en', '/'),
      themeConfig: tc(STR.en, 'en'),
    },
    es: {
      label: 'Español',
      lang: 'es',
      link: '/es/',
      title: SEO.es.title,
      description: SEO.es.description,
      head: seoHead('es', '/es/'),
      themeConfig: tc(STR.es, 'es'),
      markdown: MD.es,
    },
    'zh-CN': {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh-CN/',
      title: SEO['zh-CN'].title,
      description: SEO['zh-CN'].description,
      head: seoHead('zh-CN', '/zh-CN/'),
      themeConfig: tc(STR['zh-CN'], 'zh-CN'),
      markdown: MD['zh-CN'],
    },
    'zh-TW': {
      label: '繁體中文',
      lang: 'zh-TW',
      link: '/zh-TW/',
      title: SEO['zh-TW'].title,
      description: SEO['zh-TW'].description,
      head: seoHead('zh-TW', '/zh-TW/'),
      themeConfig: tc(STR['zh-TW'], 'zh-TW'),
      markdown: MD['zh-TW'],
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      link: '/ja/',
      title: SEO.ja.title,
      description: SEO.ja.description,
      head: seoHead('ja', '/ja/'),
      themeConfig: tc(STR.ja, 'ja'),
      markdown: MD.ja,
    },
    de: {
      label: 'Deutsch',
      lang: 'de',
      link: '/de/',
      title: SEO.de.title,
      description: SEO.de.description,
      head: seoHead('de', '/de/'),
      themeConfig: tc(STR.de, 'de'),
      markdown: MD.de,
    },
    fr: {
      label: 'Français',
      lang: 'fr',
      link: '/fr/',
      title: SEO.fr.title,
      description: SEO.fr.description,
      head: seoHead('fr', '/fr/'),
      themeConfig: tc(STR.fr, 'fr'),
      markdown: MD.fr,
    },
  },
})
