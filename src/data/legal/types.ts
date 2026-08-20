export type LegalBlock =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'callout'; text: string }
  | { type: 'pending'; items: string[] }
  | {
      type: 'table'
      headers: string[]
      rows: string[][]
    }

export type LegalSection = {
  id: string
  title: string
  blocks: LegalBlock[]
}

export type LegalDocument = {
  title: string
  subtitle: string
  metaDescription: string
  updatedAt: string
  updatedLabel: string
  tocLabel: string
  relatedLabel: string
  reviewNotice: string
  sections: LegalSection[]
}
