<template>
  <div class="min-h-screen bg-white">
    <!-- Renderer undangan customer: Template (design) + Data (konten).
      Contoh: /budi-sinta → template aurelia + data Budi & Sinta. -->
    <component :is="TemplateComponent" :data="invitation.data" :template-name="templateName" />
  </div>
</template>

<script setup lang="ts">
import { getInvitation } from '~/data/invitations'
import { templates } from '~/data/templates'
import { resolveTemplateComponent } from '~/components/invitation/templates/registry'
import { siteConfig } from '~/data/site'

const route = useRoute()
const slug = String(route.params.slug ?? '')

const invitation = getInvitation(slug)
if (!invitation) {
  throw createError({ statusCode: 404, statusMessage: 'Undangan tidak ditemukan' })
}

const TemplateComponent = resolveTemplateComponent(invitation.template)
if (!TemplateComponent) {
  throw createError({ statusCode: 404, statusMessage: 'Template tidak ditemukan' })
}

// Nama template untuk pesan WA otomatis di footer — cari di katalog,
// fallback ke key template bila tidak ketemu.
const templateName = templates.find((t) => t.component === invitation.template)?.name ?? invitation.template

const coupleTitle = `${invitation.data.couple.person1.name} & ${invitation.data.couple.person2.name}`

// Undangan memakai native scroll — Lenis sudah dimatikan otomatis
// di route ini oleh plugin lenis (init/destroy per route).

useHead({
  title: `Undangan ${coupleTitle}`,
  htmlAttrs: { class: 'template-route' },
})
useSeoMeta({
  title: `Undangan ${coupleTitle}`,
  description: `Undangan digital ${coupleTitle} — ${invitation.data.dateLabel}.`,
  ogTitle: `Undangan ${coupleTitle} | ${siteConfig.brand}`,
  ogDescription: `Undangan digital ${coupleTitle} — ${invitation.data.dateLabel}.`,
  ogImage: invitation.data.coverImage,
})
</script>
