# Product Requirements Document (PRD)

## Landing Page Platform Undangan Digital

### 1. Overview

Membangun landing page modern untuk bisnis undangan digital yang berfungsi sebagai:

- Brand introduction
- Katalog template (Aurelia — master referensi)
- Demo interaktif template (`/templates/aurelia`)
- Informasi harga
- Penjelasan fitur
- FAQ
- CTA untuk melakukan pemesanan melalui WhatsApp

Versi pertama **belum menggunakan database, authentication, Laravel, payment gateway, maupun dashboard**.

Landing page harus dibuat dengan arsitektur frontend yang rapi sehingga nantinya dapat diintegrasikan dengan Laravel API tanpa perlu melakukan rewrite besar.

---

# 2. Tujuan Produk

Tujuan utama:

1. Membuat bisnis terlihat profesional dan terpercaya.
2. Menampilkan template undangan dengan visual yang menarik.
3. Memudahkan calon customer menemukan template.
4. Memungkinkan customer melihat demo template sebelum membeli.
5. Mengarahkan customer melakukan pemesanan melalui WhatsApp.
6. Memiliki fondasi frontend yang siap dikembangkan menjadi platform SaaS.

### Primary Goal

Pengunjung harus dapat memahami produk dalam beberapa detik:

> Apa produknya → seperti apa hasilnya → berapa harganya → bagaimana cara mendapatkannya.

---

# 3. Target User

### Primary User

Calon pasangan yang sedang mempersiapkan:

- Pernikahan
- Lamaran
- Acara keluarga

### Secondary User

- Wedding organizer
- Fotografer
- Vendor pernikahan
- Event organizer

---

# 4. Technology Stack

Gunakan:

- Nuxt 4
- Vue 3
- TypeScript
- Tailwind CSS
- Lenis untuk smooth scrolling
- Vercel untuk deployment

Jangan menambahkan:

- Laravel
- Database
- Authentication
- Payment gateway
- CMS
- Admin dashboard

Semua data katalog sementara disimpan sebagai static data/TypeScript data.

---

# 5. Design Direction

## Visual Style

Desain harus:

- Elegant
- Modern
- Minimalist
- Premium
- Clean
- User friendly
- Tidak terlihat seperti template website generik
- Tidak terlalu ramai
- Tidak menggunakan terlalu banyak efek

### Primary Background

Gunakan **putih sebagai warna dasar utama**.

Putih harus mendominasi keseluruhan halaman.

Gunakan warna tambahan secara subtle untuk:

- Typography
- Border
- Button
- Accent
- Template preview

Jangan menggunakan gradient berlebihan.

### Color Direction

Base (dominan):

