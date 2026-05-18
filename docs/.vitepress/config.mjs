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
        { text: '核心系统介绍', link: '/guide/systems' },
        { text: '版本更新', link: '/guide/version-v102' },
      ]},
      { text: '游戏资讯', items: [
        { text: '最新消息', link: '/news/' },
        { text: '七大职业立绘曝光', link: '/news/artworks-202603' },
        { text: '制作人专访', link: '/news/interview-202601' },
        { text: '国服版号获批', link: '/news/approval-202510' },
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
            { text: '核心系统介绍', link: '/guide/systems' },
            { text: '版本更新 v1.0.2', link: '/guide/version-v102' },
          ],
        },
      ],
      '/news/': [
        {
          text: '游戏资讯',
          items: [
            { text: '最新消息', link: '/news/' },
            { text: '七大职业立绘曝光', link: '/news/artworks-202603' },
            { text: '制作人专访', link: '/news/interview-202601' },
            { text: '国服版号获批', link: '/news/approval-202510' },
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
      { icon: 'github', link: 'https://github.com/Yvan520/yvan520.github.io' },
    ],

    lastUpdated: { text: '最后更新' },
  },
}
