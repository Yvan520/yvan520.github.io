export default {
  title: 'RO3 攻略站',
  description: '最快最全的仙境传说RO3攻略',
  lang: 'zh-CN',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '新手指南', link: '/guide/beginner' },
      { text: '职业攻略', link: '/jobs/' },
      { text: '数据库', link: '/database/' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '新手指南',
          items: [
            { text: '开服必看', link: '/guide/beginner' },
            { text: '练级路线', link: '/guide/leveling' },
            { text: '常见问题', link: '/guide/faq' },
          ],
        },
      ],
      '/jobs/': [
        {
          text: '一转职业',
          items: [
            { text: '剑士', link: '/jobs/swordman' },
            { text: '法师', link: '/jobs/mage' },
            { text: '弓箭手', link: '/jobs/archer' },
            { text: '服事', link: '/jobs/aco' },
            { text: '盗贼', link: '/jobs/thief' },
            { text: '商人', link: '/jobs/merchant' },
          ],
        },
      ],
      '/database/': [
        {
          text: '数据库',
          items: [
            { text: '装备列表', link: '/database/items' },
            { text: '怪物图鉴', link: '/database/monsters' },
            { text: '卡片大全', link: '/database/cards' },
          ],
        },
      ],
    },

    search: { provider: 'local' },

    footer: {
      message: '数据来源于玩家投稿，欢迎纠错',
      copyright: 'Copyright 2026 RO3 攻略站',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourname/ro3-guide' },
    ],

    lastUpdated: { text: '最后更新' },
  },
}
