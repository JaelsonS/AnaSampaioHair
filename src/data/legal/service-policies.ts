import type { UrlLocale } from '@/i18n/config'
import { siteConfig } from '@/config/site'

export type ServicePolicyKey = 'booking' | 'cancellation' | 'purchase'

type PolicyCopy = {
  title: string
  metaDescription: string
  paragraphs: string[]
}

const EMAIL = siteConfig.contact.email
const PHONE = siteConfig.contact.phoneDisplay

export const servicePolicies: Record<ServicePolicyKey, Record<UrlLocale, PolicyCopy>> = {
  booking: {
    pt: {
      title: 'Política de agendamento',
      metaDescription:
        'Como funcionam os pedidos de horário no website Ana Sampaio Hair — WhatsApp, confirmação e contactos.',
      paragraphs: [
        'O website permite enviar um pedido de horário através do formulário de agendamento ou do assistente virtual. O pedido é encaminhado para WhatsApp.',
        'O envio do pedido não constitui confirmação automática de vaga. A marcação só se considera confirmada após resposta do instituto a validar disponibilidade; pode ser necessário ajustar data, hora ou serviço.',
        `Para esclarecimentos: ${EMAIL} ou ${PHONE}. Consulte também os Termos de Utilização (secção «Agendamento»).`,
      ],
    },
    es: {
      title: 'Política de citas',
      metaDescription:
        'Cómo funcionan las solicitudes de cita en el sitio Ana Sampaio Hair — WhatsApp y confirmación.',
      paragraphs: [
        'El sitio permite enviar una solicitud de horario mediante el formulario o el asistente virtual. La solicitud se envía a WhatsApp.',
        'Enviar la solicitud no es una confirmación automática. La cita queda confirmada solo cuando el instituto responde validando disponibilidad.',
        `Contacto: ${EMAIL} o ${PHONE}. Véase también los Términos de uso.`,
      ],
    },
    en: {
      title: 'Booking policy',
      metaDescription:
        'How booking requests work on the Ana Sampaio Hair website — WhatsApp and confirmation.',
      paragraphs: [
        'The website lets you send a time request via the booking form or virtual assistant. The request is forwarded to WhatsApp.',
        'Submitting a request is not an automatic confirmation. An appointment is only confirmed once the institute replies and validates availability.',
        `Contact: ${EMAIL} or ${PHONE}. See also the Terms of Use (booking section).`,
      ],
    },
  },
  cancellation: {
    pt: {
      title: 'Cancelamento e remarcação',
      metaDescription:
        'Cancelamento e remarcação de marcações no Instituto Ana Sampaio — informação disponível no website.',
      paragraphs: [
        'Neste website não está publicada uma política detalhada de cancelamento ou remarcação com prazos e consequências específicas.',
        'O cancelamento ou remarcação deve ser combinado diretamente consigo através dos contactos do instituto (telefone, WhatsApp ou correio eletrónico indicados no site).',
        `Contactos: ${EMAIL}; ${PHONE}.`,
      ],
    },
    es: {
      title: 'Cancelación y cambio de cita',
      metaDescription: 'Cancelación y cambio de cita — Instituto Ana Sampaio.',
      paragraphs: [
        'En este sitio no publicamos una política detallada de cancelación con plazos y consecuencias específicas.',
        'La cancelación o el cambio de cita deben acordarse directamente con el instituto por teléfono, WhatsApp o correo electrónico.',
        `Contacto: ${EMAIL}; ${PHONE}.`,
      ],
    },
    en: {
      title: 'Cancellation and rescheduling',
      metaDescription: 'Cancellation and rescheduling information — Ana Sampaio institute.',
      paragraphs: [
        'This website does not publish a detailed cancellation or rescheduling policy with specific deadlines or consequences.',
        'Cancellation or rescheduling should be arranged directly with the institute by phone, WhatsApp or email.',
        `Contact: ${EMAIL}; ${PHONE}.`,
      ],
    },
  },
  purchase: {
    pt: {
      title: 'Política de compras digitais',
      metaDescription:
        'Compras digitais associadas ao website Ana Sampaio Hair — E-book na Hotmart.',
      paragraphs: [
        'O E-book divulgado no website é adquirido na plataforma Hotmart. O website Ana Sampaio Hair não processa o pagamento nem gere o checkout internamente.',
        'As condições de venda, pagamento, acesso ao ficheiro e eventuais direitos aplicáveis à compra digital são as definidas pela Hotmart e pela legislação aplicável a essa transação.',
        'Serviços presenciais no instituto não são contratados nem pagos através deste website; preços e condições são indicados no contacto ou no atendimento.',
        `Dúvidas sobre o site: ${EMAIL}.`,
      ],
    },
    es: {
      title: 'Política de compras digitales',
      metaDescription: 'E-book y compras digitales — Ana Sampaio Hair y Hotmart.',
      paragraphs: [
        'El e-book anunciado en el sitio se compra en Hotmart. Este sitio no procesa el pago ni gestiona el checkout.',
        'Las condiciones de venta, pago y acceso al archivo son las de Hotmart y la legislación aplicable.',
        'Los servicios presenciales no se contratan ni pagan a través de este sitio.',
        `Consultas sobre el sitio: ${EMAIL}.`,
      ],
    },
    en: {
      title: 'Digital purchases',
      metaDescription: 'Digital purchases on Ana Sampaio Hair — e-book via Hotmart.',
      paragraphs: [
        'The e-book featured on the website is purchased on Hotmart. This website does not process payment or host checkout.',
        'Sale, payment, file access and applicable consumer rights are governed by Hotmart and the law applying to that purchase.',
        'In-person institute services are not booked or paid through this website.',
        `Website questions: ${EMAIL}.`,
      ],
    },
  },
}
