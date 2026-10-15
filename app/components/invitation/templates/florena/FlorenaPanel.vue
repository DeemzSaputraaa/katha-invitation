<template>
  <div class="florena-panel">
    <img src="/images/templates/florena-botanical.svg" alt="" class="panel-botanical" aria-hidden="true">
    <div class="panel-content">
      <p class="panel-label">{{ data.invitationLabel }}</p>
      <span class="panel-flower" aria-hidden="true">✳</span>
      <p class="panel-names font-serif">
        <span>{{ data.couple.person1.name }}</span>
        <em>&amp;</em>
        <span>{{ data.couple.person2.name }}</span>
      </p>
      <div class="panel-line" aria-hidden="true" />
      <p class="font-serif text-xl italic">{{ data.dateLabel }}</p>
      <p class="panel-venue">{{ data.venue.name }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { InvitationData } from '~/types/invitation'

defineProps<{ data: InvitationData }>()
</script>

<style scoped>
.florena-panel {
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  max-width: 660px;
  min-height: min(78svh, 800px);
  margin: auto;
  padding: clamp(24px, 5vh, 64px) clamp(12px, 3vw, 48px);
  border: 1px solid #c7c7a36b;
  border-radius: 48% 48% 4px 4px;
  color: #f7f3ea;
  text-align: center;
}
.panel-botanical {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.18;
  pointer-events: none;
}
.panel-content { position: relative; width: 100%; }
.panel-label { font-size: 10px; font-weight: 600; letter-spacing: 0.3em; text-transform: uppercase; }
.panel-flower { display: block; margin: 24px 0; font-size: 32px; color: #deb99e; }
.panel-names { font-size: clamp(26px, 4.3vw, 68px); font-weight: 400; line-height: 1.12; overflow-wrap: anywhere; }
.panel-names span { display: block; }
.panel-names em { display: block; margin: 12px 0; font-size: 0.55em; color: #deb99e; }
.panel-line { width: 48px; height: 1px; margin: 28px auto; background: #deb99e; }
.panel-venue { margin-top: 16px; font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: #d4dccd; }
@media (max-height: 600px) {
  .florena-panel { min-height: 90svh; padding-block: 16px; }
  .panel-flower, .panel-line { margin-block: 12px; }
  .panel-names { font-size: clamp(24px, 3vw, 42px); }
}
</style>
