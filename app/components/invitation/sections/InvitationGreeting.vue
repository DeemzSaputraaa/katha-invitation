<template>
  <section aria-label="Kata sambutan" class="px-6 py-14 sm:py-16">
    <div class="landscape:grid landscape:grid-cols-[240px_1fr] landscape:items-start landscape:gap-10">
      <div class="mb-8 landscape:mb-0 landscape:sticky landscape:top-24 landscape:self-start">
        <p
          class="text-xs font-semibold uppercase tracking-[0.28em] opacity-70 landscape:[writing-mode:vertical-rl]"
        >
          Sambutan
        </p>
        <div
          class="mt-4 h-px w-12 landscape:mt-6 landscape:h-20 landscape:w-px"
          :style="{ background: accent }"
          aria-hidden="true"
        />
      </div>
      <div class="min-w-0 text-center">
        <p
          class="mx-auto max-w-md font-serif text-xl italic leading-relaxed"
          :class="dark ? 'text-stone-200' : 'text-stone-700'"
        >
          {{ data.greeting }}
        </p>
        <div class="mx-auto mt-5 h-px w-16" :style="{ background: accent }" aria-hidden="true" />
        <div class="mx-auto mt-5 max-w-md space-y-3">
          <p
            v-for="(line, i) in data.opening"
            :key="i"
            class="text-[15px] leading-relaxed"
            :class="dark ? 'text-stone-300' : 'text-stone-600'"
          >
            {{ line }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { InvitationSectionProps } from '~/types/invitation'

withDefaults(defineProps<InvitationSectionProps>(), {
  accent: '#A4834F',
  dark: false,
})
</script>
