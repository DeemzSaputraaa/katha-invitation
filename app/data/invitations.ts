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
  // ── DEMO katalog (URL demo: /aurelia). Jangan diedit per customer.
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

  // ── DEMO Florena. Foto memakai aset contoh lokal, konten terpisah dari Aurelia.
  florena: {
    template: 'florena',
    data: {
      greeting: 'Assalamu’alaikum warahmatullahi wabarakatuh',
      invitationLabel: 'The Wedding Of',
      couple: {
        person1: {
          name: 'Nara Kirana',
          parents: 'Putri pertama dari Bpk. Arif Rahman & Ibu Ratna Sari',
          photo: '/images/gallery/mempelaiwanita.jpg',
        },
        person2: {
          name: 'Raka Pratama',
          parents: 'Putra kedua dari Bpk. Hendra Wijaya & Ibu Maya Lestari',
          photo: '/images/gallery/mempelaipria.jpg',
        },
      },
      dateLabel: 'Minggu, 22 November 2026',
      shortDateLabel: '22 . 11 . 2026',
      countdownTo: '2026-11-22T08:00:00+07:00',
      coverImage: '/images/gallery/berdua3.jpg',
      heroSlides: [
        { src: '/images/gallery/berdua3.jpg', alt: 'Potret kebersamaan Nara & Raka' },
        { src: '/images/gallery/berdua5.jpg', alt: 'Momen hangat Nara & Raka' },
        { src: '/images/gallery/berdua2.jpg', alt: 'Cerita cinta Nara & Raka' },
      ],
      closingImage: '/images/gallery/berdua4.jpg',
      musicUrl: '/audio/romantic-pieces-1.mp3',
      venue: {
        name: 'Taman Senja',
        address: 'Jl. Kaliurang, Sleman, Yogyakarta — lokasi contoh',
        mapsUrl: venueMaps('Sleman Yogyakarta'),
      },
      events: [
        { title: 'Akad Nikah', date: 'Minggu, 22 November 2026', time: '08.00 – 09.30 WIB', venue: 'Taman Senja', address: 'Sleman, Yogyakarta' },
        { title: 'Resepsi', date: 'Minggu, 22 November 2026', time: '10.30 – 13.00 WIB', venue: 'Taman Senja', address: 'Sleman, Yogyakarta' },
      ],
      verse: {
        source: 'Q.S. Ar-Rum : 21',
        text: 'Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.',
      },
      story: [
        { year: '2020', title: 'Pertemuan sederhana', text: 'Di sebuah toko buku kecil, percakapan tentang halaman favorit menjadi awal cerita kami.' },
        { year: '2022', title: 'Tumbuh bersama', text: 'Dari berjalan sore hingga berbagi mimpi, kami menemukan rumah dalam kebersamaan.' },
        { year: '2025', title: 'Satu janji', text: 'Di antara bunga dan doa keluarga, kami sepakat melangkah menuju hari yang sama.' },
        { year: '2026', title: 'Selamanya dimulai', text: 'Dengan hati penuh syukur, kami mengundang Anda merayakan awal perjalanan baru kami.' },
      ],
      gallery: [
        { src: '/images/gallery/berdua3.jpg', alt: 'Cerita Nara & Raka — bersama' },
        { src: '/images/gallery/berdua1.jpg', alt: 'Cerita Nara & Raka — senyum' },
        { src: '/images/gallery/berdua5.jpg', alt: 'Cerita Nara & Raka — hari bahagia' },
        { src: '/images/gallery/berdua2.jpg', alt: 'Cerita Nara & Raka — perjalanan' },
        { src: '/images/gallery/berdua6.jpg', alt: 'Cerita Nara & Raka — kenangan' },
        { src: '/images/gallery/berdua4.jpg', alt: 'Cerita Nara & Raka — selamanya' },
      ],
      gifts: [
        { bank: 'Bank BCA (contoh)', number: '123 456 7890', name: 'Nara Kirana' },
        { bank: 'Bank Mandiri (contoh)', number: '098 765 4321', name: 'Raka Pratama' },
      ],
      giftAddress: {
        name: 'Nara & Raka',
        phone: '0812-0000-0000 (contoh)',
        address: 'Jl. Melati No. 22, Sleman, Yogyakarta — alamat contoh',
      },
      wishes: [
        { name: 'Keluarga Rahman', message: 'Semoga cinta kalian terus tumbuh dan rumah tangga selalu dipenuhi kasih serta keberkahan.' },
        { name: 'Alya & Fajar', message: 'Bahagia selalu, Nara dan Raka. Tidak sabar merayakan hari istimewa kalian!' },
      ],
      opening: [
        'Dengan memohon rahmat dan ridha Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan berbagi kebahagiaan di hari pernikahan kami.',
      ],
      closing: [
        'Seperti bunga yang tumbuh bersama musim, semoga kasih kami senantiasa bersemi dalam doa dan restu Anda.',
        'Terima kasih telah menjadi bagian dari cerita kami.',
      ],
    },
  },

  // ── PORTOFOLIO Amalia (KATALOG SAJA, JANGAN dipakai ulang).
  // Data asli Amalia & Fajar. Customer baru WAJIB pakai aurelia/florena,
  // jangan copy entry ini. Flag portfolioOnly ada di data/templates.ts.
  amalia: {
    template: 'amalia',
    data: {
      greeting: 'Assalamu’alaikum warahmatullahi wabarakatuh',
      invitationLabel: 'Walimatul Ursy',
      couple: {
        person1: {
          name: 'Amalia Nur Afifah',
          shortName: 'Amalia',
          parents: 'Putri dari Bapak Drs. H. Sutono Istiarwan & Ibu Bekti Kristiani, S. P.',
        },
        person2: {
          name: 'Muh. Fajar Adnan Dhali',
          shortName: 'Fajar',
          parents: 'Putra dari Bapak H. Dalijan, S.Pd & Ibu Ninik Ratnawati',
        },
      },
      coverImage: '/images/templates/amalia/couple.webp',
      closingImage: '/images/templates/amalia/closing.webp',
      musicUrl: '/audio/amalia-kasih-putih.mp3',
      musicTracks: [
        { title: 'Kasih Putih', artist: 'Glenn Fredly', src: '/audio/amalia-kasih-putih.mp3' },
        { title: 'Yang Terbaik Bagimu', artist: 'Ada Band', src: '/audio/amalia-yang-terbaik-bagimu.mp3' },
      ],
      dateLabel: 'Sabtu, 4 Juli 2026',
      shortDateLabel: '04 . 07 . 2026',
      countdownTo: '2026-07-04T08:00:00+07:00',
      venue: {
        name: 'Rumah Makan Padang Saiyo Sapta Pesona',
        address: 'Jl. Purworejo - Kedunggong, Wates, Kec. Wates, Kabupaten Kulon Progo, Daerah Istimewa Yogyakarta',
        mapsUrl: venueMaps('Rumah Makan Saiyo Sapta Pesona Kulon Progo'),
      },
      events: [
        { title: 'Akad Nikah', date: 'Sabtu, 4 Juli 2026', time: '08.00 – 09.00 WIB', venue: 'Rumah Makan Padang Saiyo Sapta Pesona', address: 'Wates, Kulon Progo' },
        { title: 'Walimatul Ursy', date: 'Sabtu, 4 Juli 2026', time: '10.00 – 11.00 WIB', venue: 'Rumah Makan Padang Saiyo Sapta Pesona', address: 'Wates, Kulon Progo' },
      ],
      // Isi array ini jika customer memerlukan bagian tambahan.
      story: [],
      gallery: [],
      gifts: [],
      wishes: [],
      opening: ['Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami.'],
      closing: ['Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai.'],
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
