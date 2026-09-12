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
          @preview="openPreview(t)"
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

      <!-- Lightbox preview -->
      <Teleport to="body">
        <div
          v-if="previewing"
          class="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          :aria-label="`Preview template ${previewing.name}`"
        >
          <div class="absolute inset-0 bg-stone-950/80" aria-hidden="true" @click="closePreview" />
          <figure
            class="relative max-h-[88vh] w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            <button
              ref="closeBtn"
              type="button"
              aria-label="Tutup preview"
              class="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-2xl leading-none text-stone-700 shadow-md transition hover:text-stone-950"
              @click="closePreview"
            >
              <span aria-hidden="true">×</span>
            </button>
            <img
              :src="previewing.previewImage"
              :alt="`Preview template undangan ${previewing.name}`"
              width="600"
              height="780"
              class="max-h-[68vh] w-full object-cover object-top"
            >
            <figcaption class="flex items-center justify-between gap-3 p-4">
              <div>
                <p class="font-serif text-xl font-semibold text-stone-950">
                  {{ previewing.name }}
                </p>
                <p class="text-sm font-bold text-brand-deep">
                  {{ formatPrice(previewing.price) }}
                </p>
              </div>
              <a
                :href="previewWa"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center justify-center rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-brand/25 transition hover:bg-brand-deep"
              >
                Pesan
              </a>
            </figcaption>
          </figure>
        </div>
      </Teleport>
    </div>
  </section>
</template>

<script setup lang="ts">
import { templateCategories, templates, formatPrice, type InvitationTemplate, type TemplateFilter } from '~/data/templates'
import { useWhatsApp } from '~/composables/useWhatsApp'

const activeFilter = ref<TemplateFilter>('Semua')

const filtered = computed(() => {
  if (activeFilter.value === 'Semua') return templates
  return templates.filter(
    (t) =>
      t.category === activeFilter.value ||
      (activeFilter.value === 'Wedding' && t.category === 'Wedding'),
  )
})

const { general, templateInterest } = useWhatsApp()
const waGeneral = general('Halo Katha, saya ingin konsultasi memilih template undangan digital.')

// ---- Lightbox preview ----
const previewing = ref<InvitationTemplate | null>(null)
const closeBtn = ref<HTMLButtonElement | null>(null)
const previewWa = computed(() =>
  previewing.value ? templateInterest(previewing.value.name) : '#',
)

function lockScroll(lock: boolean) {
  document.body.style.overflow = lock ? 'hidden' : ''
  const lenis = (useNuxtApp().$lenis ?? null) as { stop?: () => void; start?: () => void } | null
  if (lock) lenis?.stop?.()
  else lenis?.start?.()
}

function openPreview(t: InvitationTemplate) {
  previewing.value = t
  lockScroll(true)
}

function closePreview() {
  previewing.value = null
  lockScroll(false)
}

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') closePreview()
}

watch(previewing, async (v) => {
  if (v) {
    window.addEventListener('keydown', onKey)
    await nextTick()
    closeBtn.value?.focus()
  }
  else {
    window.removeEventListener('keydown', onKey)
  }
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
  lockScroll(false)
})
</script>
