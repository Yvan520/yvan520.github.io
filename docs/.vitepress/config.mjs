export default {
  title: 'RO3 攻略站',
  description: '仙境传说3攻略 - 全职业加点、练级路线、配装推荐',
  lang: 'zh-CN',

  head: [
    ['meta', { property: 'og:title', content: 'RO3 攻略站 - 仙境传说3玩家指南' }],
    ['meta', { property: 'og:description', content: '2026年仙境传说3最全攻略站，覆盖七大职业加点、练级路线、配装推荐、最新资讯、赚钱攻略、MVP狩猎，新手快速上手必备。' }],
    ['meta', { property: 'og:image', content: 'https://ro3.gamewayz.com/hero-bg.jpg' }],
    ['meta', { property: 'og:url', content: 'https://ro3.gamewayz.com' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'keywords', content: '仙境传说3,RO3,Ragnarok Online 3,攻略,职业加点,练级路线,配装,仙境传说3攻略,GVG,攻城战,赚钱,Zenny,MVP' }],
    ['meta', { name: 'baidu-site-verification', content: 'codeva-67XZ55nBHo' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['script', { src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX', crossorigin: 'anonymous', async: '' }],
  ],

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '新手入门', items: [
        { text: '新手入坑指南', link: '/guide/newbie' },
        { text: '职业选择推荐', link: '/guide/job-pick' },
        { text: '新手FAQ', link: '/guide/faq' },
        { text: '系统配置要求', link: '/guide/requirements' },
      ]},
      { text: '攻略进阶', items: [
        { text: '练级路线', link: '/guide/leveling' },
        { text: '每日/每周必做', link: '/guide/daily-routine' },
        { text: '赚钱攻略', link: '/guide/zeny-guide' },
        { text: 'MVP狩猎', link: '/guide/mvp-hunting' },
        { text: '组队与副本', link: '/guide/party-play' },
        { text: 'GVG攻城战', link: '/guide/gvg-strategy' },
        { text: '核心系统介绍', link: '/guide/systems' },
        { text: '装备制作与精炼', link: '/guide/crafting' },
      ]},
      { text: '职业攻略', items: [
        { text: '总览', link: '/jobs/' },
        { text: '进阶职业全览', link: '/jobs/advanced' },
        { text: '剑士', link: '/jobs/swordman' },
        { text: '法师', link: '/jobs/mage' },
        { text: '刺客', link: '/jobs/thief' },
        { text: '牧师', link: '/jobs/aco' },
        { text: '弓箭手', link: '/jobs/archer' },
        { text: '商人', link: '/jobs/merchant' },
      ]},
      { text: '配装推荐', items: [
        { text: '剑士配装', link: '/jobs/swordman-equip' },
        { text: '法师配装', link: '/jobs/mage-equip' },
        { text: '刺客配装', link: '/jobs/thief-equip' },
        { text: '弓箭手配装', link: '/jobs/archer-equip' },
        { text: '牧师配装', link: '/jobs/aco-equip' },
        { text: '商人配装', link: '/jobs/merchant-equip' },
      ]},
      { text: '游戏资讯', items: [
        { text: '最新消息', link: '/news/' },
        { text: '发行计划更新', link: '/news/release-schedule-202605' },
        { text: '内测深度测评', link: '/news/beta-preview-202602' },
        { text: '领土战玩法预告', link: '/news/territory-war-202603' },
        { text: '日本服代理确定', link: '/news/japan-launch-202602' },
        { text: '七大职业立绘', link: '/news/artworks-202603' },
        { text: '制作人专访', link: '/news/interview-202601' },
        { text: 'GRAVITY愿景', link: '/news/gravity-vision-202512' },
        { text: '事前预约开放', link: '/news/preorder-territory-202511' },
        { text: '国服版号获批', link: '/news/approval-202510' },
        { text: '更多新闻', link: '/news/' },
      ]},
      { text: '社区资源', link: '/guide/community' },
      { text: '数据库', link: '/database/' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '新手入门',
          items: [
            { text: '新手入坑指南', link: '/guide/newbie' },
            { text: '职业选择推荐', link: '/guide/job-pick' },
            { text: '新手FAQ', link: '/guide/faq' },
            { text: '系统配置要求', link: '/guide/requirements' },
          ],
        },
        {
          text: '进阶攻略',
          items: [
            { text: '练级路线', link: '/guide/leveling' },
            { text: '每日/每周必做', link: '/guide/daily-routine' },
            { text: '赚钱攻略', link: '/guide/zeny-guide' },
            { text: 'MVP狩猎', link: '/guide/mvp-hunting' },
            { text: '组队与副本', link: '/guide/party-play' },
            { text: 'GVG攻城战', link: '/guide/gvg-strategy' },
            { text: '核心系统介绍', link: '/guide/systems' },
            { text: '装备制作与精炼', link: '/guide/crafting' },
            { text: '版本更新 v1.0.2', link: '/guide/version-v102' },
          ],
        },
        {
          text: '社区',
          items: [
            { text: '社区与资源汇总', link: '/guide/community' },
          ],
        },
      ],
      '/news/': [
        {
          text: '游戏资讯',
          items: [
            { text: '最新消息', link: '/news/' },
            { text: '发行计划更新 2027年', link: '/news/release-schedule-202605' },
            { text: '内测深度测评', link: '/news/beta-preview-202602' },
            { text: '领土战玩法预告', link: '/news/territory-war-202603' },
            { text: '日本服代理确定', link: '/news/japan-launch-202602' },
            { text: '七大职业立绘', link: '/news/artworks-202603' },
            { text: '制作人专访', link: '/news/interview-202601' },
            { text: 'GRAVITY愿景发表会', link: '/news/gravity-vision-202512' },
            { text: '事前预约开放', link: '/news/preorder-territory-202511' },
            { text: 'GVG巅峰对决', link: '/news/gvg-gameplay-202510' },
            { text: '制作人面对面QA', link: '/news/producer-qa-202510' },
            { text: '国服版号获批', link: '/news/approval-202510' },
            { text: 'Emperium攻城战', link: '/news/emperium-showdown-202510' },
            { text: '首支实机预告片', link: '/news/gameplay-trailer-202507' },
            { text: '台北电玩展', link: '/news/tgs-202502' },
          ],
        },
      ],
      '/jobs/': [
        {
          text: '职业攻略',
          items: [
            { text: '总览', link: '/jobs/' },
            { text: '进阶职业全览', link: '/jobs/advanced' },
            { text: '剑士', link: '/jobs/swordman' },
            { text: '法师', link: '/jobs/mage' },
            { text: '刺客', link: '/jobs/thief' },
            { text: '牧师', link: '/jobs/aco' },
            { text: '弓箭手', link: '/jobs/archer' },
            { text: '商人', link: '/jobs/merchant' },
          ],
        },
        {
          text: '配装推荐',
          items: [
            { text: '剑士配装', link: '/jobs/swordman-equip' },
            { text: '法师配装', link: '/jobs/mage-equip' },
            { text: '刺客配装', link: '/jobs/thief-equip' },
            { text: '弓箭手配装', link: '/jobs/archer-equip' },
            { text: '牧师配装', link: '/jobs/aco-equip' },
            { text: '商人配装', link: '/jobs/merchant-equip' },
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
      copyright: 'Copyright 2026 RO3 攻略站 | 全球发行预计2027年 | 国服预计2026 Q4',
    },

    socialLinks: [],

    lastUpdated: { text: '最后更新' },
  },
}
