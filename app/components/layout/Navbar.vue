<template>
  <header
    :class="[
      'fixed inset-x-0 top-0 z-50 transition-all duration-300',
      scrolled
        ? 'border-b border-stone-200/80 bg-white/90 backdrop-blur-md'
        : 'border-b border-transparent bg-white/60 backdrop-blur-[2px]',
    ]"
  >
    <nav
      class="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8"
      aria-label="Navigasi utama"
    >
      <NuxtLink
        to="/#atas"
        class="flex items-center gap-2.5"
        aria-label="Katha — kembali ke atas"
      >
        <span
          class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFA74F] to-[#F0531C] font-serif text-xl font-semibold italic text-white shadow-md shadow-brand/30"
          aria-hidden="true"
          >K</span
        >
        <span class="leading-none">
          <span class="block font-serif text-[22px] font-semibold tracking-tight">Katha</span>
          <span class="block text-[10px] font-medium uppercase tracking-[0.22em] text-stone-500">
            Undangan Digital
          </span>
        </span>
      </NuxtLink>

      <ul class="hidden items-center gap-8 text-[15px] font-medium text-stone-600 lg:flex">
        <li v-for="link in links" :key="link.href">
          <NuxtLink
            :to="link.href"
            class="transition-colors hover:text-stone-950"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>

      <div class="hidden lg:block">
        <NuxtLink
          to="/#template"
          class="inline-flex items-center rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-brand/25 transition hover:bg-brand-deep"
        >
          Lihat Template
        </NuxtLink>
      </div>

      <button
        type="button"
        class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 text-stone-800 lg:hidden"
        :aria-expanded="open ? 'true' : 'false'"
        aria-controls="mobile-menu"
        aria-label="Buka menu navigasi"
        @click="open = !open"
      >
        <svg v-if="!open" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M3 5.5h14M3 10h14M3 14.5h14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
        </svg>
        <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
        </svg>
      </button>
    </nav>

    <Transition name="menu">
      <div
        v-if="open"
        id="mobile-menu"
        class="border-t border-stone-100 bg-white px-5 pb-6 pt-3 lg:hidden"
      >
        <ul class="divide-y divide-stone-100 text-[16px] font-medium text-stone-800">
          <li v-for="link in links" :key="link.href">
            <NuxtLink
              :to="link.href"
              class="block py-3.5"
              @click="open = false"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
        <NuxtLink
          to="/#template"
          class="mt-3 flex items-center justify-center rounded-full bg-brand px-5 py-3.5 text-[15px] font-bold text-white"
          @click="open = false"
        >
          Lihat Template
        </NuxtLink>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const links = [
  { label: 'Template', href: '/#template' },
  { label: 'Fitur', href: '/#fitur' },
  { label: 'Cara Pesan', href: '/#cara-pesan' },
  { label: 'Harga', href: '/#harga' },
  { label: 'FAQ', href: '/#faq' },
]

const open = ref(false)
const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 12
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

// Tutup menu saat pindah route (mis. ke halaman demo template)
const route = useRoute()
watch(
  () => route.fullPath,
  () => {
    open.value = false
  },
)
</script>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition:
    opacity 0.22s ease,
    transform 0.22s ease;
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
