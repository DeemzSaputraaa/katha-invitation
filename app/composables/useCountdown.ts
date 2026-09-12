import { ref, onMounted, onUnmounted, computed } from 'vue'

/**
 * Hitung mundur menuju tanggal acara.
 * Pure client-side; tanggal acara berasal dari data (nanti: API).
 */
export function useCountdown(target: Date | string) {
  const targetTime = new Date(target).getTime()
  const now = ref(Date.now())
  let timer: ReturnType<typeof setInterval> | null = null

  const diff = computed(() => Math.max(0, targetTime - now.value))
  const days = computed(() => Math.floor(diff.value / 86_400_000))
  const hours = computed(() => Math.floor((diff.value % 86_400_000) / 3_600_000))
  const minutes = computed(() => Math.floor((diff.value % 3_600_000) / 60_000))
  const seconds = computed(() => Math.floor((diff.value % 60_000) / 1000))
  const passed = computed(() => targetTime - now.value <= 0)

  onMounted(() => {
    timer = setInterval(() => {
      now.value = Date.now()
    }, 1000)
  })
  onUnmounted(() => {
    if (timer) clearInterval(timer)
  })

  return { days, hours, minutes, seconds, passed }
}
