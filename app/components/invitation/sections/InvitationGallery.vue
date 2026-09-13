<template>
  <section aria-label="Galeri foto" class="px-6 py-14 sm:py-16">
    <div class="landscape:grid landscape:grid-cols-[240px_1fr] landscape:items-start landscape:gap-10">
      <div class="mb-8 landscape:mb-0 landscape:sticky landscape:top-24 landscape:self-start">
        <h2
          v-if="title"
          :class="[titleClass ?? 'font-serif text-4xl font-medium sm:text-5xl', 'landscape:[writing-mode:vertical-rl]']"
        >
          {{ title }}
        </h2>
        <div
          class="mt-4 h-px w-12 landscape:mt-6 landscape:h-20 landscape:w-px"
          :style="{ background: accent }"
          aria-hidden="true"
        />
      </div>
      <div class="min-w-0">
        <!-- Grid -->
        <div
          v-if="variant === 'grid'"
          class="mx-auto grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3"
        >
          <figure
            v-for="g in data.gallery"
            :key="g.src + g.alt"
            class="overflow-hidden rounded-lg bg-stone-100"
          >
            <img :src="g.src" :alt="g.alt" width="600" height="780" loading="lazy" class="aspect-[3/4] w-full object-cover">
          </figure>
        </div>

        <!-- Masonry -->
        <div
          v-else-if="variant === 'masonry'"
          class="mx-auto max-w-2xl columns-2 gap-3 [&>*]:mb-3"
        >
          <figure
            v-for="(g, i) in data.gallery"
            :key="g.src + g.alt"
            class="break-inside-avoid overflow-hidden rounded-lg bg-stone-100"
          >
            <img
              :src="g.src"
              :alt="g.alt"
              width="600"
              :height="i % 2 === 0 ? 780 : 520"
              loading="lazy"
              class="w-full object-cover"
              :class="i % 2 === 0 ? 'aspect-[3/4]' : 'aspect-[4/3]'"
            >
          </figure>
        </div>

        <!-- Editorial: 1 besar + sisanya kecil -->
        <div v-else class="mx-auto grid max-w-2xl grid-cols-2 gap-3">
          <figure
            v-if="data.gallery[0]"
            class="col-span-2 overflow-hidden rounded-lg bg-stone-100"
          >
            <img
              :src="data.gallery[0].src"
              :alt="data.gallery[0].alt"
              width="1200"
              height="675"
              loading="lazy"
              class="aspect-[16/9] w-full object-cover"
            >
          </figure>
          <figure
            v-for="g in data.gallery.slice(1)"
            :key="g.src + g.alt"
            class="overflow-hidden rounded-lg bg-stone-100"
          >
            <img :src="g.src" :alt="g.alt" width="600" height="780" loading="lazy" class="aspect-[3/4] w-full object-cover">
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { InvitationSectionProps } from '~/types/invitation'

withDefaults(
  defineProps<InvitationSectionProps & { title?: string; variant?: 'grid' | 'masonry' | 'editorial' }>(),
  {
    accent: '#A4834F',
    dark: false,
    title: 'Galeri',
    variant: 'grid',
  },
)
</script>
