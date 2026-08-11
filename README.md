# Ana Sampaio Hair

Website profissional / demo comercial para o **Instituto de Beleza e Saúde Capilar Ana Sampaio**, em Marinha Grande — Leiria — Portugal.

## Stack

- React 19 + TypeScript
- Vite
- React Router
- CSS próprio (design system premium)

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Estrutura

- `src/config/site.ts` — configuração central (contacto, booking, WhatsApp, SEO, redes)
- `src/data/` — conteúdo separado da UI (serviços, FAQ, blog, galeria, etc.)
- `src/components/` — layout, UI e secções
- `src/pages/` — páginas do website

## Booking futuro

Defina `bookingUrl` em `src/config/site.ts` para os CTAs “Agendar avaliação” apontarem para o sistema de booking. Enquanto estiver `null`, usam a rota `/contacto#agendar`.

## WhatsApp

Configure `contact.whatsapp` em `src/config/site.ts` (número internacional sem `+`).

## Legal

- Política de Privacidade
- Política de Cookies
- Livro de Reclamações (ligação à plataforma oficial)

## Créditos

Desenvolvido pela [AfDigital - Soluções Tecnológicas](https://www.afdigitalweb.com).
