// docs/.vuepress/config.js

module.exports = {
  title: '外修宝',
  description: '适用于外修宝 Web 平台开发',
  evergreen: true,
  themeConfig: {
    nav: [
      {text: '首页', link: '/'},
      {text: '文档1', link: '/docs1/'},
      {text: '文档2', link: '/docs2/'},
    ],
    sidebar: 'auto',
  },
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: '发现新内容可用',
          buttonText: '刷新',
        },
      },
    ],
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    '@vuepress/last-updated',
    '@vuepress/medium-zoom',
  ],
};
