<template>
  <footer class="bg-[#09332C] text-white/75">
    <div class="mx-auto max-w-7xl px-5 py-14 sm:px-8">
      <div class="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div class="flex items-center gap-2.5">
            <span
              class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFA74F] to-[#F0531C] font-serif text-xl font-semibold italic text-white"
              aria-hidden="true"
              >K</span
            >
            <p class="font-serif text-2xl font-semibold text-white">Katha</p>
          </div>
          <p class="mt-2 text-xs font-bold uppercase tracking-[0.22em] text-brand-soft/70">
            Undangan Digital Elegan
          </p>
          <p class="mt-4 max-w-xs text-[15px] leading-relaxed text-white/65">
            Undangan digital yang elegan, personal, dan mudah dibagikan —
            untuk pernikahan dan momen spesial lainnya.
          </p>
        </div>

        <nav aria-label="Jelajahi">
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-white/50">Jelajahi</p>
          <ul class="mt-4 space-y-2.5 text-[15px] font-medium">
            <li><NuxtLink to="/#template" class="transition-colors hover:text-white">Template</NuxtLink></li>
            <li><NuxtLink to="/#fitur" class="transition-colors hover:text-white">Fitur</NuxtLink></li>
            <li><NuxtLink to="/#harga" class="transition-colors hover:text-white">Harga</NuxtLink></li>
            <li><NuxtLink to="/#faq" class="transition-colors hover:text-white">FAQ</NuxtLink></li>
          </ul>
        </nav>

        <div>
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-white/50">Hubungi Kami</p>
          <ul class="mt-4 space-y-2.5 text-[15px] font-medium">
            <li>
              <a :href="waGeneral" target="_blank" rel="noopener" class="transition-colors hover:text-white">
                WhatsApp
              </a>
            </li>
            <li>
              <a :href="siteConfig.instagram" target="_blank" rel="noopener" class="transition-colors hover:text-white">
                Instagram
              </a>
            </li>
            <li>
              <a :href="`mailto:${siteConfig.email}`" class="transition-colors hover:text-white">
                {{ siteConfig.email }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between"
      >
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
