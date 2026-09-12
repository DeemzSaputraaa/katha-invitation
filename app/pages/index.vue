<template>
  <div>
    <SectionsHeroSection />
    <SectionsTrustSection />
    <SectionsTemplateSection />
    <SectionsFeaturesSection />
    <SectionsHowItWorksSection />
    <SectionsPricingSection />
    <SectionsFaqSection />
    <SectionsFinalCtaSection />
  </div>
</template>

<script setup lang="ts">
import { siteConfig } from '~/data/site'

useHead({ title: siteConfig.tagline })
useSeoMeta({
  title: `${siteConfig.brand} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  ogTitle: `${siteConfig.brand} — ${siteConfig.tagline}`,
  ogDescription: siteConfig.description,
  ogUrl: siteConfig.url,
})
</script>
