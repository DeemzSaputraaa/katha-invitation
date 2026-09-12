/**
 * Reveal-on-scroll tanpa library tambahan.
 * - Menggunakan IntersectionObserver (murah, native)
 * - Hormati prefers-reduced-motion
 * - Dipakai via directive `v-reveal` atau composable.
 */
export function useReveal() {
  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  function observe(el: Element) {
    if (reduceMotion) {
      el.classList.add('is-visible')
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
  }

  return { observe }
}
