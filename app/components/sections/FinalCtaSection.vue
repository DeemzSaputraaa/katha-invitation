<template>
  <section aria-labelledby="final-cta-heading" class="bg-white">
    <div class="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28">
      <div
        v-reveal
        class="relative overflow-hidden rounded-3xl bg-cream px-6 py-16 text-center shadow-lg shadow-orange-900/10 sm:px-12 sm:py-20"
      >
        <!-- Blob warna lembut — seperti bg hero -->
        <div class="pointer-events-none absolute inset-0" aria-hidden="true">
          <div class="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-[#F0531C]/20 blur-3xl" />
          <div class="absolute -bottom-20 -right-16 h-72 w-72 rounded-full bg-[#FFA74F]/30 blur-3xl" />
          <div class="absolute bottom-6 left-1/4 h-56 w-56 rounded-full bg-[#2E4B3C]/15 blur-3xl" />
        </div>
        <div class="relative">
          <p class="text-xs font-bold uppercase tracking-[0.28em] text-brand-ink">
            Mulai Hari Ini
          </p>
          <h2
            id="final-cta-heading"
            class="mx-auto mt-4 max-w-xl text-balance font-serif text-4xl font-semibold leading-tight text-stone-950 sm:text-5xl"
          >
            Siap Membuat <em class="italic text-brand">Undanganmu?</em>
          </h2>
          <p class="mx-auto mt-4 max-w-md text-[16px] leading-relaxed text-stone-600">
            Pilih desain favoritmu dan mulai buat undangan digital untuk hari spesialmu.
          </p>
          <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <NuxtLink
              to="/#template"
              class="inline-flex w-full items-center justify-center rounded-full bg-brand px-8 py-3.5 text-[15px] font-bold text-white shadow-xl shadow-brand/30 transition hover:bg-brand-deep sm:w-auto"
            >
              Lihat Template
            </NuxtLink>
            <a
              :href="waGeneral"
              target="_blank"
              rel="noopener"
              class="inline-flex w-full items-center justify-center rounded-full border-2 border-brand/40 px-8 py-3.5 text-[15px] font-bold text-brand-ink transition hover:border-brand hover:bg-brand hover:text-white sm:w-auto"
            >
              Konsultasi via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useWhatsApp } from '~/composables/useWhatsApp'

const { general } = useWhatsApp()
const waGeneral = general(
  'Halo Katha, saya ingin konsultasi membuat undangan digital untuk acara saya.',
)
</script>
