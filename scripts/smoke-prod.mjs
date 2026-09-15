#!/usr/bin/env node
/** Build already done — start prod server, smoke-test, stop. */
import { spawn } from 'node:child_process'
import { setTimeout as sleep } from 'node:timers/promises'

const PORT = process.env.PORT ?? '3010'
const BASE = `http://127.0.0.1:${PORT}`

const child = spawn('npx', ['next', 'start', '-p', PORT], {
  stdio: ['ignore', 'pipe', 'pipe'],
  env: { ...process.env, PORT },
})

let ready = false
child.stdout.on('data', (d) => {
  if (String(d).includes('Ready')) ready = true
})
child.stderr.on('data', (d) => {
  if (String(d).includes('Ready')) ready = true
})

for (let i = 0; i < 30 && !ready; i++) await sleep(500)

const smoke = spawn('node', ['scripts/smoke-routes.mjs'], {
  stdio: 'inherit',
  env: { ...process.env, BASE_URL: BASE },
})

const code = await new Promise((resolve) => smoke.on('close', resolve))
child.kill('SIGTERM')
process.exit(code ?? 1)
