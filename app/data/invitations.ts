import type { InvitationData } from '~/types/invitation'

/**
 * Dummy data undangan per template — netral, realistis.
 * Key = slug template. Jangan taruh data ini di dalam komponen template.
 *
 * Template baru: tambah satu entry dengan key slug-nya.
 */

function venueMaps(query: string): string {
  return `https://maps.google.com/?q=${encodeURIComponent(query)}`
}

export const invitationData: Record<string, InvitationData> = {
  aurelia: {
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
}

export function getInvitationData(slug: string): InvitationData | undefined {
  return invitationData[slug]
}
