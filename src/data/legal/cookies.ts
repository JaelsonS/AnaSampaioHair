import type { UrlLocale } from '@/i18n/config'
import { siteConfig } from '@/config/site'
import type { LegalDocument } from './types'

const UPDATED = '20 de agosto de 2026'
const EMAIL = siteConfig.contact.email
const PHONE = siteConfig.contact.phoneDisplay

export const cookiesByLocale: Record<UrlLocale, LegalDocument> = {
  pt: {
    title: 'Política de Cookies',
    subtitle:
      'Informação clara sobre cookies e tecnologias semelhantes neste website — apenas o que está efetivamente implementado.',
    metaDescription:
      'Política de Cookies Ana Sampaio Hair: o que utilizamos, preferências, inventário real e como gerir o consentimento.',
    updatedAt: UPDATED,
    updatedLabel: 'Última atualização',
    tocLabel: 'Nesta página',
    relatedLabel: 'Documentos relacionados',
    reviewNotice:
      'Este documento baseia-se na auditoria ao código do website. Se forem adicionados cookies de estatística ou marketing no futuro, esta Política e o inventário serão atualizados.',
    sections: [
      {
        id: 'o-que-sao',
        title: '1. O que são cookies',
        blocks: [
          {
            type: 'p',
            text: 'Cookies são pequenos ficheiros guardados no seu dispositivo quando visita um website. Tecnologias semelhantes incluem armazenamento local (localStorage) e identificadores de sessão do servidor.',
          },
        ],
      },
      {
        id: 'para-que',
        title: '2. Para que utilizamos cookies',
        blocks: [
          {
            type: 'p',
            text: 'Neste website, a utilização identificada na auditoria é essencialmente: (i) funcionamento técnico do site; e (ii) memorização da sua escolha no banner de cookies.',
          },
        ],
      },
      {
        id: 'necessarios',
        title: '3. Cookies e tecnologias estritamente necessárias',
        blocks: [
          {
            type: 'p',
            text: 'São necessários ao funcionamento básico (segurança, entrega de páginas, memorização da preferência de cookies para respeitar a sua escolha). Não dependem de consentimento de marketing.',
          },
        ],
      },
      {
        id: 'preferencias',
        title: '4. Preferências',
        blocks: [
          {
            type: 'p',
            text: 'A escolha efetuada no banner (aceitar, rejeitar opcionais ou guardar preferências) é guardada em localStorage sob a chave ash-cookie-consent-v2, no seu próprio browser.',
          },
        ],
      },
      {
        id: 'estatistica',
        title: '5. Cookies de estatística / analytics',
        blocks: [
          {
            type: 'p',
            text: 'Não foram encontrados, no código do website, cookies ou scripts de Google Analytics, Tag Manager, Hotjar, Clarity ou equivalentes. A categoria «Estatísticas» no banner está preparada para uso futuro, mas atualmente não ativa medições.',
          },
        ],
      },
      {
        id: 'marketing',
        title: '6. Cookies de marketing / publicidade',
        blocks: [
          {
            type: 'p',
            text: 'Não foram encontrados pixels de Meta, TikTok ou redes publicitárias no código. A categoria «Marketing» no banner está preparada para uso futuro e não carrega, neste momento, ferramentas de publicidade.',
          },
        ],
      },
      {
        id: 'terceiros',
        title: '7. Cookies de terceiros',
        blocks: [
          {
            type: 'p',
            text: 'Ao utilizar ligações ou conteúdos de terceiros, esses serviços podem colocar as suas próprias cookies:',
          },
          {
            type: 'ul',
            items: [
              'Google Maps (mapa na página de Contacto) — cookies/tecnologias da Google conforme as políticas Google.',
              'WhatsApp / Meta — se abrir o WhatsApp a partir do site.',
              'Hotmart — se aceder à página de compra do E-book.',
              'Instagram / Facebook — se seguir as ligações sociais.',
            ],
          },
          {
            type: 'p',
            text: 'Esses cookies não são controlados diretamente pelo banner do nosso site. Consulte as políticas dos respetivos prestadores.',
          },
        ],
      },
      {
        id: 'consentimento',
        title: '8. Como funciona o consentimento',
        blocks: [
          {
            type: 'p',
            text: 'O banner permite: Aceitar tudo; Rejeitar opcionais; Guardar preferências (com caixas para estatística e marketing). As opções opcionais não estão pré-selecionadas de forma a obrigar a aceitação.',
          },
          {
            type: 'p',
            text: 'Enquanto não existirem scripts de analytics/marketing, a escolha dessas categorias não dispara tecnologias adicionais. Quando forem introduzidas, só deverão carregar após consentimento.',
          },
        ],
      },
      {
        id: 'alterar',
        title: '9. Como alterar preferências',
        blocks: [
          {
            type: 'p',
            text: 'Pode reabrir o painel de cookies através do botão flutuante de cookies disponível no website e alterar a escolha a qualquer momento.',
          },
        ],
      },
      {
        id: 'retirar',
        title: '10. Como retirar o consentimento',
        blocks: [
          {
            type: 'p',
            text: 'Utilize o mesmo painel para rejeitar categorias opcionais, ou limpe os dados do site no seu navegador (incluindo localStorage).',
          },
        ],
      },
      {
        id: 'navegador',
        title: '11. Como gerir cookies no navegador',
        blocks: [
          {
            type: 'p',
            text: 'A maioria dos browsers permite bloquear ou apagar cookies nas definições de privacidade. Se bloquear cookies essenciais, algumas funções do site podem deixar de funcionar corretamente.',
          },
        ],
      },
      {
        id: 'inventario',
        title: '12. Inventário real (auditoria de código)',
        blocks: [
          {
            type: 'callout',
            text: 'Só listamos o que foi confirmado no código do projeto. Não inventámos cookies de analytics.',
          },
          {
            type: 'table',
            headers: ['Nome / chave', 'Categoria', 'Finalidade', 'Duração', 'Entidade'],
            rows: [
              [
                'ash-cookie-consent-v2',
                'Necessário / preferência',
                'Guardar a escolha do banner de cookies (essential, analytics, marketing)',
                'Até limpar dados do site ou alterar preferência (localStorage)',
                'Primeira parte (anasampaio.pt)',
              ],
              [
                'Cookies técnicos do alojamento / CDN (se existirem)',
                'Necessário',
                'Entrega segura das páginas e proteção da infraestrutura',
                'Conforme prestador de alojamento',
                'Prestador de alojamento — [INFORMAÇÃO A CONFIRMAR]',
              ],
              [
                'Cookies Google Maps (iframe Contacto)',
                'Terceiro',
                'Funcionamento do mapa incorporado',
                'Conforme Google',
                'Google',
              ],
            ],
          },
        ],
      },
      {
        id: 'duracao',
        title: '13. Duração',
        blocks: [
          {
            type: 'p',
            text: 'A preferência ash-cookie-consent-v2 permanece até ser apagada ou alterada. Cookies de terceiros seguem as regras desses prestadores.',
          },
        ],
      },
      {
        id: 'finalidade-resumo',
        title: '14. Finalidade (resumo)',
        blocks: [
          {
            type: 'p',
            text: 'Respeitar a sua escolha de cookies, assegurar o funcionamento do site e, quando utilizar serviços externos, permitir o respetivo funcionamento.',
          },
        ],
      },
      {
        id: 'entidade',
        title: '15. Entidade que coloca a tecnologia',
        blocks: [
          {
            type: 'p',
            text: `Preferência de cookies: ${siteConfig.legalName} / ${siteConfig.name}. Mapas e plataformas externas: os respetivos prestadores.`,
          },
        ],
      },
      {
        id: 'atualizacoes',
        title: '16. Atualizações desta Política',
        blocks: [
          {
            type: 'p',
            text: 'Atualizaremos este documento se introduzirmos analytics, marketing ou outros cookies. A data de última atualização consta no topo.',
          },
        ],
      },
      {
        id: 'contactos',
        title: '17. Contactos',
        blocks: [
          {
            type: 'ul',
            items: [`Email: ${EMAIL}`, `Telefone / WhatsApp: ${PHONE}`],
          },
        ],
      },
    ],
  },
  es: {
    title: 'Política de Cookies',
    subtitle: 'Información sobre cookies y tecnologías similares efectivamente implementadas en el sitio.',
    metaDescription: 'Política de Cookies Ana Sampaio Hair: preferencias, inventario real y gestión del consentimiento.',
    updatedAt: '20 de agosto de 2026',
    updatedLabel: 'Última actualización',
    tocLabel: 'En esta página',
    relatedLabel: 'Documentos relacionados',
    reviewNotice:
      'Basado en la auditoría del código. Si se añaden cookies de estadística o marketing, se actualizará este documento.',
    sections: [
      {
        id: 'que',
        title: '1. Qué usamos',
        blocks: [
          {
            type: 'p',
            text: 'Preferencia del banner en localStorage (ash-cookie-consent-v2). Sin scripts de analytics/marketing activos en el código. Posibles cookies de terceros al usar Google Maps, WhatsApp, Hotmart o redes sociales.',
          },
        ],
      },
      {
        id: 'inventario',
        title: '2. Inventario',
        blocks: [
          {
            type: 'table',
            headers: ['Nombre', 'Categoría', 'Finalidad', 'Duración', 'Entidad'],
            rows: [
              [
                'ash-cookie-consent-v2',
                'Necesario / preferencia',
                'Guardar elección del banner',
                'Hasta borrar datos del sitio',
                'Primera parte',
              ],
              [
                'Google Maps (iframe)',
                'Tercero',
                'Mapa en Contacto',
                'Según Google',
                'Google',
              ],
            ],
          },
        ],
      },
      {
        id: 'contacto',
        title: '3. Contacto',
        blocks: [{ type: 'p', text: `${EMAIL} · ${PHONE}` }],
      },
    ],
  },
  en: {
    title: 'Cookie Policy',
    subtitle: 'Clear information about cookies and similar technologies actually implemented on this website.',
    metaDescription: 'Ana Sampaio Hair Cookie Policy: preferences, real inventory and how to manage consent.',
    updatedAt: '20 August 2026',
    updatedLabel: 'Last updated',
    tocLabel: 'On this page',
    relatedLabel: 'Related documents',
    reviewNotice:
      'Based on a code audit. If analytics or marketing cookies are added later, this Policy will be updated.',
    sections: [
      {
        id: 'what',
        title: '1. What we use',
        blocks: [
          {
            type: 'p',
            text: 'Banner preference in localStorage (ash-cookie-consent-v2). No active analytics/marketing scripts found in code. Third-party cookies may appear when using Google Maps, WhatsApp, Hotmart or social networks.',
          },
        ],
      },
      {
        id: 'inventory',
        title: '2. Inventory',
        blocks: [
          {
            type: 'table',
            headers: ['Name', 'Category', 'Purpose', 'Duration', 'Party'],
            rows: [
              [
                'ash-cookie-consent-v2',
                'Necessary / preference',
                'Store banner choice',
                'Until site data is cleared',
                'First party',
              ],
              [
                'Google Maps (iframe)',
                'Third party',
                'Contact page map',
                'Per Google',
                'Google',
              ],
            ],
          },
        ],
      },
      {
        id: 'contact',
        title: '3. Contact',
        blocks: [{ type: 'p', text: `${EMAIL} · ${PHONE}` }],
      },
    ],
  },
}
