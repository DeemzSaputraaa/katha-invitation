<template>
  <!--
    Hero Full-Screen Slideshow.
    Foto jadi background penuh 100svh, teks nama + tanggal melayang di atas overlay.
    Auto-play tanpa ikon/tombol navigasi.
  -->
  <section
    class="relative w-full overflow-hidden"
    :style="{ height: '100svh', minHeight: '560px' }"
    aria-label="Cover undangan"
  >
    <!-- ─── Slides (background penuh) ─── -->
    <div
      v-if="resolvedSlides.length > 0"
      class="absolute inset-0 flex transition-transform duration-700 ease-in-out"
      :style="{ transform: `translateX(-${activeSlide * 100}%)` }"
      aria-hidden="true"
    >
      <img
        v-for="(slide, i) in resolvedSlides"
        :key="slide.src"
        :src="slide.src"
        :alt="slide.alt"
        width="1200"
        height="1600"
        :loading="i === 0 ? 'eager' : 'lazy'"
        :fetchpriority="i === 0 ? 'high' : 'auto'"
        class="min-w-full shrink-0 h-full object-cover object-center"
      >
    </div>

    <!-- Fallback: gambar tunggal -->
    <img
      v-else-if="visual"
      :src="visual"
      :alt="visualAlt"
      width="1200"
      height="1600"
      loading="eager"
      fetchpriority="high"
      class="absolute inset-0 h-full w-full object-cover object-center"
      aria-hidden="true"
    >

    <!-- ─── Overlay gradasi: bawah gelap → atas terang ─── -->
    <div
      class="absolute inset-0"
      :style="overlayStyle"
      aria-hidden="true"
    />

    <!-- ─── Konten teks (mobile: tengah halaman, landscape: bawah) ─── -->
    <div class="absolute inset-0 flex flex-col items-center justify-center px-6 pb-10 text-center landscape:justify-end landscape:pb-20">
      <!-- Eyebrow label -->
      <p :class="eyebrowClass">
        {{ data.invitationLabel }}
      </p>

      <!-- Nama mempelai -->
      <h2 :class="titleClass" class="mt-4">
        <template v-if="layout === 'inline'">
          {{ data.couple.person1.name }} <em class="italic">&amp;</em> {{ data.couple.person2.name }}
        </template>
        <template v-else>
          <span class="block">{{ data.couple.person1.name }}</span>
          <span class="my-1 block text-[0.55em] italic opacity-80">&amp;</span>
          <span class="block">{{ data.couple.person2.name }}</span>
        </template>
      </h2>

      <!-- Divider aksen -->
      <div class="mt-5 flex items-center gap-3" aria-hidden="true">
        <span class="h-px w-12 opacity-60" :style="{ background: accentColor }" />
        <span class="font-serif text-lg italic" :style="{ color: accentColor }">❦</span>
        <span class="h-px w-12 opacity-60" :style="{ background: accentColor }" />
      </div>

      <!-- Tanggal -->
      <p :class="dateClass" class="mt-4">{{ data.dateLabel }}</p>
    </div>

    <slot name="after" />
  </section>
</template>

<script setup lang="ts">
import type { InvitationData, GalleryItem } from '~/types/invitation'

const props = withDefaults(
  defineProps<{
    data: InvitationData
    /** Untuk mode slide, override dengan array custom (jika tidak diset, pakai data.heroSlides). */
    slides?: GalleryItem[]
    /** Fallback gambar tunggal (dipakai jika tidak ada slides). */
    visual?: string
    visualAlt?: string
    layout?: 'stacked' | 'inline'
    eyebrowClass?: string
    titleClass?: string
    dateClass?: string
    /** Warna aksen untuk divider & ornamen */
    accentColor?: string
    /** CSS background untuk overlay (default: gradasi gelap bawah → transparan atas) */
    overlayBg?: string
    /** Interval auto-play dalam ms (0 = nonaktif). */
    autoplayMs?: number
  }>(),
  {
    slides: undefined,
    visual: undefined,
    visualAlt: 'Foto pasangan mempelai',
    layout: 'stacked',
    eyebrowClass: 'text-xs font-semibold uppercase tracking-[0.35em] text-white/80',
    titleClass: 'font-serif text-5xl font-medium italic leading-[1.05] text-white sm:text-6xl',
    dateClass: 'text-sm tracking-[0.25em] uppercase text-white/80',
    accentColor: '#A2D2FF',
    overlayBg: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.18) 55%, rgba(0,0,0,0) 100%)',
    autoplayMs: 3800,
  },
)

const resolvedSlides = computed<GalleryItem[]>(() =>
  props.slides ?? props.data.heroSlides ?? [],
)

const overlayStyle = computed(() => ({
  background: props.overlayBg,
}))

const activeSlide = ref(0)

function nextSlide() {
  activeSlide.value = (activeSlide.value + 1) % resolvedSlides.value.length
}

let timer: ReturnType<typeof setInterval> | undefined
onMounted(() => {
  if (props.autoplayMs > 0 && resolvedSlides.value.length > 1) {
    timer = setInterval(nextSlide, props.autoplayMs)
  }
})
onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>
