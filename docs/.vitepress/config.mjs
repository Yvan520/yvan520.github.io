export default {
  title: 'RO3 攻略站',
  description: '仙境传说3攻略 - 全职业加点、练级路线、配装推荐',
  lang: 'zh-CN',

  head: [
    ['meta', { property: 'og:title', content: 'RO3 攻略站 - 仙境传说3玩家指南' }],
    ['meta', { property: 'og:description', content: '2026年仙境传说3最全攻略站，覆盖七大职业加点、练级路线、配装推荐、最新资讯，新手快速上手必备。' }],
    ['meta', { property: 'og:image', content: 'https://ro3.gamewayz.com/hero-bg.jpg' }],
    ['meta', { property: 'og:url', content: 'https://ro3.gamewayz.com' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'keywords', content: '仙境传说3,RO3,Ragnarok Online 3,攻略,职业加点,练级路线,配装,仙境传说3攻略' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['script', { src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX', crossorigin: 'anonymous', async: '' }],
  ],

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
        { text: '首支实机预告片', link: '/news/gameplay-trailer-202507' },
        { text: 'GRAVITY愿景发表会', link: '/news/gravity-vision-202512' },
        { text: '事前预约开放', link: '/news/preorder-territory-202511' },
        { text: 'GVG实机影片公开', link: '/news/gvg-gameplay-202510' },
        { text: '制作人面对面QA', link: '/news/producer-qa-202510' },
        { text: '国服版号获批', link: '/news/approval-202510' },
        { text: '日本服代理确定', link: '/news/japan-launch-202602' },
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
            { text: '首支实机预告片', link: '/news/gameplay-trailer-202507' },
            { text: 'GRAVITY愿景发表会', link: '/news/gravity-vision-202512' },
            { text: '事前预约开放', link: '/news/preorder-territory-202511' },
            { text: 'GVG实机影片公开', link: '/news/gvg-gameplay-202510' },
            { text: '制作人面对面QA', link: '/news/producer-qa-202510' },
            { text: '国服版号获批', link: '/news/approval-202510' },
            { text: '日本服代理确定', link: '/news/japan-launch-202602' },
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
      message: '数据来源于玩家投稿，欢迎纠错 | <a href="/privacy">隐私政策</a> | <a href="/terms">服务条款</a>',
      copyright: 'Copyright 2026 RO3 攻略站 | 适配版本：v1.0.2',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Yvan520/yvan520.github.io' },
    ],

    lastUpdated: { text: '最后更新' },
  },
}
