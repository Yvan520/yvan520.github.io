import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const NEWS_DIR = join(__dirname, '..', 'docs', 'news')
const INDEX_PAGE = join(__dirname, '..', 'docs', 'index.md')

const KEYWORDS = ['RO3', '仙境传说3', 'Ragnarok Online 3']
const MAX_DAYS = 60

function existTitles() {
  const files = readdirSync(NEWS_DIR).filter(f => f.endsWith('.md'))
  const titles = new Set()
  for (const f of files) {
    const content = readFileSync(join(NEWS_DIR, f), 'utf-8')
    const m = content.match(/^title:\s*(.+)/m)
    if (m) titles.add(m[1].trim().toLowerCase().replace(/\s+/g, ''))
  }
  return titles
}

function isDuplicate(title, existing) {
  const t = title.toLowerCase().replace(/\s+/g, '')
  for (const e of existing) {
    let same = 0
    for (let i = 0; i < Math.min(t.length, e.length); i++) {
      if (t[i] === e[i]) same++
    }
    if (same / Math.max(t.length, e.length) > 0.6) return true
  }
  return false
}

function cleanHTML(str) {
  return str
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ')
    .replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
}

function isRecent(dateStr) {
  if (!dateStr) return false
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return false
  return (Date.now() - d.getTime()) / 86400000 < MAX_DAYS
}

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
    return videos.map(v => ({
      title: v.title?.replace(/<[^>]+>/g, '').trim() || '',
      desc: (v.desc || '').slice(0, 500),
      url: `https://www.bilibili.com/video/${v.bvid}`,
      author: v.author || '',
      date: v.pubdate ? new Date(v.pubdate * 1000).toISOString().slice(0, 10) : '',
      tag: 'bilibili'
    })).filter(v => v.title && KEYWORDS.some(k => v.title.includes(k)) && isRecent(v.date))
  } catch (e) {
    return []
  }
}

async function fetchGoogleNews() {
  try {
    const query = encodeURIComponent('RO3 仙境传说3 仙境傳說3')
    const url = `https://news.google.com/rss/search?q=${query}&hl=zh-CN&gl=CN`
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } })
    if (!res.ok) return []
    const xml = await res.text()
    const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)]
    return items.map(item => {
      const c = item[1]
      const title = cleanHTML(c.match(/<title>(.*?)<\/title>/)?.[1] || '')
        .replace(/\s*- (17173|凤凰网|新浪游戏)$/, '').replace(/\s+(17173|凤凰网|新浪游戏)$/, '')
      const desc = cleanHTML(c.match(/<description>(.*?)<\/description>/)?.[1] || '')
        .replace(/\s*- (17173|凤凰网|新浪游戏)$/, '').replace(/\s+(17173|凤凰网|新浪游戏)$/, '').slice(0, 400)
      const dateStr = c.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || ''
      return {
        title,
        desc,
        url: c.match(/<link>(.*?)<\/link>/)?.[1] || '',
        source: cleanHTML(c.match(/<source>(.*?)<\/source>/)?.[1] || 'Google新闻'),
        date: dateStr ? new Date(dateStr).toISOString().slice(0, 10) : '',
        tag: 'news'
      }
    }).filter(v => v.title && KEYWORDS.some(k => v.title.includes(k)) && isRecent(v.date))
  } catch (e) {
    return []
  }
}

function genArticle(item, slug) {
  const date = item.date || new Date().toISOString().slice(0, 10)
  const desc = cleanHTML(item.desc || '')
  const title = item.title.replace(/"/g, "'")
  const descClean = desc.length > 10 && desc !== title.slice(0, 60) ? desc : ''
  let body = ''

  if (item.tag === 'bilibili') {
    body = descClean
      ? descClean
      : `UP主"${item.author}"发布了关于RO3的最新视频内容，详细展示了游戏的最新进展和实机画面。`
    body += `\n\n视频来源：B站UP主 [${item.author}](${item.url})`
  } else {
    body = descClean || `来自${item.source}关于RO3的最新消息。`
  }

  const frontmatter = `---
title: ${title}
date: ${date}
description: ${(descClean || title).slice(0, 120)}
---`
  const content = `${frontmatter}

# ${title}

> 📅 ${date}

${body}

---

> 消息来源：${item.url || item.source}
`
  const filePath = join(NEWS_DIR, `${slug}.md`)
  return { content, filePath, date }
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\u4e00-\u9fa5]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
}

function updateIndex(items) {
  const index = readFileSync(INDEX_PAGE, 'utf-8')
  const rows = items.map(item => {
    return `| ${item.date} | [${item.title.slice(0, 45)}](/news/${item.slug}.html) |`
  }).join('\n')

  const newSection = `## 📌 最近更新\n\n| 日期 | 内容 |\n|------|------|\n${rows}\n`

  const oldMatch = index.match(/## 📌 最近更新[\s\S]*?(?=## 💬|$)/)
  if (oldMatch) {
    return index.replace(oldMatch[0], newSection + '\n')
  }
  return index
}

async function main() {
  console.log('[AutoNews] 开始...')
  const existing = existTitles()

  const [bilibili, googleNews] = await Promise.all([
    fetchBilibili(),
    fetchGoogleNews()
  ])

  const allItems = [...bilibili, ...googleNews]
    .filter(item => item.title && !isDuplicate(item.title, existing))

  console.log(`[AutoNews] B站: ${bilibili.length}, Google新闻: ${googleNews.length}, 新: ${allItems.length}`)

  if (allItems.length === 0) {
    console.log('[AutoNews] 无新内容')
    process.exit(0)
  }

  const articles = allItems.map(item => {
    const slug = slugify(item.title)
    const { content, filePath, date } = genArticle(item, slug)
    writeFileSync(filePath, content)
    console.log(`[AutoNews] 已创建: ${filePath}`)
    return { title: item.title, slug, date }
  })

  const updatedIndex = updateIndex(articles)
  writeFileSync(INDEX_PAGE, updatedIndex)
  console.log('[AutoNews] 首页已更新')

  if (process.env.GITHUB_OUTPUT) {
    writeFileSync(process.env.GITHUB_OUTPUT, `new_content=true\ncount=${allItems.length}\n`, { flag: 'a' })
  }

  console.log(`[AutoNews] 完成！新增 ${allItems.length} 篇文章`)
}

main().catch(e => {
  console.error('[AutoNews] 错误:', e.message)
  process.exit(1)
})
