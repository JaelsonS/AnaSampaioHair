#!/usr/bin/env node
/**
 * Smoke-test all public routes return HTTP 200 (or expected redirect).
 * Usage: BASE_URL=http://localhost:3000 node scripts/smoke-routes.mjs
 */
const BASE = process.env.BASE_URL ?? 'http://localhost:3000'

const routes = [
  // PT — main
  '/pt',
  '/pt/sobre',
  '/pt/tratamentos',
  '/pt/produtos',
  '/pt/blog',
  '/pt/depoimentos',
  '/pt/contacto',
  '/pt/agendamento',
  '/pt/faq',
  '/pt/formacoes',
  '/pt/termos',
  '/pt/politica-de-privacidade',
  '/pt/politica-de-cookies',
  '/pt/politica-de-cancelamento',
  '/pt/politica-de-agendamento',
  '/pt/politica-de-compras',
  '/pt/livro-de-reclamacoes',
  '/pt/livro-de-elogios',
  // PT — blog sample
  '/pt/blog/calvicie',
  '/pt/blog/dermatite-seborreica',
  '/pt/blog/como-escolher-um-terapeuta-capilar',
  // ES — main
  '/es',
  '/es/sobre',
  '/es/tratamientos',
  '/es/contacto',
  '/es/blog',
  // EN — main
  '/en',
  '/en/about',
  '/en/treatments',
  '/en/contact',
  '/en/blog',
  // Redirects (expect 308/307/301)
  '/tratamentos',
  '/sobre',
  '/',
]

async function check(path) {
  const url = `${BASE}${path}`
  try {
    const res = await fetch(url, { redirect: 'manual' })
    const ok = res.status >= 200 && res.status < 400
    return { path, status: res.status, ok }
  } catch (err) {
    return { path, status: 0, ok: false, error: String(err) }
  }
}

const results = await Promise.all(routes.map(check))
const failed = results.filter((r) => !r.ok)

console.log(`\nSmoke test — ${BASE}\n`)
for (const r of results) {
  const mark = r.ok ? '✓' : '✗'
  console.log(`${mark} ${r.status}\t${r.path}${r.error ? ` — ${r.error}` : ''}`)
}

console.log(`\n${results.length - failed.length}/${results.length} passed`)
if (failed.length) {
  process.exit(1)
}
