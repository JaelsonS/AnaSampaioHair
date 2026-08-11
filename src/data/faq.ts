export type FaqItem = {
  id: string
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
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
    question: 'Como agendo?',
    answer:
      'Clique em “Agendar”, escolha o dia e a hora que prefere e envie no WhatsApp. A Ana confirma se tem disponibilidade — ou sugere outra opção. Também pode escrever pelo formulário ou email.',
  },
]
