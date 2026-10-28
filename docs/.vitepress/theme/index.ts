import DefaultTheme from 'vitepress/theme'
import { h, defineComponent } from 'vue'
import { useRoute, useData } from 'vitepress'
import AdvancedHome from './AdvancedHome.vue'
import HomeActions from './HomeActions.vue'
import './custom.css'

// Locale segments that serve a localized homepage.
const LOCALES = 'es|zh-CN|zh-TW|ja|de|fr'

export default {
  extends: DefaultTheme,
  // NOTE: Layout MUST be a stateful component (defineComponent), NOT a bare
  // function. A bare function is a *functional* component rendered inline inside
  // VitePressApp's render effect — and VitePressApp renders `() => h(Theme.Layout)`
  // exactly once (it has no reactive deps of its own), so a functional Layout
  // never re-runs on client-side navigation. That made the homepage swap the URL
  // but never re-render with the new locale's frontmatter.
  //
  // A stateful component has its OWN reactive render effect. Reading route.path
  // and frontmatter.value inside the returned render function makes it re-render
  // on every navigation (exactly like VitePress' default Layout.vue), so the
  // correct localized page data flows into AdvancedHome.
  Layout: defineComponent({
    name: 'SudokuLayout',
    setup() {
      const route = useRoute()
      const { frontmatter } = useData()

      // Home is served at the root and at every locale root (/es/, /zh-CN/, …).
      const isHomePage = () =>
        route.path === '/' ||
        new RegExp(`^/(${LOCALES})/?$`).test(route.path)

      return () => {
        if (isHomePage()) {
          // `:key` forces a clean remount per URL, exactly like <Content>
          // swapping route.component — guarantees no stale locale state.
          return h(AdvancedHome, { data: frontmatter.value, key: route.path })
        }

        return h(
          DefaultTheme.Layout,
          { sidebar: false },
          { 'home-hero-info-after': () => h(HomeActions) }
        )
      }
    },
  }),
}
