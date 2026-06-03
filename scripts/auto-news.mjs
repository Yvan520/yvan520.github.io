import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const NEWS_DIR = join(__dirname, '..', 'docs', 'news')
const INDEX_PAGE = join(__dirname, '..', 'docs', 'index.md')

const KEYWORDS = ['RO3', '仙境传说3', 'Ragnarok Online 3', '仙境傳說3', 'RO仙境传说3']
const MAX_RESULTS = 10
const MAX_DAYS_OLD = 90

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\u4e00-\u9fa5]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
}

function existTitles() {
  const files = readdirSync(NEWS_DIR).filter(f => f.endsWith('.md') && !f.startsWith('daily-'))
  const titles = new Set()
  for (const f of files) {
    const content = readFileSync(join(NEWS_DIR, f), 'utf-8')
    const m = content.match(/^title:\s*(.+)/m)
    if (m) titles.add(m[1].trim().toLowerCase())
  }
  return titles
}

function isDuplicate(title, existing) {
  const t = title.toLowerCase()
  for (const e of existing) {
    const words = [...new Set(t.split(/[\s,，、:：]+/).filter(w => w.length > 2))]
    let hits = 0
    for (const w of words) {
      if (e.includes(w)) hits++
    }
    if (hits >= 2 || (words.length > 0 && hits / words.length > 0.5)) return true
  }
  return false
}

function cleanHTML(str) {
  return str.replace(/<!\[CDATA\[|\]\]>/g, '').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ').trim()
}

function isRecent(dateStr, maxDays) {
  if (!dateStr) return true
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return true
  return (Date.now() - d.getTime()) / 86400000 < maxDays
}

// === Sources ===

async function fetchBilibili() {
  try {
    const url = `https://api.bilibili.com/x/web-interface/search/all/v2?keyword=${encodeURIComponent('RO3 仙境传说3')}&page=1`
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0', 'Referer': 'https://www.bilibili.com' }
    })
    if (!res.ok) return []
    const data = await res.json()
    const videoSection = (data?.data?.result || []).find(r => r.result_type === 'video')
    const videos = videoSection?.data || []
    return videos.slice(0, MAX_RESULTS).map(v => ({
      title: v.title?.replace(/<[^>]+>/g, '').trim() || '',
      description: (v.desc || '').slice(0, 200),
      url: `https://www.bilibili.com/video/${v.bvid}`,
      source: 'B站',
      date: v.pubdate ? new Date(v.pubdate * 1000).toISOString().slice(0, 10) : ''
    })).filter(v => v.title && KEYWORDS.some(k => v.title.includes(k)))
  } catch (e) {
    console.error('B站 error:', e.message)
    return []
  }
}

async function fetchGoogleNews() {
  try {
    const query = encodeURIComponent('RO3 仙境传说3 2026')
    const url = `https://news.google.com/rss/search?q=${query}&hl=zh-CN&gl=CN`
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } })
    if (!res.ok) return []
    const xml = await res.text()
    const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)]
    return items.slice(0, MAX_RESULTS).map(item => {
      const c = item[1]
      return {
        title: (c.match(/<title>(.*?)<\/title>/)?.[1] || '').replace(/<!\[CDATA\[|\]\]>/g, ''),
        description: (c.match(/<description>(.*?)<\/description>/)?.[1] || '').replace(/<[^>]+>/g, '').slice(0, 300),
        url: c.match(/<link>(.*?)<\/link>/)?.[1] || '',
        source: 'Google新闻',
        date: c.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || ''
      }
    }).filter(v => v.title && KEYWORDS.some(k => v.title.includes(k)))
  } catch (e) {
    console.error('Google News error:', e.message)
    return []
  }
}

