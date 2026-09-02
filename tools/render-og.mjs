// tools/og-card.html -> public/og-card.png (1200x630)
// 헤드리스 Chrome만 쓰고 npm 의존성은 추가하지 않는다.
import { spawnSync } from 'node:child_process'
import { existsSync, statSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const OUT = resolve('public', 'og-card.png')
const SRC = resolve('tools', 'og-card.html')

// 설치 위치가 환경마다 달라 후보를 순서대로 확인한다
const candidates = [
  [process.env.ProgramFiles, 'Google', 'Chrome', 'Application', 'chrome.exe'],
  [process.env['ProgramFiles(x86)'], 'Google', 'Chrome', 'Application', 'chrome.exe'],
  [process.env.LOCALAPPDATA, 'Google', 'Chrome', 'Application', 'chrome.exe'],
  [process.env['ProgramFiles(x86)'], 'Microsoft', 'Edge', 'Application', 'msedge.exe'],
  [process.env.ProgramFiles, 'Microsoft', 'Edge', 'Application', 'msedge.exe'],
]

const browser = candidates
  .filter(([root]) => root)
  .map((parts) => join(...parts))
  .find((path) => existsSync(path))

if (!browser) {
  console.error('Chrome/Edge를 찾지 못했습니다. tools/render-og.mjs의 candidates에 경로를 추가하세요.')
  process.exit(1)
}

const result = spawnSync(browser, [
  '--headless=new',
  '--disable-gpu',
  '--hide-scrollbars',
  '--window-size=1200,630',
  `--screenshot=${OUT}`,
  pathToFileURL(SRC).href,
], { stdio: 'inherit' })

if (result.status !== 0 || !existsSync(OUT)) {
  console.error('OG 카드 렌더링 실패')
  process.exit(1)
}

console.log(`public/og-card.png 생성 완료 (${(statSync(OUT).size / 1024).toFixed(1)} KB)`)
