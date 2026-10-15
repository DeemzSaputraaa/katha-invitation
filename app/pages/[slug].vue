<template>
  <div class="min-h-screen bg-white">
    <!-- Renderer undangan customer: Template (design) + Data (konten).
      Contoh: /budi-sinta → template aurelia + data Budi & Sinta. -->
    <component :is="TemplateComponent" :data="invitation.data" :template-name="templateName" />
  </div>
</template>

<script setup lang="ts">
import { getInvitation } from '~/data/invitations'
import { templates, getTemplateBySlug, formatPrice } from '~/data/templates'
import { resolveTemplateComponent } from '~/components/invitation/templates/registry'
import { siteConfig } from '~/data/site'

const route = useRoute()
const slug = String(route.params.slug ?? '')
const tpl = getTemplateBySlug(slug)

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
const title = tpl ? `Demo ${tpl.name}` : `Undangan ${coupleTitle}`
const description = tpl
  ? `${tpl.description} Lihat demo undangan digital ${tpl.name} — ${formatPrice(tpl.price)}, sekali bayar.`
  : `Undangan digital ${coupleTitle} — ${invitation.data.dateLabel}.`

// Undangan memakai native scroll — Lenis sudah dimatikan otomatis
// di route ini oleh plugin lenis (init/destroy per route).

useHead({
  title,
  link: [{ rel: 'canonical', href: `${siteConfig.url}/${slug}` }],
  htmlAttrs: { class: 'template-route' },
})
useSeoMeta({
  title,
  description,
  ogTitle: `${title} | ${siteConfig.brand}`,
  ogDescription: tpl?.description ?? description,
  ogImage: tpl?.previewImage ?? invitation.data.coverImage,
  ogUrl: `${siteConfig.url}/${slug}`,
})
</script>