// === Generate daily digest ===
function genDigest(items) {
  const today = new Date().toISOString().slice(0, 10)
  const [bilibili, news] = [
    items.filter(i => i.source === 'B站'),
    items.filter(i => i.source !== 'B站')
  ]

  let content = `---
title: RO3资讯日报 ${today}
date: ${today}
description: 自动抓取的最新RO3资讯汇总，含B站视频、Google新闻等来源
---

# RO3资讯日报 ${today}

> 📅 自动抓取 · ${today} · 共 ${items.length} 条

`

  if (bilibili.length > 0) {
    content += `## 🎬 B站视频\n\n`
    for (const item of bilibili) {
      const desc = item.description ? `  ${item.description.slice(0, 120)}` : ''
      content += `<div class="news-card">

### ${item.title}

${desc}

[▶ 观看视频 ↗](${item.url})

</div>

`
    }
  }

  if (news.length > 0) {
    content += `## 📰 新闻资讯\n\n`
    for (const item of news) {
      content += `<div class="news-card">

### ${item.title}

来源：${item.source}${item.date ? ` · ${item.date}` : ''}

[阅读全文 ↗](${item.url})

</div>

`
    }
  }

  content += `::: tip
本日报由系统自动抓取整理，仅供RO3玩家参考
:::`

  const filePath = join(NEWS_DIR, `daily-${today}.md`)
  return { content, filePath }
}

// === Update index.md "最近更新" section ===
function updateIndex(items) {
  const index = readFileSync(INDEX_PAGE, 'utf-8')
  const today = new Date().toISOString().slice(0, 10)

  const rows = items.map((item, i) => {
    const linkTitle = item.title.replace(/['"\[\]]/g, '').slice(0, 50)
    const date = item.date || today
    return `| ${date} | [${linkTitle}](${item.url.replace(/['"()]/g, '')}) |`
  }).slice(0, 5).join('\n')

  const newSection = `## 📌 最近更新\n\n| 日期 | 内容 |\n|------|------|\n${rows}\n| ${today} | [RO3资讯日报 ${today}](/news/daily-${today}.md) — 最新资讯汇总 |\n`

  const oldMatch = index.match(/## 📌 最近更新[\s\S]*?(?=## 💬|$)/)
  if (oldMatch) {
    return index.replace(oldMatch[0], newSection + '\n')
  }
  return index
}

// === Main ===
async function main() {
  console.log('[AutoNews] Starting...')
  const existing = existTitles()

  const [bilibili, googleNews] = await Promise.all([
    fetchBilibili(),
    fetchGoogleNews()
  ])

  const newItems = [...bilibili, ...googleNews]
    .filter(item => item.title && !isDuplicate(item.title, existing) && isRecent(item.date, MAX_DAYS_OLD))

  console.log(`[AutoNews] B站: ${bilibili.length}, Google新闻: ${googleNews.length}`)
  console.log(`[AutoNews] 新内容: ${newItems.length}`)

  if (newItems.length === 0) {
    console.log('[AutoNews] 无新内容，跳过')
    if (process.env.GITHUB_OUTPUT) {
      writeFileSync(process.env.GITHUB_OUTPUT, 'new_content=false\n', { flag: 'a' })
    }
    process.exit(0)
  }

  // 1. Write daily digest
  const { content, filePath } = genDigest(newItems)
  writeFileSync(filePath, content)
  console.log(`[AutoNews] 已创建: ${filePath}`)

  // 2. Update index.md
  const updatedIndex = updateIndex(newItems)
  writeFileSync(INDEX_PAGE, updatedIndex)
  console.log('[AutoNews] 已更新: 首页最近更新')

  // 3. Notify GitHub Actions
  if (process.env.GITHUB_OUTPUT) {
    writeFileSync(process.env.GITHUB_OUTPUT, `new_content=true\ncount=${newItems.length}\n`, { flag: 'a' })
  }

  console.log(`[AutoNews] 完成！新增 ${newItems.length} 条内容`)
}

main().catch(e => {
  console.error('[AutoNews] 错误:', e.message)
  process.exit(1)
})
