<template>
  <section aria-label="Lokasi acara" class="px-6 py-14 sm:py-16">
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
      <div class="min-w-0 text-center">
        <p
          class="mx-auto max-w-md text-[15px] leading-relaxed"
          :class="dark ? 'text-stone-300' : 'text-stone-600'"
        >
          {{ data.venue.name }}<br>{{ data.venue.address }}
        </p>
        <div
          class="mx-auto mt-8 flex h-44 max-w-xl items-center justify-center overflow-hidden rounded-xl ring-1"
          :class="dark ? 'bg-white/5 ring-white/15' : 'bg-stone-100 ring-stone-200'"
          role="img"
          :aria-label="`Peta lokasi ${data.venue.name}`"
        >
          <div class="text-center">
            <p class="font-serif text-2xl italic opacity-70">Peta Lokasi</p>
            <p class="mt-1 text-sm opacity-50">{{ data.venue.name }}</p>
          </div>
        </div>
        <a
          :href="data.venue.mapsUrl"
          target="_blank"
          rel="noopener"
          class="mt-6 inline-flex items-center justify-center rounded-full px-8 py-3.5 text-[15px] font-semibold text-white transition hover:opacity-90"
          :style="{ background: accent }"
        >
          Buka Google Maps
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { InvitationSectionProps } from '~/types/invitation'

withDefaults(defineProps<InvitationSectionProps & { title?: string }>(), {
  accent: '#1C1917',
  dark: false,
  title: 'Lokasi Acara',
})
</script>
