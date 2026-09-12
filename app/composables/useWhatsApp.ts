import { siteConfig } from '~/data/site'

/**
 * Single source of truth untuk semua CTA WhatsApp.
 * Jangan hardcode nomor / URL WhatsApp di component.
 */
export function useWhatsApp() {
  const waNumber = siteConfig.whatsapp

  function buildUrl(message: string): string {
    return `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`
  }

  function general(message?: string): string {
    return buildUrl(
      message ??
        'Halo Katha, saya ingin bertanya tentang undangan digital.',
    )
  }

  function templateInterest(templateName: string): string {
    return buildUrl(
      `Halo, saya tertarik dengan template ${templateName} untuk undangan digital. Saya ingin mengetahui detail pemesanannya.`,
    )
  }

  function planInterest(planName: string): string {
    return buildUrl(
      `Halo, saya tertarik dengan paket ${planName} untuk undangan digital. Saya ingin mengetahui detail pemesanannya.`,
    )
  }

  return { waNumber, buildUrl, general, templateInterest, planInterest }
}
