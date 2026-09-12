<template>
  <div class="min-h-screen bg-white text-stone-900 antialiased">
    <a
      href="#main"
      class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-stone-900 focus:px-5 focus:py-2.5 focus:text-sm focus:text-white"
    >
      Lewati ke konten utama
    </a>
    <LayoutNavbar />
    <main id="main">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>
