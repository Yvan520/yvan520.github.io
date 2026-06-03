<template>
  <Layout>
    <template #layout-bottom>
      <div v-if="showComments" style="max-width: 800px; margin: 2rem auto; padding: 0 1.5rem;">
        <div
          v-if="!configured"
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
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
const route = useRoute()
const configured = false

const showComments = computed(() => {
  const path = route.path
  return !path.endsWith('/404') &&
         !path.endsWith('/privacy') &&
         !path.endsWith('/terms') &&
         !path.endsWith('/contribute')
})
</script>
