import { Seo } from '@/components/shared/Seo'
import { siteConfig } from '@/config/site'
import { Button } from '@/components/ui/Button'
import {
  LivroElogiosBadge,
  LivroReclamacoesBadge,
} from '@/components/shared/LegalBookBadges'

export function PrivacyPage() {
  return (
    <>
      <Seo
        title="Política de Privacidade"
        description="Política de Privacidade do website Ana Sampaio Hair."
        path="/politica-de-privacidade"
      />
      <section className="page-hero">
        <div className="container-narrow">
          <p className="eyebrow">Legal</p>
          <h1 className="display-xl">Política de Privacidade</h1>
          <p className="lead">
            Esta página descreve, de forma clara, como tratamos dados pessoais no contexto do
            website {siteConfig.name}.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container-narrow legal-content">
          <h2>1. Responsável</h2>
          <p>
            O responsável pelo tratamento dos dados no âmbito deste website é {siteConfig.legalName},
            com contacto {siteConfig.contact.email}, sito em {siteConfig.contact.address.full}.
          </p>
          <h2>2. Dados recolhidos</h2>
          <p>
            Podemos tratar dados que nos envia voluntariamente através de formulários de contacto,
            pedidos de avaliação, email ou WhatsApp — como nome, email e conteúdo da mensagem.
          </p>
          <h2>3. Finalidades</h2>
          <p>
            Os dados são utilizados para responder a pedidos de informação, agendamentos e
            comunicação relacionada com os serviços do instituto.
          </p>
          <h2>4. Base legal</h2>
          <p>
            O tratamento fundamenta-se no consentimento e/ou na necessidade de diligências
            pré-contratuais a pedido da pessoa titular dos dados.
          </p>
          <h2>5. Conservação</h2>
          <p>
            Conservamos os dados apenas pelo período necessário para responder ao pedido e cumprir
            obrigações legais aplicáveis.
          </p>
          <h2>6. Direitos</h2>
          <p>
            Pode solicitar acesso, retificação, apagamento, limitação ou oposição ao tratamento,
            bem como apresentar reclamação à autoridade de controlo competente.
          </p>
          <h2>7. Contacto</h2>
          <p>
            Para questões de privacidade, contacte{' '}
            <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
          </p>
        </div>
      </section>
    </>
  )
}

export function CookiesPage() {
  return (
    <>
      <Seo
        title="Política de Cookies"
        description="Política de Cookies do website Ana Sampaio Hair."
        path="/politica-de-cookies"
      />
      <section className="page-hero">
        <div className="container-narrow">
          <p className="eyebrow">Legal</p>
          <h1 className="display-xl">Política de Cookies</h1>
          <p className="lead">
            Explicamos que cookies podem ser utilizados neste website e como pode gerir as suas
            preferências.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container-narrow legal-content">
          <h2>O que são cookies?</h2>
          <p>
            Cookies são pequenos ficheiros guardados no seu dispositivo que ajudam o website a
            funcionar e, quando autorizado, a melhorar a experiência de navegação.
          </p>
          <h2>Cookies essenciais</h2>
          <p>
            Necessários ao funcionamento básico do site, incluindo a memorização da sua escolha de
            consentimento.
          </p>
          <h2>Cookies de desempenho / analytics</h2>
          <p>
            Podem ser utilizados no futuro para compreender a utilização do website. Só serão
            ativados com o seu consentimento, quando configurados.
          </p>
          <h2>Gestão</h2>
          <p>
            Pode limpar ou bloquear cookies nas definições do browser. Ao continuar a navegar após
            aceitar o banner, consente a utilização descrita nesta política.
          </p>
          <h2>Mais informações</h2>
          <p>
            Para questões relacionadas com cookies, contacte{' '}
            <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
          </p>
        </div>
      </section>
    </>
  )
}

