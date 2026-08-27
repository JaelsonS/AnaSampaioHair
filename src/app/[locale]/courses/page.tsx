import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { isUrlLocale, type UrlLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { localizedPath } from '@/i18n/routes'
import { getCourseTopics } from '@/data/courses'
import { PageHero } from '@/components/layout/PageHero'
import { Section, SectionHeading } from '@/components/ui/Section'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { CourseLeadForm } from '@/components/courses/CourseLeadForm'
import { AnaSpeaks } from '@/components/brand/AnaSpeaks'
import { Button } from '@/components/ui/Button'
import { siteConfig, getWhatsAppUrl } from '@/config/site'
import {
  IconAward,
  IconBookOpen,
  IconCalendar,
  IconCheck,
  IconGraduation,
  IconHairTool,
  IconLeaf,
  IconScissors,
  IconSpark,
  IconUsers,
  IconWhatsApp,
} from '@/components/icons'

const COURSE_ICONS: Record<string, typeof IconLeaf> = {
  'terapia-capilar-integrativa': IconLeaf,
  aromaterapia: IconSpark,
  'corte-finalizacao-cachos': IconScissors,
  penteados: IconHairTool,
  'corte-alisamento': IconAward,
  'leitura-rotulos': IconBookOpen,
}

const COPY = {
  pt: {
    introEyebrow: 'Formação com a Ana Sampaio',
    introTitle: 'Aprenda com a prática do Instituto de Saúde e Beleza Capilar',
    introLead:
      'Seis formações alinhadas ao dia a dia real — terapia capilar, técnicas de salão e leitura crítica de cosméticos. Peça informação e confirme a próxima turma directamente.',
    wantThis: 'Quero esta formação →',
    forWhomTitle: 'Para quem é',
    forWhomLead: 'Para profissionais e quem quer evoluir com critério — não um curso genérico online.',
    checks: [
      'Cabeleireiras e profissionais que querem aprofundar terapia capilar',
      'Quem procura técnica com respeito pela saúde do fio e do couro',
      'Quem quer ler rótulos e escolher produtos com mais segurança',
      'Quem prefere confirmar turma e detalhes directamente com a Ana',
    ],
    howTitle: 'Como funciona',
    how: [
      { t: 'Escolhe a formação', d: 'Indica o tema que mais lhe interessa no formulário.' },
      { t: 'Envia o pedido', d: 'Abrimos o WhatsApp da Ana com os seus dados já preparados.' },
      { t: 'Confirmação humana', d: 'Datas, formato e detalhes são confirmados consigo — com calma.' },
    ],
    waBtn: 'Falar já no WhatsApp',
    waMsg: 'Olá Ana! Vi as formações no site e quero informação sobre a próxima turma.',
    leadEyebrow: 'Próxima turma',
    leadTitle: 'Peça informação com calma',
    leadBody:
      'Preencha o formulário. Abrimos o WhatsApp com a mensagem pronta para a Ana — telefone 963 503 988.',
    leadNote:
      'A Ana responde pessoalmente com datas, formato e detalhes — com calma e sem compromisso.',
    meetAna: 'Conhecer a Ana →',
    faqTitle: 'Perguntas frequentes',
    faqs: [
      {
        q: 'As datas já estão no site?',
        a: 'Publicamos informação quando a turma está confirmada. Até lá, a Ana responde-lhe por WhatsApp após o pedido — com datas reais.',
      },
      {
        q: 'Preciso de experiência prévia?',
        a: 'Depende da formação. Conte a sua experiência nas notas do formulário para a Ana orientar melhor.',
      },
      {
        q: 'Posso perguntar só por uma formação?',
        a: 'Sim — escolha o tema no formulário ou escreva directamente no WhatsApp.',
      },
      {
        q: 'Há compromisso ao preencher?',
        a: 'Não. É um pedido de informação. Só avança quando fizer sentido para si.',
      },
    ],
    finalTitle: 'Pronta para o próximo passo?',
    finalLead: 'Entre na lista ou fale connosco — o passo seguinte é humano.',
    finalCta: 'Entrar na lista',
    quote:
      'Nas formações, partilho o que uso no dia a dia do instituto — com honestidade sobre o que funciona e o que precisa de avaliação caso a caso.',
  },
  es: {
    introEyebrow: 'Formación con Ana',
    introTitle: 'Aprenda con la práctica del instituto',
    introLead:
      'Seis formaciones alineadas al día a día real — terapia capilar, técnicas de salón y lectura crítica de cosméticos. Pida información y confirme la próxima turma directamente.',
    wantThis: 'Quiero esta formación →',
    forWhomTitle: 'Para quién es',
    forWhomLead: 'Para profesionales y quien quiere evolucionar con criterio — no un curso genérico online.',
    checks: [
      'Peluqueras y profesionales que quieren profundizar en terapia capilar',
      'Quien busca técnica con respeto por la salud del cabello y el cuero',
      'Quien quiere leer etiquetas y elegir productos con más seguridad',
      'Quien prefiere confirmar detalles directamente con Ana',
    ],
    howTitle: 'Cómo funciona',
    how: [
      { t: 'Elige la formación', d: 'Indica el tema que más le interesa en el formulario.' },
      { t: 'Envía la solicitud', d: 'Abrimos el WhatsApp de Ana con sus datos preparados.' },
      { t: 'Confirmación humana', d: 'Fechas, formato y detalles se confirman con usted — con calma.' },
    ],
    waBtn: 'Hablar ya por WhatsApp',
    waMsg: '¡Hola Ana! Vi las formaciones en la web y quiero información sobre la próxima turma.',
    leadEyebrow: 'Próxima turma',
    leadTitle: 'Pida información con calma',
    leadBody:
      'Rellene el formulario. Abrimos WhatsApp con el mensaje listo para Ana — teléfono 963 503 988.',
    leadNote:
      'Ana responde personalmente con fechas, formato y detalles — con calma y sin compromiso.',
    meetAna: 'Conocer a Ana →',
    faqTitle: 'Preguntas frecuentes',
    faqs: [
      {
        q: '¿Las fechas ya están en la web?',
        a: 'Publicamos información cuando la turma está confirmada. Hasta entonces, Ana le responde por WhatsApp tras la solicitud — con fechas reales.',
      },
      {
        q: '¿Necesito experiencia previa?',
        a: 'Depende de la formación. Cuente su experiencia en las notas del formulario para que Ana oriente mejor.',
      },
      {
        q: '¿Puedo preguntar solo por una formación?',
        a: 'Sí — elija el tema en el formulario o escriba directamente por WhatsApp.',
      },
      {
        q: '¿Hay compromiso al rellenar?',
        a: 'No. Es una solicitud de información. Solo avanza cuando tenga sentido para usted.',
      },
    ],
    finalTitle: '¿Lista para el siguiente paso?',
    finalLead: 'Entre en la lista o hable con nosotros — el siguiente paso es humano.',
    finalCta: 'Entrar en la lista',
    quote:
      'En las formaciones, comparto lo que uso en el día a día del instituto — con honestidad sobre lo que funciona y lo que necesita valoración caso a caso.',
  },
  en: {
    introEyebrow: 'Training with Ana',
    introTitle: 'Learn from real institute practice',
    introLead:
      'Six programmes aligned with real daily work — scalp therapy, salon techniques and critical reading of cosmetics. Ask for details and confirm the next group directly.',
    wantThis: 'I want this course →',
    forWhomTitle: 'Who it’s for',
    forWhomLead: 'For professionals and anyone who wants to grow with criteria — not a generic online course.',
    checks: [
      'Hairdressers and professionals who want to deepen scalp therapy',
      'Anyone seeking technique that respects hair and scalp health',
      'Anyone who wants to read labels and choose products more safely',
      'Anyone who prefers to confirm details directly with Ana',
    ],
    howTitle: 'How it works',
    how: [
      { t: 'Choose a programme', d: 'Tell us which topic interests you most in the form.' },
      { t: 'Send your request', d: 'We open Ana’s WhatsApp with your details ready.' },
      { t: 'Human confirmation', d: 'Dates, format and details are confirmed with you — calmly.' },
    ],
    waBtn: 'Chat on WhatsApp now',
    waMsg: 'Hi Ana! I saw the training on the site and would like information about the next group.',
    leadEyebrow: 'Next group',
    leadTitle: 'Ask for information calmly',
    leadBody:
      'Fill in the form. We open WhatsApp with a ready message for Ana — phone 963 503 988.',
    leadNote:
      'Ana replies personally with dates, format and details — calmly and with no commitment.',
    meetAna: 'Meet Ana →',
    faqTitle: 'Frequently asked questions',
    faqs: [
      {
        q: 'Are dates already on the site?',
        a: 'We publish details when a group is confirmed. Until then, Ana replies on WhatsApp after your request — with real dates.',
      },
      {
        q: 'Do I need prior experience?',
        a: 'It depends on the programme. Share your background in the form notes so Ana can guide you better.',
      },
      {
        q: 'Can I ask about just one course?',
        a: 'Yes — pick the topic in the form or write directly on WhatsApp.',
      },
      {
        q: 'Is there any commitment when I submit?',
        a: 'No. It’s an information request. You only move forward when it feels right.',
      },
    ],
    finalTitle: 'Ready for the next step?',
    finalLead: 'Join the list or talk to us — the next step is human.',
    finalCta: 'Join the list',
    quote:
      'In training, I share what I use day to day at the institute — honestly about what works and what needs case-by-case assessment.',
  },
} as const

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: raw } = await params
  if (!isUrlLocale(raw)) return {}
  const dict = getDictionary(raw)
  return {
    title: dict.nav.courses,
    description: dict.sections.coursesLead,
    alternates: { canonical: `${siteConfig.url}${localizedPath(raw, 'courses')}` },
  }
}

