<template>
  <section aria-label="Love story" class="px-6 py-14 sm:py-16">
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
        <!-- Timeline -->
        <ol v-if="variant === 'timeline'" class="mx-auto max-w-md">
          <li
            v-for="s in data.story"
            :key="s.year"
            class="relative border-l pb-10 pl-8 last:pb-0"
            :style="{ borderColor: accent }"
          >
            <span
              class="absolute -left-[7px] top-1 h-3 w-3 rounded-full"
              :style="{ background: accent }"
              aria-hidden="true"
            />
            <p class="font-serif text-xl italic" :style="{ color: yearColor }">
              {{ s.year }} — {{ s.title }}
            </p>
            <p class="mt-1.5 text-[15px] leading-relaxed" :class="dark ? 'text-stone-300' : 'text-stone-600'">
              {{ s.text }}
            </p>
          </li>
        </ol>

        <!-- Editorial -->
        <div v-else class="mx-auto grid max-w-3xl gap-8 sm:grid-cols-2">
          <article v-for="(s, i) in data.story" :key="s.year" :class="i % 2 === 1 ? 'sm:mt-12' : ''">
            <p class="font-serif text-5xl font-light opacity-20" aria-hidden="true">{{ s.year }}</p>
            <h3 class="-mt-4 font-serif text-2xl italic">{{ s.title }}</h3>
            <p class="mt-2 text-[15px] leading-relaxed" :class="dark ? 'text-stone-300' : 'text-stone-600'">
              {{ s.text }}
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { InvitationSectionProps } from '~/types/invitation'

withDefaults(
  defineProps<InvitationSectionProps & { title?: string; variant?: 'timeline' | 'editorial'; yearColor?: string }>(),
  {
    accent: '#A4834F',
    dark: false,
    title: 'Love Story',
    variant: 'timeline',
    yearColor: undefined,
  },
)
</script>
