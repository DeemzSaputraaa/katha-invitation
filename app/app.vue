<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { siteConfig } from '~/data/site'

useHead({
  titleTemplate: (title) =>
    title ? `${title} | ${siteConfig.brand}` : `${siteConfig.brand} — ${siteConfig.tagline}`,
})

useSeoMeta({
  description: siteConfig.description,
  ogSiteName: siteConfig.brand,
  ogType: 'website',
})
</script>
