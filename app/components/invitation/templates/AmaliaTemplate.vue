<template>
  <!-- Adapted from the user's Next.js invitation at D:/Project/undangan1.
       All couple/event content is passed through InvitationData, never baked into artwork. -->
  <div class="amalia-template">
    <div v-if="!opened" class="amalia-cover amalia-blush" :class="{ 'is-leaving': leaving }" role="dialog" aria-modal="true" aria-labelledby="amalia-cover-title" @keydown.tab.prevent="openButton?.focus()">
      <div class="amalia-sparkles" aria-hidden="true"><i v-for="sparkle in sparkles" :key="sparkle.id" :style="sparkle.style" /></div>
      <div class="cover-content">
        <p class="amalia-eyebrow">{{ data.invitationLabel }}</p>
        <div class="monogram amalia-script" aria-hidden="true"><span>{{ firstInitial }}</span><span>{{ secondInitial }}</span></div>
        <h1 id="amalia-cover-title" class="cover-names">{{ firstName }} &amp; {{ secondName }}</h1>
        <p class="cover-date">{{ data.shortDateLabel }}</p>
        <p class="guest-label">Kepada Yth. Bapak/Ibu/Saudara/i</p>
        <p v-if="guestName" class="guest-name amalia-serif">{{ guestName }}</p>
        <button ref="openButton" type="button" class="amalia-button open-button" :disabled="leaving" @click="openInvitation">Buka Undangan</button>
      </div>
    </div>

    <article ref="content" :inert="!opened" tabindex="-1" class="amalia-content" aria-label="Isi undangan">
      <section class="amalia-hero amalia-blush" aria-label="Hari bahagia">
        <div class="amalia-sparkles" aria-hidden="true"><i v-for="sparkle in sparkles" :key="sparkle.id" :style="sparkle.style" /></div>
        <div class="hero-copy">
          <p class="amalia-eyebrow">We invite you to celebrate</p>
          <p class="hero-label">{{ data.invitationLabel }}</p>
          <h2 class="amalia-script hero-names">{{ firstName }} &amp; {{ secondName }}</h2>
          <div class="amalia-divider" aria-hidden="true"><span />❦<span /></div>
        </div>
        <img :src="data.coverImage" :alt="`Ilustrasi pernikahan ${firstName} dan ${secondName}`" class="hero-illustration" width="1080" height="720" fetchpriority="high">
      </section>

      <div class="amalia-dark">
        <section class="couple-section" aria-labelledby="amalia-couple-title">
          <AmaliaFrame>
            <p class="amalia-eyebrow">The bride &amp; groom</p>
            <h2 id="amalia-couple-title" class="amalia-script section-title">Mempelai</h2>
            <div class="couple-intro amalia-serif"><p v-for="line in data.opening" :key="line">{{ line }}</p></div>
            <div class="couple-grid">
              <div class="couple-person">
                <img v-if="data.couple.person1.photo" :src="data.couple.person1.photo" :alt="data.couple.person1.name" width="180" height="180" loading="lazy">
                <h3 class="amalia-script">{{ firstName }}</h3>
                <p class="full-name amalia-serif">{{ data.couple.person1.name }}</p>
                <p class="parents">{{ data.couple.person1.parents }}</p>
              </div>
              <span class="couple-and amalia-script" aria-hidden="true">&amp;</span>
              <div class="couple-person">
                <img v-if="data.couple.person2.photo" :src="data.couple.person2.photo" :alt="data.couple.person2.name" width="180" height="180" loading="lazy">
                <h3 class="amalia-script">{{ secondName }}</h3>
                <p class="full-name amalia-serif">{{ data.couple.person2.name }}</p>
                <p class="parents">{{ data.couple.person2.parents }}</p>
              </div>
            </div>
          </AmaliaFrame>
        </section>

        <section class="event-section" aria-labelledby="amalia-event-title">
          <div class="flower-pair" aria-hidden="true"><img src="/images/templates/amalia/flowers.webp" alt="" loading="lazy"><img src="/images/templates/amalia/flowers.webp" alt="" loading="lazy"></div>
          <div class="section-intro">
            <p class="amalia-eyebrow">Save the date</p>
            <h2 id="amalia-event-title" class="amalia-script section-title">Detail Acara</h2>
            <p class="amalia-serif">Dengan penuh kebahagiaan, kami mengundang Anda untuk hadir dan memberikan doa restu pada hari istimewa kami.</p>
          </div>
          <div class="amalia-countdown" role="timer" aria-label="Hitung mundur acara">
            <div v-for="unit in countdown" :key="unit.label"><strong class="amalia-serif">{{ unit.value }}</strong><span>{{ unit.label }}</span></div>
          </div>
          <p v-if="ready && passed" class="event-passed" role="status">Acara telah berlangsung. Terima kasih atas doa dan restunya.</p>
          <div class="event-grid">
            <AmaliaFrame>
              <p class="date-weekday amalia-eyebrow">{{ eventDate.weekday }}</p>
              <p class="date-day amalia-serif">{{ eventDate.day }}</p>
              <p class="date-month amalia-script">{{ eventDate.month }}</p>
              <p class="date-year">{{ eventDate.year }}</p>
              <div class="event-list">
                <div v-for="event in data.events" :key="event.title + event.date">
                  <h3 class="amalia-serif">{{ event.title }}</h3>
                  <p>{{ event.date }}</p>
                  <p>{{ event.time }}</p>
                  <p v-if="event.venue !== data.venue.name">{{ event.venue }} · {{ event.address }}</p>
                </div>
              </div>
            </AmaliaFrame>
            <AmaliaFrame>
              <div class="venue-info">
                <p class="amalia-eyebrow">Lokasi acara</p>
                <svg class="venue-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M38 20c0 10-14 22-14 22S10 30 10 20a14 14 0 1 1 28 0Z" /><circle cx="24" cy="20" r="5" /></svg>
                <h3 class="amalia-serif">{{ data.venue.name }}</h3>
                <p class="venue-address">{{ data.venue.address }}</p>
                <a :href="data.venue.mapsUrl" target="_blank" rel="noopener noreferrer" class="amalia-button">Buka Maps</a>
                <div v-if="data.verse" class="venue-verse"><blockquote class="amalia-serif">“{{ data.verse.text }}”</blockquote><p>{{ data.verse.source }}</p></div>
              </div>
            </AmaliaFrame>
          </div>
        </section>

        <!-- Optional customer content: the original demo has no story, gallery or gift accounts. -->
        <div v-if="data.story.length" class="optional-section"><AmaliaFrame><InvitationStory :data="data" variant="timeline" title="Cerita Kami" title-class="amalia-script section-title" accent="#476C7C" /></AmaliaFrame></div>
        <div v-if="data.gallery.length" class="optional-section"><AmaliaFrame><InvitationGallery :data="data" variant="grid" title-class="amalia-script section-title" accent="#476C7C" /></AmaliaFrame></div>
        <div v-if="data.gifts.length || data.giftAddress" class="optional-section"><AmaliaFrame><InvitationGift :data="data" title-class="amalia-script section-title" accent="#476C7C" /></AmaliaFrame></div>

        <AmaliaResponses :wishes="data.wishes" />

        <section class="amalia-closing" aria-labelledby="amalia-closing-title">
          <img v-if="data.closingImage" :src="data.closingImage" :alt="`Ilustrasi ${firstName} dan ${secondName}`" class="closing-illustration" width="1080" height="720" loading="lazy">
          <div class="closing-copy">
            <p v-for="line in data.closing" :key="line" class="amalia-serif">{{ line }}</p>
            <p class="closing-salam">Wassalamu’alaikum Wr. Wb.</p>
            <h2 id="amalia-closing-title" class="amalia-script">Terima Kasih</h2>
            <p class="amalia-eyebrow">Keluarga {{ firstName }} &amp; {{ secondName }}</p>
          </div>
          <img class="closing-corner corner-left" src="/images/templates/amalia/corner.webp" alt="" aria-hidden="true" loading="lazy">
          <img class="closing-corner corner-right" src="/images/templates/amalia/corner.webp" alt="" aria-hidden="true" loading="lazy">
        </section>
        <InvitationFooter bg-color="#122630" bg-color-deep="#0C1C24" text-color="#FBFBFC" accent-color="#FFE4F0" wa-icon-color="#FBFBFC" :template-name="templateName" />
      </div>
    </article>
    <div :inert="!opened"><AmaliaMusic ref="music" :data="data" /></div>
  </div>
