<template>
  <section id="atas" aria-labelledby="hero-heading" class="relative flex min-h-screen items-center overflow-hidden bg-cream">
    <!-- Blob warna lembut -->
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div class="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-brand/15 blur-3xl" />
      <div class="absolute -right-24 top-16 h-96 w-96 rounded-full bg-gold/25 blur-3xl" />
      <div class="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-leaf/15 blur-3xl" />
    </div>

    <div class="relative mx-auto w-full max-w-7xl px-5 py-28 text-center sm:px-8">
      <div class="mx-auto max-w-3xl">
        <p
          v-reveal
          class="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-ink backdrop-blur"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
          Undangan Pernikahan &amp; Acara
        </p>
        <h1
          id="hero-heading"
          v-reveal:80
          class="mt-6 text-balance font-serif text-[44px] font-semibold leading-[1.04] tracking-tight text-stone-950 sm:text-6xl lg:text-[76px]"
        >
          Undangan Digital yang
          <em class="italic text-brand">Berkesan</em>
        </h1>
        <p v-reveal:160 class="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-stone-600">
          Rayakan momen spesial dengan undangan digital yang elegan,
          personal, dan mudah dibagikan — cukup kirim satu tautan.
        </p>
        <div v-reveal:240 class="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
          <NuxtLink
            to="/#template"
            class="inline-flex items-center justify-center rounded-full bg-brand px-8 py-3.5 text-[15px] font-bold text-white shadow-xl shadow-brand/30 transition hover:bg-brand-deep"
          >
            Lihat Template
            <span aria-hidden="true" class="ml-2">→</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
