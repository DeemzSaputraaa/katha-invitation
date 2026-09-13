<template>
  <!--
    Footer undangan.
    Tidak punya background solid sendiri — warna diterima dari bgColor prop.
    Karena InvitationClosing sudah fade ke bgColor ini di bagian bawahnya,
    footer melebur seamlessly tanpa garis batas.
  -->
  <footer
    class="relative overflow-hidden px-6 pb-12 pt-0 text-center"
    :style="footerStyle"
    aria-label="Footer undangan digital Katha"
  >
    <!-- Gradasi biru lembut di dalam footer (top → lebih gelap ke bawah) -->
    <div
      class="pointer-events-none absolute inset-0"
      :style="innerGradientStyle"
      aria-hidden="true"
    />

    <!-- Content -->
    <div class="relative z-10 flex flex-col items-center gap-5 pt-10 pb-4">
      <!-- "Made With Love by : Katha" -->
      <p class="text-sm font-medium" :style="{ color: resolvedTextColor }">
        Made With Love by :
        <a
          href="https://katha.web.id"
          target="_blank"
          rel="noopener noreferrer"
          class="font-bold transition-opacity hover:opacity-75"
          :style="{ color: resolvedAccentColor }"
          aria-label="Katha undangan digital — kunjungi katha.web.id"
        >
          Katha
        </a>
      </p>

      <!-- WhatsApp CTA button (circular icon) -->
      <a
        :href="waLink"
        target="_blank"
        rel="noopener noreferrer"
        class="flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition hover:scale-105 hover:shadow-xl active:scale-95"
        :style="waBtnStyle"
        aria-label="Pesan undangan digital via WhatsApp"
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.402A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm0 18a7.96 7.96 0 0 1-4.073-1.115l-.29-.172-2.952.831.793-2.883-.19-.298A7.96 7.96 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8Zm4.39-5.928c-.24-.12-1.42-.702-1.64-.781-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06a6.56 6.56 0 0 1-1.928-1.19 7.23 7.23 0 0 1-1.335-1.66c-.14-.24-.015-.37.105-.49.108-.107.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.195-.47-.394-.406-.54-.413l-.46-.008a.882.882 0 0 0-.64.3c-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.693 2.585 4.103 3.625.574.248 1.02.396 1.369.507.575.183 1.098.157 1.512.095.46-.068 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"
          />
        </svg>
      </a>

      <!-- "PESAN UNDANGAN DIGITAL" label -->
      <p
        class="text-[11px] font-bold uppercase tracking-[0.3em]"
        :style="{ color: resolvedLabelColor }"
      >
        Pesan Undangan Digital
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useWhatsApp } from '~/composables/useWhatsApp'
import { computed } from 'vue'

interface Props {
  /**
   * Warna dasar background footer.
   * Harus sama dengan fadeColor pada InvitationClosing agar seamlessly melebur.
   */
  bgColor: string
  /**
   * Warna tujuan gradasi bawah footer (lebih gelap/lebih biru).
   * Gunakan untuk memberi dimensi di dalam footer.
   */
  bgColorDeep?: string
  /** Warna teks "Made With Love by :" */
  textColor?: string
  /** Warna highlight nama "Katha" */
  accentColor?: string
  /** Warna teks "PESAN UNDANGAN DIGITAL" (default sama dgn textColor) */
  labelColor?: string
  /** Warna ikon WhatsApp (foreground tombol) */
  waIconColor?: string
  /** Warna latar tombol WhatsApp */
  waBgColor?: string
  /**
   * Nama template yang sedang dilihat (mis. "Aurelia").
   * Jika diisi, tombol WA memakai pesan templateInterest otomatis.
   */
  templateName?: string
}

const props = withDefaults(defineProps<Props>(), {
  bgColorDeep: undefined,
  textColor: '#E5F0FA',
  accentColor: '#8FC9FF',
  labelColor: undefined,
  waIconColor: '#E5F0FA',
  waBgColor: 'rgba(255,255,255,0.14)',
  templateName: undefined,
})

const resolvedLabelColor = computed(() => props.labelColor ?? props.textColor)

// Background dasar footer — warna sama dengan fadeColor di closing (seamless)
const footerStyle = computed(() => ({
  background: props.bgColor,
}))

// Gradasi dalam footer: atas (warna closing fade) → bawah (lebih deep/dark)
const innerGradientStyle = computed(() => {
  const deep = props.bgColorDeep ?? props.bgColor
  return {
    background: `linear-gradient(to bottom, ${props.bgColor} 0%, ${deep} 100%)`,
  }
})

const waBtnStyle = computed(() => ({
  background: props.waBgColor,
  color: props.waIconColor,
  border: `1.5px solid ${props.waIconColor}33`,
}))

const { general, templateInterest } = useWhatsApp()
const waLink = computed(() =>
  props.templateName
    ? templateInterest(props.templateName)
    : general('Halo Katha, saya ingin memesan undangan digital.'),
)

const resolvedTextColor = computed(() => props.textColor)
const resolvedAccentColor = computed(() => props.accentColor)
</script>
