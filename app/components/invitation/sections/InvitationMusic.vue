<template>
  <!--
    Musik latar undangan — tombol melayang play/pause.
    Autoplay dipicu dari template (klik "Buka Undangan" = user gesture,
    sehingga diizinkan browser). Audio di-loop selama undangan dibuka.
  -->
  <div class="fixed bottom-6 right-6 z-[60]">
    <audio
      ref="audioEl"
      :src="src"
      loop
      preload="auto"
      @play="isPlaying = true"
      @pause="isPlaying = false"
    />
    <button
      type="button"
      :aria-pressed="isPlaying ? 'true' : 'false'"
      :aria-label="isPlaying ? 'Matikan musik latar' : 'Nyalakan musik latar'"
      :title="isPlaying ? 'Matikan musik' : 'Nyalakan musik'"
      class="flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition hover:scale-105 active:scale-95"
      :style="btnStyle"
      @click="toggle"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
        :class="isPlaying ? 'animate-[spin_4s_linear_infinite] motion-reduce:animate-none' : ''"
      >
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
      <span
        v-if="!isPlaying"
        class="absolute h-8 w-0.5 rotate-45 rounded-full"
        :style="{ background: 'currentColor' }"
        aria-hidden="true"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /** URL file audio (mp3). */
    src: string
    /** Warna latar tombol. */
    bgColor?: string
    /** Warna ikon. */
    iconColor?: string
  }>(),
  {
    bgColor: '#1A4F7A',
    iconColor: '#E5F0FA',
  },
)

const audioEl = ref<HTMLAudioElement | null>(null)
const isPlaying = ref(false)

const btnStyle = computed(() => ({
  background: props.bgColor,
  color: props.iconColor,
}))

async function play() {
  try {
    await audioEl.value?.play()
  }
  catch {
    // Autoplay ditolak browser / file gagal dimuat — biarkan user
    // menyalakan manual via tombol.
  }
}

function pause() {
  audioEl.value?.pause()
}

function toggle() {
  if (isPlaying.value) pause()
  else void play()
}

onUnmounted(() => {
  pause()
})

defineExpose({ play, pause })
</script>
