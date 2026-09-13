<template>
  <section aria-label="Hitung mundur acara" class="px-6 py-12">
    <div class="landscape:grid landscape:grid-cols-[240px_1fr] landscape:items-start landscape:gap-10">
      <div class="mb-8 landscape:mb-0 landscape:sticky landscape:top-24 landscape:self-start">
        <h2
          v-if="title"
          class="text-xs font-semibold uppercase tracking-[0.28em] opacity-70 landscape:[writing-mode:vertical-rl]"
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
        <!-- Boxed -->
        <div
          v-if="variant === 'boxed'"
          class="mx-auto grid max-w-md grid-cols-4 gap-2 sm:gap-3"
          role="timer"
          aria-label="Hitung mundur acara"
        >
          <div
            v-for="u in units"
            :key="u.label"
            class="rounded-lg px-2 py-4"
            :class="dark ? 'bg-white/10' : 'bg-white shadow-sm ring-1 ring-stone-200/70'"
          >
            <p class="font-serif text-3xl font-semibold tabular-nums sm:text-4xl" :style="{ color: numberColor }">
              {{ u.value }}
            </p>
            <p class="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] opacity-60">
              {{ u.label }}
            </p>
          </div>
        </div>

        <!-- Minimal -->
        <div
          v-else-if="variant === 'minimal'"
          class="mx-auto flex max-w-md items-baseline justify-center gap-3 sm:gap-5"
          role="timer"
          aria-label="Hitung mundur acara"
        >
          <div v-for="(u, i) in units" :key="u.label" class="flex items-baseline gap-3 sm:gap-5">
            <div>
              <p class="font-serif text-5xl font-light tabular-nums sm:text-6xl" :style="{ color: numberColor }">
                {{ u.value }}
              </p>
              <p class="mt-1 text-[11px] font-semibold uppercase tracking-[0.22em] opacity-60">
                {{ u.label }}
              </p>
            </div>
            <span v-if="i < units.length - 1" class="font-serif text-3xl opacity-30" aria-hidden="true">·</span>
          </div>
        </div>

        <!-- Wide -->
        <div
          v-else
          class="mx-auto flex max-w-lg items-stretch justify-center divide-x"
          :style="{ borderColor: accent }"
          :class="dark ? 'divide-white/15' : 'divide-stone-200'"
          role="timer"
          aria-label="Hitung mundur acara"
        >
          <div v-for="u in units" :key="u.label" class="flex-1 px-2 sm:px-6">
            <p class="font-serif text-4xl font-medium tabular-nums sm:text-5xl" :style="{ color: numberColor }">
              {{ u.value }}
            </p>
            <p class="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] opacity-60">
              {{ u.label }}
            </p>
          </div>
        </div>

        <p v-if="ready && passed" class="mt-5 font-serif text-xl italic opacity-80" role="status">
          Acara telah berlangsung — terima kasih atas doa restunya.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { InvitationSectionProps } from '~/types/invitation'
import { useCountdown } from '~/composables/useCountdown'

const props = withDefaults(
  defineProps<InvitationSectionProps & { title?: string; variant?: 'boxed' | 'minimal' | 'wide'; numberColor?: string }>(),
  {
    accent: '#A4834F',
    dark: false,
    title: 'Menuju Hari Bahagia',
    variant: 'boxed',
    numberColor: undefined,
  },
)

const { days, hours, minutes, seconds, passed, ready } = useCountdown(props.data.countdownTo)

const units = computed(() => [
  { label: 'Hari', value: ready.value ? String(days.value).padStart(2, '0') : '--' },
  { label: 'Jam', value: ready.value ? String(hours.value).padStart(2, '0') : '--' },
  { label: 'Menit', value: ready.value ? String(minutes.value).padStart(2, '0') : '--' },
  { label: 'Detik', value: ready.value ? String(seconds.value).padStart(2, '0') : '--' },
])
</script>
