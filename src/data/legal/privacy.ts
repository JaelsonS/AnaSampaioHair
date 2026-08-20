import type { UrlLocale } from '@/i18n/config'
import { siteConfig } from '@/config/site'
import type { LegalDocument } from './types'

const UPDATED = '20 de agosto de 2026'
const EMAIL = siteConfig.contact.email
const PHONE = siteConfig.contact.phoneDisplay
const ADDRESS = siteConfig.contact.address.full
const LEGAL_NAME = siteConfig.legalName
const BRAND = siteConfig.name

const reviewNoticePt =
  'Este documento descreve o tratamento de dados com base na implementação atual do website. Não constitui aconselhamento jurídico nem garante conformidade absoluta. Deve ser revisto pelo responsável e, idealmente, por um profissional de direito antes da publicação definitiva.'

export const privacyByLocale: Record<UrlLocale, LegalDocument> = {
  pt: {
    title: 'Política de Privacidade',
    subtitle:
      'Como tratamos os dados pessoais através do website e dos serviços digitais associados ao Instituto Ana Sampaio.',
    metaDescription:
      'Política de Privacidade do website Ana Sampaio Hair: pedidos de contacto e agendamento via WhatsApp, formações, e-book, cookies e direitos dos titulares.',
    updatedAt: UPDATED,
    updatedLabel: 'Última atualização',
    tocLabel: 'Nesta página',
    relatedLabel: 'Documentos relacionados',
    reviewNotice: reviewNoticePt,
    sections: [
      {
        id: 'quem-somos',
        title: '1. Quem somos',
        blocks: [
          {
            type: 'p',
            text: `O responsável pelo tratamento dos dados pessoais tratados através deste website é a titularidade profissional associada a ${LEGAL_NAME}, marca ${BRAND}, com atividade em ${ADDRESS}.`,
          },
          {
            type: 'p',
            text: `Contactos para questões de privacidade e exercício de direitos: correio eletrónico ${EMAIL}; telefone/WhatsApp ${PHONE}.`,
          },
          {
            type: 'pending',
            items: [
              'Nome legal completo do responsável (pessoa singular ou sociedade) — [INFORMAÇÃO A CONFIRMAR]',
              'NIF — [INFORMAÇÃO A CONFIRMAR]',
              'Existência (ou não) de Encarregado de Proteção de Dados (DPO) — [INFORMAÇÃO A CONFIRMAR]',
            ],
          },
        ],
      },
      {
        id: 'ambito',
        title: '2. Âmbito desta Política',
        blocks: [
          {
            type: 'p',
            text: 'Esta Política aplica-se ao website anasampaio.pt (e respetivas versões linguísticas), aos formulários e fluxos digitais aí disponibilizados, e às comunicações iniciadas a partir do site (incluindo redirecionamentos para WhatsApp e para páginas de terceiros, como a loja do E-book).',
          },
          {
            type: 'p',
            text: 'Não se aplica automaticamente a tratamentos efetuados exclusivamente em contextos presenciais no instituto, salvo quando esses dados tenham sido inicialmente recolhidos através do website.',
          },
        ],
      },
      {
        id: 'o-que-sao',
        title: '3. O que são dados pessoais',
        blocks: [
          {
            type: 'p',
            text: 'Dados pessoais são informações relativas a uma pessoa singular identificada ou identificável (por exemplo, nome, número de telefone, endereço de correio eletrónico ou dados de contacto no WhatsApp).',
          },
        ],
      },
      {
        id: 'que-dados',
        title: '4. Que dados pessoais podemos tratar',
        blocks: [
          {
            type: 'p',
            text: 'Em função do fluxo que utilizar, podemos tratar apenas os dados necessários à finalidade em causa:',
          },
          {
            type: 'ul',
            items: [
              'Identificação e contacto: nome, telemóvel ou outro contacto indicado, eventualmente endereço de correio eletrónico se o fornecer voluntariamente.',
              'Dados do pedido: serviço ou formação de interesse, data e hora pretendidas, notas ou mensagem livre.',
              'Dados técnicos de utilização do website: endereço IP, tipo de navegador e informação semelhante que o servidor de alojamento possa registar em logs de segurança (conforme configuração do prestador de alojamento).',
              'Preferência de cookies armazenada localmente no seu dispositivo (ver Política de Cookies).',
            ],
          },
          {
            type: 'callout',
            text: 'Não pedimos, neste website, dados de saúde estruturados nem criamos um dossier clínico online. Se, no atendimento presencial, forem necessários dados sensíveis, o tratamento será enquadrado nesse contexto e com as salvaguardas adequadas — fora do âmbito desta Política digital, salvo informação adicional que venha a ser prestada.',
          },
        ],
      },
      {
        id: 'como-recolhemos',
        title: '5. Como recolhemos os dados',
        blocks: [
          {
            type: 'ul',
            items: [
              'Diretamente: quando preenche o formulário de pedido de agendamento, o assistente virtual do site ou o formulário de interesse em formações.',
              'Por redirecionamento: quando escolhe continuar a conversa no WhatsApp (wa.me), os dados que escrever nessa conversa passam a ser tratados também no âmbito da plataforma WhatsApp.',
              'Automaticamente: dados técnicos mínimos associados à navegação e, se aplicável, preferências de cookies no seu browser.',
              'Por ligação a terceiros: quando acede ao E-book através da Hotmart ou interage com mapas/redes sociais.',
            ],
          },
        ],
      },
      {
        id: 'finalidades',
        title: '6. Finalidades do tratamento',
        blocks: [
          {
            type: 'table',
            headers: ['Finalidade', 'Exemplos', 'Base jurídica (orientação)'],
            rows: [
              [
                'Pedido de agendamento / pré-marcação',
                'Receber e responder ao pedido; contactá-la para confirmar ou ajustar horário',
                'Diligências pré-contratuais / execução de medidas a pedido da titular (art. 6.º, n.º 1, al. b) do RGPD)',
              ],
              [
                'Interesse em formações',
                'Responder ao pedido de informação e gestão da lista de interesse na próxima turma',
                'Diligências pré-contratuais a pedido da titular; interesse legítimo em organizar a resposta (art. 6.º, n.º 1, al. b) e, quando aplicável, al. f))',
              ],
              [
                'Comunicação via WhatsApp',
                'Continuar o atendimento no canal escolhido pela titular',
                'Diligências pré-contratuais / interesse legítimo em prestar o atendimento solicitado',
              ],
              [
                'E-book (divulgação e compra)',
                'Apresentar o produto e redirecionar para a página de compra na Hotmart',
                'Interesse legítimo na divulgação; contrato e tratamento pela Hotmart na compra',
              ],
              [
                'Funcionamento e segurança do site',
                'Assegurar disponibilidade, prevenir abusos e registos técnicos',
                'Interesse legítimo (art. 6.º, n.º 1, al. f) do RGPD)',
              ],
              [
                'Preferências de cookies',
                'Memorizar a escolha do banner de cookies',
                'Interesse legítimo / obrigação de respeitar a escolha; cookies não essenciais só com consentimento quando existirem',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Não utilizamos, neste momento, o pedido de agendamento ou de formação como autorização automática para marketing promocional geral. Se no futuro forem enviadas comunicações promocionais, serão pedidas com base jurídica adequada (por regra, consentimento) e com possibilidade de retirada fácil.',
          },
        ],
      },
      {
        id: 'fundamentos',
        title: '7. Fundamentos jurídicos',
        blocks: [
          {
            type: 'p',
            text: 'Não utilizamos o consentimento como base única para tudo. Para pedidos de serviço e informação, a base principal é tipicamente a necessidade de diligências pré-contratuais a pedido da titular. O consentimento é reservado a situações em que a lei o exige (por exemplo, cookies não essenciais ou marketing promocional, quando existirem).',
          },
          {
            type: 'p',
            text: 'Quando invocamos interesse legítimo, equilibramos esse interesse com os seus direitos e expectativas razoáveis enquanto visitante do site.',
          },
        ],
      },
      {
        id: 'agendamento',
        title: '8. Agendamento e prestação de serviços',
        blocks: [
          {
            type: 'p',
            text: 'O website permite formular um pedido de horário (serviço, data, hora, nome, contacto e notas opcionais). Este pedido não constitui, por si só, uma reserva confirmada nem uma vaga garantida.',
          },
          {
            type: 'p',
            text: 'Após o envio, a conversa é encaminhada para o WhatsApp do instituto. A Ana (ou a equipa) analisa a disponibilidade e confirma consigo. Só após essa confirmação deve considerar a marcação como efetivada.',
          },
          {
            type: 'p',
            text: 'Não existe, neste website, um sistema de calendário online com confirmação automática, base de dados própria de marcações nem pagamento de serviços de salão através do site.',
          },
        ],
      },
      {
        id: 'contactos',
        title: '9. Contactos e comunicações',
        blocks: [
          {
            type: 'p',
            text: `Pode contactar-nos por telefone, correio eletrónico (${EMAIL}) ou WhatsApp (${PHONE}). Os dados que nos enviar nesses canais serão usados para responder e, se aplicável, organizar o atendimento.`,
          },
          {
            type: 'p',
            text: 'A página de Contacto do website apresenta morada, telefone, email e um mapa incorporado; não contém, neste momento, um formulário de envio de mensagem alojado no próprio site.',
          },
        ],
      },
      {
        id: 'whatsapp',
        title: '10. WhatsApp',
        blocks: [
          {
            type: 'p',
            text: 'O site utiliza ligações do tipo wa.me para iniciar conversas no WhatsApp. Não está implementada, neste projeto, uma integração oficial WhatsApp Business API que grave mensagens numa base de dados do website.',
          },
          {
            type: 'ul',
            items: [
              'Quando clica para enviar o pedido, o browser abre o WhatsApp (aplicação ou web) com uma mensagem pré-preenchida.',
              'A comunicação passa a decorrer na plataforma WhatsApp, sujeita também às condições e políticas da Meta Platforms Ireland Limited / WhatsApp.',
              'O instituto trata as mensagens recebidas para fins de atendimento e organização do serviço.',
            ],
          },
          {
            type: 'callout',
            text: 'Recomendamos que não envie dados sensíveis desnecessários por mensagem. Em caso de dúvida, prefira o atendimento presencial ou o canal que a Ana indicar.',
          },
        ],
      },
      {
        id: 'formacoes',
        title: '11. Formações e cursos',
        blocks: [
          {
            type: 'p',
            text: 'O website permite manifestar interesse em formações (nome, contacto, tema e notas opcionais). O envio gera uma mensagem para WhatsApp — trata-se de um pedido de informação / lista de interesse na próxima turma, não de uma inscrição paga nem de uma matrícula confirmada no site.',
          },
          {
            type: 'p',
            text: 'Não misturamos automaticamente este pedido com consentimento para marketing genérico. Qualquer comunicação comercial futura distinta do seguimento do pedido será tratada com a base jurídica adequada.',
          },
        ],
      },
      {
        id: 'ebook',
        title: '12. E-book e conteúdos digitais',
        blocks: [
          {
            type: 'p',
            text: 'O E-book «Guia Meu Cabelo dos Sonhos» é divulgado no website. A compra, quando efetuada, realiza-se através da plataforma Hotmart (ligação externa). O website não processa pagamentos do E-book nem armazena dados de cartão.',
          },
          {
            type: 'p',
            text: 'Na compra, a Hotmart (e eventuais prestadores associados à Hotmart) trata dados necessários à transação e entrega do produto digital, nos termos das suas próprias políticas. Recomendamos a leitura das condições da Hotmart antes de concluir a compra.',
          },
        ],
      },
      {
        id: 'marketing',
        title: '13. Marketing e comunicações promocionais',
        blocks: [
          {
            type: 'p',
            text: 'Neste momento, o website não inclui uma newsletter com checkbox de marketing nem um sistema de email marketing ligado aos formulários.',
          },
          {
            type: 'p',
            text: 'Um pedido de agendamento ou de informação sobre formação não é tratado como autorização para campanhas promocionais gerais. Se no futuro forem introduzidas comunicações promocionais, o consentimento (quando exigido) será específico, informado e retirável.',
          },
        ],
      },
      {
        id: 'cookies',
        title: '14. Cookies e tecnologias semelhantes',
        blocks: [
          {
            type: 'p',
            text: 'Utilizamos um banner de preferências que guarda a sua escolha no armazenamento local do navegador (localStorage). Detalhes, inventário e gestão encontram-se na Política de Cookies.',
          },
        ],
      },
      {
        id: 'analytics',
        title: '15. Analytics e estatísticas',
        blocks: [
          {
            type: 'p',
            text: 'Na auditoria ao código deste website (agosto de 2026), não foram encontrados scripts de Google Analytics, Google Tag Manager, Meta Pixel, TikTok Pixel, Hotjar, Microsoft Clarity ou ferramentas semelhantes ativas.',
          },
          {
            type: 'p',
            text: 'O banner de cookies prevê categorias de estatística e marketing para eventual utilização futura. Enquanto não existirem cookies ou scripts nessas categorias, a ativação dessas opções no banner não carrega tecnologias de medição ou publicidade.',
          },
        ],
      },
      {
        id: 'redes',
        title: '16. Redes sociais',
        blocks: [
          {
            type: 'p',
            text: 'O site inclui ligações para Instagram e Facebook. Se seguir essas ligações ou interagir nas plataformas, o tratamento de dados passa a reger-se também pelas políticas dessas redes.',
          },
        ],
      },
      {
        id: 'partilha',
        title: '17. Partilha de dados com terceiros',
        blocks: [
          {
            type: 'p',
            text: 'Não vendemos dados pessoais. Podemos partilhar ou transmitir dados apenas quando necessário às finalidades descritas, nomeadamente:',
          },
          {
            type: 'ul',
            items: [
              'WhatsApp / Meta — quando inicia ou continua a conversa nessa plataforma.',
              'Hotmart — quando acede à página de compra do E-book.',
              'Google Maps — quando visualiza o mapa incorporado na página de Contacto (pode implicar tratamento técnico pela Google).',
              'Prestador de alojamento do website — para disponibilizar o site e logs técnicos de segurança (identidade do prestador: [INFORMAÇÃO A CONFIRMAR]).',
              'Autoridades — quando a lei o exigir.',
            ],
          },
        ],
      },
      {
        id: 'subcontratantes',
        title: '18. Subcontratantes',
        blocks: [
          {
            type: 'p',
            text: 'Podem atuar como subcontratantes ou destinatários independentes os prestadores acima referidos, na medida em que processem dados por conta ou em consequência da utilização dos respetivos serviços. A lista concreta de subcontratantes de alojamento e ferramentas internas será atualizada quando confirmada.',
          },
        ],
      },
      {
        id: 'transferencias',
        title: '19. Transferências internacionais de dados',
        blocks: [
          {
            type: 'p',
            text: 'Alguns destinatários (por exemplo, WhatsApp/Meta, Hotmart, Google) podem implicar transferências internacionais de dados para fora do Espaço Económico Europeu. Nessas situações, o tratamento pelo terceiro rege-se pelas suas políticas e pelos mecanismos de transferência que esses fornecedores declaram utilizar (cláusulas-tipo, decisões de adequação, etc.).',
          },
          {
            type: 'p',
            text: 'Não afirmamos que todos os dados tratados através do site permanecem exclusivamente na União Europeia, porque parte dos fluxos depende de plataformas internacionais escolhidas pelo utilizador (WhatsApp, Hotmart, mapas).',
          },
        ],
      },
      {
        id: 'seguranca',
        title: '20. Segurança',
        blocks: [
          {
            type: 'p',
            text: 'Adotamos medidas técnicas e organizativas adequadas ao risco, incluindo controlo de acesso às contas de gestão do site e do WhatsApp, utilização de ligações HTTPS no website e boas práticas de minimização de dados nos formulários.',
          },
          {
            type: 'p',
            text: 'Nenhuma transmissão pela Internet é absolutamente segura. Pedimos que proteja os seus dispositivos e não partilhe códigos ou dados desnecessários.',
          },
        ],
      },
      {
        id: 'conservacao',
        title: '21. Conservação dos dados',
        blocks: [
          {
            type: 'p',
            text: 'Não conservamos dados «indefinidamente». Critérios aplicados:',
          },
          {
            type: 'ul',
            items: [
              'Pedidos de agendamento / formação via WhatsApp: enquanto necessários para responder, confirmar e gerir a relação decorrente do pedido, e pelo período adicional exigido por obrigações legais ou defesa de direitos (quando aplicável).',
              'Preferência de cookies (localStorage): até apagar os dados do site no navegador ou alterar a preferência.',
              'Logs técnicos do alojamento: conforme política do prestador de alojamento — [INFORMAÇÃO A CONFIRMAR].',
            ],
          },
          {
            type: 'pending',
            items: [
              'Prazo interno concreto (em meses/anos) para arquivo de conversas WhatsApp relacionadas com clientes — [INFORMAÇÃO A CONFIRMAR]',
            ],
          },
        ],
      },
      {
        id: 'direitos',
        title: '22. Direitos dos titulares',
        blocks: [
          {
            type: 'p',
            text: 'Nos termos do RGPD e da Lei n.º 58/2019, pode exercer, quando aplicável:',
          },
          {
            type: 'ul',
            items: [
              'Direito de acesso',
              'Direito de retificação',
              'Direito ao apagamento',
              'Direito à limitação do tratamento',
              'Direito de oposição',
              'Direito de portabilidade',
              'Direito de retirar o consentimento (quando o tratamento se baseie em consentimento), sem comprometer a licitude do tratamento anterior',
              'Direito a não ficar sujeito a decisões exclusivamente automatizadas com efeitos significativos — não utilizamos esse tipo de decisão neste website',
            ],
          },
        ],
      },
      {
        id: 'exercer',
        title: '23. Como exercer os direitos',
        blocks: [
          {
            type: 'p',
            text: `Para exercer os seus direitos, contacte ${EMAIL} ou ${PHONE}, identificando-se de forma adequada e descrevendo o pedido. Responderemos no prazo legal aplicável.`,
          },
        ],
      },
      {
        id: 'cnpd',
        title: '24. Direito de apresentar reclamação à autoridade de controlo',
        blocks: [
          {
            type: 'p',
            text: 'Se considerar que os seus dados não estão a ser tratados corretamente, pode apresentar reclamação à Comissão Nacional de Proteção de Dados (CNPD) — www.cnpd.pt. A CNPD é a autoridade de controlo portuguesa competente; este website não utiliza o logótipo da CNPD nem afirma que esta Política foi «aprovada» pela CNPD.',
          },
        ],
      },
      {
        id: 'menores',
        title: '25. Crianças e menores',
        blocks: [
          {
            type: 'p',
            text: 'Os serviços digitais do website destinam-se a adultos. Se tiver menos de 18 anos, só deve utilizar os formulários com envolvimento e autorização do titular das responsabilidades parentais, quando aplicável.',
          },
        ],
      },
      {
        id: 'ligacoes',
        title: '26. Ligações para websites de terceiros',
        blocks: [
          {
            type: 'p',
            text: 'O site pode conter ligações para WhatsApp, Hotmart, Google Maps, Instagram, Facebook e Livro de Reclamações eletrónico. Não controlamos as práticas de privacidade desses sites. Consulte as respetivas políticas.',
          },
        ],
      },
      {
        id: 'alteracoes',
        title: '27. Alterações a esta Política',
        blocks: [
          {
            type: 'p',
            text: 'Podemos atualizar esta Política para refletir alterações legais ou na forma como o website funciona. A data de última atualização consta no topo desta página.',
          },
        ],
      },
      {
        id: 'contactos-finais',
        title: '28. Contactos',
        blocks: [
          {
            type: 'ul',
            items: [
              `${LEGAL_NAME} / ${BRAND}`,
              `Morada: ${ADDRESS}`,
              `Email: ${EMAIL}`,
              `Telefone / WhatsApp: ${PHONE}`,
            ],
          },
        ],
      },
      {
        id: 'atualizacao',
        title: '29. Data da última atualização',
        blocks: [
          {
            type: 'p',
            text: `Última atualização: ${UPDATED}.`,
          },
        ],
      },
    ],
  },
  es: {
    title: 'Política de Privacidad',
    subtitle:
      'Cómo tratamos los datos personales a través del sitio web y de los servicios digitales asociados al Instituto Ana Sampaio.',
    metaDescription:
      'Política de Privacidad de Ana Sampaio Hair: contacto y cita por WhatsApp, formaciones, e-book, cookies y derechos.',
    updatedAt: '20 de agosto de 2026',
    updatedLabel: 'Última actualización',
    tocLabel: 'En esta página',
    relatedLabel: 'Documentos relacionados',
    reviewNotice:
      'Este documento describe el tratamiento según la implementación actual del sitio. No es asesoramiento jurídico ni garantiza conformidad absoluta. Debe revisarse antes de la publicación definitiva.',
    sections: [
      {
        id: 'quien',
        title: '1. Quiénes somos',
        blocks: [
          {
            type: 'p',
            text: `El responsable del tratamiento a través de este sitio es la titularidad profesional asociada a ${LEGAL_NAME}, marca ${BRAND}, en ${ADDRESS}. Contacto: ${EMAIL} / ${PHONE}.`,
          },
          {
            type: 'pending',
            items: [
              'Nombre legal completo — [INFORMACIÓN A CONFIRMAR]',
              'NIF — [INFORMACIÓN A CONFIRMAR]',
              'DPO (si existe) — [INFORMACIÓN A CONFIRMAR]',
            ],
          },
        ],
      },
      {
        id: 'ambito',
        title: '2. Ámbito',
        blocks: [
          {
            type: 'p',
            text: 'Aplica al sitio anasampaio.pt, formularios digitales y redirecciones a WhatsApp/Hotmart. El texto completo de referencia jurídica está redactado en portugués europeo; esta versión resume el mismo alcance.',
          },
        ],
      },
      {
        id: 'datos',
        title: '3. Datos tratados',
        blocks: [
          {
            type: 'ul',
            items: [
              'Nombre, teléfono/contacto, servicio o formación de interés, fecha/hora, notas.',
              'Datos técnicos de navegación/logs del alojamiento.',
              'Preferencia de cookies en localStorage.',
            ],
          },
        ],
      },
      {
        id: 'finalidades',
        title: '4. Finalidades y bases',
        blocks: [
          {
            type: 'p',
            text: 'Pedido de cita e interés en formaciones: diligencias precontractuales (no confirmación automática). WhatsApp vía wa.me. E-book: divulgación y compra en Hotmart. Sin analytics activos detectados en el código. Sin newsletter de marketing en el sitio.',
          },
        ],
      },
      {
        id: 'derechos',
        title: '5. Derechos',
        blocks: [
          {
            type: 'p',
            text: `Acceso, rectificación, supresión, limitación, oposición, portabilidad y retirada del consentimiento cuando aplique. Contacto: ${EMAIL}. Reclamación: CNPD (Portugal) — www.cnpd.pt.`,
          },
        ],
      },
      {
        id: 'mas',
        title: '6. Más información',
        blocks: [
          {
            type: 'p',
            text: 'Consulte la versión en portugués para el detalle completo de secciones (WhatsApp, formaciones, e-book, transferencias, conservación y seguridad).',
          },
        ],
      },
    ],
  },
  en: {
    title: 'Privacy Policy',
    subtitle:
      'How we process personal data through the website and related digital services of the Ana Sampaio institute.',
    metaDescription:
      'Ana Sampaio Hair Privacy Policy: WhatsApp booking requests, training leads, e-book, cookies and data-subject rights.',
    updatedAt: '20 August 2026',
    updatedLabel: 'Last updated',
    tocLabel: 'On this page',
    relatedLabel: 'Related documents',
    reviewNotice:
      'This document describes processing based on the current website implementation. It is not legal advice and does not guarantee absolute compliance. It should be reviewed before final publication.',
    sections: [
      {
        id: 'who',
        title: '1. Who we are',
        blocks: [
          {
            type: 'p',
            text: `The controller for processing via this website is the professional activity associated with ${LEGAL_NAME}, brand ${BRAND}, at ${ADDRESS}. Contact: ${EMAIL} / ${PHONE}.`,
          },
          {
            type: 'pending',
            items: [
              'Full legal name — [TO BE CONFIRMED]',
              'Tax ID (NIF) — [TO BE CONFIRMED]',
              'DPO (if any) — [TO BE CONFIRMED]',
            ],
          },
        ],
      },
      {
        id: 'scope',
        title: '2. Scope',
        blocks: [
          {
            type: 'p',
            text: 'Covers anasampaio.pt, on-site request flows and redirects to WhatsApp/Hotmart. The full authoritative legal text is in European Portuguese; this English version summarises the same scope.',
          },
        ],
      },
      {
        id: 'data',
        title: '3. Data we may process',
        blocks: [
          {
            type: 'ul',
            items: [
              'Name, phone/contact, service or course interest, preferred date/time, notes.',
              'Technical browsing/hosting logs.',
              'Cookie preference in localStorage.',
            ],
          },
        ],
      },
      {
        id: 'purposes',
        title: '4. Purposes and legal bases',
        blocks: [
          {
            type: 'p',
            text: 'Booking and training interest requests: pre-contractual steps (not automatic confirmation). WhatsApp via wa.me. E-book: disclosure and purchase on Hotmart. No active analytics scripts found in the codebase. No marketing newsletter checkbox on the site.',
          },
        ],
      },
      {
        id: 'rights',
        title: '5. Your rights',
        blocks: [
          {
            type: 'p',
            text: `Access, rectification, erasure, restriction, objection, portability and withdrawal of consent where applicable. Contact: ${EMAIL}. Complaint: CNPD (Portugal) — www.cnpd.pt.`,
          },
        ],
      },
      {
        id: 'more',
        title: '6. More detail',
        blocks: [
          {
            type: 'p',
            text: 'See the Portuguese version for the full section-by-section detail (WhatsApp, training, e-book, transfers, retention and security).',
          },
        ],
      },
    ],
  },
}
