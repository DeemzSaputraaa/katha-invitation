<template>
  <article
    class="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_24px_50px_-28px_rgba(201,72,15,0.4)]"
  >
    <div class="relative block overflow-hidden bg-stone-100">
      <img
        :src="template.previewImage"
        :alt="`Preview template undangan ${template.name}`"
        width="600"
        height="780"
        loading="lazy"
        class="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      >
      <span
        class="absolute left-4 top-4 rounded-full bg-brand px-3 py-1 text-xs font-bold text-white shadow-md shadow-brand/30"
      >
        {{ template.category }}
      </span>
      <span
        v-if="template.portfolioOnly"
        class="absolute right-4 top-4 rounded-full bg-stone-900/85 px-3 py-1 text-xs font-bold text-white"
      >
        Portofolio
      </span>
    </div>
    <div class="flex flex-1 flex-col p-5 sm:p-6">
      <div class="flex items-start justify-between gap-3">
        <h3 class="font-serif text-2xl font-semibold text-stone-950">
          {{ template.name }}
        </h3>
        <p v-if="!template.portfolioOnly" class="whitespace-nowrap pt-1 text-[15px] font-bold text-brand-deep">
          {{ formatPrice(template.price) }}
        </p>
        <p v-else class="whitespace-nowrap pt-1 text-[13px] font-bold text-stone-500">
          Katalog saja
        </p>
      </div>
      <p class="mt-2 line-clamp-2 text-sm leading-relaxed text-stone-600">
        {{ template.description }}
      </p>
      <div class="mt-5 flex gap-2.5 pt-1">
        <NuxtLink
          v-if="!template.portfolioOnly"
          :to="`/${template.slug}`"
          target="_blank"
          rel="noopener"
          class="inline-flex flex-1 items-center justify-center rounded-full border border-brand/30 px-4 py-2.5 text-sm font-bold text-brand-ink transition hover:border-brand hover:bg-brand-soft/50"
          :aria-label="`Preview template ${template.name}`"
        >
          Preview
        </NuxtLink>
        <a
          v-if="!template.portfolioOnly"
          :href="waLink"
          target="_blank"
          rel="noopener"
          class="inline-flex flex-1 items-center justify-center rounded-full bg-brand px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-brand/25 transition hover:bg-brand-deep"
          :aria-label="`Pesan template ${template.name} via WhatsApp`"
        >
          Pesan
        </a>
        <a
          v-else
          :href="template.externalUrl ?? `/${template.slug}`"
          target="_blank"
          rel="noopener"
          class="inline-flex flex-1 items-center justify-center rounded-full border border-brand/30 px-4 py-2.5 text-sm font-bold text-brand-ink transition hover:border-brand hover:bg-brand-soft/50"
          :aria-label="`Preview website asli ${template.name}`"
        >
          Preview
        </a>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { formatPrice, type CatalogTemplate } from '~/data/templates'
import { useWhatsApp } from '~/composables/useWhatsApp'

const props = defineProps<{
  template: CatalogTemplate
}>()

const { templateInterest } = useWhatsApp()
const waLink = computed(() => templateInterest(props.template.name))
</script>
