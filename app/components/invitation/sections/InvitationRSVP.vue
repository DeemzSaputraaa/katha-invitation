<template>
  <section aria-label="Konfirmasi kehadiran" class="px-6 py-14 sm:py-16">
    <div class="landscape:grid landscape:grid-cols-[240px_1fr] landscape:items-start landscape:gap-10">
      <div class="mb-8 landscape:mb-0 landscape:sticky landscape:top-24 landscape:self-start">
        <h2
          v-if="title"
          :class="[titleClass ?? 'font-serif text-4xl font-medium sm:text-5xl', 'landscape:[writing-mode:vertical-rl]']"
        >
          {{ title }}
        </h2>
        <div
          class="mt-4 h-px w-12 landscape:mt-6 landscape:h-20 landscape:w-px"
          :style="{ background: accent }"
          aria-hidden="true"
        />
      </div>
      <div class="min-w-0">
        <p
          class="mx-auto max-w-md text-center text-[15px] landscape:text-left"
          :class="dark ? 'text-stone-300' : 'text-stone-600'"
        >
          Konfirmasi kehadiranmu — sangat berarti bagi kami dalam mempersiapkan segalanya.
        </p>
        <form class="mx-auto mt-8 max-w-md space-y-4" @submit.prevent="submit">
          <div>
            <label :for="`${uid}-nama`" class="mb-1.5 block text-sm font-semibold" :class="dark ? 'text-stone-100' : 'text-stone-800'">
              Nama lengkap
            </label>
            <input
              :id="`${uid}-nama`"
              v-model="form.nama"
              type="text"
              required
              autocomplete="name"
              placeholder="Nama kamu"
              class="w-full rounded-lg border bg-white px-4 py-3 text-[15px] text-stone-900 placeholder:text-stone-400"
              :class="dark ? 'border-white/20' : 'border-stone-300'"
            >
          </div>
          <div>
            <label :for="`${uid}-hadir`" class="mb-1.5 block text-sm font-semibold" :class="dark ? 'text-stone-100' : 'text-stone-800'">
              Konfirmasi kehadiran
            </label>
            <select
              :id="`${uid}-hadir`"
              v-model="form.kehadiran"
              required
              class="w-full rounded-lg border bg-white px-4 py-3 text-[15px] text-stone-900"
              :class="dark ? 'border-white/20' : 'border-stone-300'"
            >
              <option value="" disabled>Pilih salah satu</option>
              <option value="Hadir">Hadir, insya Allah</option>
              <option value="Ragu">Masih ragu</option>
              <option value="Berhalangan">Berhalangan</option>
            </select>
          </div>
          <div>
            <label :for="`${uid}-jumlah`" class="mb-1.5 block text-sm font-semibold" :class="dark ? 'text-stone-100' : 'text-stone-800'">
              Jumlah tamu
            </label>
            <input
              :id="`${uid}-jumlah`"
              v-model.number="form.jumlah"
              type="number"
              min="1"
              max="5"
              required
              class="w-full rounded-lg border bg-white px-4 py-3 text-[15px] text-stone-900"
              :class="dark ? 'border-white/20' : 'border-stone-300'"
            >
          </div>
          <button
            type="submit"
            class="w-full rounded-full py-3.5 text-[15px] font-semibold text-white transition hover:opacity-90"
            :style="{ background: accent }"
          >
            Kirim RSVP
          </button>
          <p
            v-if="sent"
            role="status"
            class="rounded-lg bg-green-50 px-4 py-3 text-center text-sm text-green-800"
          >
            Terima kasih, {{ form.nama }}! Kehadiranmu telah tercatat. Sampai jumpa di hari bahagia.
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { InvitationSectionProps } from '~/types/invitation'

withDefaults(defineProps<InvitationSectionProps & { title?: string }>(), {
  accent: '#1C1917',
  dark: false,
  title: 'RSVP',
})

// ID unik agar label tetap valid walau section dipakai ulang.
const uid = useId()
const form = reactive({ nama: '', kehadiran: '', jumlah: 1 })
const sent = ref(false)

function submit() {
  sent.value = true
}
</script>
