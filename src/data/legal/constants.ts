import { siteConfig } from '@/config/site'

export const LEGAL_PROVIDER_NAME = siteConfig.legalIdentification.providerFullName
export const LEGAL_TAX_ID = siteConfig.legalIdentification.taxId
export const HOSTING_PROVIDER = siteConfig.infrastructure.hostingProvider

export const LEGAL_REVIEW_NOTICE_PT =
  'Documento alinhado com o funcionamento atual do website. Não substitui aconselhamento jurídico personalizado.'

export const LEGAL_IDENTITY_BULLETS_PT = [
  `Titular da atividade: ${LEGAL_PROVIDER_NAME}.`,
  `NIF: ${LEGAL_TAX_ID}.`,
  'Não foi designado Encarregado de Proteção de Dados (DPO). Para questões de privacidade utilize os contactos indicados nesta política.',
] as const

export const LEGAL_IDENTITY_BULLETS_ES = [
  `Titular de la actividad: ${LEGAL_PROVIDER_NAME}.`,
  `NIF: ${LEGAL_TAX_ID}.`,
  'No se ha designado Delegado de Protección de Datos (DPD). Para privacidad utilice los contactos indicados.',
] as const

export const LEGAL_IDENTITY_BULLETS_EN = [
  `Activity holder: ${LEGAL_PROVIDER_NAME}.`,
  `Tax ID (NIF): ${LEGAL_TAX_ID}.`,
  'No Data Protection Officer (DPO) has been appointed. For privacy matters use the contacts listed in this policy.',
] as const

export function legalIdentificationLine(locale: 'pt' | 'es' | 'en') {
  const base = `${siteConfig.legalName} / ${siteConfig.name}. ${siteConfig.contact.address.full}. ${siteConfig.contact.email}. ${siteConfig.contact.phoneDisplay}.`
  if (locale === 'es') {
    return `${base} Titular: ${LEGAL_PROVIDER_NAME}. NIF: ${LEGAL_TAX_ID}.`
  }
  if (locale === 'en') {
    return `${base} Holder: ${LEGAL_PROVIDER_NAME}. Tax ID (NIF): ${LEGAL_TAX_ID}.`
  }
  return `${base} Titular: ${LEGAL_PROVIDER_NAME}. NIF: ${LEGAL_TAX_ID}.`
}
