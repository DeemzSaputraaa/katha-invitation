# Template Amalia

Adaptasi Vue/Nuxt dari proyek Next.js milik pengguna:
- Sumber lokal: `D:/Project/undangan1` (dibaca, tidak diubah).
- Website acuan: https://pernikahan-amalia-fajar.vercel.app/
- Demo katalog: `/amalia`.

## Memakai untuk customer lain

1. Salin entry `amalia` pada `app/data/invitations.ts` ke slug customer baru.
2. Tetapkan `template: 'amalia'`, lalu ubah `data`:
   - `couple.person1/person2.name`, `shortName`, `parents`, dan foto opsional.
   - `dateLabel`, `shortDateLabel`, `countdownTo`, `events`, `venue`.
   - `coverImage`, `closingImage`, `opening`, `closing`.
   - `musicUrl` atau `musicTracks` untuk pilihan musik.
3. Isi `story`, `gallery`, `gifts`, atau `giftAddress` jika dibutuhkan. Array
   kosong tidak menampilkan bagian tambahan tersebut.
4. Tambahkan `/<slug-customer>` ke daftar prerender `nuxt.config.ts`.
5. Bagikan `/<slug-customer>?to=Nama%20Tamu`.

Monogram memakai inisial `shortName`, dengan fallback ke nama lengkap.
Tanggal dekoratif dirender sebagai teks dari `countdownTo` (zona WIB).
Tidak ada nama atau tanggal customer yang tertanam pada artwork template.

## Aset dan integrasi

Ilustrasi/tekstur/ornamen dari website sumber disimpan sebagai WebP lokal di
`public/images/amalia/`. Font Great Vibes, Cormorant, dan DM Sans
yang dipakai sumber disimpan di `public/fonts/amalia/`. Musik disalin dari
folder `public/music` proyek sumber ke `public/audio/amalia-*.mp3`.
Tidak diperlukan request ke deployment sumber saat menjalankan template.

`AmaliaResponses.vue` menyediakan simulasi ucapan dan kehadiran dengan
validasi input. Data hilang saat reload. Koneksi, kredensial, dan data tamu
Supabase website asli tidak dipindahkan; gunakan API terpisah yang menyimpan
respons per undangan jika platform nantinya menyediakan backend.

Layout penuh mengikuti desain sumber; template lain tetap memakai layout
masing-masing. Komponen frame, musik, dan formulir hanya dipakai Amalia.
