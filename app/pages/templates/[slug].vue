<template>
  <div class="min-h-screen bg-white">
    <!-- Bar atas demo -->
    <div class="sticky top-0 z-[70] border-b border-stone-200/80 bg-white/90 backdrop-blur-md">
      <div class="mx-auto flex h-14 max-w-3xl items-center justify-between px-4 sm:px-6">
        <NuxtLink
          to="/#template"
          class="inline-flex items-center gap-1.5 text-sm font-bold text-stone-600 transition-colors hover:text-stone-950"
        >
          <span aria-hidden="true">←</span> Katalog
        </NuxtLink>
        <p class="hidden text-xs font-bold uppercase tracking-[0.2em] text-stone-400 sm:block">
          Demo — {{ tpl.name }}
        </p>
        <a
          :href="orderLink"
          target="_blank"
          rel="noopener"
          class="rounded-full bg-brand px-4 py-1.5 text-sm font-bold text-white shadow-md shadow-brand/25 transition hover:bg-brand-deep"
        >
          Pesan template ini
        </a>
      </div>
    </div>

    <!-- Renderer: Template (design) + Data (konten) -->
    <component :is="TemplateComponent" :data="invitation" />
  </div>
</template>

<script setup lang="ts">
import { getTemplateBySlug, formatPrice } from '~/data/templates'
import { getInvitationData } from '~/data/invitations'
import { resolveTemplateComponent } from '~/components/invitation/templates/registry'
import { siteConfig } from '~/data/site'
import { useWhatsApp } from '~/composables/useWhatsApp'

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

const { templateInterest } = useWhatsApp()
const orderLink = templateInterest(tpl.name)

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
