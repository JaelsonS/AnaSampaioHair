import type { UrlLocale } from '@/i18n/config'
import { services } from '@/data/services'

type ServiceCopy = { name: string; short: string; cta: string }

const COPY: Record<string, Record<UrlLocale, ServiceCopy>> = {
  mechas: {
    pt: { name: 'Mechas / Madeixas', short: 'Luz no rosto, tom certo e fios respeitados — do teste à escolha da cor.', cta: 'Quero falar de mechas' },
    es: { name: 'Mechas / Madeixas', short: 'Luz en el rostro, tono adecuado y cabello respetado — de la prueba a la elección del color.', cta: 'Quiero hablar de mechas' },
    en: { name: 'Highlights / Madeixas', short: 'Light around the face, the right tone and respected fibre — from test to colour choice.', cta: 'Talk about highlights' },
  },
  brushing: {
    pt: { name: 'Brushing', short: 'Acabamento que faz o cabelo cair bem e o dia fluir melhor.', cta: 'Pedir brushing' },
    es: { name: 'Brushing', short: 'Acabado que hace que el cabello caiga bien y el día fluya mejor.', cta: 'Pedir brushing' },
    en: { name: 'Blow-dry', short: 'A finish that lets hair fall well and the day flow better.', cta: 'Request a blow-dry' },
  },
  corte: {
    pt: { name: 'Corte', short: 'Um corte que respeita o seu rosto, o seu estilo e o crescimento natural.', cta: 'Pedir corte' },
    es: { name: 'Corte', short: 'Un corte que respeta su rostro, su estilo y el crecimiento natural.', cta: 'Pedir corte' },
    en: { name: 'Haircut', short: 'A cut that respects your face, style and natural growth.', cta: 'Request a cut' },
  },
  coloracao: {
    pt: { name: 'Coloração', short: 'Cor com intenção: a sua história capilar conta tanto quanto o tom desejado.', cta: 'Quero saber sobre cor' },
    es: { name: 'Coloración', short: 'Color con intención: su historia capilar cuenta tanto como el tono deseado.', cta: 'Quiero saber sobre color' },
    en: { name: 'Colour', short: 'Colour with intention: your hair history matters as much as the desired tone.', cta: 'Ask about colour' },
  },
  alisamento: {
    pt: { name: 'Alisamento', short: 'Alisar sim — mas só depois de perceber se o cabelo está preparado.', cta: 'Pedir avaliação' },
    es: { name: 'Alisado', short: 'Alisar sí — pero solo después de ver si el cabello está preparado.', cta: 'Pedir valoración' },
    en: { name: 'Straightening', short: 'Straighten yes — but only after we know the hair is ready.', cta: 'Request an assessment' },
  },
  'corte-bordado': {
    pt: { name: 'Corte bordado', short: 'Leveza e movimento, fio a fio, sem perder o comprimento que quer.', cta: 'Pedir corte bordado' },
    es: { name: 'Corte bordado', short: 'Ligereza y movimiento, hilo a hilo, sin perder la longitud que desea.', cta: 'Pedir corte bordado' },
    en: { name: 'Point-cutting', short: 'Lightness and movement, strand by strand, without losing the length you want.', cta: 'Request point-cutting' },
  },
  queda: {
    pt: { name: 'Queda Capilar', short: 'Avaliação com tricoscopia e plano personalizado para a causa da queda.', cta: 'Avaliar queda' },
    es: { name: 'Caída capilar', short: 'Valoración con tricoscopia y plan personalizado para la causa de la caída.', cta: 'Evaluar la caída' },
    en: { name: 'Hair shedding', short: 'Trichoscopy assessment and a personalised plan for the cause of shedding.', cta: 'Assess shedding' },
  },
  caspa: {
    pt: { name: 'Caspa', short: 'Diagnóstico e cuidados para reequilibrar o couro com critério.', cta: 'Falar sobre caspa' },
    es: { name: 'Caspa', short: 'Diagnóstico y cuidados para reequilibrar el cuero con criterio.', cta: 'Hablar sobre caspa' },
    en: { name: 'Dandruff', short: 'Diagnosis and care to rebalance the scalp with criteria.', cta: 'Talk about dandruff' },
  },
  oleosidade: {
    pt: { name: 'Oleosidade Excessiva', short: 'Regular o sebo e restaurar o equilíbrio do couro cabeludo.', cta: 'Quero equilibrar o couro' },
    es: { name: 'Oleosidad excesiva', short: 'Regular el sebo y restaurar el equilibrio del cuero cabelludo.', cta: 'Quiero equilibrar el cuero' },
    en: { name: 'Excess oiliness', short: 'Rebalance sebum and restore scalp comfort.', cta: 'Rebalance my scalp' },
  },
  dermatite: {
    pt: { name: 'Dermatite Seborreica', short: 'Acalmar a inflamação e restaurar o conforto do couro.', cta: 'Pedir avaliação' },
    es: { name: 'Dermatitis seborreica', short: 'Calmar la inflamación y restaurar el confort del cuero.', cta: 'Pedir valoración' },
    en: { name: 'Seborrhoeic dermatitis', short: 'Soothe inflammation and restore scalp comfort.', cta: 'Request an assessment' },
  },
  calvicie: {
    pt: { name: 'Calvície', short: 'Abordagem personalizada para padrões de rarefação e alopecia.', cta: 'Quero avaliar' },
    es: { name: 'Calvicie', short: 'Enfoque personalizado para patrones de rarefacción y alopecia.', cta: 'Quiero evaluar' },
    en: { name: 'Baldness patterns', short: 'A personalised approach for thinning patterns and alopecia.', cta: 'I want an assessment' },
  },
  alopecia: {
    pt: { name: 'Alopecia Areata', short: 'Cuidado responsável para queda em placas, com escuta e plano.', cta: 'Falar com a Ana Sampaio' },
    es: { name: 'Alopecia areata', short: 'Cuidado responsable para caída en placas, con escucha y plan.', cta: 'Hablar con Ana Sampaio' },
    en: { name: 'Alopecia areata', short: 'Responsible care for patchy loss, with listening and a plan.', cta: 'Talk to Ana Sampaio' },
  },
  reconstrucao: {
    pt: { name: 'Reconstrução do fio', short: 'Para cabelo quebradiço, sem força, que “não segura” nada.', cta: 'Quero recuperar o cabelo' },
    es: { name: 'Reconstrucción del hilo', short: 'Para cabello quebradizo, sin fuerza, que “no sostiene” nada.', cta: 'Quiero recuperar el cabello' },
    en: { name: 'Hair reconstruction', short: 'For brittle hair that won’t hold shape or strength.', cta: 'I want to restore my hair' },
  },
  'reposicao-hidrica': {
    pt: { name: 'Reposição hídrica', short: 'Para fios secos, ásperos, sem vida ao toque.', cta: 'Quero hidratar' },
    es: { name: 'Reposición hídrica', short: 'Para hilos secos, ásperos, sin vida al tacto.', cta: 'Quiero hidratar' },
    en: { name: 'Hydration refill', short: 'For dry, rough hair that feels lifeless to the touch.', cta: 'I want hydration' },
  },
  'reposicao-lipidica': {
    pt: { name: 'Reposição lipídica', short: 'Para cabelo opaco, com frizz e sem aquele brilho saudável.', cta: 'Quero nutrir o cabelo' },
    es: { name: 'Reposición lipídica', short: 'Para cabello opaco, con frizz y sin ese brillo saludable.', cta: 'Quiero nutrir el cabello' },
    en: { name: 'Lipid refill', short: 'For dull hair with frizz and without healthy shine.', cta: 'I want to nourish my hair' },
  },
  detox: {
    pt: { name: 'Detox do couro cabeludo', short: 'Para quem sente o couro “pesado”, irritado ou desequilibrado.', cta: 'Falar sobre o couro' },
    es: { name: 'Detox del cuero cabelludo', short: 'Para quien siente el cuero “pesado”, irritado o desequilibrado.', cta: 'Hablar sobre el cuero' },
    en: { name: 'Scalp detox', short: 'For a scalp that feels heavy, irritated or out of balance.', cta: 'Talk about my scalp' },
  },
  'escova-terapeutica': {
    pt: { name: 'Escova terapêutica', short: 'Mais do que alisar: um momento de cuidado integrado ao seu plano.', cta: 'Quero saber mais' },
    es: { name: 'Cepillado terapéutico', short: 'Más que alisar: un momento de cuidado integrado a su plan.', cta: 'Quiero saber más' },
    en: { name: 'Therapeutic brush-out', short: 'More than smoothing: care integrated into your plan.', cta: 'Learn more' },
  },
  massagem: {
    pt: { name: 'Massagens com óleos terapêuticos', short: 'Relaxamento, circulação e nutrição do couro e dos fios.', cta: 'Agendar massagem' },
    es: { name: 'Masajes con aceites terapéuticos', short: 'Relajación, circulación y nutrición del cuero y los hilos.', cta: 'Reservar masaje' },
    en: { name: 'Therapeutic oil massages', short: 'Relaxation, circulation and nourishment for scalp and hair.', cta: 'Book a massage' },
  },
  chaterapia: {
    pt: { name: 'Chaterapia', short: 'Natureza a favor da calmia e do bem-estar.', cta: 'Saber mais' },
    es: { name: 'Chaterapia', short: 'Naturaleza a favor de la calmia y el bienestar.', cta: 'Saber más' },
    en: { name: 'Tea therapy', short: 'Nature in favour of calm and wellbeing.', cta: 'Learn more' },
  },
  musicaterapia: {
    pt: { name: 'Musicaterapia', short: 'Música como ferramenta de relaxamento e estímulo.', cta: 'Saber mais' },
    es: { name: 'Musicoterapia', short: 'Música como herramienta de relajación y estímulo.', cta: 'Saber más' },
    en: { name: 'Music therapy', short: 'Music as a tool for relaxation and support.', cta: 'Learn more' },
  },
  blend: {
    pt: { name: 'Blend de óleos naturais', short: 'Combinação única seleccionada para as suas necessidades.', cta: 'Pedir blend' },
    es: { name: 'Blend de aceites naturales', short: 'Combinación única seleccionada para sus necesidades.', cta: 'Pedir blend' },
    en: { name: 'Natural oil blends', short: 'A unique mix selected for your needs.', cta: 'Request a blend' },
  },
  'alta-freq': {
    pt: { name: 'Alta frequência', short: 'Estimular circulação e oxigenação do couro cabeludo.', cta: 'Incluir no plano' },
    es: { name: 'Alta frecuencia', short: 'Estimular circulación y oxigenación del cuero cabelludo.', cta: 'Incluir en el plan' },
    en: { name: 'High frequency', short: 'Stimulate circulation and scalp oxygenation.', cta: 'Add to my plan' },
  },
  led: {
    pt: { name: 'LED vermelho', short: 'Luz de baixa intensidade para regeneração celular.', cta: 'Incluir no plano' },
    es: { name: 'LED rojo', short: 'Luz de baja intensidad para regeneración celular.', cta: 'Incluir en el plan' },
    en: { name: 'Red LED', short: 'Low-level light to support cellular renewal.', cta: 'Add to my plan' },
  },
  microagulhamento: {
    pt: { name: 'Microagulhamento', short: 'Estimular colagénio e absorção de activos no couro.', cta: 'Pedir avaliação' },
    es: { name: 'Microagujado', short: 'Estimular colágeno y absorción de activos en el cuero.', cta: 'Pedir valoración' },
    en: { name: 'Microneedling', short: 'Stimulate collagen and absorption of actives on the scalp.', cta: 'Request an assessment' },
  },
}

export function getLocalizedServiceName(serviceId: string, locale: UrlLocale): string {
  return COPY[serviceId]?.[locale]?.name ?? services.find((s) => s.id === serviceId)?.name ?? serviceId
}

export function getLocalizedServiceShort(serviceId: string, locale: UrlLocale): string {
  return COPY[serviceId]?.[locale]?.short ?? services.find((s) => s.id === serviceId)?.shortDescription ?? ''
}

export function getLocalizedServiceCta(serviceId: string, locale: UrlLocale): string {
  return COPY[serviceId]?.[locale]?.cta ?? services.find((s) => s.id === serviceId)?.ctaLabel ?? 'OK'
}

export function getServiceOptionsForLocale(locale: UrlLocale) {
  return services.map((s) => ({
    id: s.id,
    name: getLocalizedServiceName(s.id, locale),
  }))
}
