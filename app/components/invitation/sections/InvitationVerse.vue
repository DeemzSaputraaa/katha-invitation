<template>
  <section v-if="data.verse" aria-label="Ayat dan kutipan" class="px-6 py-12">
    <div class="landscape:grid landscape:grid-cols-[240px_1fr] landscape:items-start landscape:gap-10">
      <div class="mb-6 landscape:mb-0 landscape:sticky landscape:top-24 landscape:self-start">
        <p
          class="text-xs font-bold uppercase tracking-[0.25em] landscape:[writing-mode:vertical-rl]"
          :style="{ color: accent }"
        >
          {{ data.verse.source }}
        </p>
        <div
          class="mt-4 h-px w-12 landscape:mt-6 landscape:h-20 landscape:w-px"
          :style="{ background: accent }"
          aria-hidden="true"
        />
      </div>
      <div class="min-w-0 text-center">
        <blockquote
          class="mx-auto max-w-md font-serif text-xl italic leading-relaxed"
          :class="dark ? 'text-stone-200' : 'text-stone-700'"
        >
          “{{ data.verse.text }}”
        </blockquote>
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
