import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import { useRoute, useData } from 'vitepress'
import AdvancedHome from './AdvancedHome.vue'
import HomeActions from './HomeActions.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    const route = useRoute()
    const isHomePage = route.path === '/'

    if (isHomePage) {
      // For homepage, completely replace with AdvancedHome component
      return h(AdvancedHome, { data: useData().frontmatter.value })
    }

    // For other pages, use default layout but hide sidebar
    return h(DefaultTheme.Layout, {
      sidebar: false
    }, {
      'home-hero-info-after': () => h(HomeActions),
    })
  },
}
