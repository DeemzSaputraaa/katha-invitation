<template>
  <section class="responses" aria-labelledby="amalia-responses-title">
    <h2 id="amalia-responses-title" class="amalia-script">Ucapan &amp; Doa</h2>
    <p class="intro">Berikan ucapan harapan dan doa kepada kedua mempelai.</p>
    <p class="demo-note">Formulir demo: ucapan dan konfirmasi hanya tampil di perangkat ini, tidak dikirim ke pemilik acara, dan hilang saat halaman dimuat ulang.</p>
    <div class="response-grid">
      <form class="response-card" @submit.prevent="submit">
        <h3>Kirim Ucapan</h3>
        <label :for="`${uid}-name`">Nama</label>
        <input :id="`${uid}-name`" v-model="draft.name" autocomplete="name" maxlength="100" required placeholder="Nama Anda">
        <label :for="`${uid}-message`">Ucapan dan doa</label>
        <textarea :id="`${uid}-message`" v-model="draft.message" maxlength="600" rows="4" required placeholder="Tuliskan doa dan harapan terbaik Anda…" />
        <fieldset>
          <legend>Konfirmasi kehadiran</legend>
          <div class="attendance-options">
            <label><input v-model="draft.attending" type="radio" :name="`${uid}-attendance`" value="yes" required> Hadir</label>
            <label><input v-model="draft.attending" type="radio" :name="`${uid}-attendance`" value="no" required> Tidak hadir</label>
          </div>
        </fieldset>
        <p v-if="error" role="alert" class="error">{{ error }}</p>
        <button type="submit">Kirim Ucapan</button>
        <p v-if="sent" role="status" class="success">Ucapan ditambahkan ke demo ini. Terima kasih!</p>
      </form>
      <div class="response-card">
        <h3>Ucapan &amp; Doa <span class="count">{{ responses.length }}</span></h3>
        <div class="attendance-counts" aria-label="Jumlah konfirmasi demo">
          <span><strong>{{ attendingCount }}</strong> Hadir</span>
          <span><strong>{{ absentCount }}</strong> Tidak hadir</span>
        </div>
        <ul v-if="responses.length" class="wish-list" aria-live="polite">
          <li v-for="wish in responses" :key="wish.id">
            <div class="wish-heading"><strong>{{ wish.name }}</strong><span v-if="wish.attending">{{ wish.attending === 'yes' ? 'Hadir' : 'Tidak hadir' }}</span></div>
            <p>{{ wish.message }}</p>
          </li>
        </ul>
        <p v-else class="empty">Jadilah yang pertama menitipkan doa dan harapan baik.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { WishItem } from '~/types/invitation'

const props = defineProps<{ wishes: WishItem[] }>()
const uid = useId()
type Response = WishItem & { id: number; attending?: 'yes' | 'no' }
const responses = ref<Response[]>(props.wishes.map((wish, id) => ({ ...wish, id })))
let nextId = responses.value.length
const draft = reactive({ name: '', message: '', attending: '' })
const error = ref('')
const sent = ref(false)
const attendingCount = computed(() => responses.value.filter(wish => wish.attending === 'yes').length)
const absentCount = computed(() => responses.value.filter(wish => wish.attending === 'no').length)

function submit() {
  error.value = ''
  sent.value = false
  if (!draft.name.trim() || !draft.message.trim() || !['yes', 'no'].includes(draft.attending)) {
    error.value = 'Lengkapi nama, ucapan, dan konfirmasi kehadiran terlebih dahulu.'
    return
  }
  responses.value.unshift({ id: nextId++, name: draft.name.trim(), message: draft.message.trim(), attending: draft.attending as 'yes' | 'no' })
  draft.name = ''
  draft.message = ''
  draft.attending = ''
  sent.value = true
}
</script>

<style scoped>
.responses { width: min(100%, 1000px); margin-inline: auto; padding: 70px 22px; color: #f9f4f5; text-align: center; }
h2 { font-size: clamp(44px, 7vw, 64px); }
.intro { margin: 12px auto 0; max-width: 500px; font-size: 14px; line-height: 1.8; }
.demo-note { max-width: 630px; margin: 20px auto 32px; padding: 12px 18px; border: 1px solid #fff4; border-radius: 12px; font-size: 12px; line-height: 1.8; color: #eee8e9; }
.response-grid { display: grid; gap: 24px; }
.response-card { min-width: 0; padding: clamp(20px, 4vw, 32px); border-radius: 24px; background: #fbfaf8; color: #385866; text-align: left; }
h3 { margin-bottom: 22px; font-family: 'Amalia Cormorant', Georgia, serif; font-size: 26px; font-weight: 600; }
label, legend { display: block; margin: 16px 0 8px; font-size: 13px; font-weight: 500; }
input:not([type='radio']), textarea { display: block; width: 100%; padding: 12px; border: 1px solid #476c7c40; border-radius: 10px; background: #fff; font: inherit; font-size: 14px; color: #233b45; }
textarea { resize: vertical; min-height: 120px; }
.attendance-options { display: flex; flex-wrap: wrap; gap: 18px; }
.attendance-options label { display: flex; align-items: center; gap: 8px; margin-top: 0; }
input[type='radio'] { accent-color: #476c7c; }
button { width: 100%; margin-top: 22px; padding: 13px; border-radius: 999px; color: #fff; background: #476c7c; font-size: 13px; font-weight: 600; }
button:hover { background: #385866; }
:is(input, textarea, button):focus-visible { outline: 2px solid #a45178; outline-offset: 3px; }
.count { display: inline-grid; place-items: center; min-width: 28px; height: 28px; margin-left: 6px; border-radius: 50%; background: #e6edf0; font-size: 16px; }
.attendance-counts { display: flex; gap: 22px; padding-bottom: 18px; border-bottom: 1px solid #476c7c20; font-size: 12px; }
.attendance-counts strong { font-size: 20px; margin-right: 4px; }
.wish-list { max-height: 480px; overflow-y: auto; padding-right: 4px; }
.wish-list li { padding: 20px 0; border-bottom: 1px solid #476c7c20; overflow-wrap: anywhere; }
.wish-heading { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; font-size: 14px; }
.wish-heading span { padding: 3px 7px; border-radius: 6px; background: #e6edf0; font-size: 10px; }
.wish-list p, .empty { margin-top: 12px; font-size: 13px; line-height: 1.8; }
.empty { padding-block: 24px; }
.error, .success { margin-top: 14px; font-size: 12px; line-height: 1.7; }
.error { color: #a32939; }
.success { color: #2f6548; }
@media (min-width: 760px) { .response-grid { grid-template-columns: 1fr 1fr; } }
</style>
