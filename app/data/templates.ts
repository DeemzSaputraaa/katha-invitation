/**
 * Katalog template — static TypeScript data (source of truth sementara).
 *
 * Kontrak field ini yang akan dipakai Laravel API di masa depan,
 * jadi JANGAN ubah nama field tanpa migrasi:
 *   id / slug / name / category / price / description / previewImage
 *
 * Future mapping:
 *   Nuxt (sekarang)  -> import dari file ini
 *   Nuxt (nanti)      -> fetch dari Laravel API, bentuk respons SAMA
 *                        seperti tipe `InvitationTemplate` di bawah.
 */

export type TemplateCategory =
  | 'Wedding'
  | 'Elegant'
  | 'Minimalist'
  | 'Floral'
  | 'Modern'
  | 'Traditional'

export interface InvitationTemplate {
  id: string
  slug: string
  name: string
  category: TemplateCategory
  price: number
  description: string
  /** Path publik, mudah diganti file aslinya nanti. */
  previewImage: string
  /** Varian visual untuk demo — 'ivory' | 'minimal' | 'blush' | 'sage' | 'jawa' */
  theme: 'ivory' | 'minimal' | 'blush' | 'sage' | 'jawa'
  featured?: boolean
}

export const templateCategories = [
  'Semua',
  'Wedding',
  'Elegant',
  'Minimalist',
  'Floral',
  'Modern',
  'Traditional',
] as const

export type TemplateFilter = (typeof templateCategories)[number]

export const templates: InvitationTemplate[] = [
  {
    id: 'tpl-elegant-ivory',
    slug: 'elegant-ivory',
    name: 'Elegant Ivory',
    category: 'Elegant',
    price: 79000,
    description:
      'Serif klasik di atas ivory hangat dengan aksen emas tipis. Favorit untuk akad & resepsi gedung.',
    previewImage: '/images/templates/elegant-ivory.svg',
    theme: 'ivory',
    featured: true,
  },
  {
    id: 'tpl-minimalist-putih',
    slug: 'minimalist-putih',
    name: 'Minimalist Putih',
    category: 'Minimalist',
    price: 49000,
    description:
      'Putih bersih, tipografi lega, tanpa ornamen berlebih. Terlihat mahal justru karena kesederhanaannya.',
    previewImage: '/images/templates/minimalist-putih.svg',
    theme: 'minimal',
  },
  {
    id: 'tpl-floral-blush',
    slug: 'floral-blush',
    name: 'Floral Blush',
    category: 'Floral',
    price: 79000,
    description:
      'Sentuhan botanikal blush yang lembut untuk garden party, pemberkatan, dan intimate wedding.',
    previewImage: '/images/templates/floral-blush.svg',
    theme: 'blush',
  },
  {
    id: 'tpl-modern-sage',
    slug: 'modern-sage',
    name: 'Modern Sage',
    category: 'Modern',
    price: 99000,
    description:
      'Layout editorial berani dengan aksen sage. Cocok untuk pasangan muda yang urban dan kontemporer.',
    previewImage: '/images/templates/modern-sage.svg',
    theme: 'sage',
    featured: true,
  },
  {
    id: 'tpl-traditional-jawa',
    slug: 'traditional-jawa',
    name: 'Traditional Jawa',
    category: 'Traditional',
    price: 99000,
    description:
      'Motif kawung yang digambar ulang secara halus. Khidmat untuk prosesi adat tanpa terlihat kuno.',
    previewImage: '/images/templates/traditional-jawa.svg',
    theme: 'jawa',
  },
  {
    id: 'tpl-wedding-sage',
    slug: 'elegant-sage-wedding',
    name: 'Sage Wedding',
    category: 'Wedding',
    price: 79000,
    description:
      'Varian wedding serbaguna: susunan acara lengkap, RSVP, dan amplop digital dalam satu halaman.',
    previewImage: '/images/templates/modern-sage.svg',
    theme: 'sage',
  },
]

export function getTemplateBySlug(slug: string): InvitationTemplate | undefined {
  return templates.find((t) => t.slug === slug)
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price)
}
