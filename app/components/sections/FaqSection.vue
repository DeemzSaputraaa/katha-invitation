<template>
  <section
    id="faq"
    aria-labelledby="faq-heading"
    class="scroll-mt-20 border-t border-stone-100 bg-white"
  >
    <div class="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
      <UiSectionHeading
        eyebrow="FAQ"
        title="Pertanyaan yang Sering Ditanyakan"
        subtitle="Masih ragu? Hubungi kami via WhatsApp — fast respons."
      />

      <div v-reveal class="mt-12 divide-y divide-stone-200 border-y border-stone-200">
        <div v-for="(item, i) in faqs" :key="item.question">
          <h3>
            <button
              :id="`faq-button-${i}`"
              type="button"
              :aria-expanded="openIndex === i ? 'true' : 'false'"
              :aria-controls="`faq-panel-${i}`"
              class="flex w-full items-center justify-between gap-4 py-5 text-left text-[16px] font-bold text-stone-900 transition-colors hover:text-brand-deep"
              @click="toggle(i)"
            >
              {{ item.question }}
              <span
                :class="[
                  'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-transform duration-300',
                  openIndex === i
                    ? 'rotate-45 border-brand bg-brand text-white shadow-md shadow-brand/25'
                    : 'border-stone-300 text-stone-600',
                ]"
                aria-hidden="true"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 2v10M2 7h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                </svg>
              </span>
            </button>
          </h3>
          <div
            :id="`faq-panel-${i}`"
            role="region"
            :aria-labelledby="`faq-button-${i}`"
            :hidden="openIndex !== i"
            class="pb-6 pr-12 text-[15px] leading-relaxed text-stone-600"
          >
            {{ item.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { faqs } from '~/data/faq'

const openIndex = ref<number | null>(0)

function toggle(i: number) {
  openIndex.value = openIndex.value === i ? null : i
}
</script>
