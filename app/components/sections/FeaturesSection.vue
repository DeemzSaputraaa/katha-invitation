<template>
  <section id="fitur" aria-labelledby="fitur-heading" class="scroll-mt-20 border-t border-stone-100 bg-white">
    <div class="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <UiSectionHeading
        eyebrow="Fitur"
        title="Apa saja yang ada di dalamnya?"
        subtitle="Setiap undangan dilengkapi fitur interaktif yang membuat momenmu makin berkesan."
      />

      <ul class="mt-14 grid gap-px overflow-hidden rounded-2xl border border-gold/30 bg-gold-soft sm:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="(f, i) in features"
          :key="f.title"
          v-reveal="(i % 3) * 80"
          class="group bg-white p-7 transition-colors hover:bg-brand-soft/40 sm:p-8"
        >
          <span class="inline-flex items-center gap-2 font-serif text-sm font-semibold italic text-brand-deep">
            <span class="h-1.5 w-1.5 rounded-full" :style="{ background: f.dot }" aria-hidden="true" />
            {{ f.no }}
          </span>
          <h3 class="mt-2 text-[17px] font-semibold text-stone-950">{{ f.title }}</h3>
          <p class="mt-2 text-[15px] leading-relaxed text-stone-600">{{ f.text }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    no: '01',
    dot: '#C9480F',
    title: 'Countdown',
    text: 'Hitung mundur menuju hari spesial.',
  },
  {
    no: '02',
    dot: '#2E4B3C',
    title: 'Event & Google Maps',
    text: 'Informasi acara lengkap dengan lokasi yang mudah ditemukan.',
  },
  {
    no: '03',
    dot: '#F0531C',
    title: 'Photo Gallery',
    text: 'Abadikan dan tampilkan momen terbaik kalian.',
  },
  {
    no: '04',
    dot: '#09332C',
    title: 'RSVP & Ucapan',
    text: 'Tamu dapat mengonfirmasi kehadiran dan mengirimkan ucapan.',
  },
  {
    no: '05',
    dot: '#9E3A0C',
    title: 'Love Story',
    text: 'Ceritakan perjalanan kalian dari awal hingga hari bahagia.',
  },
  {
    no: '06',
    dot: '#FFA74F',
    title: 'Amplop Digital',
    text: 'Berikan kemudahan bagi tamu yang ingin mengirimkan hadiah secara digital.',
  },
]
</script>