- White
- Venetian Lace (#F7EDDA)

Primary (CTA, aksen, highlight):

- Fiery Glow (#F0531C, versi dalam #C9480F untuk teks kecil & tombol
  agar kontras lolos aksesibilitas)

Pendukung (secukupnya, bergantian per section):

- Norfolk Green (#2E4B3C) dan Fence Green (#09332C) untuk panel gelap,
  badge, ikon, dan footer
- Pumpkin Vapor (#FFA74F) untuk dekorasi dan glow lembut
- Macadamia Beige (#F7DFBA) sebagai latar section bergantian

Typography:

- Warm charcoal (#2B2320)

Perpaduan putih × oren × hijau. Oren tampil berani pada CTA, badge,
dan aksen; hijau untuk panel gelap dan footer; putih/krem tetap menjadi
latar dominan. Panel CTA menggunakan warna solid (bukan gradient);
gradient hanya untuk logo.

---

# 6. Typography

Gunakan kombinasi typography yang elegan.

Font yang digunakan:

- Plus Jakarta Sans untuk body dan UI (modern, tegas, mudah dibaca —
  gunakan weight 400–800 sesuai hierarchy)
- Fraunces untuk heading (serif modern-editorial, weight 500–600,
  gunakan italic untuk aksen kata)

Contoh karakter:

Heading:

> "Undangan yang indah untuk hari yang istimewa."

Body:

> "Buat undangan digital yang elegan, mudah dibagikan, dan berkesan."

Jangan menggunakan typography yang terlalu dekoratif sehingga mengurangi readability.

---

# 7. Navigation

Navbar harus minimal dan clean.

Desktop:

- Logo / brand
- Template
- Fitur
- Cara Pesan
- Harga
- FAQ
- CTA

CTA:

> Lihat Template

Navbar harus:

- Sticky
- Memiliki perubahan visual ketika scroll
- Tetap ringan
- Tidak terlalu tinggi

Mobile menggunakan hamburger menu atau mobile navigation yang clean.

---

# 8. Landing Page Structure

## Section 1 — Hero

Hero adalah section paling penting.

Tujuan:

Dalam beberapa detik user harus mengetahui bahwa ini adalah layanan undangan digital.

Contoh copy:

### Heading

> Buat Undangan Digital yang Berkesan

### Subheading

> Undangan elegan yang mudah dibagikan untuk momen spesial Anda.

CTA (satu-satunya):

> Lihat Template

Hero menggunakan layout centered satu kolom tanpa visual/mockup di sisi kanan —
hanya badge, headline, subheading, satu CTA.

Hero setinggi 1 viewport penuh (`min-h-screen`) dengan konten center vertikal,
background cream + 3 blob warna lembut (oren, pumpkin, hijau).

Jangan menggunakan hero yang terlalu penuh.

---

# 9. Social Proof / Trust Section

Section pendek setelah hero dengan background hijau gelap solid (#09332C).

Contoh:

> Dibuat untuk membuat momen spesial Anda terasa lebih berkesan.

Isi 4 kartu putih (2 kolom di HP, 4 kolom di desktop), masing-masing dengan
ikon garis SVG minimal di kotak tinted:

- Desain Elegan — Template yang dirancang untuk memberikan kesan premium dan personal.
- Mudah Dibagikan — Cukup kirim satu link melalui WhatsApp, Instagram, atau media sosial lainnya.
- Interaktif & Personal — Dilengkapi countdown, galeri, RSVP, ucapan, love story, dan fitur lainnya.
- Cepat & Praktis — Tidak perlu cetak dan bisa langsung dibagikan kepada tamu.

Tidak perlu angka palsu seperti:

> "10.000+ customer"

jika bisnis belum memiliki data tersebut.

---

# 10. Template Catalog

Section utama:

### Heading

> Pilih Desain Favoritmu

Subheading:

> Temukan template yang sesuai dengan gaya dan momen spesialmu.

Tampilkan card template.

Setiap card memiliki:

- Preview image
- Nama template
- Kategori
- Harga
- Tombol "Preview" + CTA "Pesan"

Contoh:

```text
Aurelia
Elegant
Rp99.000

[Preview] [Pesan]
```

Template harus memiliki visual preview yang besar.

Tombol "Preview" langsung menuju demo full undangan di `/templates/[slug]`
tanpa lightbox/popup perantara.

Flow: Katalog → Preview (= Lihat Demo) → Full Invitation → Pesan → WhatsApp.

---

# 11. Template Filtering

Tambahkan filtering sederhana.

Kategori:

- Semua
- Wedding
- Minimalist
- Elegant
- Floral
- Modern
- Traditional

Untuk tahap pertama filtering dapat dilakukan client-side menggunakan static data.

Jangan membuat sistem backend.

---

# 12. Template Detail / Demo (LIVE — Aurelia, master referensi)

Katha memiliki 1 template master — Aurelia (Elegant, editorial mewah,
serif italic, ivory + gold) — undangan lengkap dari opening sampai closing.
Template baru dibuat dengan meng-copy Aurelia lalu mengubah karakter
visual + urutan section (panduan ada di header file `AureliaTemplate.vue`).

Cara menambah template:
1. Copy `AureliaTemplate.vue` → mis. `NoirTemplate.vue`.
2. Tambah data di `data/invitations.ts` dengan key = slug baru.
3. Daftarkan di `registry.ts` + `templates.ts` (field `component`).
4. Buat preview SVG `public/images/templates/<slug>.svg`.
5. Tambah route prerender di `nuxt.config.ts` + tambah slug ke
   `TemplateComponentName` di `types/invitation.ts`.

## Route

Dynamic route `/templates/[slug]` (contoh: `/templates/aurelia`).
Slug tidak dikenal → 404 proper, tanpa crash.
Halaman demo adalah fullscreen tanpa navbar & footer landing
(disembunyikan via `isTemplateRoute` di `layouts/default.vue`);
tombol Preview di katalog membuka demo di tab baru (`target="_blank"`).

## Architecture (wajib dipertahankan)

```text
Template  = Design/Layout  (components/invitation/templates/TemplateXX.vue)
Data      = Customer Content (types/invitation.ts + data/invitations.ts)
Renderer  = pages/templates/[slug].vue (Template + Data via registry)
```

- Satu `data/templates.ts` dipakai katalog DAN route (single source of truth).
- Registry: static import slug → komponen (bukan dynamic import).
- Data dummy netral per template, berbeda antar template, tidak di-hardcode di komponen.
- Jangan copy TemplateXX.vue per customer — satu template dipakai berkali-kali dengan data berbeda.

## Reusable sections

`components/invitation/sections/`: Opening, Hero, Greeting, Couple,
Countdown, Event, Location, Verse (ayat/kutipan), Story, Gallery, Gift,
RSVP, Wishes, Closing.
Section menerima variant (mis. countdown `boxed|minimal|wide`, gallery
`grid|masonry|editorial`, couple `stacked|split`, story `timeline|editorial`,
event `cards|list`) — visual quality lebih penting daripada abstraksi.

Setiap template wajib lengkap ala undangan customer: Location setelah
Event, Verse setelah Location, dan Gift mencantumkan rekening (tombol
salin) + alamat kirim hadiah fisik.

## Opening split-screen (wajib)

Opening adalah gate fullscreen (`min-h-[100svh]`) dengan dua panel.
Ukuran split opening SAMA PERSIS dengan split isi undangan:

- Landscape/desktop: panel kiri `flex-1` + panel kanan `430px` (`shrink-0`).
- Portrait/mobile: panel kiri `display:none`, panel kanan penuh
  (`100vw × 100svh`). JANGAN menumpuk kiri-di-atas-kanan.

Ditentukan oleh orientation (`landscape:` variant), bukan sekadar width —
tablet portrait ikut aturan portrait.

## Konsep split katalog / isi undangan (wajib)

Setelah "Buka Undangan" diklik, konten Hero sampai Closing memakai
layout split 2 kolom di landscape (lihat `AureliaTemplate.vue`):

- KIRI (`aside`, `landscape:sticky top-0 h-[100svh] flex-1`):
  statis/diam, hanya teks editorial — label undangan, nama mempelai besar
  serif italic, divider aksen, tanggal. Background warna panel template
  (Aurelia: `#D1E8FC`).
- KANAN (`landscape:w-[430px] shrink-0 shadow-2xl`): kolom selebar HP yang
  ikut scroll halaman, berisi SEMUA section (Hero, Greeting, Couple,
  Countdown, Event, Location, Verse, Story, Gallery, Gift, RSVP, Wishes,
  Closing, Footer) sama persis seperti tampilan mobile (dipaksa via
  `.inv-mobile-col`, `max-w-2xl`).
- Portrait/mobile: single-column normal, panel kiri `hidden`.

Tidak ada section isi yang memakai grid 2 kolom per-section — split hanya
di level template (kiri statis vs kanan scroll).

## Konsep Closing → Footer menyatu via gradasi (wajib)

Closing (`InvitationClosing.vue`) dan footer undangan
(`InvitationFooter.vue`) harus tampak sebagai satu kesatuan tanpa garis
batas:

- Closing: foto background penuh `100svh` + overlay gradasi gelap bawah
  (`rgba(10,30,60,0.82)` → transparan atas) agar teks putih terbaca.
- Ujung bawah closing ada fade `h-40`:
  `linear-gradient(to bottom, transparent → fadeColor)`.
- Footer TIDAK punya background solid sendiri — `bgColor` prop footer HARUS
  sama dengan `fadeColor` closing (Aurelia: `#1A4F7A`), sehingga fade
  melebur seamlessly ke footer.
- Di dalam footer ada gradasi lanjutan:
  `linear-gradient(to bottom, bgColor → bgColorDeep)` untuk memberi dimensi
  (atas = warna fade closing, bawah = lebih deep/gelap).
- Aturan: setiap template baru wajib menjaga pasangan
  `fadeColor == bgColor`; hanya `bgColorDeep` yang boleh berbeda untuk efek
  gradasi ke bawah.

## Cover / Buka Undangan

Tombol "Buka Undangan" ada di panel kanan (agar tersedia di mobile).
Implementasi overlay: konten tetap di DOM (baik untuk SEO/prerender),
cover hilang saat tombol diklik. Tanpa loading palsu. Hero terpisah
tampil setelah opening: label, nama pasangan, tanggal, visual berbingkai.

## Aturan khusus halaman undangan

- Lenis DIMATIKAN di route `/templates/*` — undangan memakai native scroll.
- Musik latar via `InvitationMusic.vue` (`data.musicUrl`, loop): autoplay
  dipicu klik "Buka Undangan" (user gesture agar lolos aturan browser),
  tombol melayang play/pause fixed kanan-bawah (z-60, di balik opening
  z-80 sampai undangan dibuka). File default
  `public/audio/romantic-pieces-1.mp3` — Dvořák Romantic Pieces I
  (biola & piano, CC0 via Internet Archive,
  `archive.org/details/Dvorak_RegentHall_1-3-2013`); ganti file + field
  `musicUrl` untuk customer lain.
- Tanpa iframe Google Maps — tombol link saja (performance).
- Galeri memakai placeholder SVG sepalet (`public/images/gallery/`).
- Copy nomor rekening harus benar-benar bekerja (clipboard + fallback).
- RSVP & wishes hanya local state (demo, tanpa backend).
- Countdown live (days/hours/minutes/seconds), render statis `--` sampai
  mounted agar tidak hydration mismatch; ada state jika tanggal lewat.
- Mobile-first; desktop memakai max-width + komposisi editorial.

---

# 13. Features Section

Heading:

> Apa saja yang ada di dalamnya?

Tampilkan 6 fitur dalam grid:

### 01 — Countdown

Hitung mundur menuju hari spesial.

### 02 — Event & Google Maps

Informasi acara lengkap dengan lokasi yang mudah ditemukan.

### 03 — Photo Gallery

Abadikan dan tampilkan momen terbaik kalian.

### 04 — RSVP & Ucapan

Tamu dapat mengonfirmasi kehadiran dan mengirimkan ucapan.

### 05 — Love Story

Ceritakan perjalanan kalian dari awal hingga hari bahagia.

### 06 — Amplop Digital

Berikan kemudahan bagi tamu yang ingin mengirimkan hadiah secara digital.

---

# 14. How It Works

Buat proses sederhana dalam 3 langkah.

### 01 — Pilih Template

Jelajahi katalog dan pilih gaya yang paling sesuai dengan momen spesialmu.

### 02 — Kirim Data

Berikan data acara, foto, dan informasi yang ingin ditampilkan.

### 03 — Undangan Siap Dibagikan

Undangan siap dibagikan kepada keluarga dan teman.

Gunakan visual step yang minimal.

---

# 15. Pricing

Buat pricing sederhana.

Contoh:

### Basic

Rp49.000

- Template pilihan
- Informasi acara
- Galeri
- Google Maps
- Countdown
- Musik
- RSVP

### Premium

Rp99.000

- Template premium
- Semua fitur Basic
- Love story
- RSVP
- Ucapan
- Customisasi lebih luas

### Custom

Mulai Rp199.000

- Desain khusus
- Request layout
- Customisasi
- Konsultasi

Harga harus mudah diubah dari satu static data file.

Jangan hardcode harga di banyak component.

---

# 16. Testimonials

Untuk versi awal:

Jika belum memiliki customer/testimonial nyata, jangan membuat testimonial palsu.

Bisa menggunakan section:

> "Dirancang untuk membuat undangan digital terasa lebih personal."

Setelah mendapatkan customer nyata, section testimonial dapat ditambahkan.

---

# 17. FAQ

Hanya 5 pertanyaan (jangan ditambah tanpa kebutuhan):

### Apa itu undangan digital?

### Apakah bisa dibuka melalui HP?

### Berapa lama proses pembuatannya?

### Apakah bisa menggunakan foto sendiri?

### Bagaimana cara membagikan undangan?

Accordion harus smooth dan accessible.

---

# 18. Final CTA

Section sebelum footer. Background cream + blob warna lembut seperti hero,
konten di dalam kartu cream dengan heading gelap dan aksen oren.

Heading:

> Siap Membuat Undanganmu?

Subheading:

> Pilih desain favoritmu dan mulai buat undangan digital untuk hari spesialmu.

CTA:

> Lihat Template

Secondary:

> Konsultasi via WhatsApp

---

# 19. Footer

Footer satu kolom, rata tengah, background hijau gelap.

Isi (berurutan dari atas ke bawah):

- Brand (Katha)
- Tagline (Undangan Digital Elegan)
- Short description
- Hubungi Kami: WhatsApp + nomor tampil (fast respons), Lokasi, Jam Operasional
- Copyright + "Dibuat dengan teliti di Indonesia" (kiri-kanan di desktop)

Tidak ada kolom link navigasi (Jelajahi dihapus).

Instagram dan Email sudah tersimpan di `site.ts` tetapi disembunyikan
sampai akunnya benar-benar ada.

---

# 20. Smooth Scrolling

Gunakan **Lenis**.

Requirement:

- Smooth
- Natural
- Tidak terlalu lambat
- Tidak terasa berat
- Tetap responsive
- Tidak mengganggu native mobile scrolling

Gunakan konfigurasi yang modern dan ringan.

Jangan menambahkan terlalu banyak scroll animation.

---

# 21. Animation

Gunakan animation secara restrained.

Animasi yang diperbolehkan:

- Fade up
- Fade in
- Scale subtle
- Image reveal
- Hover
- Navbar transition
- Section reveal

Semua animasi harus:

- Smooth
- Cepat
- Elegan
- Tidak berlebihan

Hindari:

- Excessive parallax
- Excessive bouncing
- Excessive blur
- Animasi yang membuat website terasa lambat

Hormati:

```text
prefers-reduced-motion
```

---

# 22. Responsive Design

Website harus dirancang mobile-first.

Breakpoints minimal:

- Mobile
- Tablet
- Desktop
- Large desktop

Pastikan:

- Tidak ada horizontal overflow
- Typography tidak terlalu besar di mobile
- Navbar nyaman digunakan
- Template card tetap proporsional
- Hero tetap menarik di mobile
- Button mudah ditekan
- Image tidak pecah
- Section spacing adaptif

Prioritas utama:

> Mobile experience harus sama bagusnya dengan desktop.

---

# 23. Performance

Target:

- Fast initial load
- Optimized images
- Lazy loading
- WebP/AVIF bila memungkinkan
- Tidak memasukkan library yang tidak diperlukan
- Code splitting
- Minimal JavaScript
- Animasi tidak mengganggu performance

Jangan menggunakan video berat sebagai background hero kecuali benar-benar diperlukan.

---

# 24. SEO

Landing page harus SEO-ready.

Implementasikan:

- Proper title
- Meta description
- Open Graph
- Twitter/X card
- Semantic HTML
- Heading hierarchy
- Alt text
- Canonical URL
- Sitemap-ready architecture

Contoh title:

> Undangan Digital Elegan | Katha

---

# 25. Accessibility

Implementasikan:

- Semantic HTML
- Keyboard navigation
- Focus state
- Accessible buttons
- Accessible navigation
- Alt text
- Contrast yang baik
- `aria-label` bila diperlukan

---

# 26. Project Structure

Gunakan struktur yang scalable.

Contoh:

```text
app/
├── components/
│   ├── layout/
│   ├── sections/
│   ├── template/
│   ├── invitation/
│   │   ├── sections/      (Opening, Hero, Greeting, Couple, Countdown,
│   │   │                   Event, Location, Verse, Story, Gallery,
│   │   │                   Gift, RSVP, Wishes, Closing)
│   │   └── templates/     (AureliaTemplate.vue + registry.ts)
│   └── ui/
│
├── data/
│   ├── templates.ts       (katalog: dipakai landing + route)
│   ├── invitations.ts     (data dummy per template)
│   ├── pricing.ts
│   └── faq.ts
│
├── types/
│   └── invitation.ts      (InvitationData, CatalogTemplate)
│
├── pages/
│   ├── index.vue
│   └── templates/
│       └── [slug].vue     (renderer: Template + Data)
│
├── composables/
├── layouts/
└── assets/
```

Jangan membuat satu `index.vue` yang berisi seluruh landing page.

Component harus reusable.

---

# 27. Future Backend Compatibility

Walaupun backend belum dibuat, architecture harus siap untuk migrasi.

Sekarang:

```text
Nuxt
 ↓
Static TypeScript Data
```

Nanti:

```text
Nuxt
 ↓
Laravel API
 ↓
Database
```

Jangan membuat frontend bergantung pada struktur data yang sulit dimigrasikan.

Template data harus memiliki identifier:

```text
id
slug
name
category
price
previewImage
description
```

---

# 28. WhatsApp CTA

Karena belum ada payment/backend, CTA pemesanan diarahkan ke WhatsApp.

Gunakan format pesan otomatis:

> Halo, saya tertarik dengan template [Nama Template]. Saya ingin mengetahui detail pemesanannya.

Pastikan nama template dapat dimasukkan secara dinamis.

---

# 29. Definition of Done

Landing page dianggap selesai jika:

- [ ] Hero selesai
- [ ] Navbar responsive
- [ ] Template catalog selesai
- [ ] Filtering template bekerja
- [x] Template Aurelia bekerja (opening split, hero, countdown, event, location, galeri, gift, RSVP, wishes, closing)
- [ ] Feature section selesai
- [ ] How it works selesai
- [ ] Pricing selesai
- [ ] FAQ selesai
- [ ] CTA WhatsApp bekerja
- [ ] Footer selesai
- [ ] Lenis terintegrasi
- [ ] Responsive mobile/tablet/desktop
- [ ] No horizontal overflow
- [ ] SEO dasar selesai
- [ ] Accessibility dasar selesai
- [ ] Image optimization selesai
- [ ] Tidak ada console error
- [ ] Build production berhasil
- [ ] Siap deploy ke Vercel

---

# 30. Prinsip Utama

Jangan membuat website yang hanya terlihat "keren".

Prioritaskan:

1. Conversion
2. Readability
3. Trust
4. Template presentation
5. Performance
6. Responsive experience
7. Maintainability

Desain harus terlihat premium tanpa menjadi berlebihan.