</template>

<script setup lang="ts">
import type { InvitationData } from '~/types/invitation'
import AmaliaFrame from './amalia/AmaliaFrame.vue'
import AmaliaMusic from './amalia/AmaliaMusic.vue'
import AmaliaResponses from './amalia/AmaliaResponses.vue'
import InvitationStory from '../sections/InvitationStory.vue'
import InvitationGallery from '../sections/InvitationGallery.vue'
import InvitationGift from '../sections/InvitationGift.vue'
import InvitationFooter from '../sections/InvitationFooter.vue'

const props = withDefaults(defineProps<{ data: InvitationData; templateName?: string }>(), { templateName: 'Amalia' })
const firstName = computed(() => props.data.couple.person1.shortName || props.data.couple.person1.name)
const secondName = computed(() => props.data.couple.person2.shortName || props.data.couple.person2.name)
const firstInitial = computed(() => firstName.value.trim().charAt(0).toLowerCase())
const secondInitial = computed(() => secondName.value.trim().charAt(0).toLowerCase())
const route = useRoute()
const guestName = ref('')
// Query strings are personalized after hydration because the route is prerendered.
onMounted(() => {
  watch(() => route.query.to, value => { guestName.value = typeof value === 'string' ? value.trim().slice(0, 120) : '' }, { immediate: true })
})

