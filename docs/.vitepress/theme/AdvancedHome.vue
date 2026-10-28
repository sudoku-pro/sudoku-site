<template>
  <div class="advanced-home">
    <!-- Navigation -->
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-brand">
          <VPLink :href="homeLink" class="brand-link">
            <img src="/logo.png" alt="Sudoku Logo" class="brand-logo" />
            <span class="brand-text">Sudoku</span>
          </VPLink>
        </div>
        <div class="nav-right">
          <div class="nav-links">
            <VPNavBarMenu />
          </div>
          <VPNavBarTranslations class="nav-lang" />
          <VPSwitchAppearance class="nav-appearance" />
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">{{ data.hero.name }}</h1>
            <p class="hero-subtitle">{{ data.hero.text }}</p>
            <p class="hero-description">{{ data.hero.tagline }}</p>
            <div class="hero-actions">
              <!-- 使用 HomeActions 组件 -->
              <HomeActions />
            </div>
          </div>
          <div class="hero-visual">
            <div class="floating-elements">
              <div
                v-for="(card, i) in home.floatingCards"
                :key="i"
                class="floating-card"
                :class="`card-${i + 1}`"
              >
                <div class="card-icon">{{ floatingIcons[i % floatingIcons.length] }}</div>
                <div class="card-text">{{ card }}</div>
              </div>
            </div>
            <div class="hero-image">
              <img :src="withBase(data.hero.image.src)" :alt="data.hero.image.alt" />
            </div>
          </div>
        </div>
      </div>
      <div class="hero-bg-pattern"></div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="features-container">
        <div class="section-header">
          <h2 class="section-title">{{ home.sections.featuresTitle }}</h2>
          <p class="section-subtitle">{{ home.sections.featuresSubtitle }}</p>
        </div>
        <div class="features-grid">
          <div v-for="(feature, index) in data.features" :key="feature.title"
               class="feature-card"
               :style="{ animationDelay: `${(index as number) * 0.1}s` }">
            <div class="feature-icon" :style="{ backgroundColor: featureColors[(index as number) % featureColors.length] }">
              <img :src="withBase(feature.icon.light)" :alt="feature.icon.alt"
                   :width="feature.icon.width" :height="feature.icon.height" />
            </div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.details }}</p>
            <a v-if="feature.link" :href="withBase(lp(feature.link))" class="feature-link">{{ feature.linkText }}</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Screenshots Section -->
    <section class="screenshots-section">
      <div class="screenshots-container">
        <div class="section-header">
          <h2 class="section-title">{{ home.sections.screenshotsTitle }}</h2>
          <p class="section-subtitle">{{ home.sections.screenshotsSubtitle }}</p>
        </div>
        <div class="screenshots-grid">
          <div class="screenshot-card">
            <img :src="withBase('/screenshot-iphone-main.png')" :alt="`Sudoku · iPhone`" />
            <p class="screenshot-caption">iPhone</p>
          </div>
          <div class="screenshot-card">
            <img :src="withBase('/screenshot-ipad-main.png')" :alt="`Sudoku · iPad`" />
            <p class="screenshot-caption">iPad</p>
          </div>
          <div class="screenshot-card wide">
            <img :src="withBase('/screenshot-mac-difficulty.png')" :alt="`Sudoku · Mac`" />
            <p class="screenshot-caption">Mac</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section">
      <div class="testimonials-container">
        <div class="section-header">
          <h2 class="section-title">{{ home.sections.testimonialsTitle }}</h2>
          <p class="section-subtitle">{{ home.sections.testimonialsSubtitle }}</p>
        </div>
        <div class="testimonials-grid">
          <div v-for="t in home.testimonials" :key="t.name" class="testimonial-card">
            <div class="testimonial-quote">"</div>
            <p class="testimonial-text">{{ t.text }}</p>
            <div class="testimonial-author">
              <div class="author-avatar">{{ t.name.charAt(0) }}</div>
              <div class="author-info">
                <div class="author-name">{{ t.name }}</div>
                <div class="author-role">{{ t.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="faq-container">
        <div class="section-header">
          <h2 class="section-title">{{ home.sections.faqTitle }}</h2>
          <p class="section-subtitle">{{ home.sections.faqSubtitle }}</p>
        </div>
        <div class="faq-grid">
          <div v-for="faq in home.faqs" :key="faq.question" class="faq-item">
            <details class="faq-details">
              <summary class="faq-question">{{ faq.question }}</summary>
              <div class="faq-answer">{{ faq.answer }}</div>
            </details>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-container">
        <div class="cta-content">
          <h2 class="cta-title">{{ home.cta.title }}</h2>
          <p class="cta-description">{{ home.cta.description }}</p>
          <div class="cta-actions">
            <a :href="withBase(lp(home.cta.primaryLink))" class="btn btn-primary">{{ home.cta.primary }}</a>
            <a :href="withBase(lp(home.cta.secondaryLink))" class="btn btn-secondary">{{ home.cta.secondary }}</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-content">
          <div class="footer-brand">
            <div class="footer-logo">Sudoku</div>
            <p class="footer-tagline">{{ home.footer.tagline }}</p>
          </div>
          <div class="footer-links">
            <div v-for="col in home.footer.columns" :key="col.heading" class="footer-column">
              <h4 class="footer-heading">{{ col.heading }}</h4>
              <a
                v-for="link in col.links"
                :key="link.text"
                :href="isExternal(link.link) ? link.link : withBase(lp(link.link))"
                class="footer-link"
                :target="isExternal(link.link) ? '_blank' : undefined"
                :rel="isExternal(link.link) ? 'noopener noreferrer' : undefined"
              >{{ link.text }}</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p class="footer-copyright">{{ home.footer.copyright }}</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { withBase, useData } from 'vitepress'
import HomeActions from './HomeActions.vue'
import { VPLink } from 'vitepress/theme'
import VPNavBarMenu from 'vitepress/dist/client/theme-default/components/VPNavBarMenu.vue'
import VPSwitchAppearance from 'vitepress/dist/client/theme-default/components/VPSwitchAppearance.vue'
import VPNavBarTranslations from 'vitepress/dist/client/theme-default/components/VPNavBarTranslations.vue'

interface Props {
  data: any
}
const props = defineProps<Props>()

const { lang } = useData()

// ── English defaults (used by the root / English homepage) ─────────
// Everything below can be overridden per-locale from the homepage
// frontmatter (`home:` block in docs/<lang>/index.md).
const DEFAULT_FLOATING = ['Classic Logic', 'Hints & Notes', 'Daily Challenge']

// Emoji shown next to each floating card — not translated.
const floatingIcons = ['🔢', '💡', '🏆']

const DEFAULT_SECTIONS = {
  featuresTitle: 'Key Features',
  featuresSubtitle: 'Everything you need to play, master, and enjoy Sudoku',
  screenshotsTitle: 'Screenshots',
  screenshotsSubtitle: 'See Sudoku in action on iPhone, iPad, and Mac',
  testimonialsTitle: 'Loved by Players',
  testimonialsSubtitle: 'Real feedback from our community',
  faqTitle: 'Frequently Asked Questions',
  faqSubtitle: 'Quick answers for iPhone, iPad & Mac players',
}

const DEFAULT_TESTIMONIALS = [
  {
    text: "The best Sudoku app I've used on mobile — clean interface, smooth controls, and I love the pencil notes feature for tricky puzzles.",
    name: 'Emma Wilson',
    role: 'Teacher',
  },
  {
    text: 'Five difficulty levels keep me challenged, and the daily challenges are a perfect morning ritual. The themes are gorgeous too!',
    name: 'James Park',
    role: 'Engineer',
  },
  {
    text: 'Finally an ad-free Sudoku that just works. iCloud sync means my progress is always there across my iPhone, iPad, and Mac.',
    name: 'Lisa Chen',
    role: 'Designer',
  },
]

const DEFAULT_FAQS = [
  {
    question: 'Is Sudoku free?',
    answer: 'Check the App Store listing for current pricing. The app is a one-time purchase with no ads or in-app purchases.',
  },
  {
    question: 'Does Sudoku work offline?',
    answer: 'Yes. The game is fully playable offline — no internet needed for gameplay. CloudKit sync and Game Center require internet when active, but core features work 100% offline.',
  },
  {
    question: 'Is my game data synced?',
    answer: 'Yes! Your settings, statistics, and game saves sync via iCloud (CloudKit) across all your Apple devices. Start on iPhone, continue on Mac.',
  },
  {
    question: 'Which devices are supported?',
    answer: 'Sudoku is a universal app for iPhone, iPad, and Mac with native controls and Retina graphics. Requires iOS/iPadOS 16.0+ and macOS 15.0 (Sequoia)+. One purchase works everywhere.',
  },
  {
    question: 'Are there ads or in-app purchases?',
    answer: 'No. Sudoku is completely ad-free with no pop-ups or in-app purchases. Just pure, focused puzzle gameplay.',
  },
]

const DEFAULT_CTA = {
  title: 'Ready to Play Sudoku?',
  description: 'Start solving puzzles, beat your best time, track your statistics, and enjoy the classic number puzzle — anytime, anywhere, completely offline.',
  primary: 'Get Started',
  primaryLink: '/guide/installation',
  secondary: 'How to Play',
  secondaryLink: '/guide/usage',
}

const DEFAULT_FOOTER = {
  tagline: 'Fill the grid. Sharpen your mind.',
  columns: [
    {
      heading: 'Product',
      links: [
        { text: 'App Store', link: '/guide/installation' },
        { text: 'Features', link: '/guide/usage' },
        { text: 'Installation', link: '/guide/installation' },
      ],
    },
    {
      heading: 'Support',
      links: [
        { text: 'Guide', link: '/guide/introduction' },
        { text: 'FAQ', link: '/guide/faq' },
        { text: 'Troubleshooting', link: '/guide/troubleshooting' },
      ],
    },
    {
      heading: 'Community',
      links: [
        { text: 'GitHub', link: 'https://github.com/sudoku-pro/sudoku-site' },
        { text: 'Changelog', link: 'https://github.com/sudoku-pro/sudoku-site/blob/main/CHANGELOG.md' },
      ],
    },
  ],
  copyright: '© 2026 Sudoku Project. Built with ❤️ for puzzle lovers.',
}

// All home page copy comes from the markdown frontmatter (`data.home`),
// falling back to the English defaults above so the English site keeps
// working unchanged.
const home = computed(() => {
  const d = props.data?.home || {}
  return {
    floatingCards: d.floatingCards || DEFAULT_FLOATING,
    sections: { ...DEFAULT_SECTIONS, ...(d.sections || {}) },
    testimonials: d.testimonials || DEFAULT_TESTIMONIALS,
    faqs: d.faqs || DEFAULT_FAQS,
    cta: { ...DEFAULT_CTA, ...(d.cta || {}) },
    footer: d.footer || DEFAULT_FOOTER,
  }
})

// Feature colors for icons
const featureColors = [
  '#0084ff', // sudoku blue
  '#10b981', // green
  '#f59e0b', // yellow
  '#ef4444', // red
  '#8b5cf6', // purple
  '#06b6d4'  // cyan
]

function isExternal(p: string): boolean {
  return /^https?:\/\//.test(p) || p.startsWith('mailto:')
}

// Prefix a root-relative internal link with the current locale segment.
function lp(p: string): string {
  if (!p) return p
  if (isExternal(p) || p.startsWith('#')) return p
  if (!lang.value || lang.value === 'en') return p
  if (p.startsWith('/' + lang.value + '/')) return p
  return '/' + lang.value + p
}

// Locale-aware home link for the brand logo.
const homeLink = computed(() =>
  !lang.value || lang.value === 'en' ? '/' : `/${lang.value}/`
)
</script>

<style scoped>
.advanced-home {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: var(--vp-c-text-1);
}

/* Navigation */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--ah-navbar-bg);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--ah-navbar-border);
  z-index: 1000;
  transition: all 0.3s ease;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.nav-brand .brand-link {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 24px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.brand-logo {
  height: 32px;
  width: auto;
}

.brand-text {
  font-size: 24px;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.nav-links {
  display: none;
  align-items: center;
  gap: 30px;
}

@media (min-width: 768px) {
  .nav-links {
    display: flex;
  }
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-appearance {
  display: flex;
  align-items: center;
}

.nav-lang {
  display: flex;
  align-items: center;
}

.dropdown-toggle {
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background: var(--ah-card-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  box-shadow: var(--ah-card-shadow);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.2s;
}

.nav-dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-item {
  display: block;
  padding: 12px 20px;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: background-color 0.2s;
}

.dropdown-item:hover {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

/* Hero Section */
.hero-section {
  padding: 120px 0 100px;
  background: var(--ah-hero-bg);
  position: relative;
  overflow: hidden;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.hero-text {
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  margin: 0 0 20px;
  line-height: 1.1;
  color: var(--vp-c-text-1);
  background: linear-gradient(135deg, var(--ah-hero-title-from) 0%, var(--ah-hero-title-to) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 2.5rem;
  font-weight: 600;
  margin: 0 0 20px;
  color: var(--vp-c-text-1);
  opacity: 0.9;
}

.hero-description {
  font-size: 1.25rem;
  margin: 0 0 40px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  max-width: 500px;
}

.hero-actions {
  margin-top: 40px;
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 16px 32px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: #000000;
  color: #ffffff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  border: none;
}

.btn-primary:hover {
  background: #333333;
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: #ffffff;
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

/* HomeActions 组件样式 */
.home-badge-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 36px;
  justify-content: left;
}

.store-badge-link {
  display: inline-flex;
  border-radius: 10px;
  transition: opacity 0.18s ease, transform 0.18s ease;
  outline-offset: 3px;
}

.store-badge-link:hover {
  opacity: 0.82;
  transform: translateY(-1px);
}

.hero-visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.floating-elements {
  position: absolute;
  width: 100%;
  height: 100%;
}

.floating-card {
  position: absolute;
  background: var(--ah-card-bg);
  padding: 16px 20px;
  border-radius: 12px;
  box-shadow: var(--ah-card-shadow);
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  font-weight: 500;
  animation: float 6s ease-in-out infinite;
}

.card-1 {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.card-2 {
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.card-3 {
  bottom: 20%;
  left: 20%;
  animation-delay: 4s;
}

.card-icon {
  font-size: 18px;
}

.hero-image {
  position: relative;
  z-index: 1;
}

.hero-image img {
  width: 100%;
  max-width: 700px;
  height: auto;
}

.hero-bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    radial-gradient(circle at 20% 80%, rgba(0, 132, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(124, 58, 237, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

/* Features Section */
.features-section {
  padding: 120px 0;
  background: var(--vp-c-bg);
}

.features-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 16px;
  color: var(--vp-c-text-1);
}

.section-subtitle {
  font-size: 1.25rem;
  color: var(--vp-c-text-2);
  margin: 0;
  max-width: 600px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
}

.feature-card {
  background: var(--ah-card-bg);
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: var(--ah-card-shadow);
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid var(--vp-c-divider);
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
  transform: translateY(30px);
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--ah-card-shadow-hover);
  border-color: var(--vp-c-brand-1);
}

.feature-icon {
  width: 72px;
  height: 72px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  color: white;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.feature-icon img {
  filter: brightness(0) invert(1);
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 16px;
  color: var(--vp-c-text-1);
  line-height: 1.3;
}

.feature-description {
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0 0 24px;
  font-size: 1rem;
}

.feature-link {
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: color 0.2s;
}

.feature-link:hover {
  color: var(--vp-c-brand-1);
}

/* Screenshots Section */
.screenshots-section {
  padding: 120px 0;
  background: var(--vp-c-bg-soft);
}

.screenshots-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.screenshots-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1.6fr;
  gap: 32px;
  align-items: start;
}

.screenshot-card {
  background: var(--ah-card-bg);
  border-radius: 24px;
  padding: 16px 16px 20px;
  box-shadow: var(--ah-card-shadow);
  border: 1px solid var(--vp-c-divider);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.screenshot-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--ah-card-shadow-hover);
}

.screenshot-card img {
  width: 100%;
  height: auto;
  border-radius: 16px;
  display: block;
}

.screenshot-caption {
  text-align: center;
  margin: 16px 0 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
}

/* Testimonials Section */
.testimonials-section {
  padding: 120px 0;
  background: var(--vp-c-bg-soft);
}

.testimonials-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
}

.testimonial-card {
  background: var(--ah-card-bg);
  padding: 40px;
  border-radius: 20px;
  box-shadow: var(--ah-card-shadow);
  position: relative;
  border: 1px solid var(--vp-c-divider);
}

.testimonial-quote {
  position: absolute;
  top: 30px;
  left: 30px;
  font-size: 4rem;
  color: var(--vp-c-divider);
  font-family: serif;
  line-height: 1;
}

.testimonial-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--vp-c-text-1);
  margin: 0 0 30px;
  padding-left: 40px;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 16px;
}

.author-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0084ff 0%, #7c3aed 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 18px;
}

.author-info .author-name {
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 4px;
}

.author-info .author-role {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

/* FAQ Section */
.faq-section {
  padding: 120px 0;
  background: var(--vp-c-bg);
}

.faq-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.faq-grid {
  display: grid;
  gap: 16px;
}

.faq-item {
  background: var(--ah-card-bg);
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  overflow: hidden;
  transition: all 0.2s ease;
}

.faq-item:hover {
  box-shadow: var(--ah-card-shadow);
}

.faq-details {
  width: 100%;
}

.faq-question {
  padding: 24px 30px;
  background: var(--vp-c-bg-soft);
  cursor: pointer;
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--vp-c-text-1);
  border: none;
  outline: none;
  transition: background-color 0.2s;
  text-align: left;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.faq-question:hover {
  background: var(--ah-faq-hover-bg);
}

.faq-question::after {
  content: '+';
  font-size: 18px;
  font-weight: bold;
  transition: transform 0.2s;
}

.faq-details[open] .faq-question::after {
  transform: rotate(45deg);
}

.faq-answer {
  padding: 0 30px 24px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

/* CTA Section */
.cta-section {
  padding: 120px 0;
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
  color: #ffffff;
}

.cta-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
}

.cta-title {
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 20px;
  line-height: 1.2;
}

.cta-description {
  font-size: 1.25rem;
  margin: 0 0 40px;
  opacity: 0.9;
  line-height: 1.6;
}

.cta-actions {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

/* Footer */
.footer {
  background: #1a1a1a;
  color: #ffffff;
  padding: 80px 0 40px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 80px;
  margin-bottom: 40px;
}

.footer-brand .footer-logo {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #ffffff;
}

.footer-tagline {
  color: #cccccc;
  margin: 0;
  font-size: 1rem;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
}

.footer-heading {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 20px;
  color: #ffffff;
}

.footer-link {
  display: block;
  color: #cccccc;
  text-decoration: none;
  margin-bottom: 12px;
  transition: color 0.2s;
}

.footer-link:hover {
  color: #ffffff;
}

.footer-bottom {
  border-top: 1px solid #333333;
  padding-top: 40px;
  text-align: center;
}

.footer-copyright {
  margin: 0;
  color: #999999;
  font-size: 0.9rem;
}

/* Animations */
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-10px) rotate(2deg); }
  66% { transform: translateY(5px) rotate(-2deg); }
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 60px;
    text-align: center;
  }

  .hero-title {
    font-size: 3rem;
  }

  .hero-subtitle {
    font-size: 2rem;
  }

  .features-grid,
  .testimonials-grid,
  .screenshots-grid {
    grid-template-columns: 1fr;
  }

  .screenshot-card.wide {
    grid-column: auto;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .hero-section {
    padding: 100px 0 60px;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.75rem;
  }

  .section-title {
    font-size: 2.5rem;
  }

  .features-section,
  .testimonials-section,
  .faq-section,
  .cta-section,
  .screenshots-section {
    padding: 80px 0;
  }

  .cta-title {
    font-size: 2.5rem;
  }

  .hero-actions,
  .cta-actions {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
}
</style>
