import { writeFileSync, readdirSync, statSync } from 'fs'
import { join } from 'path'
import { SitemapStream, streamToPromise } from 'sitemap'

const BASE = 'https://ro3.gamewayz.com'
const dist = 'docs/.vitepress/dist'

function walk(dir) {
  const files = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      files.push(...walk(full))
    } else if (entry.endsWith('.html')) {
      const url = full.slice(dist.length).replace(/index\.html$/, '').replace(/\.html$/, '')
      if (url === '/404') continue
      files.push(url)
    }
  }
  return files
}

const urls = walk(dist)

const stream = new SitemapStream({ hostname: BASE })
for (const url of urls) {
  stream.write({ url, changefreq: 'weekly', priority: url === '' ? 1.0 : 0.8 })
}
stream.end()

const sitemap = await streamToPromise(stream)
writeFileSync(`${dist}/sitemap.xml`, sitemap)
console.log(`Generated sitemap with ${urls.length} URLs`)
