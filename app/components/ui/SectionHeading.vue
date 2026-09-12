<template>
  <div v-reveal class="mx-auto max-w-3xl text-center">
    <p
      v-if="eyebrow"
      class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-brand-deep"
    >
      <span class="h-1 w-6 rounded-full bg-brand" aria-hidden="true" />
      {{ eyebrow }}
      <span class="h-1 w-6 rounded-full bg-brand" aria-hidden="true" />
    </p>
    <h2
      class="mt-4 text-balance font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-stone-900 sm:text-5xl"
    >
      {{ title }}
    </h2>
    <p v-if="subtitle" class="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-stone-600">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  subtitle?: string
}>()
</script>
