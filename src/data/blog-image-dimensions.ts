/** Auto-generated — run: npm run generate:blog-image-dimensions */
export type BlogImageSize = { width: number; height: number }

export const blogFeaturedImageDimensions: Record<string, BlogImageSize> = {
  "/images/about/ambiente-espaco.webp": { width: 865, height: 1919 },
  "/images/about/ambiente-guia.webp": { width: 1800, height: 2700 },
  "/images/about/ambiente-trabalho-01.webp": { width: 1006, height: 1920 },
  "/images/about/ambiente-trabalho-02.webp": { width: 1080, height: 1920 },
  "/images/about/ambiente-trabalho-03.webp": { width: 865, height: 1919 },
  "/images/about/ambiente-trabalho-04.webp": { width: 1087, height: 1920 },
  "/images/about/ana-about-home.webp": { width: 1800, height: 2700 },
  "/images/about/ana-formacao-especialidade.webp": { width: 1800, height: 2700 },
  "/images/about/livro-raizes-e-asas.webp": { width: 1079, height: 1584 },
  "/images/blog/alopecia-areata.webp": { width: 1800, height: 1800 },
  "/images/blog/alta-frequencia.webp": { width: 1800, height: 1200 },
  "/images/blog/blend-de-oleos-naturais-personalizados.webp": { width: 1800, height: 2700 },
  "/images/blog/calvicie.webp": { width: 1800, height: 1800 },
  "/images/blog/caspa-dicas-faceis-para-combater-agora.webp": { width: 1600, height: 1533 },
  "/images/blog/cha-terapia-capilar.webp": { width: 1800, height: 1200 },
  "/images/blog/como-escolher-um-terapeuta-capilar.webp": { width: 1800, height: 2700 },
  "/images/blog/corte-bordado.webp": { width: 1600, height: 983 },
  "/images/blog/dermatite-seborreica.webp": { width: 1800, height: 1195 },
  "/images/blog/detox-do-couro-cabeludo.webp": { width: 1800, height: 1199 },
  "/images/blog/led-vermelho.webp": { width: 1800, height: 3200 },
  "/images/blog/massagem-capilar-com-oleos-terapeuticos.webp": { width: 1800, height: 1350 },
  "/images/blog/microagulhamento-capilar.webp": { width: 1600, height: 1760 },
  "/images/blog/oleosidade-excessiva-do-couro-cabeludo-como-tratar.webp": { width: 1800, height: 1013 },
  "/images/blog/queda-capilar-dicas-para-resolver-ja.webp": { width: 1800, height: 1350 },
  "/images/blog/reconstrucao-do-fio.webp": { width: 1800, height: 1200 },
  "/images/blog/reposicao-hidrica-no-cabelo.webp": { width: 1800, height: 1200 },
  "/images/blog/reposicao-lipidica.webp": { width: 1800, height: 2439 },
  "/images/blog/terapeuta-capilar-especializado-em-queda-de-cabelo.webp": { width: 1800, height: 1350 },
  "/images/blog/terapia-capilar-para-cabelos-oleosos.webp": { width: 1800, height: 1013 },
  "/images/blog/tratamento-capilar-para-cabelos-danificados.webp": { width: 1800, height: 1200 },
  "/images/brand/assistant-avatar.webp": { width: 512, height: 512 },
  "/images/brand/logo-mark.png": { width: 702, height: 628 },
  "/images/brand/logo-mark.webp": { width: 702, height: 628 },
  "/images/brand/logo.png": { width: 927, height: 677 },
  "/images/ebook/guia-meu-cabelo-dos-sonhos.webp": { width: 1800, height: 2700 },
  "/images/hero/ana-home-destaque.webp": { width: 1800, height: 2700 },
  "/images/hero/hero-wood-panels-left.webp": { width: 682, height: 1024 },
  "/images/hero/salon-interior.jpg": { width: 768, height: 1024 },
  "/images/mechas/ana/ana-mechas-03.webp": { width: 1400, height: 1637 },
  "/images/results/blend-resultado.webp": { width: 1800, height: 1200 },
  "/images/results/escova-resultado.webp": { width: 1600, height: 1304 },
  "/images/results/massagem-ambiente.webp": { width: 1800, height: 3994 },
  "/images/trabalhos/coloracaodepois05.webp": { width: 1600, height: 2136 },
}

const FALLBACK: BlogImageSize = { width: 1800, height: 1200 }

export function getBlogFeaturedImageSize(src: string): BlogImageSize {
  return blogFeaturedImageDimensions[src] ?? FALLBACK
}
