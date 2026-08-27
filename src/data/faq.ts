import type { UrlLocale } from '@/i18n/config'
import type { FAQ } from '@/types/domain'

const faqByLocale: Record<UrlLocale, FAQ[]> = {
  pt: [
    {
      id: 'beneficios-terapia',
      question: 'A terapia capilar pode ajudar o meu cabelo?',
      answer:
        'Pode ajudar a compreender melhor o que se passa nos fios e no couro cabeludo, e a definir um acompanhamento personalizado. Não substituímos médico nem prometemos cura — cuidamos com responsabilidade e atenção individual.',
    },
    {
      id: 'fatores-analise',
      question: 'O que olham na avaliação?',
      answer:
        'A sua história com o cabelo, o estado dos fios, o conforto do couro cabeludo e o que nos conta na consulta. É assim que evitamos tratamentos “às cegas”.',
    },
    {
      id: 'servicos-oferecidos',
      question: 'Que serviços existem no instituto?',
      answer:
        'Beleza e transformação (mechas, brushing, corte, coloração, alisamento) e cuidados de saúde capilar (reconstrução, hidratação, nutrição, detox, escova terapêutica e terapia capilar integrativa). Também podem entrar massagens com óleos, chaterapia, musicaterapia, alta frequência, LED vermelho e microagulhamento — conforme avaliação.',
    },
    {
      id: 'anamnese-avaliacao',
      question: 'Porque é tão importante a avaliação?',
      answer:
        'Porque cada cabelo é diferente. A avaliação ajuda a perceber necessidades, a fazer testes quando faz sentido e a escolher um caminho mais seguro e adequado para si.',
    },
    {
      id: 'duracao-tratamento',
      question: 'Quanto tempo dura um acompanhamento?',
      answer:
        'Depende do que o seu cabelo precisa. Em muitos casos, o acompanhamento pode decorrer entre 1 e 6 meses, com retornos semanais ou mensais — sempre definidos consigo.',
    },
    {
      id: 'frequencia-retorno',
      question: 'De quanto em quanto tempo devo voltar?',
      answer:
        'A frequência fica no seu plano. Pode ser semanal ou mensal. O importante é manter a continuidade alinhada às necessidades reais.',
    },
    {
      id: 'agendamento',
      question: 'Como peço um horário?',
      answer:
        'Escolha o dia e a hora que prefere e envie o pedido no WhatsApp. A Ana Sampaio confirma se tem disponibilidade — ou sugere outra opção. Isto é um pedido, não uma reserva automática.',
    },
  ],
  es: [
    {
      id: 'beneficios-terapia',
      question: '¿La terapia capilar puede ayudar a mi cabello?',
      answer:
        'Puede ayudar a comprender mejor qué ocurre en los hilos y en el cuero cabelludo, y a definir un acompañamiento personalizado. No sustituimos al médico ni prometemos cura — cuidamos con responsabilidad y atención individual.',
    },
    {
      id: 'fatores-analise',
      question: '¿Qué miran en la valoración?',
      answer:
        'Su historia con el cabello, el estado de los hilos, el confort del cuero cabelludo y lo que nos cuenta en la cita. Así evitamos tratamientos “a ciegas”.',
    },
    {
      id: 'servicos-oferecidos',
      question: '¿Qué servicios hay en el instituto?',
      answer:
        'Belleza y transformación (mechas, brushing, corte, coloración, alisado) y cuidados de salud capilar (reconstrucción, hidratación, nutrición, detox, cepillado terapéutico y terapia capilar integrativa). También pueden entrar masajes con aceites, chaterapia, musicoterapia, alta frecuencia, LED rojo y microagujado — según valoración.',
    },
    {
      id: 'anamnese-avaliacao',
      question: '¿Por qué es tan importante la valoración?',
      answer:
        'Porque cada cabello es diferente. La valoración ayuda a percibir necesidades, hacer pruebas cuando tiene sentido y elegir un camino más seguro y adecuado para usted.',
    },
    {
      id: 'duracao-tratamento',
      question: '¿Cuánto dura un acompañamiento?',
      answer:
        'Depende de lo que su cabello necesita. En muchos casos, entre 1 y 6 meses, con retornos semanales o mensuales — siempre definidos con usted.',
    },
    {
      id: 'frequencia-retorno',
      question: '¿Cada cuánto debo volver?',
      answer:
        'La frecuencia queda en su plan. Puede ser semanal o mensual. Lo importante es mantener la continuidad alineada a las necesidades reales.',
    },
    {
      id: 'agendamento',
      question: '¿Cómo pido un horario?',
      answer:
        'Elija el día y la hora que prefiere y envíe la solicitud por WhatsApp. Ana Sampaio confirma si tiene disponibilidad — o sugiere otra opción. Esto es una solicitud, no una reserva automática.',
    },
  ],
  en: [
    {
      id: 'beneficios-terapia',
      question: 'Can scalp therapy help my hair?',
      answer:
        'It can help us understand what is happening in the strands and scalp, and define personalised follow-up. We do not replace a doctor or promise a cure — we care with responsibility and individual attention.',
    },
    {
      id: 'fatores-analise',
      question: 'What do you look at in the assessment?',
      answer:
        'Your hair history, strand condition, scalp comfort and what you share in the consultation. That is how we avoid treating “blind”.',
    },
    {
      id: 'servicos-oferecidos',
      question: 'What services does the institute offer?',
      answer:
        'Beauty and transformation (highlights, blow-dry, cut, colour, straightening) and hair-health care (reconstruction, hydration, nourishment, detox, therapeutic brush-out and integrative scalp therapy). Oil massages, tea therapy, music therapy, high frequency, red LED and microneedling may also enter — according to assessment.',
    },
    {
      id: 'anamnese-avaliacao',
      question: 'Why is the assessment so important?',
      answer:
        'Because every head of hair is different. Assessment helps us see needs, run tests when useful and choose a safer, more suitable path for you.',
    },
    {
      id: 'duracao-tratamento',
      question: 'How long does follow-up last?',
      answer:
        'It depends on what your hair needs. In many cases it runs between 1 and 6 months, with weekly or monthly returns — always defined with you.',
    },
    {
      id: 'frequencia-retorno',
      question: 'How often should I come back?',
      answer:
        'Frequency sits in your plan. It may be weekly or monthly. What matters is continuity aligned with real needs.',
    },
    {
      id: 'agendamento',
      question: 'How do I request a time?',
      answer:
        'Choose your preferred day and time and send the request on WhatsApp. Ana Sampaio confirms availability — or suggests another option. This is a request, not an automatic booking.',
    },
  ],
}

export function getFaqItems(locale: UrlLocale = 'pt') {
  return faqByLocale[locale]
}
