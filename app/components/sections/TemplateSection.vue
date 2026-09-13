<template>
  <section id="template" aria-labelledby="template-heading" class="scroll-mt-20 bg-white">
    <div class="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <UiSectionHeading
        eyebrow="Katalog"
        title="Pilih Desain Favoritmu"
        subtitle="Temukan template yang sesuai dengan gaya dan momen spesialmu. Suka satu? Pesan langsung via WhatsApp."
      />

      <!-- Filter -->
      <div
        v-reveal
        class="mt-10 flex flex-wrap justify-center gap-2"
        role="group"
        aria-label="Filter template berdasarkan kategori"
      >
        <button
          v-for="cat in templateCategories"
          :key="cat"
          type="button"
          :aria-pressed="activeFilter === cat ? 'true' : 'false'"
          :class="[
            'rounded-full border px-5 py-2.5 text-sm font-bold transition',
            activeFilter === cat
              ? 'border-brand bg-brand text-white shadow-md shadow-brand/25'
              : 'border-stone-200 bg-white text-stone-600 hover:border-brand/50 hover:text-brand-deep',
          ]"
          @click="activeFilter = cat"
        >
          {{ cat }}
        </button>
      </div>

      <p class="sr-only" role="status" aria-live="polite">
        Menampilkan {{ filtered.length }} template
      </p>

      <!-- Grid -->
      <div
        v-if="filtered.length"
        class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <TemplateCard
          v-for="(t, i) in filtered"
          :key="t.id"
          v-reveal="(i % 3) * 80"
          :template="t"
        />
      </div>

      <!-- Empty state -->
      <div
        v-else
        class="mx-auto mt-12 max-w-md rounded-[6px] border border-dashed border-stone-300 px-8 py-14 text-center"
      >
        <p class="font-serif text-2xl italic text-stone-700">Belum ada template di kategori ini.</p>
        <p class="mt-2 text-sm text-stone-500">
          Coba pilih kategori lain, atau konsultasikan kebutuhanmu langsung.
        </p>
        <a
          :href="waGeneral"
          target="_blank"
          rel="noopener"
          class="mt-6 inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-bold text-white shadow-md shadow-brand/25 transition hover:bg-brand-deep"
        >
          Konsultasi via WhatsApp
        </a>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { templateCategories, templates, type TemplateFilter } from '~/data/templates'
import { useWhatsApp } from '~/composables/useWhatsApp'

const activeFilter = ref<TemplateFilter>('Semua')

const filtered = computed(() => {
  if (activeFilter.value === 'Semua') return templates
  return templates.filter((t) => t.category === activeFilter.value)
})

const { general } = useWhatsApp()
const waGeneral = general('Halo Katha, saya ingin konsultasi memilih template undangan digital.')
</script>
