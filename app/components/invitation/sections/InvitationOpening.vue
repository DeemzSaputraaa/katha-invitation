<template>
  <!--
    Opening gate — SPLIT SCREEN.
    Landscape (>= orientation landscape): left editorial 68% + right cover 32%.
    Portrait/mobile: left disembunyikan, right panel penuh (100vw × 100svh).
  -->
  <div
    class="fixed inset-0 z-[80] overflow-y-auto"
    :class="backdropClass"
    role="dialog"
    aria-modal="true"
    aria-label="Opening undangan"
  >
    <div class="flex min-h-[100svh] flex-col landscape:flex-row">
      <!-- LEFT PANEL — landscape only -->
      <div
        class="hidden landscape:flex landscape:w-[68%] landscape:flex-col landscape:justify-center landscape:overflow-hidden landscape:px-14"
        :class="leftClass"
      >
        <slot name="left" />
      </div>

      <!-- RIGHT PANEL — selalu tampil, cover sesungguhnya -->
      <div class="relative flex min-h-[100svh] w-full flex-col overflow-hidden landscape:w-[32%]">
        <img
          :src="visual"
          :alt="visualAlt"
          fetchpriority="high"
          class="absolute inset-0 h-full w-full object-cover"
        >
        <div class="absolute inset-0" :class="overlayClass" aria-hidden="true" />
        <div
          class="relative flex min-h-[100svh] flex-col justify-center px-6 py-14"
          :class="contentClass"
        >
          <p :class="labelClass">{{ data.invitationLabel }}</p>
          <h1 :class="namesClass" class="mt-5">
            <span class="block">{{ data.couple.person1.name }}</span>
            <span class="my-1 block text-[0.55em] italic opacity-80">&amp;</span>
            <span class="block">{{ data.couple.person2.name }}</span>
          </h1>
          <div
            v-if="divider"
            class="mx-auto mt-6 flex w-full max-w-[200px] items-center gap-3"
            :class="contentClass.includes('text-left') ? 'mx-0' : ''"
            aria-hidden="true"
          >
            <span class="h-px flex-1" :style="{ background: accent }" />
            <span class="font-serif text-lg italic" :style="{ color: accent }">❦</span>
            <span class="h-px flex-1" :style="{ background: accent }" />
          </div>
          <p :class="dateClass" class="mt-6">{{ data.dateLabel }}</p>
          <div class="mt-10">
            <button
              type="button"
              :class="buttonClass"
              class="inline-flex items-center justify-center rounded-full px-10 py-4 text-[15px] font-semibold transition"
              @click="$emit('open')"
            >
              Buka Undangan
            </button>
          </div>
          <slot name="under-button" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { InvitationData } from '~/types/invitation'

withDefaults(
  defineProps<{
    data: InvitationData
    /** Visual utama panel kanan (foto/placeholder). */
    visual: string
    visualAlt?: string
    accent?: string
    backdropClass?: string
    leftClass?: string
    overlayClass?: string
    contentClass?: string
    labelClass?: string
    namesClass?: string
    dateClass?: string
    buttonClass?: string
    divider?: boolean
  }>(),
  {
    visualAlt: 'Foto pasangan mempelai',
    accent: '#A4834F',
    backdropClass: 'bg-white',
    leftClass: 'bg-stone-100 text-stone-900',
    overlayClass: 'bg-stone-950/55',
    contentClass: 'items-center text-center text-white',
    labelClass: 'text-xs font-semibold uppercase tracking-[0.3em] opacity-90',
    namesClass: 'font-serif text-5xl font-medium leading-[1.05]',
    dateClass: 'text-sm tracking-[0.2em] uppercase opacity-90',
    buttonClass: 'bg-white text-stone-950 hover:bg-stone-100',
    divider: true,
  },
)

defineEmits<{
  open: []
}>()
</script>