const { days, hours, minutes, seconds, ready, passed } = useCountdown(props.data.countdownTo)
const countdown = computed(() => [
  { label: 'Hari', value: ready.value ? String(days.value).padStart(2, '0') : '--' },
  { label: 'Jam', value: ready.value ? String(hours.value).padStart(2, '0') : '--' },
  { label: 'Menit', value: ready.value ? String(minutes.value).padStart(2, '0') : '--' },
  { label: 'Detik', value: ready.value ? String(seconds.value).padStart(2, '0') : '--' },
])
const eventDate = computed(() => {
  const date = new Date(props.data.countdownTo)
  if (!Number.isFinite(date.getTime())) return { weekday: '', day: '', month: props.data.dateLabel, year: '' }
  const parts = new Intl.DateTimeFormat('id-ID', { timeZone: 'Asia/Jakarta', weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).formatToParts(date)
  const part = (type: string) => parts.find(item => item.type === type)?.value ?? ''
  return { weekday: part('weekday'), day: part('day'), month: part('month'), year: part('year') }
})
const sparkles = Array.from({ length: 36 }, (_, id) => ({ id, style: { left: `${(id * 37 + 3) % 100}%`, top: `${(id * 23 + 7) % 100}%`, width: `${2 + id % 4}px`, height: `${2 + id % 4}px`, animationDelay: `${-(id % 9)}s`, animationDuration: `${8 + id % 5}s` } }))
const opened = ref(false)
const leaving = ref(false)
const openButton = ref<HTMLButtonElement | null>(null)
const content = ref<HTMLElement | null>(null)
const music = ref<InstanceType<typeof AmaliaMusic> | null>(null)
let openingTimer: ReturnType<typeof setTimeout> | undefined
let previousOverflow = ''

function openInvitation() {
  if (leaving.value || opened.value) return
  void music.value?.play()
  leaving.value = true
  window.scrollTo({ top: 0, behavior: 'instant' })
  openingTimer = setTimeout(async () => {
    opened.value = true
    document.body.style.overflow = previousOverflow
    await nextTick()
    content.value?.focus({ preventScroll: true })
  }, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 600)
}
onMounted(() => {
  previousOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'
  openButton.value?.focus({ preventScroll: true })
})
onUnmounted(() => {
  if (openingTimer) clearTimeout(openingTimer)
  document.body.style.overflow = previousOverflow
})
</script>

<style scoped>
@font-face { font-family: 'Amalia Script'; src: url('/fonts/amalia/great-vibes.woff2') format('woff2'); font-style: normal; font-weight: 400; font-display: swap; }
@font-face { font-family: 'Amalia Cormorant'; src: url('/fonts/amalia/cormorant.woff2') format('woff2'); font-style: normal; font-weight: 300 700; font-display: swap; }
@font-face { font-family: 'Amalia Sans'; src: url('/fonts/amalia/dm-sans.woff2') format('woff2'); font-style: normal; font-weight: 100 1000; font-display: swap; }
.amalia-template { color: #385866; font-family: 'Amalia Sans', sans-serif; }
.amalia-template :deep(.amalia-script) { font-family: 'Amalia Script', 'Brush Script MT', cursive; font-weight: 400; }
.amalia-template :deep(.amalia-serif) { font-family: 'Amalia Cormorant', Georgia, serif; }
.amalia-template :deep(:is(button, a, input, textarea, select):focus-visible) { outline: 2px solid #a45178; outline-offset: 4px; }
.amalia-content:focus { outline: none; }
.amalia-blush { background: radial-gradient(ellipse at 80% 80%, #ffe4f0a6, transparent 60%), radial-gradient(ellipse at 15% 20%, #fff, #fff9fc 70%); }
.amalia-cover { position: fixed; inset: 0; z-index: 80; display: grid; place-items: center; overflow-y: auto; min-height: 100svh; padding: 50px 24px; text-align: center; transition: opacity .6s ease, transform .6s ease; }
.amalia-cover.is-leaving { opacity: 0; transform: scale(1.035); pointer-events: none; }
.cover-content { position: relative; width: min(100%, 640px); }
.amalia-eyebrow { font-size: 10px; font-weight: 500; letter-spacing: .28em; text-transform: uppercase; line-height: 1.8; }
.monogram { display: flex; justify-content: center; align-items: center; height: 160px; margin: 14px 0 4px; font-size: 144px; line-height: 1; color: #302a2b; }
.monogram span + span { margin-left: -12px; transform: translateY(5px); }
.cover-names { font-size: clamp(16px, 3.5vw, 23px); letter-spacing: .22em; text-transform: uppercase; font-weight: 300; overflow-wrap: anywhere; }
.cover-date { margin-top: 12px; letter-spacing: .3em; font-size: 13px; }
.guest-label { margin: 30px 0 10px; font-size: 10px; letter-spacing: .17em; text-transform: uppercase; }
.guest-name { font-size: 30px; font-weight: 600; overflow-wrap: anywhere; }
.amalia-button { display: inline-flex; align-items: center; justify-content: center; min-height: 44px; padding: 12px 32px; border-radius: 999px; background: #476c7c; color: #fff; font-size: 11px; font-weight: 600; letter-spacing: .16em; text-transform: uppercase; transition: background .2s ease; }
.amalia-button:hover { background: #385866; }
.open-button { min-width: 240px; margin-top: 28px; outline: 1px solid #c19ac74d; outline-offset: 6px; box-shadow: 0 8px 30px #476c7c15; }
.amalia-template :deep(.open-button:focus-visible) { border-radius: 999px; }
.amalia-sparkles { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }
.amalia-sparkles i { position: absolute; display: block; background: #cfb46d; opacity: .4; animation: amalia-float 10s ease-in-out infinite; }
@keyframes amalia-float { 0%,100% { transform: translateY(0) rotate(0); opacity: .25; } 50% { transform: translateY(-24px) rotate(35deg); opacity: .6; } }
.amalia-hero { position: relative; min-height: 100svh; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; overflow: hidden; padding: 80px 16px 0; text-align: center; }
.hero-copy { position: relative; z-index: 1; margin-block: auto 28px; padding-top: 40px; }
.hero-label { margin-top: 8px; color: #92557d; font-size: 12px; letter-spacing: .18em; text-transform: uppercase; }
.hero-names { margin-top: 16px; font-size: clamp(52px, 10vw, 112px); line-height: 1.2; color: #b9638a; text-shadow: 0 3px 6px #c19ac730; overflow-wrap: anywhere; }
.amalia-divider { display: flex; align-items: center; justify-content: center; gap: 20px; margin-top: 12px; color: #d18aaa; }
.amalia-divider span { width: 60px; height: 1px; background: #edc9d9; }
.hero-illustration { position: relative; display: block; width: min(100%, 640px); height: auto; max-height: 47svh; object-fit: contain; object-position: bottom; }
.amalia-dark { background: linear-gradient(#122630e0, #122630ed), url('/images/templates/amalia/background.webp') center / cover; }
.couple-section { position: relative; padding: 90px 22px 80px; text-align: center; }
.section-title { font-size: clamp(48px, 8vw, 76px); line-height: 1.25; margin: 8px 0 16px; }
.couple-intro { max-width: 600px; margin-inline: auto; font-size: 21px; line-height: 1.5; }
.couple-grid { display: grid; gap: 24px; margin-top: 40px; align-items: center; }
.couple-person { min-width: 0; }
.couple-person h3 { font-size: clamp(44px, 6vw, 62px); line-height: 1.3; overflow-wrap: anywhere; }
.couple-person img { display: block; width: 130px; height: 160px; object-fit: cover; border-radius: 80px 80px 8px 8px; margin: 0 auto 20px; }
.full-name { font-size: 25px; font-weight: 600; line-height: 1.3; }
.parents { margin: 12px auto 0; max-width: 300px; font-size: 13px; line-height: 1.8; }
.couple-and { font-size: 68px; line-height: 1; }
.event-section { position: relative; padding: 40px 22px 60px; text-align: center; color: #fbfbfc; }
.section-intro { position: relative; max-width: 620px; margin-inline: auto; }
.section-intro .amalia-serif { font-size: 21px; line-height: 1.6; }
.flower-pair { position: absolute; inset: -60px 0 auto; display: flex; justify-content: space-between; overflow: hidden; pointer-events: none; }
.flower-pair img { width: clamp(70px, 15vw, 200px); height: 200px; object-fit: contain; object-position: top left; }
.flower-pair img + img { transform: scaleX(-1); }
.amalia-countdown { position: relative; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 10px; width: min(100%, 470px); margin: 36px auto 12px; padding: 18px; border-radius: 28px; background: #f7f5ef url('/images/templates/amalia/paper.webp') center / cover; }
.amalia-countdown > div { padding: 12px 2px; border-radius: 17px; background: #476c7c; }
.amalia-countdown strong { display: block; font-size: 32px; font-weight: 700; line-height: 1.2; font-variant-numeric: tabular-nums; }
.amalia-countdown span { display: block; margin-top: 3px; font-size: 9px; letter-spacing: .16em; text-transform: uppercase; }
.event-passed { max-width: 450px; margin: 16px auto; font-size: 12px; color: #eee4e9; }
.event-grid { display: grid; gap: 24px; max-width: 1050px; margin: 36px auto 0; }
.event-grid :deep(.amalia-frame) { height: 100%; }
.date-day { font-size: 110px; line-height: 1; margin-top: 20px; }
.date-month { margin-top: -10px; font-size: 68px; line-height: 1; }
.date-year { margin-top: 14px; font-size: 17px; letter-spacing: .2em; }
.event-list { display: grid; gap: 22px; margin-top: 32px; }
.event-list h3 { font-size: 26px; font-weight: 600; }
.event-list p { margin-top: 5px; font-size: 11px; line-height: 1.7; }
.venue-info { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 440px; }
.venue-icon { width: 54px; height: 54px; margin: 24px 0; }
.venue-info h3 { font-size: 30px; line-height: 1.2; font-weight: 600; }
.venue-address { margin: 18px 0 26px; font-size: 13px; line-height: 1.8; }
.venue-verse { margin-top: 34px; padding-top: 24px; border-top: 1px solid #476c7c40; }
.venue-verse blockquote { font-size: 19px; line-height: 1.5; }
.venue-verse > p { margin-top: 12px; font-size: 11px; letter-spacing: .1em; }
.optional-section { max-width: 1000px; margin: 32px auto; padding-inline: 22px; }
.optional-section :deep(section) { padding: 0; }
.optional-section :deep(.landscape\:grid) { display: block; }
.optional-section :deep(.landscape\:sticky) { position: static; margin-bottom: 24px; }
.optional-section :deep(.landscape\:\[writing-mode\:vertical-rl\]) { writing-mode: horizontal-tb; }
.optional-section :deep(.landscape\:h-20) { height: 1px; }
.optional-section :deep(.landscape\:w-px) { width: 48px; }
.amalia-closing { position: relative; overflow: hidden; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; min-height: 100svh; padding: 70px 24px 90px; text-align: center; color: #fff; background: linear-gradient(transparent, #122630); }
.closing-illustration { width: min(80%, 460px); height: auto; max-height: 42svh; object-fit: contain; margin-bottom: 32px; }
.closing-copy { position: relative; z-index: 1; max-width: 750px; }
.closing-copy > .amalia-serif { font-size: 23px; line-height: 1.6; }
.closing-salam { margin: 26px 0; font-size: 13px; letter-spacing: .1em; }
.closing-copy h2 { margin-block: 18px 28px; font-size: clamp(64px, 10vw, 112px); line-height: 1.2; }
.closing-corner { position: absolute; bottom: 0; width: clamp(100px, 25vw, 330px); opacity: .55; pointer-events: none; }
.corner-left { left: 0; }
.corner-right { right: 0; transform: scaleX(-1); }
@media (min-width: 760px) {
  .couple-grid { grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr); gap: 22px; }
  .event-grid { grid-template-columns: 2fr 3fr; }
  .amalia-eyebrow { font-size: 12px; }
}
@media (max-width: 420px) {
  .hero-copy { padding-top: 0; }
  .hero-names { font-size: clamp(46px, 14vw, 58px); }
  .couple-section, .event-section { padding-inline: 14px; }
  .amalia-countdown { padding: 12px; gap: 7px; }
  .amalia-countdown strong { font-size: 27px; }
}
@media (prefers-reduced-motion: reduce) {
  .amalia-sparkles i { animation: none; }
  .amalia-cover { transition: none; }
}
</style>
