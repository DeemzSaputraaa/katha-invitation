<template>
  <section aria-label="Amplop digital" class="px-6 py-14 sm:py-16">
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
          class="mx-auto max-w-md text-[15px]"
          :class="dark ? 'text-stone-300' : 'text-stone-600'"
        >
          Doa restu Anda sudah lebih dari cukup. Namun jika ingin berbagi tanda
          kasih, kami sediakan dengan penuh syukur.
        </p>
        <div class="mx-auto mt-8 grid max-w-md gap-3">
          <button
            v-for="(acc, i) in data.gifts"
            :key="acc.bank + acc.number"
            type="button"
            class="flex items-center justify-between rounded-xl px-5 py-4 text-left ring-1 transition"
            :class="dark ? 'bg-white/5 ring-white/15 hover:ring-white/30' : 'bg-white ring-stone-200 hover:ring-stone-400'"
            @click="copyNumber(acc.number, i)"
          >
            <span>
              <span class="block text-sm font-semibold">{{ acc.bank }}</span>
              <span class="block font-mono text-[15px] tracking-wide opacity-80">{{ acc.number }}</span>
              <span class="block text-xs opacity-60">a.n. {{ acc.name }}</span>
            </span>
            <span class="text-xs font-semibold uppercase tracking-widest opacity-50">
              {{ copiedIndex === i ? 'Tersalin ✓' : 'Salin' }}
            </span>
          </button>
        </div>
        <div
          v-if="data.giftAddress"
          class="mx-auto mt-6 max-w-md rounded-xl px-5 py-5 text-left ring-1"
          :class="dark ? 'bg-white/5 ring-white/15' : 'bg-white ring-stone-200'"
        >
          <p class="text-xs font-bold uppercase tracking-[0.2em] opacity-60">
            Kirim hadiah fisik ke
          </p>
          <p class="mt-2 text-sm font-semibold">{{ data.giftAddress.name }}</p>
          <p class="mt-0.5 text-sm opacity-70">{{ data.giftAddress.phone }}</p>
          <p class="mt-0.5 text-sm leading-relaxed opacity-70">{{ data.giftAddress.address }}</p>
        </div>
        <p
          v-if="data.giftAddress"
          class="mx-auto mt-3 max-w-md text-xs opacity-50"
        >
          Atau kirimkan hadiah langsung ke alamat acara.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { InvitationSectionProps } from '~/types/invitation'

withDefaults(defineProps<InvitationSectionProps & { title?: string }>(), {
  accent: '#A4834F',
  dark: false,
  title: 'Amplop Digital',
})

const copiedIndex = ref<number | null>(null)
let timer: ReturnType<typeof setTimeout> | null = null

async function copyNumber(number: string, index: number) {
  copiedIndex.value = index
  try {
    await navigator.clipboard.writeText(number.replace(/\s/g, ''))
  }
  catch {
    /* clipboard tidak tersedia — label tetap berubah */
  }
  if (timer) clearTimeout(timer)
  timer = setTimeout(() => {
    if (copiedIndex.value === index) copiedIndex.value = null
  }, 2000)
}

onUnmounted(() => {
  if (timer) clearTimeout(timer)
})
</script>
