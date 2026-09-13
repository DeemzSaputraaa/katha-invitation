<template>
  <section aria-label="Ucapan dan doa" class="px-6 py-14 sm:py-16">
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
        <form class="mx-auto grid max-w-xl gap-3 sm:grid-cols-[1fr_1fr_auto]" @submit.prevent="submit">
          <label :for="`${uid}-nama`" class="sr-only">Nama</label>
          <input
            :id="`${uid}-nama`"
            v-model="draft.nama"
            type="text"
            required
            placeholder="Nama"
            autocomplete="name"
            class="rounded-lg border bg-white px-4 py-3 text-[15px] text-stone-900 placeholder:text-stone-400"
            :class="dark ? 'border-white/20' : 'border-stone-300'"
          >
          <label :for="`${uid}-pesan`" class="sr-only">Ucapan</label>
          <input
            :id="`${uid}-pesan`"
            v-model="draft.pesan"
            type="text"
            required
            placeholder="Tulis ucapan terbaikmu…"
            class="rounded-lg border bg-white px-4 py-3 text-[15px] text-stone-900 placeholder:text-stone-400"
            :class="dark ? 'border-white/20' : 'border-stone-300'"
          >
          <button
            type="submit"
            class="rounded-full px-6 py-3 text-[15px] font-semibold text-white transition hover:opacity-90"
            :style="{ background: accent }"
          >
            Kirim
          </button>
        </form>
        <ul class="mx-auto mt-8 max-w-xl space-y-3">
          <li
            v-for="w in wishes"
            :key="w.name + w.message"
            class="rounded-xl px-5 py-4 ring-1"
            :class="dark ? 'bg-white/5 ring-white/15' : 'bg-white ring-stone-200'"
          >
            <p class="text-sm font-semibold" :style="{ color: nameColor }">{{ w.name }}</p>
            <p class="mt-1 text-[15px] leading-relaxed" :class="dark ? 'text-stone-300' : 'text-stone-600'">
              {{ w.message }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { InvitationSectionProps } from '~/types/invitation'

const props = withDefaults(
  defineProps<InvitationSectionProps & { title?: string; nameColor?: string }>(),
  {
    accent: '#1C1917',
    dark: false,
    title: 'Ucapan & Doa',
    nameColor: undefined,
  },
)

const uid = useId()
const wishes = ref([...props.data.wishes])
const draft = reactive({ nama: '', pesan: '' })

function submit() {
  wishes.value.unshift({ name: draft.nama.trim(), message: draft.pesan.trim() })
  draft.nama = ''
  draft.pesan = ''
}
</script>
