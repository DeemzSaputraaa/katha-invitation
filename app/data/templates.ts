import type { CatalogTemplate, TemplateComponentName } from '~/types/invitation'

/**
 * Katalog template — SATU-SATUNYA source of truth.
 * Dipakai landing catalog DAN template route (/[slug]).
 *
 * Kontrak field ini yang akan dipakai Laravel API di masa depan,
 * jadi JANGAN ubah nama field tanpa migrasi:
 *   id / slug / name / category / price / description / previewImage
 * Field `component` adalah key registry komponen Vue (frontend-only,
 * tidak perlu dikirim API — API cukup kirim slug).
 */

export type TemplateCategory =
  | 'Wedding'
  | 'Elegant'
  | 'Minimalist'
  | 'Floral'
  | 'Modern'
  | 'Traditional'

export type { CatalogTemplate }

export const templateCategories = ['Semua', 'Elegant', 'Floral'] as const

export type TemplateFilter = (typeof templateCategories)[number]

function entry(
  id: string,
  slug: TemplateComponentName,
  name: string,
  category: TemplateCategory,
  price: number,
  description: string,
  opts?: Partial<Pick<CatalogTemplate, 'portfolioOnly' | 'externalUrl' | 'previewImage'>>,
): CatalogTemplate {
  return {
    id,
    slug,
    name,
    category,
    price,
    description,
    previewImage: `/images/templates/${slug}.svg`,
    component: slug,
    ...opts,
  }
}

export const templates: CatalogTemplate[] = [
  entry(
    'tpl-aurelia',
    'aurelia',
    'Aurelia',
    'Elegant',
    99000,
    'Editorial mewah dengan serif italic anggun di atas soft blue. Untuk pernikahan gedung yang sophisticated.',
  ),
  entry(
    'tpl-florena',
    'florena',
    'Florena',
    'Floral',
    99000,
    'Romantis dan hangat dengan dedaunan botanical, hijau sage, krem, serta aksen terracotta. Untuk perayaan bernuansa taman.',
  ),
  entry(
    'tpl-amalia',
    'amalia',
    'Amalia',
    'Floral',
    99000,
    'Portofolio hasil nyata Amalia & Fajar: kaligrafi romantis, pink lembut, dan bingkai floral klasik. Hanya katalog, tidak dijual/dipakai ulang.',
    {
      portfolioOnly: true,
      externalUrl: 'https://pernikahan-amalia-fajar.vercel.app/',
      previewImage: '/images/templates/amalia.webp',
    },
  ),
]

export function getTemplateBySlug(slug: string): CatalogTemplate | undefined {
  return templates.find((t) => t.slug === slug)
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price)
}
