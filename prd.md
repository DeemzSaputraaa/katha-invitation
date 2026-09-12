# Product Requirements Document (PRD)

## Landing Page Platform Undangan Digital

### 1. Overview

Membangun landing page modern untuk bisnis undangan digital yang berfungsi sebagai:

- Brand introduction
- Katalog template undangan
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
4. Mengarahkan customer melakukan pemesanan melalui WhatsApp.
5. Memiliki fondasi frontend yang siap dikembangkan menjadi platform SaaS.

> Catatan: tujuan "melihat demo template sebelum membeli" DITUNDA —
> demo interaktif menyusul per template (lihat section 12).

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
hanya badge, headline, subheading, satu CTA, dan checklist keunggulan.

Jangan menggunakan hero yang terlalu penuh.

---

# 9. Social Proof / Trust Section

Tambahkan section pendek setelah hero.

Contoh:

> Dibuat untuk membuat momen spesial Anda terasa lebih berkesan.

Tampilkan beberapa value:

- Elegant Design
- Mobile Friendly
- Mudah Dibagikan
- Cepat & Ringan

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
- CTA "Pesan via WhatsApp"

Contoh:

```text
Elegant
Wedding
Rp79.000

[Pesan via WhatsApp]
```

Template harus memiliki visual preview yang besar.

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

# 12. Template Detail / Demo (DITUNDA)

> Status: halaman demo dihapus untuk versi saat ini. Route `/templates/[slug]`
> TIDAK ada. Tombol demo di hero, kartu katalog, dan footer sudah dihapus.
> Demo interaktif akan dibangun ulang nanti, masing-masing dari katalognya.

Spesifikasi di bawah ini disimpan sebagai acuan masa depan dan JANGAN
diimplementasikan sampai ada instruksi:

Setiap template harus dapat dibuka.

Contoh route:

```text
/templates/elegant
```

Halaman demo harus terasa seperti undangan digital sungguhan.

Contoh section:

- Cover
- Nama pasangan
- Countdown
- Wedding event
- Location
- Story
- Gallery
- RSVP
- Wishes
- Closing

Data demo menggunakan dummy data netral (jangan nama orang spesifik).

Tujuan halaman ini bukan hanya memperlihatkan screenshot tetapi memperlihatkan bagaimana template bekerja ketika digunakan.

---

# 13. Features Section

Heading:

> Semua yang Anda Butuhkan dalam Satu Undangan

Feature:

### Elegant Design

Desain modern yang dibuat untuk memberikan kesan premium.

### Mobile Friendly

Nyaman dibuka melalui smartphone, tablet, maupun desktop.

### Easy to Share

Bagikan undangan dengan mudah melalui WhatsApp dan media sosial.

### Interactive

Countdown, gallery, maps, RSVP, dan fitur interaktif lainnya.

### Fast

Optimasi performa sehingga undangan tetap ringan dan cepat dibuka.

---

# 14. How It Works

Buat proses sederhana dalam 3 langkah.

### 01 — Pilih Template

Pilih desain yang paling sesuai dengan gaya Anda.

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

Pertanyaan:

### Apa itu undangan digital?

### Apakah bisa dibuka melalui HP?

### Berapa lama proses pembuatannya?

### Apakah bisa menggunakan foto sendiri?

### Apakah bisa request desain?

### Bagaimana cara membagikan undangan?

### Apakah bisa menggunakan Google Maps?

### Apakah bisa menggunakan RSVP?

Accordion harus smooth dan accessible.

---

# 18. Final CTA

Section sebelum footer.

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

Footer minimal.

Isi:

- Logo
- Short description
- Template
- Fitur
- Harga
- FAQ
- WhatsApp
- Instagram
- Copyright

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
│   └── ui/
│
├── data/
│   ├── templates.ts
│   ├── pricing.ts
│   └── faq.ts
│
├── pages/
│   ├── index.vue
│   └── templates/
│       └── [slug].vue
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
- [ ] Template detail/demo DITUNDA (route dihapus, menyusul per template)
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
