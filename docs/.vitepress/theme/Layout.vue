<template>
  <Layout>
    <template #layout-bottom>
      <div v-if="showComments" style="max-width: 800px; margin: 2rem auto; padding: 0 1.5rem 3rem;">
        <div v-if="configured" class="giscus"></div>
        <div
          v-else
          style="padding:1rem;background:#f5f0e8;border-radius:8px;text-align:center;color:#666;"
        >
          <p>💬 评论功能即将上线</p>
          <p style="font-size:0.9rem;">站长正在配置中，敬请期待</p>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
const route = useRoute()
const configured = true

const showComments = computed(() => {
  const path = route.path
  return !path.endsWith('/404') &&
         !path.endsWith('/privacy') &&
         !path.endsWith('/terms') &&
         !path.endsWith('/contribute')
})

onMounted(() => {
  if (!configured) return
  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', 'Yvan520/yvan520.github.io')
  script.setAttribute('data-repo-id', 'R_kgDOSW6VTA')
  script.setAttribute('data-category', 'Announcements')
  script.setAttribute('data-category-id', 'DIC_kwDOSW6VTM4C-bJ-')
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'top')
  script.setAttribute('data-theme', 'light')
  script.setAttribute('data-lang', 'zh-CN')
  script.setAttribute('crossorigin', 'anonymous')
  script.async = true
  document.body.appendChild(script)
})
</script>
