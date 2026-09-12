import { useReveal } from '~/composables/useReveal'

/**
 * v-reveal — fade-up saat elemen masuk viewport.
 * Contoh: <section v-reveal> ... </section>
 * Delay opsional: <p v-reveal:120> (delay dalam ms)
 *
 * Plugin ini universal (bukan .client) karena Vue SSR memanggil
 * `getSSRProps` untuk setiap directive — directive yang tidak terdaftar
 * di server menyebabkan 500 "Cannot read properties of undefined
 * (reading 'getSSRProps')". Class `reveal` dirender sejak SSR sehingga
 * tidak ada flash saat hidrasi.
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    getSSRProps(binding) {
      const delay = Number(binding.arg ?? 0)
      if (delay) {
        return { class: 'reveal', style: `--reveal-delay:${delay}ms` }
      }
      return { class: 'reveal' }
    },
    mounted(el: HTMLElement, binding) {
      const delay = Number(binding.arg ?? 0)
      if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`)
      el.classList.add('reveal')
      useReveal().observe(el)
    },
  })
})
