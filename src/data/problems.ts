export type CapillaryProblem = {
  id: string
  name: string
  summary: string
  detail: string
}

export const capillaryProblems: CapillaryProblem[] = [
  {
    id: 'queda',
    name: 'Queda capilar',
    summary: 'Quando cai mais do que o habitual e começa a preocupar.',
    detail:
      'A queda pode ter várias origens. Na avaliação, a Ana escuta a sua história, observa o couro e os fios, e só depois sugere um caminho. Se for preciso, indica também quando vale a pena falar com um médico — sem dramatizar e sem promessas vazias.',
  },
  {
    id: 'caspa',
    name: 'Caspa',
    summary: 'Descamação, comichão ou aquele desconforto que não desaparece.',
    detail:
      'Caspa não se resolve só a “esconder” com produto. Olhamos para o couro cabeludo, para o que tem feito em casa e para o que pode estar a irritar. O objectivo é conforto real — e um plano simples de seguir.',
  },
  {
    id: 'oleosidade',
    name: 'Oleosidade excessiva',
    summary: 'Lava e, no dia seguinte, o cabelo já parece pesado.',
    detail:
      'Oleosidade a mais cansa. Às vezes o champô não ajuda; às vezes o couro pede outro tipo de cuidado. Avaliamos consigo e ajustamos o acompanhamento para o cabelo voltar a sentir-se leve.',
  },
  {
    id: 'dermatite',
    name: 'Dermatite seborreica',
    summary: 'Vermelho, irritado, sensível — o couro pede atenção.',
    detail:
      'Nestes casos trabalhamos com calma e responsabilidade. O cuidado capilar pode ajudar no conforto do couro, e quando faz sentido a Ana recomenda também orientação médica. Não avançamos às cegas.',
  },
  {
    id: 'calvicie',
    name: 'Calvície',
    summary: 'Rarefação que merece um olhar atento e honesto.',
    detail:
      'Falamos com clareza do que se vê e do que é realista. O acompanhamento é personalizado e integrado ao que o seu cabelo (e a sua história) pedem — sem vender milagres.',
  },
  {
    id: 'alopecia',
    name: 'Alopecia areata',
    summary: 'Queda em zonas localizadas que precisa de cuidado sério.',
    detail:
      'A alopecia areata pode pedir uma abordagem em equipa. No instituto, o foco é compreender o que o couro e os fios precisam agora, acompanhar com atenção e orientar com responsabilidade.',
  },
]
