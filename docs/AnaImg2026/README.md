# AnaImg2026 — fonte única de imagens

Pasta mestre das fotos da Ana. **Apague daqui o que não for usar** — o site só publica o que estiver mapeado nos scripts ou na pasta `trabalhos/`.

## Estrutura

| Local | Uso |
|-------|-----|
| **`trabalhos/`** | Carrossel **Tratamentos** + galeria **Sobre → Trabalhos realizados** (usa **todos** os ficheiros desta pasta, sem repetir). **Não** meter ambiente vazio, «antes», calvície/queda clínica (o sync ignora nomes com `espaco`, `antes`, `queda`, etc.) |
| **Raiz desta pasta** | Blog, serviços, hero, about — ver `scripts/sync-ana-img-2026.mjs` (mapa `MAP`) |
| **`mechas/`** | Pares antes/depois coloração, cortes extra, capa do livro — `sync:coloracao-pessoal` |

## Comandos

```bash
# Carrossel Tratamentos (trabalhos/ → public/images/trabalhos/ + lista TS)
npm run sync:trabalhos-hero

# Resto do site (blog, cards, hero, about…)
npm run sync:images-2026

# Mechas / coloração pessoal (carrossel mechas)
npm run sync:coloracao-pessoal
```

Depois de apagar ou adicionar ficheiros em `trabalhos/`, corra **`npm run sync:trabalhos-hero`** e recarregue a página.

## Exceções (não são fotos Ana em AnaImg2026)

Estes paths vivem só em `public/` — logo, ícones legais, placeholders de produtos/testemunhos, etc.:

- `public/images/brand/*`, `legal/*`, `needs/*`, `products/*`, `testimonials/*`
- `avaliar.jpg`, `nutricao.jpg`, heróis genéricos `hero/salon-*`, `hero-wood-panels-left.webp`
- Retratos legado `about/ana-full.jpg`, `ana-studio.jpg` (substituir quando houver foto em AnaImg2026)

## Auditoria e limpeza de `public/images`

**Não** mova tudo de `public/images` para AnaImg2026 — são papéis diferentes:

| Pasta | Papel |
|-------|--------|
| **`docs/AnaImg2026/`** | Onde **escolhes, apagas e organizas** as fotos (JPEG/PNG originais) |
| **`public/images/`** | Saída **gerada** para o site (webp, paths fixos). Podes apagar aqui o que **não** está no código |

Fluxo: editas **AnaImg2026** → corres os `sync:*` → o site volta a ter só o necessário em `public/`.

```bash
npm run audit:images          # paths em src existem em public?
npm run audit:images-source   # relatório AnaImg2026 vs exceções
npm run prune:images          # lista órfãos em public/images (dry-run)
npm run prune:images:apply    # apaga órfãos (só o que src não referencia)
```

## Migração

Conteúdo inicial copiado de `Ana-Img-Atualizada2026`. Quando estiver confiante, pode remover pastas antigas em `docs/` (`Ana-Img-Atualizada2026`, `img-AnaAtualizado`).
