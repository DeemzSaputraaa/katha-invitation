import type { CatalogTemplate, TemplateComponentName } from '~/types/invitation'

/**
 * Katalog template — SATU-SATUNYA source of truth.
 * Dipakai landing catalog DAN template route (/templates/[slug]).
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

export const templateCategories = ['Semua', 'Elegant'] as const

export type TemplateFilter = (typeof templateCategories)[number]

function entry(
  id: string,
  slug: TemplateComponentName,
  name: string,
  category: TemplateCategory,
  price: number,
  description: string,
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
