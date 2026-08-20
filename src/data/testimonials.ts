import type { Testimonial } from '@/types/domain'

/**
 * Google reviews (public) + selected WhatsApp feedback shared by Ana.
 * Quotes preserved; never invented.
 */
export const testimonials: Testimonial[] = [
  {
    id: 'alexia-luisi',
    name: 'Alexia Luisi',
    quote:
      'Ana além de ser uma excelente profissional me fez enxergá-la além disso com o enorme acolhimento com que me recebeu e tratou da minha necessidade! Ela não oferece apenas um serviço, ela entrega um tratamento completo, exclusivo e personalizado com total confiança! Muito obrigada Ana',
    rating: 5,
    serviceCategory: 'Google',
    source: 'google',
    locale: 'pt-PT',
  },
  {
    id: 'rose-mary',
    name: 'Rose Mary Freire Martins',
    quote:
      'Uma excelente profissional. Conheci a Ana Sampaio pelas redes sociais. E foi o melhor serviço que já havia encontrado como cabeleireira, consultora de beleza… e o que é melhor: muito bom preço e excelência no que faz. A recomendo 100%. Todos amigos e familiares notaram com muitos elogios.',
    rating: 5,
    serviceCategory: 'Google',
    source: 'google',
    locale: 'pt-PT',
  },
  {
    id: 'ana-claudia',
    name: 'Ana Claudia Gomes de Sena Alves',
    quote:
      'Atendimento e serviços 5 estrelas. Um espaço super aconchegante e acolhedor — recomendo.',
    rating: 5,
    serviceCategory: 'Google',
    source: 'google',
    locale: 'pt-PT',
  },
  {
    id: 'celma-paiao',
    name: 'Celma Paiao',
    quote: 'Uma profissional muito gentil e educada. E um trabalho maravilhoso — super indico.',
    rating: 5,
    serviceCategory: 'Google',
    source: 'google',
    locale: 'pt-PT',
  },
  {
    id: 'joana-baptista',
    name: 'Joana Baptista',
    quote:
      'Excelência no atendimento. A Ana é uma profissional de excelência e isso percebe-se assim que trocamos algumas palavras: a preocupação é a saúde do cabelo e fazer com que a cliente se sinta bem. A Ana é a cabeleireira que eu precisava — e está bem pertinho! Super recomendo.',
    rating: 5,
    serviceCategory: 'Google',
    source: 'google',
    locale: 'pt-PT',
  },
  {
    id: 'renata-ferreira',
    name: 'Renata Ferreira',
    quote:
      'A experiência com a Ana Sampaio está a ser incrível! Desde o primeiro atendimento, ela demonstrou profissionalismo, conhecimento profundo e muita empatia. O ambiente é acolhedor, e ela explica cada etapa do tratamento de forma clara e cuidadosa. Recomendo para quem procura qualidade e cuidado personalizado.',
    rating: 5,
    serviceCategory: 'Terapia capilar',
    source: 'direct',
    sourceImage: '/images/testimonials/renata.jpg',
    locale: 'pt-PT',
  },
  {
    id: 'thais-giuh',
    name: 'Thais Giuh',
    quote:
      'Ambiente excelente, amo o atendimento e o cuidado com o meu cabelo — sai sempre lindo. A Ana realmente entende do que faz; costumo dizer que ela é a médica dos cabelos!',
    rating: 5,
    serviceCategory: 'Google',
    source: 'google',
    locale: 'pt-PT',
  },
  {
    id: 'elza-fonseca',
    name: 'Elza Fonseca',
    quote:
      'Excelente profissional, um atendimento personalizado, onde me senti uma rainha. A única que encontrei que se preocupa em cuidar do fio de cabelo antes de fazer qualquer procedimento.',
    rating: 5,
    serviceCategory: 'Google',
    source: 'google',
    locale: 'pt-PT',
  },
  {
    id: 'jefferson',
    name: 'Jefferson',
    quote:
      'Resultado que se nota. Cuidado com o fio, atenção no atendimento e um espaço onde a gente se sente bem-vindo.',
    rating: 5,
    serviceCategory: 'Cliente',
    source: 'direct',
    sourceImage: '/images/testimonials/jefferson.jpg',
    locale: 'pt-PT',
  },
]

/** Reviews show in all locales (original PT voice — authentic quotes). */
export function getTestimonials(_locale?: Testimonial['locale']) {
  return testimonials
}
