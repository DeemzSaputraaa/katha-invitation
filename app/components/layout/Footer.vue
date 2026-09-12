<template>
  <footer class="bg-[#09332C] text-white/75">
    <div class="mx-auto max-w-7xl px-5 py-14 text-center sm:px-8">
      <p class="font-serif text-3xl font-semibold text-white">Katha</p>
      <p class="mt-2 text-xs font-bold uppercase tracking-[0.22em] text-brand-soft/70">
        Undangan Digital Elegan
      </p>
      <p class="mx-auto mt-4 max-w-4xl text-[15px] leading-relaxed text-white/65">
        Undangan digital yang elegan, personal, dan mudah dibagikan —
        untuk pernikahan dan momen spesial lainnya.
      </p>

      <div class="mx-auto my-8 h-px w-16 bg-white/15" aria-hidden="true" />

      <p class="text-xs font-bold uppercase tracking-[0.18em] text-white/50">Hubungi Kami</p>
      <ul class="mt-5 flex flex-wrap items-start justify-center gap-x-10 gap-y-6 text-[15px]">
        <li>
          <p class="text-xs text-white/45">WhatsApp (fast respons)</p>
          <a :href="waGeneral" target="_blank" rel="noopener" class="font-medium text-white/85 transition-colors hover:text-white">
            {{ siteConfig.whatsappDisplay }}
          </a>
        </li>
        <li>
          <p class="text-xs text-white/45">Lokasi</p>
          <p class="font-medium text-white/85">{{ siteConfig.address }}</p>
        </li>
        <li>
          <p class="text-xs text-white/45">Jam Operasional</p>
          <p class="font-medium text-white/85">{{ siteConfig.hours }}</p>
        </li>
      </ul>

      <div class="mt-10 flex flex-col items-center gap-1 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:justify-between">
        <p>© {{ year }} {{ siteConfig.brand }}. Seluruh hak cipta dilindungi.</p>
        <p>Dibuat dengan teliti di Indonesia.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { siteConfig } from '~/data/site'
import { useWhatsApp } from '~/composables/useWhatsApp'

const { general } = useWhatsApp()
const waGeneral = general()
const year = new Date().getFullYear()
</script>