export default async function CoursesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: raw } = await params
  if (!isUrlLocale(raw)) notFound()
  const locale = raw as UrlLocale
  const dict = getDictionary(locale)
  const topics = getCourseTopics()
  const c = COPY[locale]
  const wa = getWhatsAppUrl(c.waMsg)

  return (
    <>
      <PageHero
        dict={dict}
        title={dict.sections.coursesTitle}
        lead={dict.sections.coursesLead}
        image="/images/about/ambiente-2.jpg"
      />

      <div className="container" style={{ paddingTop: '1.25rem' }}>
        <Breadcrumbs
          items={[
            { label: dict.nav.home, href: localizedPath(locale, 'home') },
            { label: dict.nav.courses },
          ]}
        />
      </div>

      <Section>
        <div className="courses-sales-intro">
          <SectionHeading
            eyebrow={c.introEyebrow}
            title={c.introTitle}
            lead={c.introLead}
            align="center"
          />
        </div>

        <div className="courses-card-grid">
          {topics.map((t) => {
            const Icon = COURSE_ICONS[t.id] ?? IconGraduation
            return (
              <article key={t.id} className="courses-sale-card" id={t.id}>
                <span className="icon-badge courses-sale-icon" aria-hidden>
                  <Icon />
                </span>
                <h2 className="display-md" style={{ fontSize: '1.45rem' }}>
                  {t.title}
                </h2>
                <p>{t.blurb}</p>
                <a className="courses-sale-link" href="#lista-turma">
                  {c.wantThis}
                </a>
              </article>
            )
          })}
        </div>
      </Section>

      <Section>
        <div className="courses-split">
          <div>
            <SectionHeading title={c.forWhomTitle} lead={c.forWhomLead} />
            <ul className="courses-checklist">
              {c.checks.map((text) => (
                <li key={text}>
                  <IconCheck width={18} height={18} aria-hidden />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <AnaSpeaks quote={c.quote} />
          </div>
          <div className="courses-how">
            <h3 className="display-md" style={{ fontSize: '1.5rem' }}>
              {c.howTitle}
            </h3>
            <ol className="therapy-steps-list">
              {c.how.map((step, i) => (
                <li key={step.t}>
                  <span className="therapy-step-num">{i + 1}</span>
                  <div>
                    <strong>{step.t}</strong>
                    <p>{step.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            {wa ? (
              <a className="btn btn-secondary" href={wa} target="_blank" rel="noopener noreferrer">
                <IconWhatsApp width={18} height={18} aria-hidden />
                {c.waBtn}
              </a>
            ) : null}
          </div>
        </div>
      </Section>

      <Section id="lista-turma" className="section-courses-lead">
        <div className="courses-lead-layout">
          <div className="courses-lead-copy">
            <SectionHeading eyebrow={c.leadEyebrow} title={c.leadTitle} lead={c.leadBody} />
            <div className="courses-lead-highlights">
              <div>
                <IconCalendar width={20} height={20} aria-hidden />
                <span>{c.leadEyebrow}</span>
              </div>
              <div>
                <IconUsers width={20} height={20} aria-hidden />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </div>
              <div>
                <IconLeaf width={20} height={20} aria-hidden />
                <span>{c.meetAna.replace(' →', '')}</span>
              </div>
            </div>
            <p className="notice courses-lead-notice">{c.leadNote}</p>
            <p style={{ marginTop: '1rem' }}>
              <Link href={localizedPath(locale, 'about')} className="blog-rail-link">
                {c.meetAna}
              </Link>
            </p>
          </div>
          <CourseLeadForm locale={locale} />
        </div>
      </Section>

      <Section className="section-courses-faq">
        <SectionHeading title={c.faqTitle} align="center" />
        <div className="courses-faq">
          {c.faqs.map((f) => (
            <details key={f.q} className="faq-item">
              <summary>
                {f.q}
                <span aria-hidden>+</span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section dark>
        <SectionHeading title={c.finalTitle} lead={c.finalLead} align="center" />
        <div className="btn-group btn-group-center">
          <Button href="#lista-turma" variant="on-dark">
            {c.finalCta}
          </Button>
          <Button href={localizedPath(locale, 'contact')} variant="ghost-on-dark">
            {dict.nav.contact}
          </Button>
        </div>
      </Section>
    </>
  )
}
