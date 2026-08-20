# Ana Sampaio Hair 2.0

Site público premium do Instituto de Beleza e Saúde Capilar Ana Sampaio (Marinha Grande).

## Stack

- Next.js 15 App Router
- TypeScript
- CSS Design System (tokens da marca)
- i18n: `pt-PT` (default), `es`, `en`

## Desenvolvimento

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) (redireciona para `/pt`).

## Arquitectura

- `src/app/[locale]/…` — páginas
- `src/i18n/` — locales, rotas localizadas, dicionários UI
- `src/content/` — preparado para copy por idioma
- `src/data/` — repositórios (serviços, blog WP migrado, etc.)
- `src/types/domain.ts` — domínio CRM-ready (`preferredLocale`, `BookingRequest`, …)
- `src/lib/messaging/` — adapter WhatsApp (pedido, não reserva confirmada)
- `docs/migration-content.md` — mapa de redirects WordPress → 2.0

## Branding

Verde do logo (`#306038`, `#C8E0C0`) + neutros madeira/champagne do salão.

## Blog

Fonte de verdade: WordPress. 28 posts migrados com preservação de conteúdo.
