<template>
  <!--
    Closing Full-Screen.
    Foto berdua6 jadi background penuh 100svh.
    Teks penutup + nama melayang di atas dengan overlay gradasi dari bawah.
    Bagian bawah melebur seamlessly ke InvitationFooter via fadeColor.
  -->
  <section
    class="relative w-full overflow-hidden"
    :style="{ height: '100svh', minHeight: '600px' }"
    aria-label="Penutup undangan"
  >
    <!-- ─── Foto background penuh ─── -->
    <img
      v-if="closingImage"
      :src="closingImage"
      :alt="`Foto penutup ${firstName1} & ${firstName2}`"
      width="1200"
      height="1600"
      loading="lazy"
      class="absolute inset-0 h-full w-full object-cover object-center"
      aria-hidden="true"
    >

    <!-- ─── Overlay gradasi: bawah gelap → tengah sedikit → atas transparan ─── -->
    <div
      class="absolute inset-0"
      :style="overlayStyle"
      aria-hidden="true"
    />

    <!-- ─── Fade ke footer di ujung bawah (seamless blend ke warna footer) ─── -->
    <div
      class="pointer-events-none absolute inset-x-0 bottom-0 h-40"
      :style="fadeToFooterStyle"
      aria-hidden="true"
    />

    <!-- ─── Konten teks melayang di tengah-bawah ─── -->
    <div class="absolute inset-0 flex flex-col items-center justify-end px-6 pb-36 text-center">
      <!-- Divider aksen atas -->
      <div class="mb-5 h-px w-14 opacity-70" :style="{ background: accent }" aria-hidden="true" />

      <!-- Paragraf penutup -->
      <div class="max-w-sm space-y-3">
        <p
          v-for="(line, i) in data.closing"
          :key="i"
          class="font-serif text-xl italic leading-snug text-white/90 sm:text-2xl"
        >
          {{ line }}
        </p>
      </div>

      <!-- Nama mempelai -->
      <p
        class="mt-6 font-serif text-4xl italic sm:text-5xl"
        :style="{ color: nameColor ?? '#ffffff' }"
      >
        {{ firstName1 }} &amp; {{ firstName2 }}
      </p>

      <slot name="after" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { InvitationSectionProps } from '~/types/invitation'

const props = withDefaults(
  defineProps<InvitationSectionProps & {
    nameColor?: string
    closingImage?: string
    /**
     * Warna fade di bagian bawah closing — harus sama dengan bgColor footer
     * agar tampak melebur tanpa batas.
     */
    fadeColor?: string
  }>(),
  {
    accent: '#A2D2FF',
    dark: false,
    nameColor: undefined,
    closingImage: undefined,
    fadeColor: '#1A4F7A',
  },
)

const firstName1 = computed(() => props.data.couple.person1.name.split(' ')[0] ?? '')
const firstName2 = computed(() => props.data.couple.person2.name.split(' ')[0] ?? '')

// Overlay utama: transparan atas → gelap bawah agar teks terbaca
const overlayStyle = computed(() => ({
  background: 'linear-gradient(to top, rgba(10,30,60,0.82) 0%, rgba(10,30,60,0.35) 50%, rgba(0,0,0,0) 100%)',
}))

// Fade ke footer: dari transparan → warna footer (seamless merge)
const fadeToFooterStyle = computed(() => ({
  background: `linear-gradient(to bottom, transparent 0%, ${props.fadeColor} 100%)`,
}))
</script>
