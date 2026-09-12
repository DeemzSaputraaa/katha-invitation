import Lenis from 'lenis'

/**
 * Lenis smooth scroll — natural & ringan.
 * - Nonaktif saat prefers-reduced-motion
 * - Anchor link (#...) ditangani manual agar tetap akurat
 * - Otomatis berhenti saat mobile menu terbuka (via event)
 */
export default defineNuxtPlugin(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const lenis = new Lenis({
    duration: 1.05,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  })

  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  // Anchor navigation yang mulus & accessible (fokus ikut pindah)
  function onClick(e: MouseEvent) {
    const anchor = (e.target as HTMLElement).closest?.('a[href^="#"]')
    if (!anchor) return
    const id = anchor.getAttribute('href')
    if (!id || id === '#') return
    const target = document.querySelector(id)
    if (!target) return
    e.preventDefault()
    lenis.scrollTo(target as HTMLElement, { offset: -72 })
    const focusable = target as HTMLElement
    if (!focusable.hasAttribute('tabindex')) {
      focusable.setAttribute('tabindex', '-1')
    }
    window.setTimeout(() => focusable.focus({ preventScroll: true }), 600)
    history.replaceState(null, '', id)
  }
  document.addEventListener('click', onClick)

  return {
    provide: {
      lenis,
    },
  }
})
