import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { HomePage } from '@/pages/HomePage'
import { ServicesPage } from '@/pages/ServicesPage'
import { TherapyPage } from '@/pages/TherapyPage'
import { AboutPage } from '@/pages/AboutPage'
import { ResultsPage } from '@/pages/ResultsPage'
import { FaqPage } from '@/pages/FaqPage'
import { ContactPage } from '@/pages/ContactPage'
import { BlogPage } from '@/pages/BlogPage'
import { BlogPostPage } from '@/pages/BlogPostPage'
import {
  PrivacyPage,
  CookiesPage,
  ComplaintsBookPage,
  ComplimentsBookPage,
  TermsPage,
  NotFoundPage,
} from '@/pages/LegalPages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'servicos', element: <ServicesPage /> },
      { path: 'terapia-capilar', element: <TherapyPage /> },
      { path: 'sobre', element: <AboutPage /> },
      { path: 'resultados', element: <ResultsPage /> },
      { path: 'faq', element: <FaqPage /> },
      { path: 'contacto', element: <ContactPage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'blog/:slug', element: <BlogPostPage /> },
      { path: 'politica-de-privacidade', element: <PrivacyPage /> },
      { path: 'politica-de-cookies', element: <CookiesPage /> },
      { path: 'termos-de-utilizacao', element: <TermsPage /> },
      { path: 'livro-de-reclamacoes', element: <ComplaintsBookPage /> },
      { path: 'livro-de-elogios', element: <ComplimentsBookPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
