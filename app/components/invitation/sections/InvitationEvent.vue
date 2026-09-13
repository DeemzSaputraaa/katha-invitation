<template>
  <section aria-label="Rangkaian acara" class="px-6 py-14 sm:py-16">
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
        <!-- Cards -->
        <div v-if="variant === 'cards'" class="mx-auto grid max-w-2xl gap-5 sm:grid-cols-2">
          <article
            v-for="e in data.events"
            :key="e.title"
            class="rounded-xl p-7 text-center ring-1"
            :class="dark ? 'bg-white/5 ring-white/15' : 'bg-white ring-stone-200'"
          >
            <p class="text-xs font-semibold uppercase tracking-[0.24em]" :style="{ color: accent }">
              {{ e.title }}
            </p>
            <p class="mt-3 font-serif text-2xl">{{ e.date }}</p>
            <p class="mt-1 text-[15px] opacity-70">{{ e.time }}</p>
            <p class="mt-3 text-sm leading-relaxed opacity-70">
              {{ e.venue }}<br>{{ e.address }}
            </p>
          </article>
        </div>

        <!-- List -->
        <ol v-else class="mx-auto max-w-xl divide-y" :class="dark ? 'divide-white/10' : 'divide-stone-200'">
          <li v-for="e in data.events" :key="e.title" class="flex gap-5 py-6 text-left">
            <span
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-serif text-lg italic text-white"
              :style="{ background: accent }"
              aria-hidden="true"
            >
              {{ e.title.charAt(0) }}
            </span>
            <div>
              <h3 class="font-serif text-2xl">{{ e.title }}</h3>
              <p class="mt-1 text-[15px] opacity-70">{{ e.date }} · {{ e.time }}</p>
              <p class="mt-1 text-sm opacity-70">{{ e.venue }}, {{ e.address }}</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { InvitationSectionProps } from '~/types/invitation'

withDefaults(
  defineProps<InvitationSectionProps & { title?: string; variant?: 'cards' | 'list' }>(),
  {
    accent: '#A4834F',
    dark: false,
    title: 'Rangkaian Acara',
    variant: 'cards',
  },
)
</script>
