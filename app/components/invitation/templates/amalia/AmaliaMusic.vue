<template>
  <div class="amalia-music">
    <InvitationMusic v-if="source" ref="player" :src="source" bg-color="#252525" icon-color="#FFFFFF" />
    <div v-if="tracks.length > 1" class="track-picker">
      <button type="button" :aria-expanded="menuOpen" :aria-controls="uid" aria-label="Pilih musik latar" @click="menuOpen = !menuOpen">♫</button>
      <div v-if="menuOpen" :id="uid" class="track-menu" @keydown.esc="menuOpen = false">
        <label :for="`${uid}-select`">Musik pengiring</label>
        <select :id="`${uid}-select`" v-model.number="selected" @change="changeTrack">
          <option v-for="(track, i) in tracks" :key="track.src" :value="i">{{ track.title }}{{ track.artist ? ` — ${track.artist}` : '' }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { InvitationData } from '~/types/invitation'
import InvitationMusic from '../../sections/InvitationMusic.vue'

const props = defineProps<{ data: InvitationData }>()
const uid = useId()
const selected = ref(0)
const menuOpen = ref(false)
const player = ref<InstanceType<typeof InvitationMusic> | null>(null)
const tracks = computed(() => props.data.musicTracks ?? [])
const source = computed(() => tracks.value[selected.value]?.src ?? props.data.musicUrl)

async function changeTrack() {
  await nextTick()
  await player.value?.play()
}

defineExpose({ play: () => player.value?.play() })
</script>

<style scoped>
.track-picker { position: fixed; right: 24px; bottom: 82px; z-index: 60; }
.track-picker > button { display: grid; place-items: center; width: 48px; height: 40px; border-radius: 20px; background: #252525; color: #fff; font-size: 22px; box-shadow: 0 4px 16px #0003; }
.track-menu { position: absolute; right: 0; bottom: 50px; width: min(290px, calc(100vw - 48px)); padding: 20px; border-radius: 20px; background: #252525; color: #fff; box-shadow: 0 8px 30px #0005; }
label { display: block; margin-bottom: 12px; font-size: 12px; }
select { width: 100%; padding: 10px; border: 1px solid #fff6; border-radius: 8px; background: #333; color: #fff; font-size: 12px; }
</style>
