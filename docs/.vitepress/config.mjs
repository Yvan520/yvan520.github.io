export default {
  title: 'RO3 攻略站',
  description: '仙境传说3攻略 - 全职业加点、练级路线、配装推荐',
  lang: 'zh-CN',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '新手指南', items: [
        { text: '新手FAQ', link: '/guide/faq' },
        { text: '练级路线', link: '/guide/leveling' },
        { text: '版本更新', link: '/guide/version-v102' },
      ]},
      { text: '职业攻略', items: [
        { text: '总览', link: '/jobs/' },
        { text: '剑士', link: '/jobs/swordman' },
        { text: '法师', link: '/jobs/mage' },
        { text: '刺客', link: '/jobs/thief' },
        { text: '牧师', link: '/jobs/aco' },
        { text: '弓箭手', link: '/jobs/archer' },
        { text: '商人', link: '/jobs/merchant' },
      ]},
      { text: '配装推荐', link: '/jobs/mage-equip' },
      { text: '数据库', link: '/database/' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '新手指南',
          items: [
            { text: '新手FAQ', link: '/guide/faq' },
            { text: '练级路线', link: '/guide/leveling' },
            { text: '版本更新 v1.0.2', link: '/guide/version-v102' },
          ],
        },
      ],
      '/jobs/': [
        {
          text: '职业攻略',
          items: [
            { text: '总览', link: '/jobs/' },
            { text: '剑士', link: '/jobs/swordman' },
            { text: '法师', link: '/jobs/mage' },
            { text: '刺客', link: '/jobs/thief' },
            { text: '牧师', link: '/jobs/aco' },
            { text: '弓箭手', link: '/jobs/archer' },
            { text: '商人', link: '/jobs/merchant' },
            { text: '法师配装', link: '/jobs/mage-equip' },
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
      copyright: 'Copyright 2026 RO3 攻略站 | 适配版本：v1.0.2',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourname/ro3-guide' },
    ],

    lastUpdated: { text: '最后更新' },
  },
}
