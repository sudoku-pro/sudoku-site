<script setup lang="ts">
import { computed } from 'vue'
import { withBase, useData } from 'vitepress'

// Localized accessibility strings for the App Store badge. Falls back to
// English for locales without an entry.
const STRINGS: Record<string, { alt: string; label: string }> = {
  en: { alt: 'Download on the App Store', label: 'Sudoku installation guide' },
  es: { alt: 'Descargar en el App Store', label: 'Guía de instalación de Sudoku' },
  'zh-CN': { alt: '在 App Store 下载', label: '数独安装指南' },
  'zh-TW': { alt: '在 App Store 下載', label: '數獨安裝指南' },
  ja: { alt: 'App Store でダウンロード', label: '数独のインストールガイド' },
  de: { alt: 'Im App Store laden', label: 'Sudoku-Installationsanleitung' },
  fr: { alt: 'Télécharger sur l’App Store', label: 'Guide d’installation de Sudoku' },
}

const { lang } = useData()
const t = computed(() => STRINGS[lang.value] || STRINGS.en)
</script>

<template>
  <div class="home-badge-row">
    <a
      href="https://apps.apple.com/app/id6793606018" target="_blank" rel="noopener noreferrer"
      class="store-badge-link"
      :aria-label="t.label"
    >
      <img
        :src="withBase('/badges/appstore.png')"
        :alt="t.alt"
        class="store-badge"
        width="156"
        height="60"
      />
    </a>
  </div>
</template>
