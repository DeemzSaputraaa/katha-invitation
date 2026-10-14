import type { CustomerInvitation } from '~/types/invitation'

/**
 * Dummy data undangan per template — netral, realistis.
 * Key = slug template. Jangan taruh data ini di dalam komponen template.
 *
 * Template baru: tambah satu entry dengan key slug-nya.
 */

function venueMaps(query: string): string {
  return `https://maps.google.com/?q=${encodeURIComponent(query)}`
}

/**
 * SEMUA undangan customer — SATU-SATUNYA tempat data customer ditulis.
 * Bentuk tiap entry: { template, data } (lihat tipe CustomerInvitation).
 *
 * ATURAN:
 * - Jangan pernah mengedit file TemplateXX.vue per customer.
 * - Entry "aurelia" adalah DEMO katalog — jangan diedit per customer.
 * - Customer baru = copy block contoh di bawah, ganti key (= slug URL)
 *   dan isi data. Foto asli taruh di public/invitations/<slug>/.
 */

export const invitations: Record<string, CustomerInvitation> = {
  // ── DEMO katalog (URL demo: /templates/aurelia). Jangan diedit per customer.
  aurelia: {
    template: 'aurelia',
    data: {
      greeting: 'Assalamu’alaikum warahmatullahi wabarakatuh',
    invitationLabel: 'The Wedding Of',
    couple: {
      person1: {
        name: 'Aurelia Putri',
        parents: 'Putri pertama dari Bpk. Hartono & Ibu Wulandari',
        photo: '/images/gallery/mempelaiwanita.jpg',
      },
      person2: {
        name: 'Adrian Nugroho',
        parents: 'Putra kedua dari Bpk. Nugroho & Ibu Ratih',
        photo: '/images/gallery/mempelaipria.jpg',
      },
    },
    dateLabel: 'Sabtu, 24 Oktober 2026',
    shortDateLabel: '24 . 10 . 2026',
    countdownTo: '2026-10-24T08:00:00+07:00',
    /** Opening cover: foto berdua1 */
    coverImage: '/images/gallery/berdua1.jpg',
    /** Hero slides: berdua2–5 */
    heroSlides: [
      { src: '/images/gallery/berdua2.jpg', alt: 'Foto bersama Aurelia & Adrian 1' },
      { src: '/images/gallery/berdua3.jpg', alt: 'Foto bersama Aurelia & Adrian 2' },
      { src: '/images/gallery/berdua4.jpg', alt: 'Foto bersama Aurelia & Adrian 3' },
      { src: '/images/gallery/berdua5.jpg', alt: 'Foto bersama Aurelia & Adrian 4' },
    ],
    /** Closing: foto berdua6 */
    closingImage: '/images/gallery/berdua6.jpg',
    /** Musik latar: Dvořák Romantic Pieces I (biola & piano, CC0 via Internet Archive) */
    musicUrl: '/audio/romantic-pieces-1.mp3',
    venue: {
      name: 'The Majestic Ballroom',
      address: 'Jl. Sudirman Kav. 52-53, Jakarta Selatan',
      mapsUrl: venueMaps('The Majestic Ballroom Jakarta'),
    },
    verse: {
      source: 'Q.S. Ar-Rum : 21',
      text: 'Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.',
    },
    events: [
      {
        title: 'Akad Nikah',
        date: 'Sabtu, 24 Oktober 2026',
        time: '08.00 – 10.00 WIB',
        venue: 'The Majestic Ballroom',
        address: 'Jakarta Selatan',
      },
      {
        title: 'Resepsi',
        date: 'Sabtu, 24 Oktober 2026',
        time: '11.00 – 13.00 WIB',
        venue: 'The Majestic Ballroom',
        address: 'Jakarta Selatan',
      },
    ],
    story: [
      { year: '2019', title: 'First Meet', text: 'Bertemu di sebuah pameran seni di Jakarta — Adrian yang banyak bicara, Aurelia yang banyak mengamati.' },
      { year: '2021', title: 'A New Chapter', text: 'Persahabatan berubah menjadi sesuatu yang lebih serius di sebuah perjalanan ke Ubud.' },
      { year: '2024', title: 'The Proposal', text: 'Di galeri tempat pertama kali bertemu, Adrian berlutut dengan restu kedua keluarga.' },
      { year: '2026', title: 'The Wedding', text: 'Kini kami mengundang Anda menjadi saksi babak terindah dari perjalanan kami.' },
    ],
    /** Gallery: semua foto berdua (kecuali mempelai individu) */
    gallery: [
      { src: '/images/gallery/berdua1.jpg', alt: 'Momen prewedding 1' },
      { src: '/images/gallery/berdua2.jpg', alt: 'Momen prewedding 2' },
      { src: '/images/gallery/berdua3.jpg', alt: 'Momen prewedding 3' },
      { src: '/images/gallery/berdua4.jpg', alt: 'Momen prewedding 4' },
      { src: '/images/gallery/berdua5.jpg', alt: 'Momen prewedding 5' },
      { src: '/images/gallery/berdua6.jpg', alt: 'Momen prewedding 6' },
    ],
    gifts: [
      { bank: 'Bank BCA', number: '123 456 7890', name: 'Aurelia Putri' },
      { bank: 'Bank Mandiri', number: '098 765 4321', name: 'Adrian Nugroho' },
    ],
    giftAddress: {
      name: 'Aurelia Putri',
      phone: '0812-3456-7890',
      address: 'Jl. Kemang Raya No. 10, Jakarta Selatan',
    },
    wishes: [
      { name: 'Keluarga Wijaya', message: 'Selamat menempuh hidup baru. Semoga menjadi keluarga yang sakinah, mawaddah, warahmah.' },
      { name: 'Nadia & Rizky', message: 'Akhirnya hari yang ditunggu tiba! Lancar sampai hari H ya.' },
      { name: 'Om Bambang', message: 'Barakallahu laka wa baraka alaika wa jamaa bainakuma fii khair.' },
    ],
    opening: [
      'Dengan memohon rahmat dan ridha Allah SWT, kami bermaksud menyempurnakan separuh agama kami dalam ikatan suci pernikahan.',
    ],
    closing: [
      'Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Anda berkenan hadir untuk memberikan doa restu.',
      'Kami yang berbahagia,',
    ],
    },
  },

  // ── CONTOH customer "budi-sinta" (URL: /budi-sinta).
  // Cara tambah customer: copy block ini → ganti key + isi data.
  // Foto di bawah masih placeholder; ganti dengan foto asli customer di
  // public/invitations/budi-sinta/ (mis. cover.jpg, 1.jpg, 2.jpg, ...).
  'budi-sinta': {
    template: 'aurelia',
    data: {
      greeting: 'Assalamu’alaikum warahmatullahi wabarakatuh',
      invitationLabel: 'The Wedding Of',
      couple: {
        person1: {
          name: 'Budi Santoso',
          parents: 'Putra pertama dari Bpk. Slamet & Ibu Darmi',
          photo: '/images/gallery/mempelaipria.jpg',
        },
        person2: {
          name: 'Sinta Ayu',
          parents: 'Putri kedua dari Bpk. Harto & Ibu Lestari',
          photo: '/images/gallery/mempelaiwanita.jpg',
        },
      },
      dateLabel: 'Sabtu, 20 Desember 2026',
      shortDateLabel: '20 . 12 . 2026',
      countdownTo: '2026-12-20T08:00:00+07:00',
      coverImage: '/images/gallery/berdua1.jpg',
      heroSlides: [
        { src: '/images/gallery/berdua2.jpg', alt: 'Foto bersama Budi & Sinta 1' },
        { src: '/images/gallery/berdua3.jpg', alt: 'Foto bersama Budi & Sinta 2' },
        { src: '/images/gallery/berdua4.jpg', alt: 'Foto bersama Budi & Sinta 3' },
      ],
      closingImage: '/images/gallery/berdua6.jpg',
      musicUrl: '/audio/romantic-pieces-1.mp3',
      venue: {
        name: 'Gedung ABC',
        address: 'Jl. Merdeka No. 45, Bandung',
        mapsUrl: venueMaps('Gedung ABC Bandung'),
      },
      verse: {
        source: 'Q.S. Ar-Rum : 21',
        text: 'Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.',
      },
      events: [
        {
          title: 'Akad Nikah',
          date: 'Sabtu, 20 Desember 2026',
          time: '08.00 – 10.00 WIB',
          venue: 'Gedung ABC',
          address: 'Bandung',
        },
        {
          title: 'Resepsi',
          date: 'Sabtu, 20 Desember 2026',
          time: '11.00 – 13.00 WIB',
          venue: 'Gedung ABC',
          address: 'Bandung',
        },
      ],
      story: [
        { year: '2020', title: 'First Meet', text: 'Bertemu di kampus — Budi kakak tingkat yang suka menolong, Sinta adik tingkat yang rajin bertanya.' },
        { year: '2022', title: 'A New Chapter', text: 'Setelah lulus, hubungan berlanjut ke komitmen yang lebih serius atas restu keluarga.' },
        { year: '2025', title: 'The Proposal', text: 'Budi melamar Sinta di hadapan kedua keluarga besar.' },
        { year: '2026', title: 'The Wedding', text: 'Kini kami mengundang Anda menjadi saksi babak terindah dari perjalanan kami.' },
      ],
      gallery: [
        { src: '/images/gallery/berdua1.jpg', alt: 'Momen Budi & Sinta 1' },
        { src: '/images/gallery/berdua2.jpg', alt: 'Momen Budi & Sinta 2' },
        { src: '/images/gallery/berdua3.jpg', alt: 'Momen Budi & Sinta 3' },
        { src: '/images/gallery/berdua4.jpg', alt: 'Momen Budi & Sinta 4' },
      ],
      gifts: [
        { bank: 'Bank BCA', number: '111 222 3333', name: 'Budi Santoso' },
        { bank: 'Bank Mandiri', number: '444 555 6666', name: 'Sinta Ayu' },
      ],
      giftAddress: {
        name: 'Budi Santoso',
        phone: '0812-0000-1111',
        address: 'Jl. Merdeka No. 45, Bandung',
      },
      wishes: [
        { name: 'Keluarga Slamet', message: 'Selamat menempuh hidup baru. Semoga menjadi keluarga yang sakinah, mawaddah, warahmah.' },
      ],
      opening: [
        'Dengan memohon rahmat dan ridha Allah SWT, kami bermaksud menyempurnakan separuh agama kami dalam ikatan suci pernikahan.',
      ],
      closing: [
        'Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Anda berkenan hadir untuk memberikan doa restu.',
        'Kami yang berbahagia,',
      ],
    },
  },
}

export function getInvitation(slug: string): CustomerInvitation | undefined {
  return invitations[slug]
}
