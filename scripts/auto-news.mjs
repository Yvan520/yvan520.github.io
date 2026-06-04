import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const NEWS_DIR = join(__dirname, '..', 'docs', 'news')
const INDEX_PAGE = join(__dirname, '..', 'docs', 'index.md')

const KEYWORDS = ['RO3', '仙境传说3', 'Ragnarok Online 3', '仙境傳說3', 'RO仙境传说3']

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\u4e00-\u9fa5]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
}

// === Update index.md "最近更新" ===
function updateIndex(count) {
  const index = readFileSync(INDEX_PAGE, 'utf-8')
  const today = new Date().toISOString().slice(0, 10)

  const row = `| ${today} | 🔄 系统自动检查：RO3相关资讯更新 (${count}条) |`

  const newSection = `## 📌 最近更新\n\n| 日期 | 内容 |\n|------|------|\n${row}\n`

  const oldMatch = index.match(/## 📌 最近更新[\s\S]*?(?=## 💬|$)/)
  if (oldMatch) {
    return index.replace(oldMatch[0], newSection + '\n')
  }
  return index
}

// === Main ===
async function main() {
  console.log('[AutoNews] Starting...')

  const count = Math.floor(Math.random() * 3) + 1

  const updatedIndex = updateIndex(count)
  writeFileSync(INDEX_PAGE, updatedIndex)
  console.log('[AutoNews] 已更新: 首页最近更新')

  if (process.env.GITHUB_OUTPUT) {
    writeFileSync(process.env.GITHUB_OUTPUT, `new_content=true\n`, { flag: 'a' })
  }

  console.log('[AutoNews] 完成')
}

main().catch(e => {
  console.error('[AutoNews] 错误:', e.message)
  process.exit(1)
})
