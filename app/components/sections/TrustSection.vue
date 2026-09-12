<template>
  <section aria-label="Keunggulan layanan" class="bg-[#09332C]">
    <div class="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
      <p v-reveal class="mx-auto max-w-2xl text-center font-serif text-2xl font-medium italic leading-snug text-white sm:text-[27px]">
        “Dibuat untuk membuat momen spesial Anda terasa
        <span class="text-[#FFA74F]">lebih berkesan</span>.”
      </p>
      <ul class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <li
          v-for="(v, i) in values"
          :key="v.title"
          v-reveal="i * 80"
          class="rounded-2xl bg-white p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1"
        >
          <div
            class="flex h-12 w-12 items-center justify-center rounded-2xl"
            :style="{ background: v.soft }"
            aria-hidden="true"
          >
            <component :is="v.icon" />
          </div>
          <h3 class="mt-4 text-[16px] font-bold text-stone-900">{{ v.title }}</h3>
          <p class="mt-1.5 text-sm leading-relaxed text-stone-600">{{ v.text }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h } from 'vue'

function icon(paths: string[], color: string) {
  return () =>
    h(
      'svg',
      { width: 22, height: 22, viewBox: '0 0 20 20', fill: 'none', 'aria-hidden': true },
      paths.map((d) =>
        h('path', {
          d,
          stroke: color,
          'stroke-width': 1.6,
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
        }),
      ),
    )
}

const values = [
  {
    icon: icon(['M10 2.5l2 4.2 4.5.5-3.3 3.1.9 4.5-4.1-2.3-4.1 2.3.9-4.5L3.5 7.2l4.5-.5z'], '#C9480F'),
    soft: '#FDE8D4',
    title: 'Desain Elegan',
    text: 'Template yang dirancang untuk memberikan kesan premium dan personal.',
  },
  {
    icon: icon(
      ['M8.5 11.5l3-3', 'M10.8 6.2l.9-.9a2.1 2.1 0 013 3l-.9.9', 'M9.2 13.8l-.9.9a2.1 2.1 0 01-3-3l.9-.9'],
      '#2E4B3C',
    ),
    soft: '#E7EFE9',
    title: 'Mudah Dibagikan',
    text: 'Cukup kirim satu link melalui WhatsApp, Instagram, atau media sosial lainnya.',
  },
  {
    icon: icon(
      ['M10 17S3.5 12.6 3.5 8.9a3.4 3.4 0 016.5-1.4A3.4 3.4 0 0116.5 8.9C16.5 12.6 10 17 10 17z'],
      '#9E3A0C',
    ),
    soft: '#F7DFBA',
    title: 'Interaktif & Personal',
    text: 'Dilengkapi countdown, galeri, RSVP, ucapan, love story, dan fitur lainnya.',
  },
  {
    icon: icon(['M11 2.5L4 11h4.5L9 17.5 16 9h-4.5z'], '#09332C'),
    soft: '#E7EFE9',
    title: 'Cepat & Praktis',
    text: 'Tidak perlu cetak dan bisa langsung dibagikan kepada tamu.',
  },
]
</script>
