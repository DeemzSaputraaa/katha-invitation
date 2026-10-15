<template>
  <div />
</template>

<script setup lang="ts">
import { getTemplateBySlug } from '~/data/templates'

const route = useRoute()
const slug = String(route.params.slug ?? '')

if (!getTemplateBySlug(slug)) {
  throw createError({ statusCode: 404, statusMessage: 'Template tidak ditemukan' })
}

await navigateTo({ path: `/${slug}`, query: route.query, hash: route.hash }, { redirectCode: 301 })
</script>
