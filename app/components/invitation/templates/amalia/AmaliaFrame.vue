<template>
  <div class="amalia-frame">
    <img class="frame-edge frame-edge-left" src="/images/templates/amalia/border.webp" alt="" aria-hidden="true" loading="lazy">
    <img class="frame-edge frame-edge-right" src="/images/templates/amalia/border.webp" alt="" aria-hidden="true" loading="lazy">
    <div class="frame-content"><slot /></div>
  </div>
</template>

<style scoped>
.amalia-frame {
  position: relative;
  width: min(100%, 860px);
  margin-inline: auto;
  padding: 52px clamp(42px, 8vw, 104px);
  overflow: hidden;
  border-radius: 32px;
  background: #f7f5ef url('/images/templates/amalia/paper.webp') center / cover;
  color: #385866;
  box-shadow: 0 20px 60px #0f273033;
}
.frame-edge {
  position: absolute;
  top: 0;
  width: clamp(25px, 6%, 52px);
  height: 100%;
  object-fit: fill;
  opacity: 0.75;
  pointer-events: none;
}
.frame-edge-left { left: 0; }
.frame-edge-right { right: 0; transform: scaleX(-1); }
.frame-content { position: relative; min-width: 0; }
@media (max-width: 420px) {
  .amalia-frame { padding: 38px 38px; border-radius: 26px; }
}
</style>
