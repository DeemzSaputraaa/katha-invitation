import { ref, onMounted, onUnmounted, computed } from 'vue'

/**
 * Hitung mundur menuju tanggal acara.
 * Pure client-side; tanggal acara berasal dari data (nanti: API).
 */
export function useCountdown(target: Date | string) {
  const targetTime = new Date(target).getTime()
  // `ready` false saat SSR/prerender agar HTML server & client identik
  // (nilai "--"), lalu live setelah mounted — tanpa hydration mismatch.
  const ready = ref(false)
  const now = ref(Date.now())
  let timer: ReturnType<typeof setInterval> | null = null

  const diff = computed(() => Math.max(0, targetTime - now.value))
  const days = computed(() => Math.floor(diff.value / 86_400_000))
  const hours = computed(() => Math.floor((diff.value % 86_400_000) / 3_600_000))
  const minutes = computed(() => Math.floor((diff.value % 3_600_000) / 60_000))
  const seconds = computed(() => Math.floor((diff.value % 60_000) / 1000))
  const passed = computed(() => targetTime - now.value <= 0)

  onMounted(() => {
    ready.value = true
    now.value = Date.now()
    timer = setInterval(() => {
      now.value = Date.now()
    }, 1000)
  })
  onUnmounted(() => {
    if (timer) clearInterval(timer)
  })

  return { days, hours, minutes, seconds, passed, ready }
}
