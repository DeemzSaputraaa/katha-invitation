/**
 * Tipe data undangan — KONTEN customer, terpisah dari DESIGN template.
 *
 * Prinsip: satu komponen TemplateXX.vue dapat dipakai berkali-kali
 * dengan data berbeda (nanti: /budi-aisyah, /andi-rani, dst.).
 * Jangan hardcode nama/tanggal/venue di dalam komponen template.
 */

export interface CouplePerson {
  name: string
  parents: string
  /** Foto portrait mempelai (opsional). */
  photo?: string
}

export interface InvitationEventItem {
  title: string
  date: string
  time: string
  venue: string
  address: string
}

export interface StoryItem {
  year: string
  title: string
  text: string
}

export interface GalleryItem {
  src: string
  alt: string
}

export interface GiftAccount {
  bank: string
  number: string
  name: string
}

export interface WishItem {
  name: string
  message: string
}

export interface InvitationVenue {
  name: string
  address: string
  mapsUrl: string
}

export interface InvitationData {
  /** Sapaan pembuka, mis. "Assalamu'alaikum ..." */
  greeting: string
  /** Label kecil cover, mis. "The Wedding Of" */
  invitationLabel: string
  couple: {
    person1: CouplePerson
    person2: CouplePerson
  }
  /** Visual utama cover/panel kanan (foto/placeholder). */
  coverImage: string
  /** Slide foto untuk section hero (opsional, jika tidak ada pakai coverImage). */
  heroSlides?: GalleryItem[]
  /** Foto closing/penutup (opsional). */
  closingImage?: string
  /** Label tanggal tampil, mis. "Sabtu, 24 Oktober 2026" */
  dateLabel: string
  shortDateLabel: string
  /** ISO datetime untuk countdown, mis. "2026-10-24T08:00:00+07:00" */
  countdownTo: string
  venue: InvitationVenue
  events: InvitationEventItem[]
  story: StoryItem[]
  gallery: GalleryItem[]
  gifts: GiftAccount[]
  wishes: WishItem[]
  /** Ayat/kutipan inspiratif (opsional). */
  verse?: {
    source: string
    text: string
  }
  /** Alamat kirim hadiah fisik (opsional). */
  giftAddress?: {
    name: string
    phone: string
    address: string
  }
  /** Paragraf pembuka setelah greeting */
  opening: string[]
  /** Paragraf penutup */
  closing: string[]
}

/** Props umum semua invitation sections. */
export interface InvitationSectionProps {
  data: InvitationData
  /** Override class heading section (tipografi khas tiap template). */
  titleClass?: string
  /** Warna aksen (hex) untuk garis, badge, tombol. */
  accent?: string
  /** Varian gelap — teks/border menyesuaikan. */
  dark?: boolean
}

/** Nama komponen template — key registry. Tambah slug baru saat template baru dibuat. */
export type TemplateComponentName = 'aurelia'

/**
 * Katalog template — SATU-SATUNYA source of truth.
 * Dipakai landing catalog DAN template route.
 * (Nanti: diganti respons Laravel API dengan bentuk yang sama.)
 */
export interface CatalogTemplate {
  id: string
  slug: string
  name: string
  category: string
  price: number
  description: string
  previewImage: string
  component: TemplateComponentName
}
