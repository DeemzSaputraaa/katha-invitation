<template>
  <!-- Florena: botanical stationery, sage, warm paper, and terracotta.
       Customer content stays in InvitationData; reuse this design per customer. -->
  <div class="florena bg-[#F7F3EA] text-[#304B3E]">
    <InvitationOpening
      v-if="!opened"
      ref="openingRef"
      :data="data"
      visual="/images/templates/florena-botanical.svg"
      visual-alt=""
      accent="#9A563D"
      backdrop-class="bg-[#F7F3EA]"
      left-class="bg-[#304B3E]"
      overlay-class="bg-transparent"
      content-class="items-center text-center text-[#304B3E]"
      label-class="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#56694F]"
      names-class="font-serif text-[clamp(2.5rem,9vw,3.5rem)] font-normal leading-[1.1] break-words max-w-full"
      date-class="text-xs font-medium uppercase tracking-[0.18em] text-[#56694F]"
      button-class="bg-[#304B3E] text-[#F7F3EA] hover:bg-[#425E4B] shadow-lg shadow-[#304B3E]/15"
      :leaving="leaving"
      @open="handleOpen"
      @keydown.tab.prevent="focusOpening"
    >
      <template #left>
        <FlorenaPanel :data="data" />
      </template>
      <template #under-button>
        <p class="mt-7 max-w-[230px] text-xs leading-relaxed text-[#56694F]">{{ data.venue.name }}</p>
      </template>
    </InvitationOpening>

    <div :inert="!opened" class="landscape:flex landscape:items-stretch">
      <aside class="hidden bg-[#304B3E] landscape:sticky landscape:top-0 landscape:flex landscape:h-[100svh] landscape:min-w-0 landscape:flex-1 landscape:items-center landscape:self-start landscape:overflow-hidden landscape:px-14" aria-label="Nama mempelai dan tanggal pernikahan">
        <FlorenaPanel :data="data" />
      </aside>

      <div class="min-w-0 w-full landscape:w-[430px] landscape:shrink-0 landscape:shadow-2xl">
        <article ref="contentRef" tabindex="-1" class="inv-mobile-col mx-auto w-full max-w-2xl focus:outline-none" aria-label="Isi undangan">
          <div class="florena-hero-wrap px-5 pt-8 pb-10">
            <p class="mb-6 text-center text-[10px] font-semibold uppercase tracking-[0.32em]">{{ data.shortDateLabel }}</p>
            <InvitationHero
              :key="opened ? 'opened' : 'covered'"
              class="florena-hero"
              :data="data"
              :visual="data.coverImage"
              :autoplay-ms="opened && !reduceMotion ? 4500 : 0"
              title-class="font-serif text-[2.5rem] font-normal leading-[1.12] text-[#FFF9EF]"
              eyebrow-class="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FFF9EF]"
              date-class="text-[11px] uppercase tracking-[0.16em] text-[#FFF9EF]"
              accent-color="#DEB99E"
              overlay-bg="linear-gradient(to top, rgba(35,55,43,0.92), rgba(35,55,43,0.25) 65%, rgba(35,55,43,0.05))"
            />
            <div class="mt-7 flex items-center justify-center gap-4 text-[#9A563D]" aria-hidden="true">
              <span class="h-px w-12 bg-current opacity-40" /><span class="text-xl">✳</span><span class="h-px w-12 bg-current opacity-40" />
            </div>
          </div>

          <InvitationGreeting :data="data" accent="#9A563D" />
          <div class="florena-sage">
            <InvitationCouple class="florena-couple" :data="data" variant="stacked" accent="#718065" soft-bg="#E7EBDD" name-color="#304B3E" :title-class="heading" />
          </div>
          <InvitationStory :data="data" variant="editorial" title="Cerita Kita" :title-class="heading" accent="#9A563D" />
          <div class="bg-[#304B3E] text-[#F7F3EA]">
            <InvitationCountdown class="florena-countdown" :data="data" variant="wide" accent="#DEB99E" number-color="#F7F3EA" dark />
          </div>
          <InvitationEvent :data="data" variant="list" :title-class="heading" accent="#9A563D" />
          <div class="florena-sage">
            <InvitationLocation :data="data" :title-class="heading" accent="#304B3E" />
            <InvitationVerse :data="data" accent="#9A563D" />
          </div>
          <InvitationGallery class="florena-gallery" :data="data" variant="masonry" title="Mekarnya Kenangan" :title-class="heading" accent="#9A563D" />
          <div class="bg-[#EEE2D5]">
            <InvitationGift :data="data" :title-class="heading" accent="#9A563D" />
          </div>
          <div class="florena-responses">
            <p v-if="isDemo" class="mx-6 mt-10 rounded-xl border border-[#718065]/30 bg-[#E7EBDD] px-4 py-3 text-center text-xs leading-relaxed text-[#304B3E]">
              Anda sedang melihat demo. RSVP dan ucapan di bawah hanya simulasi dan akan hilang saat halaman dimuat ulang.
            </p>
            <InvitationRSVP :data="data" :title-class="heading" accent="#304B3E" />
            <InvitationWishes :data="data" :title-class="heading" accent="#304B3E" name-color="#9A563D" />
          </div>
          <InvitationClosing :data="data" :closing-image="data.closingImage ?? data.coverImage" accent="#DEB99E" name-color="#FFF9EF" fade-color="#304B3E" />
          <InvitationFooter bg-color="#304B3E" bg-color-deep="#233B30" text-color="#F7F3EA" accent-color="#DEB99E" label-color="#D4DCCD" wa-icon-color="#F7F3EA" :template-name="templateName" />
        </article>
      </div>
    </div>

    <div :inert="!opened">
      <InvitationMusic v-if="data.musicUrl" ref="musicRef" :src="data.musicUrl" bg-color="#304B3E" icon-color="#F7F3EA" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { InvitationData } from '~/types/invitation'
