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
  whatsapp: '6281234567890',
  instagram: 'https://instagram.com/katha.undangan',
  email: 'halo@katha-undangan.id',
} as const
