export interface FaqItem {
  question: string
  answer: string
}

export const faqs: FaqItem[] = [
  {
    question: 'Apa itu undangan digital?',
    answer:
      'Undangan digital adalah halaman web personal berisi informasi acara Anda — nama mempelai, tanggal, lokasi, galeri, RSVP, hingga amplop digital. Tamu cukup membuka tautan yang Anda bagikan, tanpa perlu install aplikasi.',
  },
  {
    question: 'Apakah undangan bisa dibuka melalui HP?',
    answer:
      'Bisa. Semua template kami dirancang mobile-first dan sudah diuji di berbagai ukuran layar — dari 360px hingga desktop besar. Mayoritas tamu membuka undangan dari WhatsApp di HP, jadi pengalaman mobile adalah prioritas utama kami.',
  },
  {
    question: 'Berapa lama proses pembuatannya?',
    answer:
      'Setelah data dan foto lengkap, undangan paket Basic–Premium umumnya selesai dalam 1–2 hari kerja. Paket Custom membutuhkan 3–7 hari kerja tergantung kompleksitas desain.',
  },
  {
    question: 'Apakah bisa menggunakan foto sendiri?',
    answer:
      'Tentu. Anda dapat mengirimkan foto prewedding atau foto favorit Anda. Tim kami akan menyesuaikan komposisi dan cropping agar terlihat proporsional di semua ukuran layar.',
  },
  {
    question: 'Apakah bisa request desain atau warna lain?',
    answer:
      'Bisa pada paket Premium (kustomisasi warna & font) dan paket Custom (desain khusus). Ceritakan konsep acara Anda melalui WhatsApp, kami akan bantu memilihkan arah visual yang paling pas.',
  },
  {
    question: 'Bagaimana cara membagikan undangan?',
    answer:
      'Anda akan menerima satu tautan personal (misalnya katha-undangan.id/nama-kamu). Tautan ini bisa dibagikan melalui WhatsApp, Instagram, atau dicetak sebagai QR code pada undangan fisik.',
  },
  {
    question: 'Apakah bisa terhubung ke Google Maps?',
    answer:
      'Ya. Setiap undangan dilengkapi tombol lokasi yang membuka Google Maps, sehingga tamu bisa langsung mendapatkan rute menuju venue acara.',
  },
  {
    question: 'Apakah tersedia RSVP dan buku tamu?',
    answer:
      'Ya, semua paket sudah termasuk RSVP konfirmasi kehadiran dan kolom ucapan. Data RSVP masuk dan dapat Anda pantau untuk memperkirakan jumlah tamu.',
  },
]
