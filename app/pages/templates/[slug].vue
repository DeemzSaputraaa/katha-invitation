<template>
  <div class="min-h-screen bg-white">
    <!-- Renderer: Template (design) + Data (konten) -->
    <component :is="TemplateComponent" :data="invitation" :template-name="tpl.name" />
  </div>
</template>

<script setup lang="ts">
import { getTemplateBySlug, formatPrice } from '~/data/templates'
import { getInvitationData } from '~/data/invitations'
import { resolveTemplateComponent } from '~/components/invitation/templates/registry'
import { siteConfig } from '~/data/site'

const route = useRoute()
const slug = String(route.params.slug ?? '')

const tpl = getTemplateBySlug(slug)
if (!tpl) {
  throw createError({ statusCode: 404, statusMessage: 'Template tidak ditemukan' })
}

const invitation = getInvitationData(slug)
if (!invitation) {
  throw createError({ statusCode: 404, statusMessage: 'Data undangan tidak ditemukan' })
}

const TemplateComponent = resolveTemplateComponent(tpl.component)
if (!TemplateComponent) {
  throw createError({ statusCode: 404, statusMessage: 'Template tidak ditemukan' })
}

// Undangan memakai native scroll — Lenis sudah dimatikan otomatis
// di route ini oleh plugin lenis (init/destroy per route).

useHead({ title: `Demo ${tpl.name}` })
useSeoMeta({
  title: `Demo ${tpl.name}`,
  description: `${tpl.description} Lihat demo undangan digital ${tpl.name} — ${formatPrice(tpl.price)}, sekali bayar.`,
  ogTitle: `Demo ${tpl.name} | ${siteConfig.brand}`,
  ogDescription: tpl.description,
  ogImage: tpl.previewImage,
})
</script>