import { getTemplateBySlug } from '~/data/templates'
import FlorenaPanel from './florena/FlorenaPanel.vue'
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
import InvitationMusic from '../sections/InvitationMusic.vue'

withDefaults(defineProps<{ data: InvitationData; templateName?: string }>(), { templateName: 'Florena' })

const heading = 'font-serif text-4xl font-normal leading-tight'
const route = useRoute()
const isDemo = computed(() => getTemplateBySlug(String(route.params.slug ?? '')) !== undefined)
const opened = ref(false)
const leaving = ref(false)
const reduceMotion = ref(false)
const openingRef = ref<InstanceType<typeof InvitationOpening> | null>(null)
const contentRef = ref<HTMLElement | null>(null)
const musicRef = ref<InstanceType<typeof InvitationMusic> | null>(null)
let openingTimer: ReturnType<typeof setTimeout> | undefined
let previousOverflow = ''

function focusOpening() {
  const element = openingRef.value?.$el as HTMLElement | undefined
  element?.querySelector<HTMLButtonElement>('button')?.focus({ preventScroll: true })
}

function handleOpen() {
  if (leaving.value || opened.value) return
  void musicRef.value?.play()
  leaving.value = true
  window.scrollTo({ top: 0, behavior: 'instant' })
  openingTimer = setTimeout(async () => {
    opened.value = true
    document.body.style.overflow = previousOverflow
    await nextTick()
    contentRef.value?.focus({ preventScroll: true })
  }, reduceMotion.value ? 0 : 900)
}

onMounted(() => {
  previousOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'
  reduceMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  focusOpening()
})

onUnmounted(() => {
  if (openingTimer) clearTimeout(openingTimer)
  document.body.style.overflow = previousOverflow
})
</script>

<style scoped>
.florena-hero-wrap {
  background: #f7f3ea url('/images/templates/florena-botanical.svg') center / cover;
}
.florena-hero {
  height: 82svh !important;
  min-height: 560px !important;
  border-radius: 220px 220px 6px 6px;
  outline: 1px solid #71806580;
  outline-offset: 7px;
}
.florena-hero :deep(h2) { overflow-wrap: anywhere; }
.florena :deep([role='dialog'] button:focus-visible) {
  outline-color: #9a563d;
  border-radius: 9999px;
}
.florena-sage { background: #e7ebdf; }
.florena :deep(.inv-mobile-col h2) { text-align: center; }
.florena :deep(.inv-mobile-col section > div > div:first-child > div[aria-hidden='true']) { margin-inline: auto; }
.florena-couple :deep(figure) {
  width: 172px;
  height: 210px;
  border-radius: 100px 100px 8px 8px;
  box-shadow: 8px 10px 0 #cbd3bf;
}
.florena-gallery :deep(figure) { border-radius: 80px 80px 8px 8px; }
.florena-countdown :deep([role='timer'] > div) { padding-inline: 8px; min-width: 0; }
.florena-countdown :deep([role='timer'] .font-serif) { font-size: clamp(1.75rem, 7vw, 2.5rem); }
.florena-responses { padding-top: 1px; }
@media (orientation: landscape) {
  .florena :deep(.inv-mobile-col .sm\:mt-12) { margin-top: 0; }
}
</style>
