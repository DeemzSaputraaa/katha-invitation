import Lenis from 'lenis'

/**
 * Lenis smooth scroll — natural & ringan.
 * - Nonaktif saat prefers-reduced-motion
 * - Anchor link (#...) ditangani manual agar tetap akurat
 * - Otomatis berhenti saat mobile menu terbuka (via event)
 */
export default defineNuxtPlugin((nuxtApp) => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  let lenis: Lenis | null = null
  let rafId = 0

  // Anchor navigation yang mulus & accessible (fokus ikut pindah)
  function onClick(e: MouseEvent) {
    if (!lenis) return
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

  function init() {
    if (lenis) return
    lenis = new Lenis({
      duration: 1.05,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis?.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    document.addEventListener('click', onClick)
    nuxtApp.provide('lenis', lenis)
  }

  function destroy() {
    if (!lenis) return
    cancelAnimationFrame(rafId)
    document.removeEventListener('click', onClick)
    try {
      lenis.destroy()
    } catch {
      // abaikan — instance sudah tidak valid
    }
    lenis = null
    // Bersihkan class sisa Lenis agar native scroll kembali normal.
    // Tanpa ini, `.lenis-stopped { overflow: hidden }` mengunci scroll
    // di route undangan (terutama mobile).
    document.documentElement.classList.remove('lenis', 'lenis-smooth', 'lenis-stopped')
    nuxtApp.provide('lenis', null)
  }

  function sync(path: string) {
    // Route undangan memakai native scroll — Lenis dimatikan di sini.
    if (path.startsWith('/templates/')) destroy()
    else init()
  }

  sync(window.location.pathname)
  nuxtApp.hook('page:finish', () => sync(window.location.pathname))
})
