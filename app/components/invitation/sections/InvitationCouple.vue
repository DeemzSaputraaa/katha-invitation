<template>
  <section aria-label="Mempelai" class="scroll-mt-20 px-6 py-14 sm:py-16">
    <div class="landscape:grid landscape:grid-cols-[240px_1fr] landscape:items-start landscape:gap-10">
      <div class="mb-8 landscape:mb-0 landscape:sticky landscape:top-24 landscape:self-start">
        <h2
          :class="[titleClass ?? 'font-serif text-4xl font-medium sm:text-5xl', 'landscape:[writing-mode:vertical-rl]']"
        >
          Mempelai
        </h2>
        <div
          class="mt-4 h-px w-12 landscape:mt-6 landscape:h-20 landscape:w-px"
          :style="{ background: accent }"
          aria-hidden="true"
        />
      </div>
      <div class="min-w-0">
        <div
          class="mx-auto max-w-xl text-center"
          :class="variant === 'split' ? 'grid gap-10 sm:grid-cols-2 sm:gap-6' : 'grid gap-10'"
        >
          <div v-for="(p, i) in persons" :key="p.name">
            <!-- Foto portrait jika tersedia -->
            <figure
              v-if="p.photo"
              class="mx-auto h-32 w-32 overflow-hidden rounded-full shadow-md"
              :style="{ outline: `3px solid ${accent}`, outlineOffset: '3px' }"
            >
              <img
                :src="p.photo"
                :alt="`Foto ${i === 0 ? 'mempelai wanita' : 'mempelai pria'}`"
                width="256"
                height="256"
                loading="lazy"
                class="h-full w-full object-cover object-top"
              >
            </figure>

            <!-- Fallback inisial jika tidak ada foto -->
            <div
              v-else
              class="mx-auto flex h-28 w-28 items-center justify-center rounded-full font-serif text-4xl italic"
              :style="{ background: softBg, color: accent }"
              role="img"
              :aria-label="`Inisial ${i === 0 ? 'mempelai pertama' : 'mempelai kedua'}`"
            >
              {{ initial(p.name) }}
            </div>

            <h3 class="mt-4 font-serif text-3xl" :style="{ color: nameColor }">{{ p.name }}</h3>
            <p class="mt-2 text-sm leading-relaxed" :class="dark ? 'text-stone-300' : 'text-stone-600'">
              {{ p.parents }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { InvitationSectionProps } from '~/types/invitation'

const props = withDefaults(
  defineProps<InvitationSectionProps & { variant?: 'stacked' | 'split'; softBg?: string; nameColor?: string }>(),
  {
    accent: '#A4834F',
    dark: false,
    variant: 'split',
    softBg: '#F5F3EF',
    nameColor: undefined,
  },
)

const persons = computed(() => [props.data.couple.person1, props.data.couple.person2])

function initial(name: string): string {
  return (name.trim().charAt(0) || '?').toUpperCase()
}
</script>
