<template>
  <!--
    AURELIA — MASTER REFERENCE TEMPLATE.
    Cara membuat template baru:
    1. Copy file ini → mis. NoirTemplate.vue, ganti karakter visual + urutan section.
    2. Tambah data di app/data/invitations.ts dengan key = slug baru.
    3. Daftarkan di registry.ts + templates.ts (field component).
    4. Buat preview SVG di public/images/templates/<slug>.svg.
    5. Tambah route prerender di nuxt.config.ts.
    Jangan copy-paste mentah — tiap template wajib punya karakter visual sendiri.
  -->
  <!--
    PALET BIRU SOFT (Aurelia Blue Edition)
    #E5F0FA  Alice Blue      → background utama / teks terang
    #D1E8FC  Columbia Blue   → panel kiri / section alternate
    #BDE0FE  Uranian Blue    → aksen garis / divider
    #A2D2FF  Light Sky Blue  → aksen sekunder
    #8FC9FF  Maya Blue       → aksen teks nama / heading
    #1A6FB8  Deep Blue       → teks utama (dark mode)
  -->
  <div class="bg-[#E5F0FA] text-[#1A4F7A]">
    <InvitationOpening
      v-if="!opened"
      :data="data"
      :visual="data.coverImage"
      visual-alt="Foto pasangan mempelai"
      accent="#A2D2FF"
      backdrop-class="bg-[#E5F0FA]"
      left-class="bg-[#D1E8FC] text-[#1A4F7A]"
      overlay-class="bg-[#1A4F7A]/60"
      names-class="font-serif text-5xl font-medium italic leading-[1.05]"
      button-class="bg-[#E5F0FA] text-[#1A4F7A] hover:bg-white"
      @open="handleOpen"
    >
      <template #left>
        <p class="text-xs font-semibold uppercase tracking-[0.35em] text-[#8FC9FF]">Nº 01 — Elegant</p>
        <p class="mt-6 font-serif text-7xl font-medium italic leading-none">Aurelia</p>
        <div class="mt-8 h-px w-24 bg-[#A2D2FF]" aria-hidden="true" />
        <p class="mt-8 max-w-sm font-serif text-2xl italic leading-snug opacity-80">
          "An intimate celebration of love, draped in soft blue and white."
        </p>
      </template>
    </InvitationOpening>

    <!--
      Landscape (desktop/tablet): 2 split.
      - KIRI (flex-1, sticky/diam): teks wedding mempelai.
      - KANAN (430px, ikut scroll halaman): konten utama, sama persis
        dengan yang tampil di mobile (dipaksa via .inv-mobile-col).
      Portrait: single-column normal.
    -->
    <div class="landscape:flex landscape:items-stretch">
      <!-- KIRI — statis, teks wedding mempelai pria & wanita -->
      <aside
        class="hidden bg-[#D1E8FC] text-[#1A4F7A] landscape:sticky landscape:top-14 landscape:flex landscape:h-[calc(100svh-3.5rem)] landscape:flex-1 landscape:items-center landscape:self-start landscape:overflow-hidden landscape:px-14"
        aria-label="Teks wedding mempelai"
      >
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.35em] text-[#8FC9FF]">{{ data.invitationLabel }}</p>
          <p class="mt-6 font-serif text-7xl font-medium italic leading-[1.05]">
            <span class="block">{{ data.couple.person1.name }}</span>
            <span class="my-2 block text-[0.5em] opacity-70">&amp;</span>
            <span class="block">{{ data.couple.person2.name }}</span>
          </p>
          <div class="mt-8 h-px w-24 bg-[#A2D2FF]" aria-hidden="true" />
          <p class="mt-8 font-serif text-2xl italic leading-snug opacity-80">{{ data.dateLabel }}</p>
        </div>
      </aside>

      <!-- KANAN — kolom selebar HP, ikut scroll halaman (konten utama) -->
      <div class="min-w-0 w-full landscape:w-[430px] landscape:shrink-0 landscape:bg-[#E5F0FA] landscape:shadow-2xl">
        <article class="inv-mobile-col mx-auto w-full max-w-2xl">
          <!-- Hero: slideshow berdua2-5 -->
          <InvitationHero
            :data="data"
            title-class="font-serif text-5xl font-medium italic leading-[1.05] sm:text-6xl"
            eyebrow-class="text-xs font-semibold uppercase tracking-[0.3em] text-[#8FC9FF]"
          />
          <InvitationGreeting :data="data" accent="#A2D2FF" />
          <!-- Mempelai: dengan foto portrait -->
          <InvitationCouple
            :data="data"
            accent="#A2D2FF"
            soft-bg="#BDE0FE"
            name-color="#1A4F7A"
            title-class="font-serif text-4xl font-medium italic sm:text-5xl"
          />
          <div class="bg-[#D1E8FC]">
            <InvitationCountdown :data="data" variant="boxed" accent="#A2D2FF" number-color="#1A4F7A" />
          </div>
          <InvitationEvent
            :data="data"
            variant="cards"
            accent="#A2D2FF"
            title-class="text-center font-serif text-4xl font-medium italic sm:text-5xl"
          />
          <InvitationLocation
            :data="data"
            accent="#1A4F7A"
            title-class="font-serif text-4xl font-medium italic sm:text-5xl"
          />
          <InvitationVerse :data="data" accent="#8FC9FF" />
          <InvitationStory :data="data" variant="timeline" accent="#A2D2FF" />
          <!-- Gallery: semua foto berdua dalam grid -->
          <InvitationGallery
            :data="data"
            variant="grid"
            title-class="text-center font-serif text-4xl font-medium italic sm:text-5xl"
            accent="#A2D2FF"
          />
          <InvitationGift :data="data" title-class="font-serif text-4xl font-medium italic sm:text-5xl" />
          <InvitationRSVP
            :data="data"
            accent="#1A4F7A"
            title-class="text-center font-serif text-4xl font-medium italic sm:text-5xl"
          />
          <InvitationWishes
            :data="data"
            accent="#1A4F7A"
            name-color="#8FC9FF"
            title-class="text-center font-serif text-4xl font-medium italic sm:text-5xl"
          />
          <!-- Closing: dengan foto berdua6 -->
          <InvitationClosing
            :data="data"
            accent="#A2D2FF"
            name-color="#FFFFFF"
            :closing-image="data.closingImage"
          />

          <!-- Footer brand — di dalam split kanan saja -->
          <InvitationFooter
            bg-color="#1A4F7A"
            text-color="#E5F0FA"
            accent-color="#8FC9FF"
            label-color="rgba(162,210,255,0.85)"
            wa-icon-color="#E5F0FA"
            wa-bg-color="rgba(255,255,255,0.12)"
          />
        </article>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { InvitationData } from '~/types/invitation'
import InvitationOpening from '../sections/InvitationOpening.vue'
import InvitationHero from '../sections/InvitationHero.vue'
import InvitationGreeting from '../sections/InvitationGreeting.vue'
import InvitationCouple from '../sections/InvitationCouple.vue'
import InvitationCountdown from '../sections/InvitationCountdown.vue'
import InvitationEvent from '../sections/InvitationEvent.vue'
import InvitationLocation from '../sections/InvitationLocation.vue'
import InvitationVerse from '../sections/InvitationVerse.vue'
import InvitationStory from '../sections/InvitationStory.vue'
import InvitationGallery from '../sections/InvitationGallery.vue'
import InvitationGift from '../sections/InvitationGift.vue'
import InvitationRSVP from '../sections/InvitationRSVP.vue'
import InvitationWishes from '../sections/InvitationWishes.vue'
import InvitationClosing from '../sections/InvitationClosing.vue'
import InvitationFooter from '../sections/InvitationFooter.vue'

defineProps<{ data: InvitationData }>()

const opened = ref(false)

function handleOpen() {
  opened.value = true
}

// Kunci scroll body selama opening tampil (agar background tidak ikut
// scroll di mobile), kembalikan + reset ke atas saat undangan dibuka.
if (import.meta.client) {
  onMounted(() => {
    if (!opened.value) document.body.style.overflow = 'hidden'
  })
  watch(opened, (v) => {
    if (v) {
      document.body.style.overflow = ''
      window.scrollTo({ top: 0 })
    }
  })
  onUnmounted(() => {
    document.body.style.overflow = ''
  })
}
</script>
