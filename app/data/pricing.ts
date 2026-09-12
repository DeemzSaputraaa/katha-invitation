/**
 * Paket harga — satu file, mudah diubah.
 * Jangan hardcode harga di component; selalu import dari sini.
 * Struktur ini siap dipetakan ke tabel `plans` di Laravel nantinya.
 */
export interface PricingPlan {
  id: string
  name: string
  price: number
  unit: string
  description: string
  features: string[]
  cta: string
  highlighted?: boolean
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 49000,
    unit: 'per undangan',
    description: 'Untuk acara intim yang butuh undangan rapi dan cepat jadi.',
    features: [
      '1 template pilihan',
      'Informasi acara & lokasi',
      'Galeri foto (8 foto)',
      'Google Maps',
      'Hitung mundur acara',
      'Musik latar',
      'RSVP & buku tamu',
    ],
    cta: 'Pilih Basic',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 99000,
    unit: 'per undangan',
    description: 'Paling dipilih untuk pernikahan — lengkap dan personal.',
    features: [
      'Semua fitur Basic',
      'Template premium',
      'Love story',
      'Galeri foto (20 foto)',
      'Amplop digital',
      'Kustomisasi warna & font',
      'Masa aktif 1 tahun',
    ],
    cta: 'Pilih Premium',
    highlighted: true,
  },
  {
    id: 'custom',
    name: 'Custom',
    price: 199000,
    unit: 'mulai dari',
    description: 'Desain khusus untuk konsep acara yang tidak biasa.',
    features: [
      'Desain dibuat khusus',
      'Request layout & motif',
      'Konsultasi desain',
      'Revisi prioritas',
      'Masa aktif 2 tahun',
    ],
    cta: 'Konsultasi Dulu',
  },
]
