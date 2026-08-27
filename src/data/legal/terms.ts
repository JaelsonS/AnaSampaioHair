import type { UrlLocale } from '@/i18n/config'
import { siteConfig } from '@/config/site'
import type { LegalDocument } from './types'

const UPDATED = '20 de agosto de 2026'
const EMAIL = siteConfig.contact.email
const PHONE = siteConfig.contact.phoneDisplay
const ADDRESS = siteConfig.contact.address.full
const LEGAL_NAME = siteConfig.legalName
const BRAND = siteConfig.name

export const termsByLocale: Record<UrlLocale, LegalDocument> = {
  pt: {
    title: 'Termos de Utilização',
    subtitle:
      'Condições de utilização do website Ana Sampaio Hair — informação, pedidos de contacto e serviços digitais associados.',
    metaDescription:
      'Termos de Utilização do website Ana Sampaio Hair: conteúdos, agendamento via WhatsApp, formações, e-book Hotmart e responsabilidades.',
    updatedAt: UPDATED,
    updatedLabel: 'Última atualização',
    tocLabel: 'Nesta página',
    relatedLabel: 'Documentos relacionados',
    reviewNotice:
      'Estes Termos refletem o funcionamento atual do website. Devem ser validados pelo responsável e, idealmente, por um profissional de direito antes da publicação definitiva. Não constituem aconselhamento jurídico.',
    sections: [
      {
        id: 'identificacao',
        title: '1. Identificação do titular do website',
        blocks: [
          {
            type: 'p',
            text: `Website operado no âmbito de ${LEGAL_NAME}, marca ${BRAND}. Morada: ${ADDRESS}. Contactos: ${EMAIL}; ${PHONE}.`,
          },
          {
            type: 'pending',
            items: [
              'Nome legal completo e forma jurídica — [INFORMAÇÃO A CONFIRMAR]',
              'NIF — [INFORMAÇÃO A CONFIRMAR]',
            ],
          },
        ],
      },
      {
        id: 'objeto',
        title: '2. Objeto',
        blocks: [
          {
            type: 'p',
            text: 'Os presentes Termos regulam o acesso e a utilização do website anasampaio.pt (e versões linguísticas), incluindo apresentação de serviços, conteúdos editoriais, pedidos de agendamento, interesse em formações e divulgação do E-book.',
          },
        ],
      },
      {
        id: 'aceitacao',
        title: '3. Aceitação dos Termos',
        blocks: [
          {
            type: 'p',
            text: 'Ao aceder ou utilizar o website, o utilizador declara ter lido e aceite estes Termos. Se não concordar, deve abster-se de utilizar o site.',
          },
        ],
      },
      {
        id: 'utilizacao',
        title: '4. Utilização do website',
        blocks: [
          {
            type: 'p',
            text: 'O utilizador compromete-se a utilizar o website de forma lícita, sem prejudicar o seu funcionamento, sem tentar aceder a áreas restritas e sem introduzir informação falsa nos pedidos de contacto ou agendamento.',
          },
        ],
      },
      {
        id: 'conteudos',
        title: '5. Conteúdos',
        blocks: [
          {
            type: 'p',
            text: 'Os conteúdos têm caráter informativo e comercial. Podem ser atualizados, corrigidos ou removidos sem aviso prévio. Erros tipográficos ou de atualização não geram, por si só, obrigação de indemnização.',
          },
        ],
      },
      {
        id: 'pi',
        title: '6. Propriedade intelectual',
        blocks: [
          {
            type: 'p',
            text: 'Salvo indicação em contrário, textos, fotografias, logótipo, identidade visual, artigos do blog, materiais de formação apresentados e o E-book são protegidos por direitos de propriedade intelectual. É proibida a reprodução, distribuição ou exploração comercial sem autorização prévia escrita, exceto usos permitidos por lei (por exemplo, direito de citação nos limites legais).',
          },
        ],
      },
      {
        id: 'blog',
        title: '7. Blog e conteúdos informativos',
        blocks: [
          {
            type: 'p',
            text: 'Os artigos do blog são conteúdos editoriais de natureza informativa. Não substituem avaliação profissional individualizada nem constituem diagnóstico ou tratamento médico. Não garantimos resultados com base exclusiva na leitura de um artigo.',
          },
        ],
      },
      {
        id: 'servicos',
        title: '8. Serviços apresentados',
        blocks: [
          {
            type: 'p',
            text: 'A descrição de serviços de beleza, terapia e cuidados capilares no website é informativa. A adequação de qualquer protocolo depende de avaliação presencial. Não prometemos resultados absolutos nem apresentamos claims médicos não fundamentados.',
          },
        ],
      },
      {
        id: 'agendamento',
        title: '9. Agendamento',
        blocks: [
          {
            type: 'p',
            text: 'O website permite enviar um pedido de horário (formulário de agendamento ou assistente virtual). O pedido é encaminhado para WhatsApp. Não constitui confirmação automática de vaga.',
          },
          {
            type: 'p',
            text: 'A marcação só se considera confirmada após resposta do instituto a validar disponibilidade. Pode ser necessário ajustar data, hora ou serviço.',
          },
        ],
      },
      {
        id: 'cancelamento',
        title: '10. Cancelamento e remarcação',
        blocks: [
          {
            type: 'p',
            text: 'Neste website não está publicada uma política detalhada de cancelamento/remarcação com prazos e consequências.',
          },
          {
            type: 'pending',
            items: [
              'Regras de cancelamento e remarcação a definir pela Ana Sampaio — [INFORMAÇÃO A CONFIRMAR]',
            ],
          },
          {
            type: 'p',
            text: 'Até essa definição, o cancelamento ou remarcação deve ser combinado diretamente consigo através dos contactos do instituto.',
          },
        ],
      },
      {
        id: 'whatsapp',
        title: '11. Comunicação através de WhatsApp',
        blocks: [
          {
            type: 'p',
            text: 'Ao escolher o WhatsApp, aceita que a conversa continue nessa plataforma, sujeita também às regras da própria Meta/WhatsApp. O instituto utiliza o canal para atendimento e organização de pedidos.',
          },
        ],
      },
      {
        id: 'formacoes',
        title: '12. Formações',
        blocks: [
          {
            type: 'p',
            text: 'O formulário de formações corresponde a um pedido de informação / lista de interesse na próxima turma. Não é inscrição paga nem confirmação de vaga no curso através do website. Condições concretas de cada formação (datas, valores, programa) serão comunicadas quando existirem e estiverem definidas.',
          },
        ],
      },
      {
        id: 'ebook',
        title: '13. E-book',
        blocks: [
          {
            type: 'p',
            text: 'O E-book é divulgado no website. A compra realiza-se na Hotmart. As condições de venda, pagamento, acesso ao ficheiro e eventual direito de resolução aplicáveis à compra digital são as da Hotmart e da legislação aplicável à compra junto desse prestador.',
          },
          {
            type: 'p',
            text: 'O website Ana Sampaio Hair não processa o pagamento do E-book nem gere o checkout internamente.',
          },
        ],
      },
      {
        id: 'compras',
        title: '14. Compras e pagamentos no website',
        blocks: [
          {
            type: 'p',
            text: 'Não existe, neste website, checkout próprio para serviços de salão nem loja física online com preços inventados. Qualquer pagamento de serviços presenciais é tratado fora deste fluxo digital, conforme combinado no atendimento.',
          },
        ],
      },
      {
        id: 'precos',
        title: '15. Preços',
        blocks: [
          {
            type: 'p',
            text: 'O website não publica uma tabela de preços completa de serviços. Preços e condições comerciais de serviços presenciais são indicados no contacto ou no instituto. O preço do E-book, quando aplicável, é o apresentado na página Hotmart.',
          },
        ],
      },
      {
        id: 'disponibilidade',
        title: '16. Disponibilidade dos serviços',
        blocks: [
          {
            type: 'p',
            text: 'A disponibilidade de horários e serviços depende da agenda real do instituto. O website não garante disponibilidade contínua de todos os serviços descritos.',
          },
        ],
      },
      {
        id: 'utilizador',
        title: '17. Responsabilidades do utilizador',
        blocks: [
          {
            type: 'ul',
            items: [
              'Fornecer dados verdadeiros nos pedidos.',
              'Não utilizar o site para fins ilícitos ou abusivos.',
              'Respeitar a propriedade intelectual e a imagem das pessoas fotografadas.',
            ],
          },
        ],
      },
      {
        id: 'limitacoes',
        title: '18. Limitações de responsabilidade',
        blocks: [
          {
            type: 'p',
            text: 'Na medida permitida pela lei aplicável, o instituto não responde por interrupções temporárias do website, por atos de terceiros (WhatsApp, Hotmart, Google, redes sociais) nem por decisões tomadas exclusivamente com base em conteúdos informativos do blog sem avaliação profissional.',
          },
        ],
      },
      {
        id: 'externas',
        title: '19. Ligações externas',
        blocks: [
          {
            type: 'p',
            text: 'Ligações para sites de terceiros são fornecidas para comodidade. Não controlamos esses sites nem as suas políticas.',
          },
        ],
      },
      {
        id: 'funcionamento',
        title: '20. Disponibilidade e funcionamento do website',
        blocks: [
          {
            type: 'p',
            text: 'Procuramos manter o website disponível e seguro, sem garantir ausência total de falhas técnicas ou de manutenção.',
          },
        ],
      },
      {
        id: 'pi-ana',
        title: '21. Propriedade intelectual da Ana Sampaio / do instituto',
        blocks: [
          {
            type: 'p',
            text: 'O nome Ana Sampaio, a marca Ana Sampaio Hair, fotografias, textos e materiais associados estão protegidos. A utilização não autorizada pode originar responsabilidade civil e/ou criminal nos termos da lei.',
          },
        ],
      },
      {
        id: 'fotografias',
        title: '22. Fotografias',
        blocks: [
          {
            type: 'p',
            text: 'As fotografias do website (incluindo retratos da Ana Sampaio e imagens de ambiente/trabalhos) não podem ser reutilizadas para fins comerciais ou publicitários sem autorização.',
          },
        ],
      },
      {
        id: 'conteudos-ana',
        title: '23. Conteúdos produzidos pela Ana Sampaio',
        blocks: [
          {
            type: 'p',
            text: 'Artigos, guias e o E-book são obras intelectuais. A aquisição do E-book confere a licença de uso pessoal prevista nas condições da Hotmart, sem transferir a titularidade dos direitos de autor.',
          },
        ],
      },
      {
        id: 'indevida',
        title: '24. Utilização indevida',
        blocks: [
          {
            type: 'p',
            text: 'Reservamo-nos o direito de recusar ou interromper interações abusivas, fraudulentas ou que violem estes Termos, sem prejuízo de outras medidas legais.',
          },
        ],
      },
      {
        id: 'dados',
        title: '25. Proteção de dados',
        blocks: [
          {
            type: 'p',
            text: 'O tratamento de dados pessoais rege-se pela Política de Privacidade.',
          },
        ],
      },
      {
        id: 'cookies',
        title: '26. Cookies',
        blocks: [
          {
            type: 'p',
            text: 'A utilização de cookies e tecnologias semelhantes rege-se pela Política de Cookies.',
          },
        ],
      },
      {
        id: 'alteracoes',
        title: '27. Alterações dos Termos',
        blocks: [
          {
            type: 'p',
            text: 'Podemos alterar estes Termos. A versão aplicável é a publicada nesta página, com a data de atualização indicada.',
          },
        ],
      },
      {
        id: 'lei',
        title: '28. Lei aplicável',
        blocks: [
          {
            type: 'p',
            text: 'Salvo norma imperativa em contrário, estes Termos regem-se pela lei portuguesa.',
          },
        ],
      },
      {
        id: 'litigios',
        title: '29. Resolução de litígios',
        blocks: [
          {
            type: 'p',
            text: 'Em caso de litígio de consumo, o utilizador consumidor pode recorrer às entidades de resolução alternativa de litígios de consumo legalmente competentes. Sem prejuízo, pode utilizar o Livro de Reclamações eletrónico disponível através dos contactos legais do site.',
          },
          {
            type: 'p',
            text: `Livro de Reclamações: ${siteConfig.legal.complaintsBookUrl}`,
          },
        ],
      },
      {
        id: 'contactos',
        title: '30. Contactos',
        blocks: [
          {
            type: 'ul',
            items: [
              LEGAL_NAME,
              ADDRESS,
              EMAIL,
              PHONE,
            ],
          },
        ],
      },
      {
        id: 'atualizacao',
        title: '31. Data da última atualização',
        blocks: [
          { type: 'p', text: `Última atualização: ${UPDATED}.` },
        ],
      },
    ],
  },
  es: {
    title: 'Términos de Uso',
    subtitle: 'Condiciones de uso del sitio Ana Sampaio Hair.',
    metaDescription: 'Términos de uso: contenidos, cita por WhatsApp, formaciones y e-book Hotmart.',
    updatedAt: '20 de agosto de 2026',
    updatedLabel: 'Última actualización',
    tocLabel: 'En esta página',
    relatedLabel: 'Documentos relacionados',
    reviewNotice:
      'Reflejan el funcionamiento actual del sitio. Deben validarse antes de la publicación definitiva. La versión completa de referencia está en portugués.',
    sections: [
      {
        id: 'id',
        title: '1. Identificación',
        blocks: [
          {
            type: 'p',
            text: `${LEGAL_NAME} / ${BRAND}. ${ADDRESS}. ${EMAIL}. ${PHONE}. NIF y forma jurídica: [INFORMACIÓN A CONFIRMAR].`,
          },
        ],
      },
      {
        id: 'uso',
        title: '2. Uso y contenidos',
        blocks: [
          {
            type: 'p',
            text: 'El sitio es informativo y comercial. El blog no sustituye valoración profesional. No se prometen resultados absolutos. Pedido de cita = solicitud, no confirmación automática. Formaciones = lista de interés. E-book = compra en Hotmart.',
          },
        ],
      },
      {
        id: 'ley',
        title: '3. Ley y datos',
        blocks: [
          {
            type: 'p',
            text: 'Ley portuguesa. Privacidad y cookies en sus políticas. Reclamaciones: libro electrónico de reclamaciones.',
          },
        ],
      },
    ],
  },
  en: {
    title: 'Terms of Use',
    subtitle: 'Terms for using the Ana Sampaio Hair website.',
    metaDescription: 'Terms of use: content, WhatsApp booking requests, training interest and Hotmart e-book.',
    updatedAt: '20 August 2026',
    updatedLabel: 'Last updated',
    tocLabel: 'On this page',
    relatedLabel: 'Related documents',
    reviewNotice:
      'These Terms reflect the current website. They should be reviewed before final publication. The full authoritative version is in European Portuguese.',
    sections: [
      {
        id: 'id',
        title: '1. Identification',
        blocks: [
          {
            type: 'p',
            text: `${LEGAL_NAME} / ${BRAND}. ${ADDRESS}. ${EMAIL}. ${PHONE}. Tax ID and legal form: [TO BE CONFIRMED].`,
          },
        ],
      },
      {
        id: 'use',
        title: '2. Use and content',
        blocks: [
          {
            type: 'p',
            text: 'The site is informational and commercial. Blog posts do not replace professional assessment. No absolute results are promised. Booking = request, not automatic confirmation. Training = interest list. E-book purchase = Hotmart.',
          },
        ],
      },
      {
        id: 'law',
        title: '3. Law and data',
        blocks: [
          {
            type: 'p',
            text: 'Portuguese law. Privacy and cookies are covered in their policies. Complaints book available via the site legal links.',
          },
        ],
      },
    ],
  },
}
