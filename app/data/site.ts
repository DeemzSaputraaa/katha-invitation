/**
 * Site-wide configuration.
 * Single source of truth untuk brand, kontak, dan link konversi.
 * Ketika Laravel API hadir, file ini tetap menjadi presentation config
 * (API base URL & key bisa ditambahkan di sini / runtimeConfig).
 */
export const siteConfig = {
  brand: 'Katha',
  tagline: 'Undangan Digital Elegan',
  description:
    'Rayakan momen spesial dengan undangan digital yang elegan, personal, dan mudah dibagikan.',
  url: 'https://katha-undangan.vercel.app',
  whatsapp: '6282179410376',
  whatsappDisplay: '+62 821-7941-0376',
  instagram: 'https://instagram.com/katha.undangan',
  instagramHandle: '@katha.undangan',
  email: 'halo@katha-undangan.id',
  address: 'Yogyakarta, Indonesia',
  hours: 'Senin–Sabtu · 09.00–17.00 WIB',
} as const
