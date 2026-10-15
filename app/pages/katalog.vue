<template>
  <div class="pt-16">
    <SectionsTemplateSection heading-tag="h1" />
  </div>
</template>

<script setup lang="ts">
import { siteConfig } from '~/data/site'

useHead({
  title: 'Katalog Template',
  link: [{ rel: 'canonical', href: `${siteConfig.url}/katalog` }],
})
useSeoMeta({
  title: `Katalog Template | ${siteConfig.brand}`,
  description: 'Temukan desain undangan digital favoritmu dan lihat demo setiap template.',
  ogTitle: `Katalog Template | ${siteConfig.brand}`,
  ogDescription: 'Temukan desain undangan digital favoritmu dan lihat demo setiap template.',
  ogUrl: `${siteConfig.url}/katalog`,
})
</script>
