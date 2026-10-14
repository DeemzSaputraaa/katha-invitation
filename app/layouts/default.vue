<template>
  <div class="min-h-screen bg-white text-stone-900 antialiased">
    <a
      href="#main"
      class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-stone-900 focus:px-5 focus:py-2.5 focus:text-sm focus:text-white"
    >
      Lewati ke konten utama
    </a>
    <LayoutNavbar v-if="!isInvitationRoute" />
    <main id="main">
      <slot />
    </main>
    <LayoutFooter v-if="!isInvitationRoute" />
  </div>
</template>

<script setup lang="ts">
import { getInvitation } from '~/data/invitations'

// Halaman undangan fullscreen (demo /templates/* maupun customer /<slug>)
// tanpa navbar & footer landing — undangan punya footer brand sendiri.
const route = useRoute()
const isTemplateRoute = computed(() => route.path.startsWith('/templates/'))
const isCustomerRoute = computed(() => {
  const seg = route.path.slice(1).split('/')[0] ?? ''
  return seg !== '' && getInvitation(seg) !== undefined
})
const isInvitationRoute = computed(() => isTemplateRoute.value || isCustomerRoute.value)
</script>
