<template>
  <section
    id="cara-pesan"
    aria-labelledby="cara-pesan-heading"
    class="scroll-mt-20 bg-leaf-soft"
  >
    <div class="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <UiSectionHeading
        eyebrow="Cara Pesan"
        title="Dari Pilih Template hingga Siap Dibagikan"
        subtitle="Tiga langkah sederhana — tanpa ribet, tanpa aplikasi tambahan."
      />

      <ol class="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
        <li
          v-for="(s, i) in steps"
          :key="s.title"
          v-reveal="i * 100"
          class="rounded-2xl border border-white bg-white/80 p-7 shadow-sm backdrop-blur transition-shadow hover:shadow-md"
        >
          <span
            class="inline-flex h-11 w-11 items-center justify-center rounded-full font-serif text-lg font-semibold italic text-white"
            :class="s.badge"
            aria-hidden="true"
          >
            {{ i + 1 }}
          </span>
          <h3 class="mt-4 text-lg font-bold text-stone-950">{{ s.title }}</h3>
          <p class="mt-2 text-[15px] leading-relaxed text-stone-600">{{ s.text }}</p>
          <NuxtLink
            v-if="s.link"
            :to="s.link.href"
            class="mt-4 inline-block text-sm font-bold text-brand-deep underline decoration-brand/40 decoration-2 underline-offset-4 hover:decoration-brand"
          >
            {{ s.link.label }}
          </NuxtLink>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    no: '01',
    title: 'Pilih Template',
    text: 'Jelajahi katalog dan pilih gaya yang paling sesuai dengan momen spesialmu.',
    link: { label: 'Lihat katalog →', href: '/#template' },
    badge: 'bg-brand',
  },
  {
    no: '02',
    title: 'Kirim Data',
    text: 'Berikan nama, jadwal acara, foto, dan lokasi via WhatsApp. Kami yang merapikan semuanya.',
    badge: 'bg-gold-deep',
  },
  {
    no: '03',
    title: 'Siap Dibagikan',
    text: 'Terima tautan personal dalam 1–2 hari, lalu sebarkan ke keluarga dan sahabat.',
    badge: 'bg-[#09332C]',
  },
]
</script>
