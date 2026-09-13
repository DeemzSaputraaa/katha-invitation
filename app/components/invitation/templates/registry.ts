import type { Component } from 'vue'
import type { TemplateComponentName } from '~/types/invitation'
import AureliaTemplate from './AureliaTemplate.vue'

/**
 * Registry template — static import (bukan dynamic import) agar
 * production build tetap aman dan semua template ter-bundle pasti.
 * Key = `component` dari CatalogTemplate = slug template.
 *
 * Template baru: import di sini + daftarkan dengan key slug-nya.
 */
export const templateRegistry: Record<TemplateComponentName, Component> = {
  aurelia: AureliaTemplate,
}

export function resolveTemplateComponent(name: string): Component | undefined {
  return (templateRegistry as Record<string, Component>)[name]
}
