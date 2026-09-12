<template>
  <section id="harga" aria-labelledby="harga-heading" class="scroll-mt-20 bg-white">
    <div class="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <UiSectionHeading
        eyebrow="Harga"
        title="Harga Jujur, Sekali Bayar"
        subtitle="Tanpa biaya tersembunyi. Semua paket sudah termasuk RSVP, peta lokasi, dan musik."
      />

      <div class="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch">
        <article
          v-for="(plan, i) in pricingPlans"
          :key="plan.id"
          v-reveal="i * 100"
          :class="[
            'flex flex-col rounded-2xl border p-8',
            plan.highlighted
              ? 'border-transparent bg-gradient-to-b from-[#0E4438] to-[#09332C] text-white shadow-xl shadow-leaf/30'
              : 'border-stone-200 bg-white hover:border-brand/30',
          ]"
        >
          <div class="flex items-center justify-between">
            <h3
              :class="[
                'text-sm font-semibold uppercase tracking-[0.2em]',
                plan.highlighted ? 'text-[#F7DFBA]' : 'text-stone-500',
              ]"
            >
              {{ plan.name }}
            </h3>
            <span
              v-if="plan.highlighted"
              class="rounded-full bg-[#F0531C] px-3 py-1 text-xs font-bold text-white shadow-md"
            >
              Populer
            </span>
          </div>
          <p class="mt-4 flex items-baseline gap-2">
            <span v-if="plan.id === 'custom'" class="text-sm font-normal opacity-70">Mulai</span>
            <span class="font-serif text-[42px] font-medium leading-none">
              {{ formatPrice(plan.price) }}
            </span>
          </p>
          <p :class="['mt-1 text-sm', plan.highlighted ? 'text-stone-300' : 'text-stone-500']">
            {{ plan.unit }}
          </p>
          <p :class="['mt-4 text-[15px] leading-relaxed', plan.highlighted ? 'text-stone-200' : 'text-stone-600']">
            {{ plan.description }}
          </p>
          <ul class="mt-6 flex-1 space-y-3 text-[15px]">
            <li
              v-for="feat in plan.features"
              :key="feat"
              class="flex items-start gap-2.5"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                aria-hidden="true"
                class="mt-0.5 shrink-0"
              >
                <path
                  d="M3.5 8.8l3.2 3.2 6.8-7.5"
                  :stroke="plan.highlighted ? '#F7DFBA' : '#C9480F'"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span :class="plan.highlighted ? 'text-stone-100' : 'text-stone-700'">{{ feat }}</span>
            </li>
          </ul>
          <a
            :href="planLinks[plan.id]"
            target="_blank"
            rel="noopener"
            :class="[
              'mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-[15px] font-bold transition',
              plan.highlighted
                ? 'bg-white text-brand-ink shadow-lg hover:bg-brand-soft'
                : 'bg-brand text-white shadow-md shadow-brand/25 hover:bg-brand-deep',
            ]"
          >
            {{ plan.cta }}
          </a>
        </article>
      </div>

      <p v-reveal class="mx-auto mt-8 max-w-xl text-center text-sm leading-relaxed text-stone-500">
        Butuh sesuatu yang berbeda? Semua harga dapat disesuaikan dengan kebutuhan acaramu —
        <a :href="waGeneral" target="_blank" rel="noopener" class="font-bold text-brand-deep underline decoration-brand/40 decoration-2 underline-offset-4 hover:decoration-brand">tanya dulu, gratis.</a>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { pricingPlans } from '~/data/pricing'
import { formatPrice } from '~/data/templates'
import { useWhatsApp } from '~/composables/useWhatsApp'

const { planInterest, general } = useWhatsApp()

const planLinks = computed<Record<string, string>>(() => ({
  basic: planInterest('Basic'),
  premium: planInterest('Premium'),
  custom: planInterest('Custom'),
}))

const waGeneral = general('Halo Katha, saya ingin bertanya tentang paket harga undangan digital.')
</script>