export function ComplaintsBookPage() {
  return (
    <>
      <Seo
        title="Livro de Reclamações"
        description="Livro de Reclamações eletrónico — Ana Sampaio Hair."
        path="/livro-de-reclamacoes"
      />
      <section className="page-hero">
        <div className="container-narrow">
          <p className="eyebrow">Legal</p>
          <h1 className="display-xl">Livro de Reclamações</h1>
          <p className="lead">
            Em cumprimento da legislação portuguesa, disponibilizamos o acesso ao Livro de
            Reclamações eletrónico.
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <a
              href={siteConfig.legal.complaintsBookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir Livro de Reclamações"
            >
              <LivroReclamacoesBadge />
            </a>
          </div>
          <div className="btn-group" style={{ marginTop: '1.75rem' }}>
            <Button
              as="a"
              href={siteConfig.legal.complaintsBookUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir Livro de Reclamações
            </Button>
            <Button as="link" to="/contacto" variant="secondary">
              Contactar o instituto
            </Button>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-narrow legal-content">
          <h2>Informação</h2>
          <p>
            O Livro de Reclamações eletrónico é um meio oficial para apresentar reclamações junto
            das entidades competentes. Será redirecionado para a plataforma oficial do Estado
            Português (
            <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener noreferrer">
              livroreclamacoes.pt
            </a>
            ).
          </p>
          <p>
            Instituição: {siteConfig.legalName}
            <br />
            Morada: {siteConfig.contact.address.full}
            <br />
            Email: {siteConfig.contact.email}
          </p>
        </div>
      </section>
    </>
  )
}

export function ComplimentsBookPage() {
  return (
    <>
      <Seo
        title="Livro de Elogios"
        description="Livro de Elogios — Ana Sampaio Hair."
        path="/livro-de-elogios"
      />
      <section className="page-hero">
        <div className="container-narrow">
          <p className="eyebrow">Legal</p>
          <h1 className="display-xl">Livro de Elogios</h1>
          <p className="lead">
            Tem um elogio ou sugestão? Utilize a plataforma oficial do Livro de Elogios.
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <a
              href={siteConfig.legal.complimentsBookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir Livro de Elogios"
            >
              <LivroElogiosBadge />
            </a>
          </div>
          <div className="btn-group" style={{ marginTop: '1.75rem' }}>
            <Button
              as="a"
              href={siteConfig.legal.complimentsBookUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir Livro de Elogios
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export function TermsPage() {
  return (
    <>
      <Seo
        title="Termos de Utilização"
        description="Termos de Utilização do website Ana Sampaio Hair."
        path="/termos-de-utilizacao"
      />
      <section className="page-hero">
        <div className="container-narrow">
          <p className="eyebrow">Legal</p>
          <h1 className="display-xl">Termos de Utilização</h1>
          <p className="lead">
            Condições aplicáveis à utilização deste website e ao envio de pedidos de contacto.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container-narrow legal-content">
          <h2>1. Identificação</h2>
          <p>
            Este website é disponibilizado por {siteConfig.legalName}, com contacto{' '}
            {siteConfig.contact.email}, sito em {siteConfig.contact.address.full}.
          </p>
          <h2>2. Objeto</h2>
          <p>
            O website tem carácter informativo e comercial, permitindo conhecer serviços, conteúdos
            e solicitar contacto ou avaliação.
          </p>
          <h2>3. Formulário de contacto</h2>
          <p>
            Ao enviar o formulário, declara que as informações são verdadeiras e autoriza o
            tratamento dos dados exclusivamente para resposta ao pedido, nos termos da Política de
            Privacidade.
          </p>
          <h2>4. Propriedade intelectual</h2>
          <p>
            Textos, marca, estrutura e elementos gráficos deste website estão protegidos. Não é
            permitida a reprodução sem autorização.
          </p>
          <h2>5. Limitação</h2>
          <p>
            Os conteúdos sobre cuidados capilares têm natureza informativa e não substituem
            aconselhamento médico ou diagnóstico clínico.
          </p>
          <h2>6. Lei aplicável</h2>
          <p>Estes termos regem-se pela lei portuguesa.</p>
        </div>
      </section>
    </>
  )
}

export function NotFoundPage() {
  return (
    <>
      <Seo title="Página não encontrada" path="/404" />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">404</p>
          <h1 className="display-xl">Página não encontrada</h1>
          <p className="lead">O endereço que procurou não existe ou foi movido.</p>
          <div className="btn-group" style={{ marginTop: '1.75rem' }}>
            <Button as="link" to="/">
              Voltar ao início
            </Button>
            <Button as="link" to="/contacto" variant="secondary">
              Contacto
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
